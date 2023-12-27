import "../index.css";

import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Button3D from "../components/Button3D";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const Contributors = () => {
  return (
    <div className="m-0 h-full w-full">
      <Suspense
        fallback={
          <div className="flex h-full justify-center items-center">
            <ClimbingBoxLoader color="#36d7b7" loading={true} />
          </div>
        }
      >
        <Spline scene="https://prod.spline.design/u7dNO3rz6AeSlnmz/scene.splinecode" />
      </Suspense>

      <div className="controls">
        <p>press w a s d to move</p>
        <p>press arrows to move camera</p>
        <p>press space for flips</p>
      </div>

      <Link to={"/main"} className="absolute left-10 bottom-10">
        <Button3D className="cursor-pointer" buttonTitle="Main Session" />
      </Link>
    </div>
  );
};

export default Contributors;
