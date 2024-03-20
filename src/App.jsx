import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import useScrollPositon from "./Hooks/useScrollPositon";
gsap.registerPlugin(scrollTrigger);

function App() {
  const menuBtn = useRef(null);
  const bgBlack = useRef(null);
  const menuContainer = useRef(null);

  function showMenu() {
    menuBtn.current.classList.toggle("active");
    bgBlack.current.classList.toggle("active");
    menuContainer.current.classList.toggle("active");
  }
  const { rightPosition } = useScrollPositon();
  // console.log(rightPosition);

  useEffect(() => {
    if (rightPosition) {
      console.log("affiche");
      gsap.to(menuBtn.current, {
        scale: 1,
        visibility: "visible",
        ease: "back.out",
        duration: 0.3,
      });
    } else {
      console.log("supprime");
      gsap.to(menuBtn.current, {
        scale: 0,
        visibility: "hidden",
        ease: "power3.out",
        duration: 0.5,
      });
    }
  }, [rightPosition]);

  return (
    <>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] z-10 invisible">
        <button
          ref={menuBtn}
          className="menuBtn scale-50 invisible"
          onClick={showMenu}
        >
          <span className=""></span>
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
