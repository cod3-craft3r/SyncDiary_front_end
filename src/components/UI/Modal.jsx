import { useContext, useState } from "react";
import noteContext from "../../context/notes/note-context";

function Modal(props) {
  const [updatedNote, setUpdatedNote] = useState({
    title: "",
    descr: "",
    tag: "",
    _id: props.note._id
  })
  const { updateNote, error } = useContext(noteContext)

  const handleChange = (event) => {
    setUpdatedNote({ ...updatedNote, [event.target.name]: event.target.value, _id: props.note._id })
  }

  const updateNoteHandler = (e) => {
    e.preventDefault()
    updateNote(updatedNote)
    setUpdatedNote({ ...updatedNote, title: "", descr: "", tag: "" })
  }

  const clickHandler = () => {
    props.onClick();
  }

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="modal-overlay fixed inset-0 bg-zinc-800 opacity-90"></div>
        <div
          className={`${props.theme} text-text modal-container bg-background w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto`}
        >
          {/* Close button inside the modal */}
          <div className="modal-content py-4 text-left px-6">
            <div className="flex justify-end">
              <svg
                onClick={clickHandler}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-2xl mb-3">
              Update{" "}
              {
                <span className="text-2xl font-semibold">
                  {props.note.title}
                </span>
              }
            </p>
            <form action="#" method="put" onSubmit={(e) => e.preventDefault()}>
              {error !== undefined ? <p className='text-red-700'>{error}</p> : ''}
              <label htmlFor="title">
                Title
              </label>
              <input
                value={updatedNote.title}
                className={`block outline-none rounded-md p-2 w-72 text-text bg-secondary placeholder-slate-500`}
                type="text"
                name="title"
                id="title"
                placeholder="e.g. Learn a new skill"
                onChange={handleChange}
              />
              <label htmlFor="descr">
                Description
              </label>
              <input
                value={updatedNote.descr}
                className={`block outline-none rounded-md p-2 w-72 text-text bg-secondary placeholder-slate-500`}
                type="text"
                name="descr"
                id="descr"
                placeholder="e.g. Give 30 min daily for the new skill"
                onChange={handleChange}
              />
              <label htmlFor="tag">
                <span className="mt-3">Tag</span>
              </label>
              <input
                value={updatedNote.tag}
                className="block rounded-md p-2 border-none outline-none w-72 text-text bg-secondary mb-3 placeholder-slate-500"
                type="text"
                name="tag"
                id="tag"
                placeholder="e.g. self-growth"
                onChange={handleChange}
              />
              <button
                className="items-center justify-center mt-2 mb-2 bg-primary rounded-md p-1"
                onClick={updateNoteHandler}
              >
                Update note
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
// {/* <div>
//       <div className="fixed inset-0 flex items-center justify-center z-50">
//         <div className="modal-overlay fixed inset-0 bg-zinc-800 opacity-90"></div>
//         <div className="modal-container bg-background w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
//           <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-text text-sm z-50">
//             <svg
//               onClick={clickHandler}
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//               fill="white"
//               className="w-5 h-5"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             <span className="text-sm text-white">(Esc)</span>
//           </div>

//           {/* Modal content */}
//           <div className="modal-content py-4 text-left px-6">
//             <p className="text-2xl font-semibold mb-3">
//               This is modal component with out-of-focus background
//             </p>
//           </div>
//         </div>
//       </div>
//     </div> */}
