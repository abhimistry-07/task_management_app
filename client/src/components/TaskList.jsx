import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserTasks } from "../redux/taskReducer/action";

function TaskList() {
  const allTasks = useSelector((store) => store.taskReducer.allTasks);
  const isLoading = useSelector((store) => store.taskReducer.isLoading);

  const dispatch = useDispatch();
//   console.log(allTasks, "allTasks");

  useEffect(() => {
    dispatch(getUserTasks());
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
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
              margin: "20px",
            }}
          >
            {allTasks.map((task) => (
              <div
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
                  >
                    Update
                  </button>
                  <button
                    style={{ backgroundColor: "#EF5350", color: "white" }}
                    className="p-1"
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
                    Task Pending
                  </label>
                </div> */}
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
}

export default TaskList;
