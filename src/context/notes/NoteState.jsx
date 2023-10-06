import { useState } from "react";
import noteContext from "./note-context";

const NoteState = (props) => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState('');

  const getAllNotes = async () => {
    try {
      const response = await fetch(
        'http://localhost:8000/api/notes/fetch-notes',
        {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxYjIwYWVkMjI0Mjc5M2QzNDU4YjU1In0sImlhdCI6MTY5NjI4MTI1NX0.bmCNrh2y-wBA3DyNdPG6-dn8la1c3iZvY1Sg-HVvLL8"
          }
        }
      );
      const data = await response.json();
      setNotes(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const addNote = async (newNote) => {
    try {
      const response = await fetch(
        'http://localhost:8000/api/notes/add-note',
        {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxYjIwYWVkMjI0Mjc5M2QzNDU4YjU1In0sImlhdCI6MTY5NjI4MTI1NX0.bmCNrh2y-wBA3DyNdPG6-dn8la1c3iZvY1Sg-HVvLL8"
          },
          body: JSON.stringify(newNote)
        }
      );
      const data = await response.json();
      if(response.status === 400) {
        setError(data.errors);
      }
      setNotes(data);
    } catch (err) {
      console.log('ERROR: ', err.message);
      setError(err.message);
    }

    getAllNotes();
  };

  const deleteNote = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/notes/delete-note/${id}`,
        {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxYjIwYWVkMjI0Mjc5M2QzNDU4YjU1In0sImlhdCI6MTY5NjI4MTI1NX0.bmCNrh2y-wBA3DyNdPG6-dn8la1c3iZvY1Sg-HVvLL8"
          }
        }
      );
      const data = await response.json();
      setNotes(data);
    } catch (err) {
      setError(err.message);
    }
    const updatedNotes = notes.filter((note) => note._id !== id);
    setNotes(updatedNotes);
  };

  return (
    <noteContext.Provider
      value={{ notes, error, setNotes, addNote, deleteNote, getAllNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
