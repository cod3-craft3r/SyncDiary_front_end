import NoteState from './context/notes/NoteState';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Modal from './components/UI/Modal';
import Alert from './components/UI/Alert';

function App() {
  return (
    <NoteState>
      {/* <Alert /> */}
      {/* <Modal /> */}
      <Navbar />
      <Home />
    </NoteState>
  )
}

export default App
// so the contxt is wrapped around the entire app. now wherever you wanna use this context, just import the useContext hook & the noteContext & then use it by storing it inside a const.
// Component Hierarchy: Double-check that your component hierarchy is correct. If Component.jsx is not a direct child of the NoteState.jsx, it won't have access to the context. Like here, since App.jsx is not a direct child of NoteState.jsx, instead it's the parent so it won't have the access to noteContext.