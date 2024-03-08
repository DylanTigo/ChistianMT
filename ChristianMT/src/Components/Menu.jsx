/* eslint-disable react/prop-types */
import SocialMedial from "./SocialMedial";
import { Link } from "react-router-dom";

export default function Menu({refMenuContainer}) {
  return (
    <>
      <div className="menu" ref={refMenuContainer}>
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
