import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, getUserTasks } from "../redux/taskReducer/action";
import AddTaskForm from "./AddTaskForm";
import { login } from "../redux/authReducer/action";
import GridLoader from "react-spinners/GridLoader";
import { useSearchParams } from "react-router-dom";

function TaskList() {
  const allTasks = useSelector((store) => store.taskReducer.allTasks);
  const isLoading = useSelector((store) => store.taskReducer.isLoading);

  const [isUpdateTask, setIsUpdateTask] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentTask, setCurrentTask] = useState({});
  const [filteredTask, setFilteredTask] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  let params = {
    priority: searchParams.getAll("selectedPriority"),
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const dispatch = useDispatch();
  //   console.log(allTasks, "allTasks");

  const handleUpdateBtn = (task) => {
    toggleModal();
    setIsUpdateTask(true);
    setCurrentTask(task);
    // console.log(task);
  };

  const fetchData = () => {
    dispatch(getUserTasks());
  };

  const taskUpdated = () => {
    setIsUpdateTask(false);
    fetchData();
  };

  const handleDelete = async (id) => {
    await dispatch(deleteTask(id));
    await dispatch(getUserTasks());
    // console.log(id);
  };

  useEffect(() => {
    // let data = JSON.parse(localStorage.getItem("user"));
    // dispatch(login(data));

    fetchData();
  }, [isUpdateTask]);

  useEffect(() => {
    if (params.priority) {
      let filter = allTasks.filter(
        (task) =>
          task.priority.toLowerCase() == params.priority[0].toLowerCase()
      );

      setFilteredTask(filter);
      // console.log(params.priority[0]);
    }
  }, [searchParams]);

  const tasksToRender = filteredTask.length !== 0 ? filteredTask : allTasks;

  // console.log(tasksToRender, "tasksToRender");

  return (
    <div>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            height: "100vh",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <GridLoader color="#36d7b7" size={30} />
        </div>
      ) : (
        tasksToRender && (
          <div
            style={{
              display: "grid",
              // gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
              margin: "20px",
              marginTop: "80px",
              // zIndex: 1,
            }}
          >
            {tasksToRender.map((task) => (
              <div
                key={task._id}
                className="p-6"
                style={{
                  border: "1px solid white",
                  position: "relative",
                  paddingBottom: "60px",
                  border: "none",
                  backgroundColor:
                    task.priority == "low"
                      ? "#66BB6A"
                      : task.priority == "medium"
                      ? "#FFA726"
                      : "#EF5350",
                }}
              >
                <h5 className="text-left mb-2 text-xl font-medium leading-tight">
                  {task.title}
                </h5>
                <p className="mb-4 text-base text-left">{task.description}</p>
                {/* <p>{task.priority}</p> */}
                <div
                  style={{ position: "absolute", bottom: "15px", left: "5%" }}
                >
                  <button
                    style={{
                      backgroundColor: "#2962FF",
                      color: "white",
                      marginRight: "8px",
                    }}
                    className="p-1"
                    onClick={() => handleUpdateBtn(task)}
                  >
                    Update
                  </button>
                  <button
                    style={{ backgroundColor: "#DD2C00", color: "white" }}
                    className="p-1"
                    onClick={() => handleDelete(task._id)}
                  >
                    Delete
                  </button>
                </div>
                {/* <div className="flex items-center">
                  <input
                    // onChange={(e) => setCompleted(e.target.checked)}
                    // checked={completed}
                    type="checkbox"
                    name="completed"
                    id="completed"
                    className="rounded text-primary-600 focus:ring-primary-600 dark:focus:ring-primary-500"
                  />
                  <label
                    htmlFor="completed"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Task Pendings
                  </label>
                </div> */}
              </div>
            ))}
          </div>
        )
      )}
      <AddTaskForm
        showModal={showModal}
        toggleModal={toggleModal}
        taskUpdated={taskUpdated}
        isUpdateTask={isUpdateTask}
        currentTask={currentTask}
      />
    </div>
  );
}

export default TaskList;
