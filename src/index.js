import "./index.css";

import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

import Contributors from "./pages/Contributors";
import Main from "./pages/Main";
import Landing from "./pages/Landing";
import Login from "./pages/Login";

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
        <Router>
          <Routes>
            <Route path="/" Component={Login} />
            <Route
              path="/landing"
              render={(props) => <Contributors {...props} />}
              Component={Landing}
            />
            <Route path="/main" Component={Main} />
            <Route path="/contributors" Component={Contributors} />
          </Routes>
        </Router>
      </div>
    </Suspense>
  );
};

createRoot(document.getElementById("root")).render(<App />);
