const mongoose = require('mongoose');
const {Schema}=mongoose;
const NotesSchema = new Schema({
    user:{
        //like foreign key for identification of users
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    title:{
        type:String,
        required:true
    },
  
    description:{
        type:String,
        defalut:true,
    },
    tag:{
        type:String,
        required:true
    },
  
    date:{
        type:Date,
        default:Date.now
    },
    
    
  });

  module.exports=mongoose.model('notes',NotesSchema)