import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState=(props)=>{

  //  const state={
    //    "name":"Bishal",
    //    "class":"12B"
   // }


   const notesinitial=[
    
        {
          "_id": "616be2717a8a68d9d9a11742",
          "user": "616af8e22133cd4c213bb669",
          "title": "My fourth Title updatedy",
          "description": "Wake up afternoon updatedy ",
          "tag": "personal",
          "date": "2021-10-17T08:44:33.216Z",
          "__v": 0
        },
        {
          "_id": "618fb70a263cbaaf92834f9e",
          "user": "616af8e22133cd4c213bb669",
          "title": "My fourth Titlessssssss",
          "description": "Wake up afternoonnnnnnnn",
          "tag": "personal",
          "date": "2021-11-13T13:00:58.334Z",
          "__v": 0
        },
        {
          "_id": "618fb70a263cbaaf92834f9e",
          "user": "616af8e22133cd4c213bb669",
          "title": "My fourth Titlessssssss",
          "description": "Wake up afternoonnnnnnnn",
          "tag": "personal",
          "date": "2021-11-13T13:00:58.334Z",
          "__v": 0
        },
        {
          "_id": "618fb70a263cbaaf92834f9e",
          "user": "616af8e22133cd4c213bb669",
          "title": "My fourth Titlessssssss",
          "description": "Wake up afternoonnnnnnnn",
          "tag": "personal",
          "date": "2021-11-13T13:00:58.334Z",
          "__v": 0
        },
        {
          "_id": "618fb70a263cbaaf92834f9e",
          "user": "616af8e22133cd4c213bb669",
          "title": "My fourth Titlessssssss",
          "description": "Wake up afternoonnnnnnnn",
          "tag": "personal",
          "date": "2021-11-13T13:00:58.334Z",
          "__v": 0
        }
      ]
   

   const [notes,setNotes]=useState(notesinitial)



   const addNote=(title,description,tag)=>{
       console.log("Add")
       const note={
        "_id": "618fb70a263cbaaf92834f9e",
        "user": "616af8e22133cd4c213bb669",
        "title": "My fourth Titlessssssss",
        "description": "Wake up afternoonnnnnnnn",
        "tag": "personal",
        "date": "2021-11-13T13:00:58.334Z",
        "__v": 0
       }
       setNotes(notes.concat(note))
   }

    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;