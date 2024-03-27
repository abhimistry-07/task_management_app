import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, getUserTasks } from "../redux/taskReducer/action";
import AddTaskForm from "./AddTaskForm";
import { login } from "../redux/authReducer/action";

function TaskList() {
  const allTasks = useSelector((store) => store.taskReducer.allTasks);
  const isLoading = useSelector((store) => store.taskReducer.isLoading);

  const [isUpdateTask, setIsUpdateTask] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentTask, setCurrentTask] = useState({});

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
    console.log(id);
  };

  useEffect(() => {
    // let data = JSON.parse(localStorage.getItem("user"));
    // dispatch(login(data));

    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>...Loading</h1>
      ) : (
        allTasks && (
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
            {allTasks.map((task) => (
              <div
                key={task._id}
                className="p-6"
                style={{
                  border: "1px solid white",
                  position: "relative",
                  paddingBottom: "60px",
                }}
              >
                <h5 className="mb-2 text-xl font-medium leading-tight">
                  {task.title}
                </h5>
                <p className="mb-4 text-base">{task.description}</p>
                <div
                  style={{ position: "absolute", bottom: "15px", left: "5%" }}
                >
                  <button
                    style={{
                      backgroundColor: "#3949AB",
                      color: "white",
                      marginRight: "8px",
                    }}
                    className="p-1"
                    onClick={() => handleUpdateBtn(task)}
                  >
                    Update
                  </button>
                  <button
                    style={{ backgroundColor: "#EF5350", color: "white" }}
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
