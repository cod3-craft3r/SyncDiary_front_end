import { useContext, useState } from "react";
import noteContext from "../context/notes/note-context";

const AddNote = () => {
  const [userTouchedTitle, setUserTouchedTitle] = useState(false);
  const [userTouchedDescr, setUserTouchedDescr] = useState(false);
  const [note, setNote] = useState({ title: "", descr: "", tag: "" });
  const { addNote, error } = useContext(noteContext);

  const handleChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  const addNoteHandler = (e) => {
    e.preventDefault();
    addNote(note);
    setNote({ title: "", descr: "", tag: "" });
    setUserTouchedTitle(false);
    setUserTouchedDescr(false);
  };

  return (
    <>
      <div className="bg-background rounded-md flex flex-col items-center justify-center border-2 border-accent mb-4 w-1/2 active:shadow active:shadow-accent">
      <h2 className="text-2xl font-bold">Add a new note</h2>
        <form onSubmit={(e) => e.preventDefault()} className="m-4">
          <label htmlFor="title">Title <span className=" text-red-700 mt-3">*</span></label>
          <input
            value={note.title}
            className={`block outline-none rounded-md p-2 w-72 text-text bg-secondary ${userTouchedTitle && note.title.length === 0 ? 'border-red-700 border-2' : 'border-transparent'} placeholder-slate-500`}
            type="text"
            name="title"
            id="title"
            placeholder="e.g. Learn a new skill"
            onChange={handleChange}
            onClick={()=>setUserTouchedTitle(true)}
          />
          {(error.length > 0 && error[0].path === 'title') ? <p className={`text-red-700`}>{error[0].msg}</p> : ''}
          <label htmlFor="descr">Description <span className=" text-red-700 mt-3">*</span></label>
          <input
            value={note.descr}
            className={`block outline-none rounded-md p-2 w-72 text-text bg-secondary ${userTouchedDescr && note.descr.length === 0 ? 'border-red-700 border-2' : 'border-transparent'} placeholder-slate-500`}
            type="text"
            name="descr"
            id="descr"
            placeholder="e.g. Give 30 min daily for the new skill"
            onChange={handleChange}
            onClick={()=>setUserTouchedDescr(true)}
          />
          {(error.length > 0) ? <p className={`text-red-700`}>{error[0].path === 'descr' ? error[0].msg : '' || (error[1]) ? error[1].path === 'descr' ? error[1].msg : '' : ''}</p> : ''}
          <label htmlFor="tag"><span className="mt-3">Tag</span></label>
          <input
            value={note.tag}
            className="block rounded-md p-2 border-none outline-none w-72 text-text bg-secondary mb-3 placeholder-slate-500"
            type="text"
            name="tag"
            id="tag"
            placeholder="e.g. self-growth"
            onChange={handleChange}
          />
          <button
            className="items-center justify-center mt-2 mb-2 bg-primary rounded-md p-1"
            onClick={addNoteHandler}
          >
            Add note
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNote;
