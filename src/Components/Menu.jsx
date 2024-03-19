/* eslint-disable react/prop-types */
import SocialMedial from "./SocialMedial";
import { Link } from "react-router-dom";

export default function Menu({ refMenuContainer }) {
  return (
    <>
      <div className="menu visible" ref={refMenuContainer}>
        <nav className="flex justify-center items-start flex-col gap-2 md:gap-5 font-black text-xl mt-16 ">
          <Link to={"/"} className="link">
            Home
          </Link>
          <Link to={"/#about"} className="link">
            About
          </Link>
          <Link to={"/#projects"} className="link">
            Projects
          </Link>
          <Link to={"/#contact"} className="link">
            Contact
          </Link>
        </nav>
        <SocialMedial className={"mt-10 visible"} />
      </div>
    </>
  );
}
