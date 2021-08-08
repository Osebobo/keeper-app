import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Zoom } from "@material-ui/core";

function CreateArea(props) {
 
const [note, setNote] = useState({title: "", content: ""}); //state for new note

const [isExpanded, setExpanded] = useState(false);

//function to store note gotten from input 
function handleChange(event) {
    const { value, name } = event.target;

    setNote(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  //function to render note to app.jsx  
  function submitNote(event) {
      props.addNote(note);
      event.preventDefault();
      setNote({title: "",
      content: ""});
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (<input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>)}
        <textarea onClick={expand} onChange={handleChange} name="content" 
        placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={note.content}/>
        <Zoom in ={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
