"use client";

import { useEffect, useRef } from "react";
import "./animated.css";

let observer;

const getObserver = () => {
  if (!observer) {
    observer = new IntersectionObserver( (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "50px" }
    );
  }
  return observer;
};

function Animated({ children, className = "", animation = "fade", duration = 600, easing = "ease-out", ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const obs = getObserver();
    obs.observe(element);

    return () => obs.unobserve(element);
  }, []);

  return (
    <article ref={ref} className={`animate ${animation} ${className}`} style={{ "--duration": `${duration}ms`, "--easing": easing }} {...props}>
      {children}
    </article>
  );
}

export default Animated;
