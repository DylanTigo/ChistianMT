/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";

export default function Header({ setNavigueur }) {
  function handleClick(e) {
    e.preventDefault()
    const hrefValue = e.currentTarget.getAttribute("href")
    setNavigueur(hrefValue)
  }
  return (
    <header
      className="flex items-center justify-between px-2 sm:px-5
     pt-7 pb-5 md:px-0"
    >
      <div className="flex items-center gap-1 font-bold">
        <span className="w-4 h-4 rounded-full bg-orange-600"></span>M.T.
      </div>
      <nav className="flex justify-center items-center md:gap-2 font-bold text-xs sm:text-sm">
        <a href="#home" onClick={handleClick} className="link px-3 py-1 ">
          Home
        </a>
        <a href="#about" onClick={handleClick} className="link px-2 py-1">
          About
        </a>
        <a href="#projects" onClick={handleClick} className="link px-2 py-1">
          Projects
        </a>
        <a href="#contact" onClick={handleClick} className="link px-2 py-1">
          Contact
        </a>
      </nav>
    </header>
  );
}
