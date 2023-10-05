import { useContext } from "react";
import noteContext from "../context/notes/note-context";

const AddNote = (props) => {
  const { addNote } = useContext(noteContext);
  return <button onClick={addNote}>Add note</button>
};

export default AddNote;