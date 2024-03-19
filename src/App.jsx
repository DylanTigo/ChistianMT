import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
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
  }

  const showMenuBtn = useScrollPositon()

  console.log(showMenuBtn);

  return (
    <>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] z-10 invisible">
        <button ref={menuBtn} className="menuBtn scale-50 visible" onClick={showMenu}>
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
