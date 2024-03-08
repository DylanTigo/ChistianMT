/* eslint-disable react/no-unescaped-entities */
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
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function melangeTableau(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function handleSubmit(e) {
    e.preventDefault();
    window.location.href = `mailto: dylannoeltigomo@gmail.com?subject=Hire for work&`;
  }
  return (
    <main>
      <section
        id="home"
        className="flex flex-col-reverse sm:flex-row gap-4 mt-0"
      >
        <div className=" flex flex-col justify-between md:w-3/5 md:min-w-[540px] bg-[url('../assets/background.jpg')] bg-no-repeat bg-cover p-7 sm:p-12 rounded-xl relative">
          <div className="">
            <h1 className=" font-oxygen text-2xl sm:text-4xl font-bold">
              Hello I’m Mael Toukap <br /> FullStack and Mobile <br />{" "}
              Develloper
            </h1>
            <p className="w-9/10 sm:w-5/6 mt-8">
              Lorem ipsum dolor sit amet consectetur. Purus tellus pretium
              pulvinar in ullamcorper ornare enim. Mauris rutrum dolor ut.
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-2 mr-2">
              <Button type="primary">Contact me</Button>
              <Button type="secondary">Download CV</Button>
            </div>
            <div className="absolute top-4 right-4 xm:relative xm:top-0 xm:right-0 max-w-12 xm:max-w-none xm:min-w-14 bg-white rounded-full">
              <img
                src={scrollround}
                alt="scrolldown circulaire"
                className="w-24"
              />
              <img
                src={arrow}
                alt="icone de fleche vers le bas"
                className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4"
              />
            </div>
          </div>
        </div>
        <div className="w-full sm:w-2/5 max-h-80 sm:max-h-none h-auto rounded-xl overflow-hidden relative">
          <img
            src={imagePrincipale}
            alt="photo de mael toukap"
            className=" object-cover object-center h-full"
          />
          <div className=" absolute top-6 right-6">
            <SocialMedial className="flex-col" />
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="rounded-xl my-8 overflow-hidden text-xs sm:text-base"
      >
        <ul className="flex gap-3">
          {melangeTableau(stackList).map((skill, index) => (
            <Skill key={index} img={skill} />
          ))}
        </ul>
        <ul className="flex gap-3 mt-3 -translate-x-80">
          {melangeTableau(stackList).map((skill, index) => (
            <Skill key={index} img={skill} />
          ))}
        </ul>
      </section>

      <section id="about" className="bg-grey rounded-xl p-7 sm:p-11">
        <h2 className="title sm:ml-6">About me</h2>
        <div className="flex justify-center items-center w-fit gap-8 sm:gap-12 w-100 flex-col  lg:flex-row">
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

      <section id="projects" className="bg-grey rounded-lg px-2 py-3 sm:p-5">
        <h2 className="title text-center mb-2 ml-0 sm:ml-12">Projects</h2>
        <div className="flex flex-wrap justify-center gap-3 px-2 sm:px-5">
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </section>

      <div className="partner">
        <img src={numcloudLogo} alt="logo de numcloud" />
        <img src={ceramicLogo} alt="logo de ceramic" />
        <img src={HILogo} alt="logo de house innovation" />
        <img src={mtnLogo} alt="logo de mtn cameroun" />
      </div>

      <section
        id="contact"
        className="bg-[url('../assets/background.jpg')] bg-no-repeat bg-cover rounded-xl my-8 flex justify-center flex-col sm:flex-row p-3"
      >
        <div className="w-full sm:w-1/2 shrink-0  grow p-5 sm:p-8 sm:pe-0">
          <h2 className="font-oxygen text-3xl font-bold ">Get in touch</h2>
          <p className=" mt-3 text-sm">
            We believe that the best ideas are born from collaboration. Let's
            make magic together!
          </p>
          <form action="" className="mt-6">
            <input
              type="text"
              name="name"
              value={name}
              onChange={setName}
              className="input"
              id="name"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={setEmail}
              className="input mb-8 mt-2"
              id="email"
              placeholder="Email"
            />
            <Button onClick={handleSubmit}>Send me a mail</Button>
          </form>
        </div>
        <div className=" grow flex justify-center items-center gap-2 flex-col py-4 ">
          <img
            className="rounded-full w-1/2 aspect-square shrink-0"
            src={imagePrincipale}
            alt="photo de mael toukap"
          />
          <div className="px-4 py-1 rounded-full bg-grey ">
            <SocialMedial />
          </div>
        </div>
      </section>
    </main>
  );
}
