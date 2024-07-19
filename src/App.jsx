import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { LoaderProvider } from "./Hooks/LoaderContext";

function App() {
  const menuBtn = useRef(null);
  const bgBlack = useRef(null);
  const menuContainer = useRef(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function showMenu() {
    if (!menuIsOpen) {
      menuTimeline.current.add(tl.current, "-=25%")
      menuTimeline.current.play();
      setMenuIsOpen(!menuIsOpen);
    } else {
      menuTimeline.current.reverse();
      setMenuIsOpen(!menuIsOpen);
    }
  }

  const tl = useRef();
  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true })
    tl.current.to(
      ".menu .icon",
      {
        stagger: { amount: 0.3, from: "random" },
        keyframes: [{ scale: 1.1 }, { scale: 1 }],
      },
      "-=.5"
    );
  })

  const menuTimeline = useRef();
  useGSAP(
    () => {
      menuTimeline.current = gsap.timeline({ paused: true });
      menuTimeline.current
        .add(() => {
          menuBtn.current.classList.toggle("active");
          bgBlack.current.classList.toggle("active");
          menuContainer.current.classList.toggle("active");
        })
        .to(
          ".menu .link",
          {
            delay: 0.3,
            autoAlpha: 1,
            stagger: { amount: 0.5 },
            y: 0,
          },
          "-=.5"
        )
    },
    { scope: menuContainer.current }
  );

  useEffect(() => {
    const burger = menuBtn.current;
    const backgroundBlack = bgBlack.current;

    burger.addEventListener("click", showMenu);
    backgroundBlack.addEventListener("click", showMenu);
    return () => {
      burger.removeEventListener("click", showMenu);
      backgroundBlack.removeEventListener("click", showMenu);
    };
  });

  //Animation de l'apparition du boutton Menu au scroll
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(menuBtn.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight - window.innerHeight / 2,
        onLeave: () => {
          gsap.to(menuBtn.current, {
            scale: 1,
            visibility: "visible",
            ease: "power3.out",
            duration: 0.2,
          });
          gsap.to(".stick:first-child", {
            duration: 0.4,
            ease: "power3.out",
            x: 6,
            repeat: 1,
            yoyo: true,
          });
          gsap.to(".stick:last-child", {
            duration: 0.2,
            ease: "power3.out",
            x: -6,
            repeat: 1,
            yoyo: true,
          });
        },
        onEnterBack: () => {
          gsap.to(menuBtn.current, {
            scale: 0,
            ease: "power3.out",
            duration: 0.2,
          });
          menuBtn.current.classList.remove("active");
          bgBlack.current.classList.remove("active");
          menuContainer.current.classList.remove("active");
        },
      },
    });
  });

  return (
    <>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] z-10 invisible">
        <button
          ref={menuBtn}
          className="menuBtn scale-0 visible elt overflow-hidden"
        >
          <span className="hoverElt bg-orange-600"></span>
          <div className="stickContainer">
            <span className="stick translate-y-[2px] active"></span>
            <span className="stick translate-y-[-2px] active"></span>
          </div>
        </button>
        <div className="fullBgBlack" ref={bgBlack}></div>
        <Menu refMenuContainer={menuContainer} />
      </div>
      <Header/>
      <LoaderProvider>
        <Outlet />
      </LoaderProvider>
    </>
  );
}

export default App;
