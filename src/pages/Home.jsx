import React from "react";
import { Link } from "react-router-dom";
import Button3D from "../components/Button3D";

const Home = ({ nama }) => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-start">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Hello, {nama}!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to Our Final Project of Computer Graphics
        </p>
        <Link to={"/main"} className="">
          <Button3D
            className="cursor-pointer"
            buttonTitle="Ready to Have Some Fun?"
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
