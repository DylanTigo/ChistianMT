import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      className="flex items-center justify-between px-2 sm:px-5
     pt-7 pb-5 md:px-0"
    >
      <div className="flex items-center gap-1 font-bold">
        <span className="w-7 h-4 rounded-full bg-orange"></span>M.T.
      </div>
      <nav className="flex justify-center items-center md:gap-2 font-bold text-xs sm:text-sm">
        <Link to={"/"} className="link px-3 py-1 ">
          Home
        </Link>
        <Link to={"/#about"} className="link px-2 py-1">
          About
        </Link>
        <Link to={"/#projects"} className="link px-2 py-1">
          Projects
        </Link>
        <Link to={"/#contact"} className="link px-2 py-1">
          Contact
        </Link>
      </nav>
    </header>
  );
}
