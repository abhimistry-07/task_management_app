import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, getUserTasks } from "../redux/taskReducer/action";
import AddTaskForm from "./AddTaskForm";
import { login } from "../redux/authReducer/action";
import GridLoader from "react-spinners/GridLoader";
import { useSearchParams } from "react-router-dom";
import "../../src/index.css";

function TaskList() {
  const allTasks = useSelector((store) => store.taskReducer.allTasks);
  const isLoading = useSelector((store) => store.taskReducer.isLoading);

  // console.log(allTasks, ">>>>");

  const [isUpdateTask, setIsUpdateTask] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentTask, setCurrentTask] = useState({});
  const [filteredTask, setFilteredTask] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(8);

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
    fetchData();
  }, [isUpdateTask, showModal]);

  useEffect(() => {
    const priorityFilter = searchParams.get("selectedPriority");

    if (priorityFilter) {
      const filtered = allTasks.filter(
        (task) => task.priority.toLowerCase() === priorityFilter.toLowerCase()
      );
      setFilteredTask(filtered);
    } else {
      setFilteredTask(allTasks);
    }

    // const sortTask = (a, b) => {
    //   const order = { low: 1, medium: 2, high: 3 };
    //   return order[a.priority] - order[b.priority];
    // };

    // if (sortData === 'asc') {
    //   filteredTask.sort(sortTask);
    // } else if (sortData === 'desc') {
    //   filteredTask.sort((a, b) => sortTask(b, a));
    // }

    // setFilteredTask(filteredTask);
  }, [searchParams, allTasks]);
  // const tasksToRender = filteredTask.length !== 0 ? filteredTask : allTasks;

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredTask.slice(indexOfFirstTask, indexOfLastTask);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {allTasks.length == 0 ? (
        <h1>No Tasks Found</h1>
      ) : (
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
            filteredTask && (
              <div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(300px, 1fr))",
                    gap: "20px",
                    margin: "20px",
                    justifyContent: "center",
                    // marginTop: "80px",
                    // zIndex: 1,
                  }}
                  className="taskGrid"
                >
                  {currentTasks.map((task) => (
                    <div
                      key={task._id}
                      className="p-6"
                      style={{
                        // width: "300px",
                        border: "1px solid white",
                        position: "relative",
                        paddingBottom: "60px",
                        border: "none",
                        borderRadius: "8px",
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
                      <p className="mb-4 text-base text-left">
                        {task.description}
                      </p>
                      {/* <p>{task.priority}</p> */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "24px",
                          left: "24px",
                        }}
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
                    </div>
                  ))}
                </div>
                <div
                // style={{ position: "fixed", right: '35%', bottom: 16, zIndex: 1 }}
                >
                  <div className="flex justify-center mt-4">
                    <button
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                      href="#"
                      className={`flex items-center justify-center px-3 h-8 text-sm font-medium rounded-lg border dark:border-gray-700 ${
                        currentPage === 1
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "bg-white text-gray-500 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      }`}
                    >
                      Previous
                    </button>

                    <button
                      className={`flex items-center justify-center px-3 ms-3 h-8 text-sm font-medium rounded-lg border dark:border-gray-700 
                     `}
                    >
                      {currentPage}
                    </button>

                    <button
                      onClick={() => paginate(currentPage + 1)}
                      disabled={currentTasks.length < tasksPerPage}
                      href="#"
                      className={`flex items-center justify-center px-3 ms-3 h-8 text-sm font-medium rounded-lg border dark:border-gray-700 ${
                        currentTasks.length < tasksPerPage
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "bg-white text-gray-500 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      }`}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
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
