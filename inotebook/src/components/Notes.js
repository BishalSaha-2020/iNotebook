import React from 'react'
import noteContext from '../context/notes/noteContext'
import { useContext } from "react"
import NoteItem from './NoteItem'


export const Notes = () => {
    const context = useContext(noteContext)
    const {notes,setNotes}=context;
    return (
        <div className=" row col-md-8 offset-md-2 my-5">
        <h2>Notes</h2>
     

      {notes.map((notes)=>{
        return <NoteItem note={notes}/>;
      })}
       </div>
    )
}

export default Notes