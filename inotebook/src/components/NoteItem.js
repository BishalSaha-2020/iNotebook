import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
     
      <div class="card my-3" >
        <div class="card-body "> <h6>{note.title}</h6>
          <p class="card-text mx-3 "> {note.description}
          
           <br />
           <i class="far fa-trash-alt mx-2"></i>
           <i class="far fa-edit mx-2"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
