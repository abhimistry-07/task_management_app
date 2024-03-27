import React, { useState } from "react";
import AddTaskForm from "../components/AddTaskForm";
import TaskList from "../components/TaskList";
import Sidebar from "../components/Sidebar";
import AddTaskBtn from "../components/AddTaskBtn";

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
      <AddTaskBtn toggleModal={toggleModal} />
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
