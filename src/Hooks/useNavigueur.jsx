import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";

export const useNavigueur = () => {
  
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [navigueur, setNavigueur] = useState();
  useEffect(() => {
    const offsetY = window.innerHeight * 0.2;
    gsap.registerPlugin(ScrollToPlugin);
    gsap.to(window, { duration: 1, scrollTo: { y: navigueur, offsetY } });
  }, [navigueur]);

  function handleClick(e) {
    e.preventDefault();
    const hrefValue = e.currentTarget.getAttribute("href");
    if (pathname !== "/") {
      navigate("/");
    }
    setNavigueur(hrefValue);
  }

  return { handleClick, setNavigueur };
};
