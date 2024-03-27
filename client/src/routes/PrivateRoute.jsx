import React from "react";
import { useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { login } from "../redux/authReducer/action";

function PrivateRoute({ children }) {
  const location = useLocation();
  const dispatch = useDispatch();

  const auth = JSON.parse(localStorage.getItem("user"));
  //   dispatch(login(auth));

  //   console.log(auth, "in private route");

  if (!auth) {
    return <Navigate state={location.pathname} to={"/"} replace={true} />;
  }
  return children;
}

export default PrivateRoute;
