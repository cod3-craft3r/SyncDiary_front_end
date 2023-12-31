function Alert({ err, onClick }) {
  const clickHandler = () => {
    onClick();
  };

  return (
    <div className="relative w-80 bg-accent text-black rounded-md p-2">
      <div
        className="cursor-pointer absolute top-2 right-2"
        onClick={clickHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="white"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="p-4">{err}</p>
      </div>
    </div>
  );
}

export default Alert;