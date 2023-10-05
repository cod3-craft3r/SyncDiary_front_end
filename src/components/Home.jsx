import { useContext } from "react";
import noteContext from "../context/notes/note-context";
import Card from "./UI/Card";
import AddNote from "./AddNote";

const Home = (props) => {
  const { notes } = useContext(noteContext);
  return (
    <>
      <p className="m-4">Welcome user, to SyncDiary!</p>
      <AddNote />
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
    </>
  );
};

export default Home;
