import React, { useState } from "react";
import { addNewTask } from "../redux/taskReducer/action";
import { useDispatch } from "react-redux";

function AddTaskForm({ showModal, toggleModal }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const [priority, setPriority] = useState("");
  const [resetKey, setResetKey] = useState(0);

  const disptach = useDispatch();

  const handleAddTask = (e) => {
    try {
      e.preventDefault();

      if (!title || !description || !priority) {
        alert("Please fill in all fields.");
        return;
      }

      let newTask = {
        title,
        description,
        completed,
        priority,
      };

      disptach(addNewTask(newTask));

      setTitle("");
      setDescription("");
      setCompleted(false);
      setPriority("");
      alert("New task created successfully!");

      setResetKey((prevKey) => prevKey + 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {showModal && (
        <div
          id="crud-modal"
          tabIndex="-1"
          aria-hidden="true"
          //   className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-500 bg-opacity-75"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center h-full bg-gray-500 bg-opacity-75"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Create New Task
                </h3>
                <button
                  type="button"
                  className="hover:bg-gray-600 dark:hover:bg-gray-600 dark:hover:text-white text-sm"
                  data-modal-toggle="crud-modal"
                  onClick={toggleModal}
                >
                  <svg
                    className="h-6 w-6 text-white-500"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <line x1="18" y1="6" x2="6" y2="18" />{" "}
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form
                key={resetKey}
                className="p-4 md:p-5"
                onSubmit={handleAddTask}
              >
                <div className="grid gap-4 mb-4 grid-cols-1">
                  <div className="col-span-1">
                    <label
                      htmlFor="title"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Title
                    </label>
                    <input
                      onChange={(e) => setTitle(e.target.value)}
                      type="text"
                      name="title"
                      id="title"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Task title"
                      required
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="priority"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Priority
                    </label>
                    <select
                      required
                      onChange={(e) => setPriority(e.target.value)}
                      id="priority"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option value="">Select priority</option>
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Task Description
                    </label>
                    <textarea
                      required
                      onChange={(e) => setDescription(e.target.value)}
                      id="description"
                      rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Task description here"
                    ></textarea>
                  </div>
                  <div className="flex items-center">
                    <input
                      onChange={(e) => setCompleted(e.target.checked)}
                      checked={completed}
                      type="checkbox"
                      name="completed"
                      id="completed"
                      className="rounded text-primary-600 focus:ring-primary-600 dark:focus:ring-primary-500"
                    />
                    <label
                      htmlFor="completed"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Task Pending
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
                >
                  <svg
                    className="me-1 -ms-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Add new task
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddTaskForm;
