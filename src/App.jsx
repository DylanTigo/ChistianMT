import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(scrollTrigger);

function App() {
  const menuBtn = useRef(null);
  const bgBlack = useRef(null);
  const menuContainer = useRef(null);

  function showMenu() {
    menuBtn.current.classList.toggle("active");
    bgBlack.current.classList.toggle("active");
    console.log(menuContainer.current.classList.toggle("active"));
  }


  useGSAP(() => {
    const TimeLine = gsap.timeline();
    TimeLine.to(menuBtn.current, {
      scale: 1,
      opacity: 100,
      scrollTrigger: {
        trigger: menuBtn.current,
        // markers: true,
        pin: true,
        scrub: true,
        start: "50 +=40",
      },
    });
  });

  return (
    <>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px]">
        <button ref={menuBtn} className="menuBtn scale-0" onClick={showMenu}>
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
