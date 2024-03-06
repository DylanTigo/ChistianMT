import Button from "../Components/Button";
import SocialMedial from "../Components/SocialMedial";

import arrow from "../assets/icons/downIcon.svg";
// import bgImg from "../assets/background.jpg";
import scrollround from "../assets/scrollround.png";
import imagePrincipale from "../assets/fristMTphoto.png";
import ceramicLogo from "../assets/LogoEnterprise/ceramic.png";
import HILogo from "../assets/LogoEnterprise/houseI.png";
import mtnLogo from "../assets/LogoEnterprise/mtnCM.png";
import numcloudLogo from "../assets/LogoEnterprise/numcloud.png";
import profilPhoto from "../assets/secondMTphoto.png";

import stackList from "../Utilities/iconTab";
import Skill from "../Components/Skill";
import Project from "../Components/Project";

export default function Home() {
  return (
    <main>
      <section id="home" className="flex flex-col sm:flex-row gap-4">
        <div className=" flex flex-col justify-between md:w-3/5 md:min-w-[540px] bg-[url('../assets/background.jpg')] bg-no-repeat bg-cover p-12 rounded-xl relative">
          <div className="">
            <h1 className=" font-oxygen text-4xl font-bold">
              Hello I’m Mael Toukap <br /> FullStack and Mobile <br />{" "}
              Develloper
            </h1>
            <p className=" w-5/6 mt-8">
              Lorem ipsum dolor sit amet consectetur. Purus tellus pretium
              pulvinar in ullamcorper ornare enim. Mauris rutrum dolor ut.
            </p>
          </div>
          <div className="mt-24 flex gap-2">
            <Button type="primary">Contact me</Button>
            <Button type="secondary">Download CV</Button>
          </div>
          <div className="w-fit absolute  bottom-5 right-5 bg-white rounded-full">
            <img
              src={scrollround}
              alt="scrolldown circulaire"
              className=" w-24"
            />
            <img
              src={arrow}
              alt="icone de fleche vers le bas"
              className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div className="w-full sm:w-2/5 h-auto rounded-xl overflow-hidden relative">
          <img
            src={imagePrincipale}
            alt="photo de mael toukap"
            className=" object-cover object-center h-full"
          />
          <div className=" absolute top-6 right-6">
            <SocialMedial className=" flex-col" />
          </div>
        </div>
      </section>
      <div className="partner">
        <img src={numcloudLogo} alt="logo de numcloud" />
        <img src={ceramicLogo} alt="logo de ceramic" />
        <img src={HILogo} alt="logo de house innovation" />
        <img src={mtnLogo} alt="logo de mtn cameroun" />
      </div>
      <section id="about" className="bg-grey rounded-xl p-11">
        <h2 className="title ml-6">About me</h2>
        <div className="flex justify-center items-center w-fit gap-12 w-100 flex-col  lg:flex-row">
          <img
            className="rounded-full w-60 aspect-square shrink-0"
            src={profilPhoto}
            alt="photo de mael toukap"
          />
          <div className="grow mx-auto w-100 ">
            <p className=" lg:max-w-xl mx-auto">
              From a young age, I’ve always had a sense of motivation and
              passion driving me forward. Whether it’s exploring unique
              opportunities, learning additional skills, or meeting new people,
              I bring these values to every experience throughout my life on a
              personal and professional level. Lover of innovation and
              everything related to generate new knowledge. Face problems with a
              smile and solve them as soon as possible. Very calculated about
              the time I spend and work I do.
            </p>
          </div>
        </div>
      </section>
      <section id="skills" className="rounded-xl my-8 overflow-hidden">
        <ul className="flex gap-3">
          {stackList.map((skill, index) => (
            <Skill key={index} img={skill} />
          ))}
        </ul>
        <ul className="flex gap-3 mt-3 -translate-x-80">
          {stackList.map((skill, index) => (
            <Skill key={index} img={skill} />
          ))}
        </ul>
      </section>
      <section id="projects" className="bg-grey rounded-lg p-5">
        <h2 className="title text-center mb-2">Projects</h2>
        <div className="flex flex-wrap justify-center gap-3 px-5">
            <Project/>
            <Project/>
            <Project/>
            <Project/>
        </div>
      </section>
    </main>
  );
}
