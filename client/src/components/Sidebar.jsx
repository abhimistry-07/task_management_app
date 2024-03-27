import React, { useEffect, useState } from "react";
import ProfileModal from "./ProfileModal";
import { useNavigate, useSearchParams } from "react-router-dom";
import { logOut } from "../redux/authReducer/action";

function Sidebar() {
  const [showModal, setShowModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedPriority, setSelectedPriority] = useState("");

  const navigate = useNavigate();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleLogOut = () => {
    localStorage.removeItem("user");
    logOut();
    navigate("/");
  };

  useEffect(() => {
    let params = {
      selectedPriority,
    };

    setSearchParams(params);
  }, [selectedPriority]);

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
      <select
        name="selectedPriority"
        id="selectedPriority"
        value={selectedPriority}
        onChange={(e) => setSelectedPriority(e.target.value)}
        className="m-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
      >
        <option value="">Filter by Priority</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button onClick={handleLogOut}>Logout</button>
      <ProfileModal toggleModal={toggleModal} showModal={showModal} />
    </div>
  );
}

export default Sidebar;
