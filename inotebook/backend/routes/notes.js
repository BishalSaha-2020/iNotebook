const express=require('express');
const router=express.Router();
var fetchuser=require('../middleware/fetchuser');
const Notes=require('../model/Notes')
const { body, validationResult } = require('express-validator');
const { route } = require('./auth');

//Route 1:Get all the notes
router.get('/fetchallnotes',fetchuser,async (req,res)=>{
   try{
    const notes=await Notes.find({user:req.user.id});
    res.json(notes)
   }
    catch (error) {
        console.log(error.message);
    res.status(500).send("Internal server Error occur") 
    }
    
})
//Route 2:Add a new note

router.post('/addnotes',fetchuser,[

    body('title','should be of 3').isLength({ min: 3 }),
    body('description','should be of 5 letters').isLength({ min: 5 }),
  

],async (req,res)=>{
    try {
        
    
    const{title,description,tag}=req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(408).json({ errors: errors.array() });
    }
    const note=new Notes({
        title,description,tag,user:req.user.id
    })
    const savenote=await note.save()
    res.json(savenote)
}
    catch (error) {
        console.log(error.message);
    res.status(500).send("Internal server Error occur") 
    }

    
})
//Route 3 update
router.put('/updatenote/:id',fetchuser,async (req,res)=>{
    try{
    const {title,description,tag}=req.body;
    //create a newNote object
    const newNote=await {};
    if(title){newNote.title=title};
    if(description){newNote.description=description};
    if(tag){newNote.tag=tag};

    //Find the note to be updated and update it
    let note=await Notes.findById(req.params.id);
    if(!note){
        return res.status(404).send("Not Found")
    }
    if(note.user.toString()!==req.user.id){
        return res.status(401).send("Not Allowd")
    }
    note=await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
    res.json({note});
}
 catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server Error occur") 
}



})
//Route 4 delete
router.delete('/deletenote/:id',fetchuser,async (req,res)=>{
    try{
   // const {title,description,tag}=req.body;
    //create a newNote object
   

    //Find the note to be updated and delete it
    let note=await Notes.findById(req.params.id);
    if(!note){
        return res.status(404).send("Not Found")
    }
    //compare user
    if(note.user.toString()!==req.user.id){
        return res.status(401).send("Not Allowd")
    }
    note=await Notes.findByIdAndDelete(req.params.id)
    res.json({"Success":"Deleted successfully",note:note});
}
    catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server Error occur") 
    }
    

})

module.exports=router