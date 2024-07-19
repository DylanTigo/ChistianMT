import { useParams } from "react-router-dom";
import Skill from "../Components/Skill";
import { projects } from "../Datas/projects";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function DetailProject() {
  const { id } = useParams();
  const project = projects.find((projet) => projet.id === +id);
  const title = useRef(null);
  const description = useRef(null);
  const link = useRef(null);
  const imgContainer = useRef(null);
  const linkSVG = useRef(null);
  const timeLine = useRef(null);

  useGSAP(() => {
    timeLine.current = gsap.timeline({ paused: true, ease: "power4.out" });

    timeLine.current
      .to(imgContainer.current, {
        scale: 1,
        duration: 1,
        ease: "power4.out",
        delay: 0.2,
      })
      .to(title.current, { y: 0, opacity: 1 }, "-=1")
      .to(description.current, { y: 0, opacity: 1 }, "-=.8")
      .to(".skill", {
        scale: 1,
        borderRadius: 16,
        stagger: 0.2,
        ease: "power4.out",
      }, "-=.5")
      .to(link.current, { y: 0, opacity: 1 }, "<")
      .to(linkSVG.current, { delay: 1, keyframes : {
        "0%": {rotation: -45},
        "50%": {rotation: 0},
        "100%": {rotation: -45}
      } });

    timeLine.current.play();
  }, []);

  return (
    <div className="flex max-md:flex-col gap-y-10 justify-center items-center p-6 rounded-xl font-bold bg-grey">
      <div className="flex flex-col justify-between items-center grow w-full h-auto md:px-5">
        <div className="">
          <h2
            ref={title}
            className="font-bold mt-6 font-oxygen text-4xl text-center opacity-0 -translate-y-8"
          >
            {project.title}
          </h2>
          <div className="flex gap-1 justify-center flex-wrap mt-2 mb-4">
            {project.stacks.map((tech, index) => (
              <Skill
                className="scale-0"
                key={index}
                img={tech}
                small={true}
                alt="logo"
              />
            ))}
          </div>
        </div>
        <p
          ref={description}
          className="font-inter font-normal opacity-0 translate-y-12"
        >
          {project.description}
        </p>
        <a
          href={project.link}
          target="_blank"
          className="btn relative flex items-center gap-1 mt-6 md:mt-10 bg-white opacity-0 translate-y-8 group transition hover:bg-blue-100"
          ref={link}
        >
          View Project{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1rem"
            height="1rem"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right -rotate-45 group-hover:!rotate-0 group-hover:!translate-x-2 !translate-x-0 transition"
            ref={linkSVG}
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
      <div
        ref={imgContainer}
        className="w-full grow scale-0 rounded-lg overflow-hidden"
      >
        <img
          src={project.image}
          alt={`image du ${project.title}`}
          className="min-h-[50lvh] w-full md:h-[80lvh] object-cover"
        />
      </div>
    </div>
  );
}
