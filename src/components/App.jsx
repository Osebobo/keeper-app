import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]); //arrays of notes

  //function to addnote from create note area
  function addNote(note) {
    setNotes(prevItems => {
      return [...prevItems, note];
    });
  }

  //function to deletenote by id gotten from create note area
  function deleteNote(id) {
    setNotes(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header /> 
      <CreateArea addNote={addNote}/>
      {notes.map((noteItem, index) => (
            <Note
              key={index}
              id={index}
              title={noteItem.title} 
              content={noteItem.content} 
              onChecked={deleteNote}  
            />
      ))}
      <Footer />
    </div>
  );
}

export default App;
