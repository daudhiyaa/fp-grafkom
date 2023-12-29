import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contributors from "../pages/Contributors";
import Main from "../pages/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/contributors" element={<Contributors />} />
      </Routes>
    </BrowserRouter>
  );
}
