import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./Intro";
import Main from "./Main";

const App = () => {
  return (
    <div className="m-0 w-full h-full overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" Component={Intro} />
          <Route path="/main" Component={Main} />
        </Routes>
      </Router>
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);
