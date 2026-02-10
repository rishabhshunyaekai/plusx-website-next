"use client";

import { useEffect } from "react";

function Animated({ children, animation, easing, duration, ...props }) {
  const aosProps = {
    "data-aos": animation,
    "data-aos-easing": easing || "ease-out",
    "data-aos-duration": duration || 1000,
  };

  // useEffect(() => {
  //   AOS.init({ once, easing, duration, });
  // }, [easing, duration]);

  return (
    <div {...aosProps} {...props}>
      {children}
    </div>
  );
}

export default Animated;



// "use client";
// import { useEffect, useRef, useState } from "react";

// function Animated({ children, animation = "fade", easing = "ease-in", duration = 1000 }) {
//   const ref = useRef(null);
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setShow(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={`
//         transition-all
//         ${easing}
//         duration-[${duration}ms]
//         ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
//       `}
//     >
//       {children}
//     </div>
//   );
// }

// export default Animated;
