const express=require('express');
const User = require('../model/User');
const router=express.Router()
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
var fetchuser=require('../middleware/fetchuser');

const JWT_SECRET='BishalisGoodBoy'
//Router 1 to create a user using POST
router.post('/',[
    body('name','Enter a valid name').isLength({ min: 3 }),
    body('email','Enter a valid Email').isEmail(),
    body('password','password should be at least of 3 characters').isLength({ min: 5 }),
 
   
], async (req,res)=>{
    //show some errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(408).json({ errors: errors.array() });
    }
    
    try{
        //check duplicate emails
    let user=await User.findOne({email:req.body.email});
    if(user){
        return res.status(400).json({error:"sorry a user with this email already exists "})
    }

    const salt=await bcrypt.genSalt(10);
    const secpass=await bcrypt.hash(req.body.password,salt)

    // console.log(req.body)
    // const user=User(req.body);
    
    //create new user
    user=await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secpass
    })
    // .then(user => res.json(user));
     console.log(req.body)
     //storing in database and send some response

    

    const data={
        user:{
            id:user.id
        }
    }
    const authtoken=jwt.sign(data,JWT_SECRET);
    res.json({authtoken})
   // console.log(jwtData);


    } catch (error){
        console.log(error.message);
        res.status(500).send("some Error occur")
    }
})

//Authentication a user login
//Router 2 to create a user using POST
router.post('/login',[
    // body('name','Enter a valid name').isLength({ min: 3 }),
    body('email','Enter a valid Email').isEmail(),
    body('password','password cannot be blank').exists()
 
   
], async (req,res)=>{
    //show some errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(408).json({ errors: errors.array() });
    }

    const {email,password}=await req.body;
    try {
        let user=await User.findOne({email});
    if(!user){
        return res.status(400).json({eror:"Enter correct credentials"});
    }

    const passwordcompare=await bcrypt.compare(password,user.password);
    if(!passwordcompare){
        return res.status(400).json({eror:"Enter correct credentials"});
    }
    
    const data=await {
        user:{
            id:user.id
        }
    }
    const authtoken=jwt.sign(data,JWT_SECRET);
    res.json({authtoken})
}catch (error){
    console.log(error.message);
    res.status(500).send("Internal server Error occur")
}
})
//Route 3 :Get loginned user Details POST
router.post('/getuser',fetchuser,async (req,res)=>{


try {
    userId=req.user.id;
    const user=await User.findById(userId).select("-password");
    res.send(user)
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server Error occur")
}
})

module.exports=router