import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authReducer/action";
function Login() {
  const [email, setEmail] = useState("jane@example.com");
  const [password, setPassword] = useState("Qwer@1234");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = useSelector((stroe) => stroe.authReducer.isAuth);
  const errMsg = useSelector((stroe) => stroe.authReducer.errMsg);
  const isLoading = useSelector((stroe) => stroe.authReducer.isLoading);

  //   console.log(auth, errMsg, ">>>>>");

  const handleLogin = async (e) => {
    e.preventDefault();
    let userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, [auth]);

  return (
    <div className="flex flex-col bg-white p-12 rounded-lg shadow-lg">
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
        onClick={handleLogin}
        disabled={loading}
      >
        {isLoading ? "Loading..." : "Log In"}
      </button>
      <button
        className="text-right mt-5 hover:cursor-pointer hover:font-bold text-black"
        onClick={() => navigate("/signup")}
      >
        Sign-up
      </button>
    </div>
  );
}

export default Login;
