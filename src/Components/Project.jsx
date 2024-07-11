/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
// import project1 from "../assets/Project-image/project1.png";
import icon from "../assets/icons/downIcon.svg";
// import { createPortal } from "react-dom";

// eslint-disable-next-line no-unused-vars
export default function Project({project}) {
  
  return (
    <Link
      to={`/projects/${project.id}`}
      className="w-full sm:w-[48%] relative rounded-lg group overflow-hidden"
    >
      <div className="absolute top-4 right-4 rotate-[-135deg] w-[clamp(35px,12%,45px)] h-[clamp(35px,12%,45px)] rounded-full bg-white flex justify-center items-center z-10">
        <img src={icon} alt=" arrow ton top right" className=" h-4" />
      </div>
      <div className="w-100 aspect-square group-hover:scale-110 transition-transform duration-500 ease-out">
        <img
          src={project.image}
          alt={`image de ${project.title}`}
          className="w-100 h-full object-cover"
        />
      </div>
    </Link>
  );
}
