import Skill from "../Components/Skill";
import techStack from "../Utilities/iconTab";
import img from "../assets/Project-image/project1.png";

export default function DetailProject() {
  return (
    <div className="flex max-md:flex-col gap-y-10 justify-center items-center p-6 rounded-xl font-bold bg-grey">
      <div className="flex flex-col justify-between items-center grow w-full h-auto md:px-5">
        <h3 className="title">My Project</h3>
        <div className="">
          <div className="flex justify-center flex-wrap my-4">
            {techStack.map((tech, index) => (
              <Skill key={index} img={tech} small={true} alt="logo" />
            ))}
          </div>
          <p className="font-inter font-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            suscipit perferendis minima quam assumenda dicta odio blanditiis
            eius dolorum quas.
          </p>
        </div>
        <a href="#" className="btn relative flex items-center font-bold gap-2 underline mt-6 md:mt-10">
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
            className="lucide lucide-arrow-right"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
      <div className="w-full grow">
        <img
          src={img}
          alt="image du projet"
          className="h-[50lvh] md:h-[80lvh] object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
