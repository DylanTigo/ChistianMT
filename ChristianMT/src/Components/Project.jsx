/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import project1 from "../assets/Project-image/project1.png";
import icon from "../assets/icons/downIcon.svg";
// import { createPortal } from "react-dom";

export default function Project({ project }) {
  return (
    <Link to={"/projects/:id"} className="w-[48%] relative">
      <div className="absolute top-4 right-4 rotate-[-135deg] w-[clamp(35px,12%,45px)] h-[clamp(35px,12%,45px)] rounded-full bg-white flex justify-center items-center">
        <img src={icon} alt=" arrow ton top right" className=" h-4"/>
      </div>
      <div className="w-100 aspect-square rounded-lg overflow-hidden">
        <img
          src={project1}
          alt={`image de ${project1}`}
          className="w-100 h-full object-cover"
        />
      </div>
    </Link>
  );
}
