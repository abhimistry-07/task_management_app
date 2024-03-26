import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      {/* <Route path="/" element={<HomePage />} /> */}
    </Routes>
  );
}

export default AllRoutes;
