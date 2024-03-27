import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../redux/authReducer/action";

function UpdateProfile({
  userData,
  showUpdateProfileModal,
  toggleUpdateProfileModal,
}) {
  //   const user = useSelector((store) => store.authReducer.user);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const handleDataUpdate = (e) => {
    e.preventDefault();

    let id = userData._id;
    let updatedData = {
      ...userData,
      name,
      email,
    };

    dispatch(updateProfile(updatedData, id));

    alert("Successfully updated profile.");

    toggleUpdateProfileModal();
  };

  useEffect(() => {
    if (userData) {
      setName(userData.name || "");
      setEmail(userData.email || "");
    }
  }, [userData]);

  //   console.log(user, "UpdateProfile");

  return (
    <>
      {showUpdateProfileModal && (
        <div
          id="crud-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center h-full bg-gray-500 bg-opacity-75"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Update Profile
                  {/* {isUpdateTask ? "Update Task" : "Create New Task"} */}
                </h3>
                <button
                  type="button"
                  className="hover:bg-gray-600 dark:hover:bg-gray-600 dark:hover:text-white text-sm"
                  data-modal-toggle="crud-modal"
                  onClick={toggleUpdateProfileModal}
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
                onSubmit={handleDataUpdate}
                style={{ minWidth: "400px", margin: "auto" }}
                className="flex flex-col bg-white p-12 rounded-lg shadow-lg"
              >
                <input
                  placeholder="Enter Name"
                  type="name"
                  className="rounded-md bg-gray-100 text-black px-4 py-2 mb-3 w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  placeholder="Enter Email"
                  type="email"
                  className="rounded-md bg-gray-100 text-black px-4 py-2 mb-3 w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="bg-teal-500 text-white px-4 py-2 mb-4 rounded-md w-full hover:bg-teal-700"
                  // onClick={handleSignUp}
                  //   disabled={isLoading}
                  type="submit"
                >
                  Update
                  {/* {isLoading ? "Loading..." : "Sign up"} */}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UpdateProfile;
