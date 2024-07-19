/* eslint-disable react/prop-types */
import SocialMedial from "./SocialMedial";

export default function Menu({ refMenuContainer, setNavigueur }) {

  // const [isOpen, setIsOpen] =  useState(false)

  function handleClick(e) {
    e.preventDefault()
    const hrefValue = e.currentTarget.getAttribute("href")
    setNavigueur(hrefValue)
  }
  return (
    <>
      <div className="menu min-w-72" ref={refMenuContainer}>
        <nav className="flex justify-center items-start flex-col font-bold text-xl mt-16 ">
          <a href="#home" onClick={handleClick} className="link anime py-2">
            Home
          </a>
          <a href="#about" onClick={handleClick} className="link anime py-2">
            About
          </a>
          <a href="#projects" onClick={handleClick} className="link anime py-2">
            Projects
          </a>
          <a href="#contact" onClick={handleClick} className="link anime py-2">
            Contact
          </a>
        </nav>
        <SocialMedial className={"mt-10 visible"} />
      </div>
    </>
  );
}
