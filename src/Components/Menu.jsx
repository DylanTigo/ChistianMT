/* eslint-disable react/prop-types */
import SocialMedial from "./SocialMedial";
import { Link } from "react-router-dom";

export default function Menu({refMenuContainer}) {
  return (
    <>
      <div className="menu" ref={refMenuContainer}>
        <nav className="flex justify-center items-start flex-col gap-2 md:gap-5 font-bold text-xl mt-16 ">
          <Link to={"/"} className="autoAlpha">Home</Link>
          <Link to={"/#about"} className="autoAlpha">About</Link>
          <Link to={"/#projects"} className="autoAlpha">Projects</Link>
          <Link to={"/#contact"}className="autoAlpha">Contact</Link>
        </nav>
        <SocialMedial className={"mt-10"} />
      </div>
    </>
  );
}
