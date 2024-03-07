import SocialMedial from "./SocialMedial";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <div className=" fixed top-8 right-8 flex flex-col bg-grey rounded-lg shadow-md p-7 z-10">
        <button className="menuBtn">
          <span className="stick translate-y-1"></span>
          <span className="stick -translate-y-1/2"></span>
          <span className="stick -translate-y-1"></span>
        </button>
        <nav className="flex justify-center items-start flex-col gap-2 md:gap-5 font-bold text-xl mt-16 ">
          <Link to={"/"}>Home</Link>
          <Link to={"/#about"}>About</Link>
          <Link to={"/#projects"}>Projects</Link>
          <Link to={"/#contact"}>Contact</Link>
        </nav>
        <SocialMedial className={"mt-10"} />
      </div>
    </>
  );
}
