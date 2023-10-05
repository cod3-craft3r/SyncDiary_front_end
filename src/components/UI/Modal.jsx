import React, { useState } from "react";

function Modal(props) {
  const clickHandler = () => {
    props.onClick();
  };

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="modal-overlay fixed inset-0 bg-zinc-800 opacity-90"></div>
        <div className="modal-container bg-background w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
          <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-text text-sm z-50">
            <svg
              onClick={clickHandler}
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
            <span className="text-sm text-white">(Esc)</span>
          </div>

          {/* Modal content */}
          <div className="modal-content py-4 text-left px-6">
            <p className="text-2xl font-semibold mb-3">
              This is modal component with out-of-focus background
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
