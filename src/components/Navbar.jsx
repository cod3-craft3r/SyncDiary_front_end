const Navbar = (props) => {
  return <div className="items-center justify-center w-screen h-10 bg-secondary p-2 text-center">
    <a href="http://localhost:5173/" className="text-primary text-xl font-semibold">SyncDiary</a>
    <button className="absolute right-0" onClick={props.setMode}>mode</button>
  </div>
}

export default Navbar;
// https://youtube.com/shorts/5AKyX7oVl4Q?si=mWALb7KbNFbLKHc_