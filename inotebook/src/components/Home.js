import React from 'react'
import Notes from './Notes'

import noteContext from '../context/notes/noteContext'
import { useContext } from 'react'
import { useState } from 'react'
const Home = () => {
   const context = useContext(noteContext);
   const {addNote}=context;
   

  const [note, setnote] = useState({title:"",description:"",tag:""})
  const handleClick=(e)=>{
   console.log("hi");
   e.preventDefault();
    addNote(note);
  
  
  }
  const onChange=(e)=>{
    
    setnote({...note,[e.target.name]:e.target.value})
    
  }
    return (
      <div>
        <div>
            <form>
  <div className="form-group col-md-8 offset-md-2 my-5">
      
    <label htmlFor="title">Email address</label>
    <input type="text" className="form-control" id="title"  name="title" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange}/>
    
  </div>
  <div className="form-group col-md-8 offset-md-2">
    <label htmlFor="description">Password</label>
    <input type="text" className="form-control" id="description" name="description"placeholder="Password" onChange={onChange}/>
  </div>
  <div className="form-group form-check col-md-8 offset-md-2 ">

    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary col-md-0.5 offset-md-2 my-4" onClick={handleClick}>Submit</button>
</form>
        </div>
        <Notes/>
        </div>
      

        
    )
}

export default Home
