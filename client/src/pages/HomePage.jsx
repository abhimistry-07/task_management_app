import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function HomePage() {
  return (
    <>
      <DIV>
        <h3 className="text-3xl font-semibold mb-4">
          Welcome to Task Management App
        </h3>
        <p className="mb-2">Stay Organized</p>
        <p className="mb-2">Boost Your Efficiency</p>
        <p className="mb-2">Never Miss a Deadline Again</p>
        <p className="mb-2">Accessible Anywhere</p>
      </DIV>
      <div className="flex justify-center space-x-4 mt-5">
        <Link
          to="/login"
          className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-white hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="px-4 py-2 bg-white text-blue-500 font-bold rounded-md focus:outline-none hover:bg-blue-500 hover:text-white focus:ring-2  focus:ring-gray-400"
        >
          Signup
        </Link>
      </div>
    </>
  );
}

const DIV = styled.div`
  h3 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    line-height: 1.5;
  }

  p:nth-child(1) {
    color: #333;
  }

  p:nth-child(2) {
    color: #007bff;
  }

  p:nth-child(3) {
    color: #f00;
  }

  p:nth-child(4) {
    color: #4caf50;
  }
`;

export default HomePage;
