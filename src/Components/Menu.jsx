/* eslint-disable react/prop-types */
import SocialMedial from "./SocialMedial";
// import { Link } from "react-router-dom";

export default function Menu({ refMenuContainer, setNavigueur }) {
  function handleClick(e) {
    e.preventDefault()
    const hrefValue = e.currentTarget.getAttribute("href")
    setNavigueur(hrefValue)
  }
  return (
    <>
      <div className="menu" ref={refMenuContainer}>
        <nav className="flex justify-center items-start flex-col font-bold text-xl mt-16 ">
          <a href="#home" onClick={handleClick} className="link py-2">
            Home
          </a>
          <a href="#about" onClick={handleClick} className="link py-2">
            About
          </a>
          <a href="#projects" onClick={handleClick} className="link py-2">
            Projects
          </a>
          <a href="#contact" onClick={handleClick} className="link py-2">
            Contact
          </a>
        </nav>
        <SocialMedial className={"mt-10 visible"} />
      </div>
    </>
  );
}
