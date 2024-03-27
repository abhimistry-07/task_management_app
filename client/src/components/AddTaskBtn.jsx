import React from "react";

function AddTaskBtn({ toggleModal }) {
  return (
    <div style={{ position: "fixed", right: 16, bottom: 16, zIndex: 1 }}>
      <button
        className="bg-teal-500 text-white rounded-full p-2 hover:bg-teal-700"
        onClick={toggleModal}
      >
        <svg
          className="h-6 w-6 text-white-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <line x1="12" y1="5" x2="12" y2="19" />{" "}
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
    </div>
  );
}

export default AddTaskBtn;
