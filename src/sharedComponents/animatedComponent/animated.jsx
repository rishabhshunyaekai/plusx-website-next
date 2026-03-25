"use client";

import { useEffect, useRef, useState } from "react";
import "./animated.css";

function Animated({ children, className = "", animation = "fade", duration = 1000, easing = "ease-out", ...props }) {
  const ref                   = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element  = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.2 }
    );

    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <article ref={ref} className={`animate ${animation} ${visible ? "show" : ""} ${className}`} style={{transitionDuration: `${duration}ms`, transitionTimingFunction: easing, transitionDelay: "000ms" }} {...props}>
      {children}
    </article>
  );
}

export default Animated;