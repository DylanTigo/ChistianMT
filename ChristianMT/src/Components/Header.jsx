import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-2 py-7 md:px-0">
      <div className="flex items-center gap-1 font-bold">
        <span className="w-7 h-4 rounded-full bg-orange"></span>M.T.
      </div>
      <nav className="flex justify-center items-center gap-2 md:gap-5 font-semibold">
        <Link to={"/"}>Home</Link>
        <Link to={"/#about"}>About</Link>
        <Link to={"/#projects"}>Projects</Link>
        <Link to={"/#contact"}>Contact</Link>
      </nav>
    </header>
  );
}
