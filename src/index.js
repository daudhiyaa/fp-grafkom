import "./index.css";

import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

import Router from "./routes/Router";

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="flex h-full justify-center items-center">
          <ClimbingBoxLoader color="#36d7b7" loading={true} />
        </div>
      }
    >
      <div className="m-0 w-full h-full overflow-hidden">
        <Router />
      </div>
    </Suspense>
  );
};

createRoot(document.getElementById("root")).render(<App />);
