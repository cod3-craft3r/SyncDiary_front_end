import { useState } from "react";
import NoteState from "./context/notes/NoteState";
import Home from "./components/Home";

const LandingPage = (props) => {

  return (
      <>
        <NoteState>
          {/* <Modal /> */}
          <Home mode={props.mode} />
        </NoteState>
      </>
  );
};

export default LandingPage;
// so the context is wrapped around the entire app. now wherever you wanna use this context, just import the useContext hook & the noteContext & then use it by storing it inside a const.
// Component Hierarchy: Double-check that your component hierarchy is correct. If Component.jsx is not a direct child of the NoteState.jsx, it won't have access to the context. Like here, since App.jsx is not a direct child of NoteState.jsx, instead it's the parent so it won't have the access to noteContext.