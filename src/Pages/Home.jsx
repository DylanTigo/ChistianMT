/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Button from "../Components/Button";
import SocialMedial from "../Components/SocialMedial";
import ceramicLogo from "../assets/LogoEnterprise/ceramic.png";
import HILogo from "../assets/LogoEnterprise/houseI.png";
import mtnLogo from "../assets/LogoEnterprise/mtnCM.png";
import numcloudLogo from "../assets/LogoEnterprise/numcloud.png";
import imagePrincipale from "../assets/fristMTphoto.png";
import profilPhoto from "../assets/secondMTphoto.png";

import { useGSAP } from "@gsap/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollTrigger, gsap } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import Project from "../Components/Project";
import Skill from "../Components/Skill";
import stackList from "../Utilities/iconTab";
import { disableScroll, enableScroll } from "../Utilities/scroll";
import useAnimeLoader from "../Hooks/useAnimeLoader";
import { useLoaderContext } from "../Hooks/LoaderContext";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const home = useRef(null);
  const btnContainer = useRef(null);
  const imgPrincipale = useRef(null);
  const aboutSection = useRef(null);
  const projectsSection = useRef(null);
  const contactSection = useRef(null);
  const partner = useRef(null);
  const loaderContainer = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
  }

  //Animation de la section skils avec FramerMotion
  const skills = useRef(null);
  const { scrollYProgress } = useScroll({
    target: skills,
    offset: ["start end", "end start"],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 450]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -450]);

  //enregistrement de l'animation sur les sections
  gsap.registerEffect({
    name: "sectionAnimation",
    effect: (target, config) => {
      return gsap.to(target, {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "power4.out",
        scrollTrigger: {
          trigger: target,
          start: "top 90%",
          toggleActions: "play none none reset",
          onEnter: config.onEnter,
        },
      });
    },
  });

  //animation des section et du flot géneral avec Gsap
  useGSAP(
    () => {
      //Animation de la section about
      gsap.registerPlugin(ScrollTrigger);
      gsap.effects.sectionAnimation(aboutSection.current, {
        onEnter: () => {
          gsap.from(".about p", {
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            delay: 0.1,
            ease: "expo.out",
          });
        },
      });

      //Animation de la section about
      gsap.effects.sectionAnimation(projectsSection.current);

      //Animation de la section partner
      ScrollTrigger.create({
        trigger: partner.current,
        start: "",
        onEnter: () => {
          gsap.from(".partner img", {
            y: 50,
            stagger: 0.1,
          });
        },
      });

      //Animation de la section contact
      gsap.to(contactSection.current, {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "power4.out",
        scrollTrigger: {
          trigger: contactSection.current,
          start: "-50% 80%",
          toggleActions: "play none none reset",
          onEnter: () => {
            gsap.to("#contact .icon", {
              delay: 0.1,
              stagger: { amount: 0.3, from: "center" },
              keyframes: [{ scale: 1.15 }, { scale: 1 }],
            });
          },
        },
      });
    },
    { scope: document.body }
  );

  const { timelineHome, timelineLoader } = useAnimeLoader(home, loaderContainer);
  const {onceLoaded, setOnceLoaded} = useLoaderContext()

  useEffect(() => {
    if (onceLoaded) {
      loaderContainer.current.classList.add("invisible")
      loaderContainer.current.classList.add("opacity-0")
      timelineHome.current.play()
    }
  },[])

  useGSAP(
    () => {
      function handleLoad() {
        if (!onceLoaded) {
          disableScroll();
          setTimeout(enableScroll, 3000);
          timelineLoader.current.play().then(() => {
            loaderContainer.current.classList.add("invisible")
            loaderContainer.current.classList.add("opacity-0")
            timelineHome.current.play()
            setOnceLoaded(true)
          })
        }
      }

      handleLoad();
    },
    { scope: document.body }
  );

  return (
    <>
      <div
        ref={loaderContainer}
        className="w-dvw h-dvh fixed top-0 left-0 bg-black flex justify-center items-center z-20"
      >
        <div className="relative w-fit">
          <div className="text-white overflow-hidden h-fit w-fit font-bold">
            <p className="welcome translate-y-full text-xl sm:text-3xl flex gap-1">
              WELCOME
            </p>
          </div>
          <div className="blockContainer w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  h-full">
            <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-orange-400 item item1"></span>
            <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-white item item2"></span>
          </div>
        </div>
      </div>
      <main>
        <section
          id="accueil"
          className="flex flex-col-reverse sm:flex-row gap-4 mt-0 max-h-[90vh]"
          ref={home}
        >
          <div className=" flex flex-col justify-between md:w-3/5 md:min-w-[540px] bg-[url('../assets/background.jpg')] bg-no-repeat bg-cover px-7 py-12 sm:p-12 rounded-xl relative">
            <div className=" text-center sm:text-left">
              <div className="overflow-hidden">
                <h1 className="anime translate-y-6 overflow-hidden font-oxygen text-3xl sm:text-4xl font-bold lg:max-w-[90%]">
                  Hello I’m Mael Toukap, FullStack and Mobile Develloper
                </h1>
              </div>
              <p className="anime w-9/10 sm:w-5/6 mt-8 max-w-[80%] mx-auto sm:mx-0">
                Lorem ipsum dolor sit amet consectetur. Purus tellus pretium
                pulvinar in ullamcorper ornare enim. Mauris rutrum dolor ut.
              </p>
            </div>
            <div
              ref={btnContainer}
              className="btnContainer flex justify-center sm:justify-start gap-2 mr-2 mt-10"
            >
              <Button type="primary">Contact me</Button>
              <Button type="secondary">Download CV</Button>
            </div>
          </div>
          <div className="w-full sm:w-2/5 rounded-xl overflow-hidden relative bg-orange-500">
            <img
              ref={imgPrincipale}
              src={imagePrincipale}
              alt="photo de mael toukap"
              className="imgPrincipale object-cover object-center w-full h-full opacity-0"
            />
            <div className=" absolute top-6 right-6">
              <SocialMedial className="flex-col" />
            </div>
          </div>
        </section>

        <section
          ref={skills}
          id="skills"
          className="rounded-lg my-8 text-xs sm:text-base overflow-hidden flex flex-col relative"
        >
          <motion.ul
            style={{ x: x1 }}
            className="relative flex gap-3 mr-3 w-max shrink-0 listContainer1 self-end "
          >
            {stackList.map((skill, index) => (
              <Skill key={index} img={skill} />
            ))}
          </motion.ul>
          <motion.ul
            style={{ x: x2 }}
            className="relative flex gap-3 mr-3 w-max shrink-0 listContainer2 mt-3 self-start "
          >
            {stackList.map((skill, index) => (
              <Skill key={index} img={skill} />
            ))}
          </motion.ul>
        </section>

        <section
          ref={aboutSection}
          id="about"
          className="bg-grey rounded-xl p-7 sm:p-11 opacity-0 translate-y-32"
        >
          <h2 className="title sm:ml-6">About me</h2>
          <div className="flex justify-center items-center w-full gap-8 sm:gap-12 w-100 flex-col sm:flex-row">
            <img
              className="rounded-full w-60 aspect-square min-w-52"
              src={profilPhoto}
              alt="photo de mael toukap"
            />
            <div className="about grow mx-auto w-100 max-w-none sm:max-h-60 overflow-y-auto">
              <p className=" lg:max-w-xl mx-auto">
                From a young age, I’ve always had a sense of motivation and
                passion driving me forward.
              </p>
              <p className=" lg:max-w-xl mx-auto">
                Whether it’s exploring unique opportunities, learning additional
                skills, or meeting new people, I bring these values to every
                experience throughout my life on a personal and professional
                level.
              </p>
              <p className=" lg:max-w-xl mx-auto">
                Lover of innovation and everything related to generate new
                knowledge. Face problems with a smile and solve them as soon as
                possible. Very calculated about the time I spend and work I do.
              </p>
            </div>
          </div>
        </section>

        <section
          ref={projectsSection}
          id="projects"
          className="bg-grey rounded-lg px-2 py-3 sm:px-5 sm:py-7 opacity-0 translate-y-32"
        >
          <h2 className="title mb-2 ml-0 sm:ml-12">Projects</h2>
          <div className="flex flex-wrap justify-center gap-3 px-2 sm:px-5">
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
        </section>

        <div ref={partner} className="partner">
          <img src={numcloudLogo} alt="logo de numcloud" />
          <img src={ceramicLogo} alt="logo de ceramic" />
          <img src={HILogo} alt="logo de house innovation" />
          <img src={mtnLogo} alt="logo de mtn cameroun" />
        </div>

        <section
          ref={contactSection}
          id="contact"
          className="bg-[url('../assets/background.jpg')] bg-no-repeat bg-cover rounded-xl my-8 flex justify-center flex-col sm:flex-row p-3 opacity-0 translate-y-32"
        >
          <div className="w-full max-w-none xm:max-w-96 mx-auto sm:w-1/2 min-w-[50%] shrink-0 grow p-5 sm:p-8 sm:pe-0 text-center sm:text-left">
            <h2 className="font-oxygen text-3xl font-bold">Get in touch</h2>
            <p className=" mt-3 text-sm">
              We believe that the best ideas are born from collaboration. Let's
              make magic together!
            </p>
            <form action="" className="mt-6">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.value)}
                className="input"
                id="name"
                placeholder="Name"
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.value)}
                className="input mb-8 mt-2"
                id="email"
                placeholder="Email"
              />
              <Button onClick={handleSubmit}>Send me a mail</Button>
            </form>
          </div>
          <div className=" grow flex justify-center items-center gap-2 flex-col py-4 min-w-[50%]">
            <img
              className="rounded-full w-1/2 max-w-60 aspect-square shrink-0"
              src={imagePrincipale}
              alt="photo de mael toukap"
            />
            <div className="px-4 py-1 rounded-full bg-grey ">
              <SocialMedial />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
