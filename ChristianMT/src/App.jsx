import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  const menuBtn = useRef(null);
  const bgBlack = useRef(null);
  const menuContainer = useRef(null);
  const loaderContainer = useRef();

  function showMenu() {
    menuBtn.current.classList.toggle("active");
    bgBlack.current.classList.toggle("active");
    console.log(menuContainer.current.classList.toggle("active"));
  }

  const { contextSafe } = useGSAP({ scope: loaderContainer.current });

  const handleLoading = contextSafe(() => {
    const timeLoading = gsap.timeline();

    timeLoading
      .to(".loader", {
        keyframes: [
          { scale: 0.2, duration: 0.8, opacity: 1, easeEach: "power3.out" },
          {
            scale: 0.5,
            duration: 0.1,
            backgroundColor: "white",
            easeEach: "power4.in",
          },
        ],
        ease: "none",
      })
      .to(".loaderContainer", {
        delay: 0.1,
        autoAlpha: 0,
        duration: 0.5,
      });
  });
  window.addEventListener("load", handleLoading);

  return (
    <>
      <div
        className="loaderContainer fixed left-0 top-0 flex justify-center items-center w-svw h-svh z-40 bg-white"
        ref={loaderContainer}
      >
        <div className="loader w-24 sm:w-36 h-24 sm:h-36 rounded-full bg-black opacity-4"></div>
      </div>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] z-10">
        <button className="menuBtn autoAlpha" ref={menuBtn} onClick={showMenu}>
          <div className="stickContainer">
            <span className="stick translate-y-[2px] active"></span>
            <span className="stick translate-y-[-2px] active"></span>
          </div>
        </button>
        <div className="fullBgBlack" onClick={showMenu} ref={bgBlack}></div>
        <Menu refMenuContainer={menuContainer} />
      </div>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
