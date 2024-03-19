import { useEffect, useState } from "react";

export default function useScrollPositon() {
  const [rightPosition, setRightPosition] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    if (window.innerHeight / 4 < document.documentElement.scrollTop) {
      setRightPosition(true);
    } else {
      setRightPosition(false);
    }
  }

  return { rightPosition };
}
