import React, { useEffect, useState } from "react";
import AddTaskForm from "../components/AddTaskForm";
import TaskList from "../components/TaskList";
import Sidebar from "../components/Sidebar";
import AddTaskBtn from "../components/AddTaskBtn";
import { useSearchParams } from "react-router-dom";

function TaskPage() {
  const [showModal, setShowModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams("");
  const [sortTasks, setSortTasks] = useState("");
  const [taskCompleted, setTaskCompleted] = useState();

  let initialPriority = searchParams.getAll("selectedPriority");

  const [selectedPriority, setSelectedPriority] = useState(
    initialPriority.length > 0 ? initialPriority[0] : ""
  );

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    let params = {
      selectedPriority,
      taskCompleted,
      // sortTasks,
    };

    console.log(params);

    setSearchParams(params);
  }, [selectedPriority, sortTasks, taskCompleted]);

  return (
    <div>
      <div
        style={{
          width: "100%",
          backgroundColor: "#278D8D",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 49,
        }}
      >
        <Sidebar />
      </div>{" "}
      <AddTaskBtn toggleModal={toggleModal} />
      <div
        className="mt-20"
        style={{ display: "flex", gap: "20px", alignItems: "center" }}
      >
        <select
          name="selectedPriority"
          id="selectedPriority"
          value={selectedPriority}
          onChange={(e) => setSelectedPriority(e.target.value)}
          className="ml-5 p-2 rounded-md border border-red-300 focus:outline-none focus:border-indigo-500"
        >
          <option value="">Filter by Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <select
          name="taskCompleted"
          id="taskCompleted"
          value={taskCompleted}
          onChange={(e) => setTaskCompleted(e.target.value)}
          className="ml-5 p-2 rounded-md border border-red-300 focus:outline-none focus:border-indigo-500"
        >
          <option value="">Filter by Task Status</option>
          <option value="true">Completed</option>
          <option value="false">Pending</option>
        </select>

        {/* <div className="ml-10">
          <input
            name="sortTasks"
            id="desc"
            type="radio"
            value={"desc"}
            onChange={(e) => setSortTasks(e.target.value)}
          />
          <label className="ml-5" for="desc" style={{ alignItems: "center" }}>
            Sort task high to low priority
          </label>
          <input
            id="asc"
            name="sortTasks"
            type="radio"
            className="ml-10"
            value={"asc"}
            onChange={(e) => setSortTasks(e.target.value)}
          />
          <label for="asc" className="ml-5" style={{ alignItems: "center" }}>
            Sort task low to high priority
          </label>
        </div> */}
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
