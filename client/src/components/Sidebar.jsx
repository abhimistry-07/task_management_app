import React, { useState } from "react";
import ProfileModal from "./ProfileModal";
import { useNavigate } from "react-router-dom";
import { logOut } from "../redux/authReducer/action";

function Sidebar() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleLogOut = () => {
    localStorage.removeItem("user");
    logOut();
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        textAlign: "center",
      }}
    >
      <button
        onClick={toggleModal}
        className="rounded-full overflow-hidden focus:outline-none"
        style={{ width: "60px", height: "60px" }}
      >
        <img
          src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_640.png"
          alt="Avatar"
          className="w-full h-full object-cover"
          style={{ objectFit: "cover" }}
        />
      </button>
      {/* <select name="" id="">
        <option value="">Select </option>
      </select> */}
      <button onClick={handleLogOut}>Logout</button>
      <ProfileModal toggleModal={toggleModal} showModal={showModal} />
    </div>
  );
}

export default Sidebar;
