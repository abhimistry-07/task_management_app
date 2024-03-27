import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../redux/authReducer/action";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("jane@example.com");
  const [password, setPassword] = useState("Qwer@1234");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = useSelector((store) => store.authReducer.isAuth);
  const errMsg = useSelector((store) => store.authReducer.errMsg);
  const isLoading = useSelector((store) => store.authReducer.isLoading);

  const hasDigit = /\d/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasSpecialChar = /[@$!%*?&]/.test(password);
  const isLongEnough = password.length >= 8;

  const handleSignUp = async (e) => {
    try {
      e.preventDefault();

      if (!name || !email || !password) {
        alert("Please fill in all fields.");
        return;
      }

      let userData = {
        name,
        email,
        password,
      };
      dispatch(signup(userData))
        .then((response) => {
          if (response && response.status === 201) {
            // console.log("navigate", ">>>>");
            navigate("/login");
          } else {
            console.log(errMsg);
          }
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    } catch (error) {
      console.log(errMsg);
    }
  };

  //   useEffect(() => {
  //     if (auth) {
  //       navigate("/");
  //     }
  //   }, [auth]);

  return (
    <form
      onSubmit={handleSignUp}
      className="flex flex-col bg-white p-12 rounded-lg shadow-lg"
    >
      <h1 className="text-3xl font-bold mb-6 text-black text-left">Sign up</h1>
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
      <input
        placeholder="Enter Password"
        type="password"
        className="rounded-md bg-gray-100 text-black px-4 py-2 mb-6 w-full"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-teal-500 text-white px-4 py-2 mb-4 rounded-md w-full hover:bg-teal-700"
        // onClick={handleSignUp}
        disabled={isLoading}
        type="submit"
      >
        {isLoading ? "Loading..." : "Sign up"}
      </button>
      <button
        className="text-right mt-5 hover:cursor-pointer hover:font-bold text-black"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
      <div className="text-left">
        <p style={{ color: hasDigit ? "green" : "red", fontSize: "14px" }}>
          Contains a digit
        </p>
        <p
          style={{
            color: hasLowercase ? "green" : "red",
            fontSize: "14px",
          }}
        >
          Contains a lowercase letter
        </p>
        <p
          style={{
            color: hasUppercase ? "green" : "red",
            fontSize: "14px",
          }}
        >
          Contains an uppercase letter
        </p>
        <p
          style={{
            color: hasSpecialChar ? "green" : "red",
            fontSize: "14px",
          }}
        >
          Contains a special character
        </p>
        <p
          style={{
            color: isLongEnough ? "green" : "red",
            fontSize: "14px",
          }}
        >
          At least 8 characters required
        </p>
      </div>
    </form>
  );
}

export default SignUp;
