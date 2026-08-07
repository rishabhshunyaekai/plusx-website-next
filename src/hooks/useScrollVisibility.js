"use client";

import { useEffect, useRef } from "react";

function useScrollVisibility(className, trigger = 0.2) {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      const triggerPoint = window.innerHeight * trigger;
      elementRef.current.classList.toggle(className, window.scrollY >= triggerPoint);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true});

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [className, trigger]);

  return elementRef;
}

export default useScrollVisibility;
