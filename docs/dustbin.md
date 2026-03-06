<!-- -------------------------------------------------------------Removed Code----------------------------------------------------------------------------------------->

<!-- 
1. index.html

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap" />
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap" rel="stylesheet" media="print" onload="this.media='all'" />
<noscript>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap" rel="stylesheet" />
</noscript>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap" rel="stylesheet" />

Google Analytics
<script async src="https://www.googletagmanager.com/gtag/js?id=G-SN99F8K5TS"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-SN99F8K5TS');
</script> -->
<!-- Google Analytics

Facebook Pixel
<script async src="https://connect.facebook.net/en_US/fbevents.js"></script>
<script>
  !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '531859512586757');
    fbq('track', 'PageView');
</script>
Facebook Pixel

<noscript>
  <img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=531859512586757&ev=PageView&noscript=1" alt="fb-pixel"/>
</noscript> -->
<!-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------->


<!-- Animation (npm install aos --save) -->
<!-- 
1. App.jsx
import AOS from "aos";
useEffect(() => {
  AOS.init({ duration: 1200, easing: "ease-in", once: true });
}, []);

2. index.jsx
import 'aos/dist/aos.css';

3. Animated.jsx
function Animated({ children, animation, easing, duration, ...props }) {
  // useEffect(() => {
  //   AOS.refresh();
  // }, []);

  const aosProps = {
    "data-aos": animation,
    "data-aos-easing": easing || "ease-out",
    "data-aos-duration": duration || 1000,
  };

  return (
    <div {...aosProps} {...props}>
      {children}
    </div>
  );
}

export default Animated; -->
<!-- // import { useEffect, useRef, useState } from "react";

function Animated({ children, className = "", animation = "fade", easing = "ease-out", duration = 1000, delay = 0, ...props }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
   const element = ref.current;
   if (!element) return;

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    },
    { threshold: 0.2 }
  );
  observer.observe(element);

   return () => observer.disconnect();
 }, []);

 const animationClass = animation === "fade" || animation === "fade-up" ? "fade-up" : animation;

  return (
    <div ref={ref} {...props} className={`${animationClass} ${isVisible ? "visible" : ""} ${className}`} 
      style={{ transitionTimingFunction: easing, transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms`}}>
      {children}
    </div>
  );
}

export default Animated; -->
<!-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------->

<!-- Uninstall Libraries -->
<!-- 
1. reduxjs/toolkit
2. aos
3. react-redux
4. react-toastify
5. sweetalert2
6. sweetalert2-react-content
7. react-ga4 
8. react-otp-input
9. @mui/material @emotion/react @emotion/styled @mui/icons-material
10. @testing-library/jest-dom @testing-library/react @testing-library/user-event
-->
<!-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------->

<!-- Remove Drawer (react-modern-drawer) -->
<!-- 1. Header.jsx
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import "../../../assets/css/main.css";
<Drawer open={isDrawerOpen} onClose={toggleDrawer} direction="left">
  <ul className={style.navMenuMobile}>
    <li><Link to="/about-us">About</Link></li><hr />
    <li><Link to="/commercial-ev-charging-solutions">PlusX for Business</Link></li><hr />
    <li><Link to="/mobility-solution">Mobility Solution</Link></li><hr />
    <li><Link to="/ev-car-insurance">EV Insurance</Link></li><hr />
    <li><Link to="/sustainability">Sustainability</Link></li><hr />
    <li><Link to="/contact-us">Contact</Link></li><hr />
    <li><Link to="#" onClick={redirectToFooter}>Download App</Link></li><hr />
    <li><Link to="/login">Guest Login</Link></li><hr />
  </ul>
</Drawer>

2. main.css
/* Header- for Mobile humburger menu */
.drawer {
  background: #f6f5f5 !important;
  color: #000 !important;
  top: 0 !important;
  padding-top: 18px !important;
  bottom: 0 !important;
  z-index: 998 !important;
  background: rgba(0, 0, 0, 0.8) !important;
  width: 260px !important;
  overflow-y: auto !important;
  transition: 0.4s !important;
  margin: 0px;
  padding: 0px;
} -->
<!-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------->
<!-- 1. Package.json (legacy brower list)
"browserslist": {
  "production": [
    ">0.2%",
    "not dead",
    "not op_mini all"
  ],
  "development": [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version"
  ]
}, -->

<!-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------->
<!-- Custom Carousal comp tried
1. Carausal.module.css
.carouselContainer {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carouselTrack {
  display: flex;
  will-change: transform;
}

.carouselSlide {
  width: 100%;
  flex-shrink: 0;
}

.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  font-size: 2rem;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  cursor: pointer;
  padding: 8px 14px;
  border-radius: 50%;
}

.prev { left: 10px; }
.next { right: 10px; }

2. Carousal.jsx
import { useState, useRef, useEffect, Children } from "react";
import styles from "./Carousal.module.css";

function Carousel({ children, autoPlay = true, interval = 3000, slidesToShow = 3, responsive = [] }) {
  const childArray = Children.toArray(children);
  const total = childArray.length;

  const [index, setIndex] = useState(0);
  const [currentSlides, setCurrentSlides] = useState(slidesToShow);

  // Handle responsive breakpoints
  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      let matched = slidesToShow;
      responsive.forEach(bp => {
        if (width <= bp.breakpoint) { matched = bp.slidesToShow; }
      });
      setCurrentSlides(matched);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);

    return () => window.removeEventListener("resize", updateSlides);
  }, [slidesToShow, responsive]);

  // AutoPlay
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, total]);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselTrack} style={{
          width: `${(100 / currentSlides) * total}%`,
          transform: `translateX(-${(index * 100) / total}%)`,
          transition: "transform 0.5s ease",
        }}
      >
        {childArray.map((child, i) => (
          <div key={i} className={styles.carouselSlide} style={{ width: `${100 / total}%` }} >
            {child}
          </div>
        ))}
      </div>

      <button className={styles.prev} onClick={() => setIndex((i) => (i - 1 + total) % total)}> ‹ </button>
      <button className={styles.next} onClick={() => setIndex((i) => (i + 1) % total)}> › </button>
    </div>
  );
}

export default Carousel;

3. Testimonial.jsx
import Carousel from "../../sharedComponent/Carousal/Carousal";

<Carousel slidesToShow={3} autoPlay={true} interval={4000}
  responsive={[
    { breakpoint: 1024, slidesToShow: 3 },
    { breakpoint: 991, slidesToShow: 2 },
    { breakpoint: 767, slidesToShow: 1 }
  ]}>
    {testimonialData.map((item, index) => (
      <div key={index} className={style.testimonialItem}>
        <div className={style.testimonialImg}>
          <img src={item.img} alt={item.alt} fetchpriority="high" loading="eager" width={350} height={250}/>
        </div>
        <Link to={item.link}>{item.text}</Link>
      </div>
    ))}
  </Carousel> -->
<!-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------->

<!-- Map not used at charger installation page at address input field

import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';

const googleMapApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const [isModalOpen, setIsModalOpen]                     = useState(false);
const [defaultCenter, setDefaultCenter]                 = useState({ lat: 25.2048, lng: 55.2708 });

function handleModal() {
setIsModalOpen(true);
}

function handleCloseModal() {
setIsModalOpen(false);
}

function handleAddress() {
setIsModalOpen(false);
}

async function handleMapClick(lat, lng) {
    setDefaultCenter({ lat : lat, lng : lng });
    const geocodeRes = await fetch( `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${googleMapApiKey}`
    );
    const data = await geocodeRes.json();
    if (data.results && data.results[0]) {
        setFormData((prev) => ({ ...prev, address: data.results[0].formatted_address }));
    }
};

<div className={style.formGroup}>
    <div className={style.wrapper}>
        <input type="text" className={style.addressInput} placeholder="Address*" name="address" autoComplete="off" value={formData.address} onChange={handleInputChange} />
        <button className={style.map} onClick={handleModal} type="button">
            <IoLocationOutline />
            Map
        </button>
    </div>
    {error.address && ( <span className={style.errorMessage}> {error.address} </span> )}
</div>

<Modal isOpen={isModalOpen} heading= "Address" buttonName="Add" onClose={handleCloseModal} onSubmit={handleAddress}>
    <div className={style.modalContainer}>
        <APIProvider apiKey={googleMapApiKey}>
            <Map style={{width: '100%', height: '300px'}} defaultCenter={defaultCenter} defaultZoom={11} gestureHandling={'greedy'} disableDefaultUI={true} /> // onClick={handleMapClick}
                
            
            <Marker
                position={defaultCenter}
                draggable={true}
                // onDragEnd={(e) => handleMapClick({ detail: { latLng: e.latLng } }) }
                onDragEnd={(e) => {
                    const lat = e.latLng.lat();
                    const lng = e.latLng.lng();
                    handleMapClick(lat, lng )
                }}
            />
        </APIProvider>
    </div>
</Modal> -->
<!-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------->