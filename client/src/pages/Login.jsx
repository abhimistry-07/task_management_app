import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authReducer/action";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = useSelector((store) => store.authReducer.isAuth);
  const errMsg = useSelector((store) => store.authReducer.errMsg);
  const isLoading = useSelector((store) => store.authReducer.isLoading);

  const isLogedIn = JSON.parse(localStorage.getItem("user"));

  const handleLogin = async (e) => {
    e.preventDefault();
    let userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  useEffect(() => {
    if (isLogedIn) {
      navigate("/task");
    }
  }, [isLogedIn]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <form
        className="flex flex-col bg-white p-12 rounded-lg shadow-lg"
        onSubmit={handleLogin}
      >
        <h1 className="text-3xl font-bold mb-6 text-black text-left">Log In</h1>
        <input
          placeholder="Enter Email"
          type="email"
          className="rounded-md bg-gray-100 text-black px-4 py-2 mb-3 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Enter Password"
          type="password"
          className="rounded-md bg-gray-100 text-black px-4 py-2 mb-6 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-teal-500 text-white px-4 py-2 mb-4 rounded-md w-full hover:bg-teal-700"
          // onClick={handleLogin}
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? "Loading..." : "Log In"}
        </button>
        <button
          className="text-right mt-5 hover:cursor-pointer hover:font-bold text-black"
          onClick={() => navigate("/signup")}
        >
          Sign-up
        </button>
      </form>
    </div>
  );
}

export default Login;
