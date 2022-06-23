const mongoose=require('mongoose');

const mongoURI="mongodb://localhost:27017/inotebook1?readPreference=primary&appname=MongoDB%20Compass%20Isolated%20Edition&directConnection=true&ssl=false"

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        
       console.log("Connected Successfully Bro ");
    })
}

module.exports=connectToMongo;

