import "./index.css";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";
import { Physics } from "@react-three/cannon";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Canvas>
        <Physics broadphase="SAP" gravity={[0, -2.6, 0]}>
          <Scene />
        </Physics>
      </Canvas>

      <div className={`controls`}>
        <p>press w a s d to move</p>
        <p>press k to swap camera</p>
        <p>press r to reset</p>
        <p>press arrows for flips</p>
      </div>

      <Link
        to={"/"}
        className="absolute left-10 bottom-10 px-4 py-2 text-white rounded-md bg-orange-400 shadow-md backdrop-blur-10 text-center text-base cursor-pointer hover:bg-orange-500 duration-200 transition ease-in-out"
      >
        {"<"} Back to Intro
      </Link>
    </>
  );
};

export default Main;
