import { useContext, useEffect, useState } from "react";
import noteContext from "../context/notes/note-context";
import Card from "./UI/Card";
import AddNote from "./AddNote";
import Alert from "./UI/Alert";

const Home = (props) => {
  const [showAlert, setShowAlert] = useState(false);
  const { notes, getAllNotes, error } = useContext(noteContext);

  useEffect(() => {
    getAllNotes();
  }, []);

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      {/* [todo) {error &&  (
        <div className="flex items-center justify-center">
          <Alert err={error[0].msg} onClick={closeAlert} />
        </div>
      )} */}
      <p className="m-4">Welcome user, to SyncDiary!</p>
      <div className="flex items-center justify-center">
        <AddNote />
      </div>
      {notes.length > 0 ? (
        <div className="flex items-center justify-center h-auto w-screen overflow-y-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
            {notes.map((note) => (
              <div
                className="w-1/5 sm:w-1/4 md:w-1/3 lg:w-1/2 xl:w-full"
                key={note._id}
              >
                <Card note={note} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-text text-2xl font-semibold items-center justify-center flex mt-4">
          <h3>No notes found, fancy adding one 👆🏻 ?</h3>
        </div>
      )}
    </>
  );
};

export default Home;
