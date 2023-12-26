import React from "react";
import { Link } from "react-router-dom";
import Button3D from "../components/Button3D";

const Landing = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Our Final Project of Computer Graphics
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          purus feugiat, molestie ipsum et, consequat nibh.
        </p>
        <Link to={"/main"} className="">
          <Button3D buttonTitle="Ready to Have Some Fun?" />
        </Link>
      </div>
    </div>
  );
};

export default Landing;
