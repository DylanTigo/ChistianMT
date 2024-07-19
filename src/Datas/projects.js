import techStack from "../Utilities/iconTab";
import { imagesTab } from "../Utilities/projectsImages";

//Ici sont stockés les differents projets
//techStack = [flask, firebase, dart, flutter, django, laravel, mySql, node] a numeroter en commencant par 0
export const projects = [
  {
    id: 1,
    title: "Smoothy App",
    stacks: [techStack[1], techStack[4], techStack[3]],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident suscipit perferendis minima quam assumenda dicta odio blanditiis eius dolorum quas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident suscipit perferendis minima quam assumenda dicta odio blanditiis eius dolorum quas. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    image: imagesTab,
    link: "#"
  },
  {
    id: 2,
    title: "Wine mobile app",
    stacks: [techStack[7], techStack[2], techStack[5]],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident suscipit perferendis minima quam assumenda dicta odio blanditiis eius dolorum quas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident suscipit perferendis minima quam assumenda dicta odio blanditiis eius dolorum quas. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    image: imagesTab,
    link: "#"
  },
  {
    id: 3,
    title: "Starbucks",
    stacks: [techStack[2], techStack[4], techStack[7]],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident suscipit perferendis minima quam assumenda dicta odio blanditiis eius dolorum quas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident suscipit perferendis minima quam assumenda dicta odio blanditiis eius dolorum quas. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    image: imagesTab,
    link: "#"
  },
  {
    id: 4,
    title: "Smoothy App",
    stacks: [techStack[0], techStack[7], techStack[5]],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident suscipit perferendis minima quam assumenda dicta odio blanditiis eius dolorum quas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident suscipit perferendis minima quam assumenda dicta odio blanditiis eius dolorum quas. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    image: imagesTab,
    link: "#"
  },
];
