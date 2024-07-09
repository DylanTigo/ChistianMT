import Skill from "../Components/Skill";
import techStack from "../Utilities/iconTab";


export default function DetailProject() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h3 className="title">My Project</h3>
        <div className="flex gap-2 justify-center">
          { techStack.map((tech, index) => (
            <Skill
              key={index}
              src={tech}
              small={true}
              alt="logo"
            />
          )) }
        </div>
      </div>
    </div>
  )
}
