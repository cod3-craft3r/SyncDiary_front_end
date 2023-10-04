const Card = ({ note }) => {
  return (
    <div className="bg-background rounded p-2 m-2 cursor-pointer">
      <h3 className="text-xl font-semibold mb-1">{note.title}</h3>
      <p>{note.descr}</p>
      <p className="flex mt-2 font-thin text-xs text-accent">
        <span>
          <em>{note.tag}</em>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="ml-2 w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M5.5 3A2.5 2.5 0 003 5.5v2.879a2.5 2.5 0 00.732 1.767l6.5 6.5a2.5 2.5 0 003.536 0l2.878-2.878a2.5 2.5 0 000-3.536l-6.5-6.5A2.5 2.5 0 008.38 3H5.5zM6 7a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </p>
    </div>
  );
};

export default Card;
// w-1/5
