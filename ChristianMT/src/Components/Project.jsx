/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import project1 from "../assets/Project-image/project1.png";
import icon from "../assets/icons/downIcon.svg";

export default function Project({ project }) {
  return (
    <Link to={"/projects/:id"} className="w-[48%] relative">
      <div className="absolute rotate-[-135deg] p-5 rounded-full w-[10%] bg-slate-800">
        <img src={icon} alt=" arrow ton top right" className=" bg-slate-500 aspect-square" />
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
