import "../index.css";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";
import { Physics } from "@react-three/cannon";
import { Link } from "react-router-dom";
import Button3D from "../components/button/Button3D";

const Main = () => {
  return (
    <>
      <Canvas>
        <Physics broadphase="SAP" gravity={[0, -2.6, 0]}>
          <Scene />
        </Physics>
      </Canvas>

      <div className="controls">
        <p>press w a s d to move</p>
        <p>press k to swap camera</p>
        <p>press r to reset</p>
        <p>press arrows for flips</p>
      </div>

      <div>
        <Link to={"/home"}>
          <Button3D
            className="absolute left-10 bottom-28"
            buttonTitle="Back to Homepage"
          />
        </Link>
        <Link to={"/contributors"}>
          <Button3D
            className="absolute left-10 bottom-10"
            buttonTitle="See Contributors"
          />
        </Link>
      </div>
    </>
  );
};

export default Main;
