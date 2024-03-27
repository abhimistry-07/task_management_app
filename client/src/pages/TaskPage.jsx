import React, { useState } from "react";
import AddTaskForm from "../components/AddTaskForm";
import TaskList from "../components/TaskList";
import Sidebar from "../components/Sidebar";

function TaskPage() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <div
        style={{
          width: "100%",
          backgroundColor: "black",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
        }}
      >
        <Sidebar />
      </div>{" "}
      <div style={{ position: "fixed", right: 16, bottom: 16, zIndex: 1 }}>
        <button
          className="bg-teal-500 text-white rounded-full p-2 hover:bg-teal-700"
          onClick={toggleModal}
        >
          {/* <svg
            className="h-6 w-6"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx="12" cy="12" r="9" />
            <line x1="9" y1="12" x2="15" y2="12" />
            <line x1="12" y1="9" x2="12" y2="15" />
          </svg> */}

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
      <TaskList />
      <AddTaskForm
        showModal={showModal}
        toggleModal={toggleModal}
        isUpdateTask={false}
      />
    </div>
  );
}

export default TaskPage;
