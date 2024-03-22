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
      <div className="menu visible" ref={refMenuContainer}>
        <nav className="flex justify-center items-start flex-col md:gap-5 font-bold text-xl mt-16 ">
          <a href="#home" onClick={handleClick} className="link">
            Home
          </a>
          <a href="#about" onClick={handleClick} className="link">
            About
          </a>
          <a href="#projects" onClick={handleClick} className="link">
            Projects
          </a>
          <a href="#contact" onClick={handleClick} className="link">
            Contact
          </a>
        </nav>
        <SocialMedial className={"mt-10 visible"} />
      </div>
    </>
  );
}
