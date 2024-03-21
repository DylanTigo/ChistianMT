import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  const menuBtn = useRef(null);
  const bgBlack = useRef(null);
  const menuContainer = useRef(null);

  function showMenu() {
    menuBtn.current.classList.toggle("active");
    bgBlack.current.classList.toggle("active");
    menuContainer.current.classList.toggle("active");
  }
  useLayoutEffect(() => {
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
            opacity: 1,
            ease: "power3.out",
            duration: 0.2,
          });
        },
        onEnterBack: () => {
          gsap.to(menuBtn.current, {
            scale: 0,
            ease: "power3.out",
            duration: 0.2,
          });
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
          onClick={showMenu}
        >
          <span className="hoverElt bg-red-500"></span>
          <div className="stickContainer">
            <span className="stick translate-y-[2px] active"></span>
            <span className="stick translate-y-[-2px] active"></span>
          </div>
        </button>
        <div className="fullBgBlack" onClick={showMenu} ref={bgBlack}></div>
        <Menu refMenuContainer={menuContainer} />
      </div>
      <Header />
      <Outlet timeline={false} />
    </>
  );
}

export default App;
