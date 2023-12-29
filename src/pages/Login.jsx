import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/input/Input";
import Button3D from "../components/button/Button3D";

const Login = () => {
  const [nama, setNama] = useState("");
  const [buttonTitle, setButtonTitle] = useState("Input Your Name");
  const [href, setHref] = useState("");

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-100 p-8 rounded shadow-md">
        <form className="flex gap-5">
          <div
            className={`flex flex-col ${nama.length >= 3 ? "gap-0" : "gap-2"}`}
          >
            <Input
              id="name"
              type="name"
              name="name"
              value={nama}
              className="p-3"
              autoComplete="name"
              onChange={(e) => {
                let name = e.target.value;
                setNama(name);
                if (name.length >= 3) {
                  setButtonTitle("Start Now!");
                  setHref("/home");
                } else {
                  setButtonTitle("Input Your Name");
                  setHref("");
                }
              }}
            />
            {nama.length < 3 && (
              <p className="text-red-500">Minimum 3 Letter Required</p>
            )}
          </div>
          <Link to={href} state={{ nama: nama }}>
            <Button3D
              buttonTitle={buttonTitle}
              className={`${
                nama.length >= 3
                  ? "cursor-pointer hover:bg-rose-100 hover:translate-y-1 hover:before:translate3d-hover-before"
                  : "cursor-no-drop"
              }`}
            />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
