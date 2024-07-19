import { useGSAP } from "@gsap/react";
import { useRef } from "react"
import gsap from "gsap"


export default function useAnimeLoader({home, loaderContainer}) {

  //TimeLine pour l'animation du Lodaer
  const timelineLoader = useRef(null)

  useGSAP(
    () => {
      timelineLoader.current = gsap.timeline({paused: true})
      const decalage = window.innerWidth > 640 ? 200 : 100;
      timelineLoader.current
        .from(".item1", {
          duration: 2.5,
          keyframes: [
            { x: 0, ease: "power2.in" },
            { x: `${decalage}px + 1vw`, ease: "power4.out" },
          ],
        })
        .from(
          ".item2",
          {
            duration: 2.5,
            keyframes: [
              { x: 0, ease: "power2.in" },
              { x: `-${decalage}px - 1vw`, ease: "power4.out" },
            ],
          },
          "<"
        )
        .to(
          ".welcome",
          {
            y: 0,
          },
          "-=1"
        )
        .from(".item1", {
          keyframes: [{ x: 10, ease: "power2.in" }],
        })
        .from(
          ".item2",
          {
            keyframes: [{ x: -10, ease: "power2.in" }],
          },
          "<"
        )
        .to(
          ".welcome",
          {
            y: "-100%",
            opacity: 0,
            duration: 0.2,
            delay: 0.3,
          },
          "<"
        )
        .to(".item1", {
          x: -5,
          duration: 0.3,
        })
        .to(
          ".item2",
          {
            x: 5,
            duration: 0.3,
          },
          "<"
        )
    },
    { scope: loaderContainer }
  );

  //TimeLine pour l'animation de l'accueil
  const timelineHome = useRef(null)
  useGSAP(
    () => {
      timelineHome.current = gsap.timeline({paused: true})
      timelineHome.current
        .to("h1", {
          delay: 0.7,
          autoAlpha: 1,
          y: 0,
        })
        .to(
          "#accueil p",
          {
            delay: 0.2,
            autoAlpha: 1,
            y: 0,
          },
          "-=.5"
        )
        .to(
          "#accueil .btn",
          {
            delay: 0.2,
            autoAlpha: 1,
            stagger: 0.1,
            y: 0,
          },
          "-=.5"
        )
        .to(
          "#accueil .imgPrincipale",
          {
            delay: 1,
            opacity: 1,
            duration: 0.5,
            ease: "power1.out",
          },
          "0"
        )
        .to(
          "#accueil .icon",
          {
            stagger: 0.1,
            keyframes: [{ scale: 1.1 }, { scale: 1 }],
          },
          "<"
        );
    },
    {scope: home}
  );
  return { timelineLoader, timelineHome }
}
