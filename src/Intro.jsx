import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <>
      <div className="m-0 h-full w-full">
        <Spline scene="https://prod.spline.design/u7dNO3rz6AeSlnmz/scene.splinecode" />
        <Link
          to={"/main"}
          className="absolute right-10 bottom-10 px-4 py-2 text-white rounded-md bg-cyan-400 shadow-md backdrop-blur-10 text-center text-base cursor-pointer hover:bg-cyan-500 duration-200 transition ease-in-out"
        >
          Next to Main Session {">"}
        </Link>
      </div>
    </>
  );
};

export default Intro;
