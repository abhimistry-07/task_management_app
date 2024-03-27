import React, { useState } from "react";
import { useSelector } from "react-redux";
import UpdateProfile from "./UpdateProfile";

function ProfileModal({ toggleModal, showModal }) {
  const user = JSON.parse(localStorage.getItem("user"));

  const [showUpdateProfileModal, setShowUpdateProfileModal] = useState(false);

  const toggleUpdateProfileModal = () => {
    toggleModal();
    setShowUpdateProfileModal(!showUpdateProfileModal);
  };

  return (
    <>
      {showModal && user && (
        <div
          id="crud-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center h-full bg-gray-500 bg-opacity-75"
          style={{ zIndex: "50" }}
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Profile
                </h3>
                <button
                  type="button"
                  className="hover:bg-gray-600 dark:hover:bg-gray-600 dark:hover:text-white transition-colors duration-200 text-sm rounded-full"
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
              <div className="bg-white px-1 pt-1 pb-1 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="flex">
                    <button
                      className="rounded-full overflow-hidden focus:outline-none"
                      style={{ width: "70px", height: "70px" }}
                    >
                      <img
                        src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_640.png"
                        alt="Avatar"
                        className="w-full h-full object-cover"
                        style={{ objectFit: "cover" }}
                      />
                    </button>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                        {user.name}
                      </h3>
                      <p className="mt-2 text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                </div>
                <hr className="mt-6" />
                <div className="flex justify-center space-x-4 bg-gray-50 p-4">
                  <div className="text-center hover:bg-gray-100 text-black">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,{" "}
                    </p>
                  </div>
                </div>
                <button
                  className="text-white hover:cursor-pointer mt-4"
                  style={{ backgroundColor: "#26C6DA" }}
                  onClick={toggleUpdateProfileModal}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <UpdateProfile
        userData={user}
        showUpdateProfileModal={showUpdateProfileModal}
        toggleUpdateProfileModal={toggleUpdateProfileModal}
      />
    </>
  );
}

export default ProfileModal;
