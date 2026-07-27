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
<!-- Animation.jsx
 function Animated({ children, animation, easing, duration, ...props }) {

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

 <!-- "use client";

import { useEffect, useRef, useState } from "react";
import "./animated.css";

function Animated({ children, className = "", animation = "fade", duration = 1000, easing = "ease-out", ...props }) {
  const ref                   = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element  = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          // observer.unobserve(element);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "50px", }
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

.animate {
  opacity: 0;
  transform: translate3d(0, 20px, 0);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  will-change: opacity, transform;
}

.animate.show {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.fade {
  transform: none;
}

.slide-up {
  transform: translate3d(0, 40px, 0);
}

.slide-left {
  transform: translate3d(40px, 0, 0);
}

.slide-right {
  transform: translate3d(-40px, 0, 0);
}

.zoom-in {
  transform: scale(0.9);
}

.animate.show.fade {
  transform: none;
}

.animate.show.zoom-in {
  transform: scale(1);
}

@media (prefers-reduced-motion: reduce) {
  .animate {
    transition: none;
    transform: none;
    opacity: 1;
  }
} -->
 <!-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------->
<!-- 
 Whatsapp.jsx 

const path = pathname.pathname;

//Code for defining each product name on whatapp chat
if (path.startsWith("/ev-charger-installation-uae/ac-dc-ev-chargers")) {
  const slug        = path.split("/").pop();
  const productName = formatProductName(slug);
  return `Hello! I am interested in ${productName}. Please share more details.`;
}

if (path.startsWith("/ev-charger-installation-uae/ev-accessories")) {
  const slug        = path.split("/").pop();
  const productName = formatProductName(slug);
  return `Hello! I am interested in ${productName}. Please share more details.`;
}

return routeMessages[path] || defaultMessage;

function formatProductName(slug) {
  if (!slug) return "";
  return slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}; -->

<!-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------->

<!-- CTA Button 

"use client";
import {
  appRedirectionHandler,
  chargerInstallationPageRedirectionHandler,
  evChargersPageRedirectionHandler,
  portablePageRedirectionHandler,
  roadsidePageRedirectionHandler,
  scrollToBottomWithRedirectionHandler,
  scrollToSpecificSectionViaID,
} from "@/utils/helper";

function CTAButton({ className, text, handler }) {

  const handleClick = () => {
    if (handler === "appRedirect")                    appRedirectionHandler();
    if (handler === "chargerInstallationPage")        chargerInstallationPageRedirectionHandler();
    if (handler === "evChargersPage")                 evChargersPageRedirectionHandler();
    if (handler === "portablePage")                   portablePageRedirectionHandler();
    if (handler === "roadsidePage")                   roadsidePageRedirectionHandler();
    if (handler === "scrollToBottomWithRedirection")  scrollToBottomWithRedirectionHandler();
    if (handler === "scrollToFooter")                 scrollToSpecificSectionViaID("footer");
    if (handler === "scrollToCarService")             scrollToSpecificSectionViaID("carServices");
    if (handler === "scrollToCarServiceForm")         scrollToSpecificSectionViaID("getAQuoteForm");
  };

  return (
    <button className={className} onClick={handleClick}>
      {text || "Submit"}
    </button>
  );
}

export default CTAButton; -->

<!-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------->

<!-- Helper.js
 export function appRedirectionHandler() {

  const userAgent = navigator.userAgent || "";
  const isIOS     = /iPad|iPhone|iPod/.test(userAgent);
  const isAndroid = /Android/.test(userAgent);

  if (document.visibilityState === "hidden") return;
  if (isIOS) {
    window.location.replace(APPLE_STORE_URL);
  } else if (isAndroid) {
    window.location.replace(PLAY_STORE_URL);
  } else {
    window.location.replace("https://plusxelectric.com/");
  }
  
}

export function portablePageRedirectionHandler() {

  const userAgent = navigator.userAgent || "";
  const isIOS     = /iPad|iPhone|iPod/.test(userAgent);
  const isAndroid = /Android/.test(userAgent);

  if (document.visibilityState === "hidden") return;
  if (isIOS) {
    window.location.replace(APPLE_STORE_URL);
  } else if (isAndroid) {
    window.location.replace(PLAY_STORE_URL);
  } else {
    window.location.replace("https://plusxelectric.com/mobile-ev-charging-dubai");
  }
}

export function chargerInstallationPageRedirectionHandler() {

  const userAgent = navigator.userAgent || "";
  const isIOS     = /iPad|iPhone|iPod/.test(userAgent);
  const isAndroid = /Android/.test(userAgent);

  if (document.visibilityState === "hidden") return;
  if (isIOS) {
    window.location.replace(APPLE_STORE_URL);
  } else if (isAndroid) {
    window.location.replace(PLAY_STORE_URL);
  } else {
    window.location.replace("https://plusxelectric.com/ev-charger-installation-uae");
  }
}

export function roadsidePageRedirectionHandler() {

  const userAgent = navigator.userAgent || "";
  const isIOS     = /iPad|iPhone|iPod/.test(userAgent);
  const isAndroid = /Android/.test(userAgent);

  if (document.visibilityState === "hidden") return;
  if (isIOS) {
    window.location.replace(APPLE_STORE_URL);
  } else if (isAndroid) {
    window.location.replace(PLAY_STORE_URL);
  } else {
    window.location.replace("https://plusxelectric.com/ev-roadside-assistance-service");
  }
}

export function evChargersPageRedirectionHandler() {

  const userAgent = navigator.userAgent || "";
  const isIOS     = /iPad|iPhone|iPod/.test(userAgent);
  const isAndroid = /Android/.test(userAgent);

  if (document.visibilityState === "hidden") return;
  if (isIOS) {
    window.location.replace(APPLE_STORE_URL);
  } else if (isAndroid) {
    window.location.replace(PLAY_STORE_URL);
  } else {
    window.location.replace("https://plusxelectric.com/ev-charger-installation-uae/ac-dc-ev-chargers");
  }
} -->

<!-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------->
<!-- 
Create new page.jsx inside (app/(main)/(services)/complete-ev-care-dubai/page.jsx)

import HeroImage      from "@/components/evCareDubai/heroImage/heroImage";
import Values         from "@/components/evCareDubai/values/values";
import CTA            from "@/components/evCareDubai/cta/cta";
import BookingSteps   from "@/components/evCareDubai/bookingSteps/bookingSteps";
import Services       from "@/components/evCareDubai/services/services";
import OtherServices  from "@/components/evCareDubai/otherservices/otherservices";
import ProtectCar     from "@/components/evCareDubai/protectCar/protectCar";
import Needs          from "@/components/evCareDubai/needs/needs";
import Form           from "@/components/evCareDubai/form/form";

export const metadata = {
  title         : "Complete EV Care in Dubai | Charging, Service & Roadside Assistance",
  description   : "Get complete EV care in Dubai with charging, maintenance, and roadside assistance. Book reliable electric car service with fast support and doorstep convenience.",
  keywords      : ["plusx", "plusxelectric", "plusx electric"],
  alternates    : {
      canonical : "/complete-ev-care-dubai",
    },
};

function EVCareDubaiPage() {
  return (
    <>
      <HeroImage />
      <Values />
      <BookingSteps />
      <Services />
      <ProtectCar />
      <OtherServices />
      <CTA />
      <Needs />
      <Form />
    </>
  )
}

export default EVCareDubaiPage; 
-->
<!-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------->
<!-- 
MetaData syntax

export const metadata = {
  title         : "PlusX Electric — EV Charging Services Dubai | All-in-One EV App",
  description   : "Fast EV charging in Dubai. PlusX Electric offers emergency, doorstep, and home charger installation for EV cars at home, office, or villa.",
  keywords      : ["plusx", "plusxelectric", "plusx electric", "portable ev charger", "on demand ev charging service in dubai", "doorstep ev charging service", "fast electric chargers near me", 
                   "ev roadside assistance service", "emergency roadside charging", "buy or renew ev insurance in minutes", "find public ev charging station", "ev charger share service"],
  metadataBase  : new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://plusxelectric.com"),
  alternates    : {
    canonical   : "/",
  },
  openGraph : {
    title       : "Emergency & Doorstep EV Charging Dubai | PlusX Electric",
    description : "",
    siteName    : "PlusX Electric",
    locale      : "en_US",
    type        : "website",
    images      : [
    {
      url       : "/images/homepage/desktop-banner.webp",
      width     : 1200,
      height    : 630,
      alt       : "PlusX Electric EV Charging",
    },
  ],
  },
  twitter       : {
    card        : "summary_large_image",
    title       : "Emergency & Doorstep EV Charging Dubai | PlusX Electric",
    description : "",
    creator     : "https://plusxelectric.com",
    images      : [image],
  },
  robots        : {
    index       : true,
    follow      : true,
    googleBot   : {
      index     : true,
      follow    : true,
      "max-snippet"       : -1,
      "max-image-preview" : "large",
      "max-video-preview" : -1,
    },
  },
}; -->

<!-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------->
<!-- 
Embla carousal for blogs  (library : - embla-carousel, embla-carousel-auto-scroll, embla-carousel-react)
Testimonial.jsx

"use client";

import Link               from "next/link";
import Image              from "next/image";
import styles             from "./testimonial.module.css";
import SecondaryHeading   from "@/sharedComponents/heading/secondaryHeading";
import { testimonials }   from "@/data/testimonials";
import useEmblaCarousel   from "embla-carousel-react";
import AutoScroll         from "embla-carousel-auto-scroll";
import { useAutoScroll }  from "@/hooks/useAutoScroll";
import { PrevButton, NextButton, usePrevNextButtons } from "./emblaButton";

function Testimonial() {
  const options = { loop: true };

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true }),
  ]);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
  const { onAutoScrollButtonClick } = useAutoScroll(emblaApi);
  // const { autoScrollIsPlaying, toggleAutoScroll, onAutoScrollButtonClick } = useAutoScroll(emblaApi);

  return (
    <section className={styles.section}>
      <div className="container">
        <SecondaryHeading title={"Explore Our EV Charging Blogs"} />

        <div className={styles.embla}>
          <div className={styles.embla__viewport} ref={emblaRef}>
            <div className={styles.embla__container}>
              {testimonials.map((item) => (
                <div key={item.slug} className={styles.embla__slide}>
                  <div className={styles.card}>
                    <Image src={item.image} alt={item.alt} width={350} height={262} className={styles.image} />
                    <Link href={`/${item.slug}`} className={styles.title}>{item.title}</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.controls}>
            <PrevButton className={styles.playBtn} disabled={prevBtnDisabled} onClick={() => onAutoScrollButtonClick(onPrevButtonClick)}/>
            <NextButton className={styles.playBtn} disabled={nextBtnDisabled} onClick={() => onAutoScrollButtonClick(onNextButtonClick)} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;

// {/* Inside controls class div
// <button onClick={toggleAutoScroll} className={styles.playBtn}>
//   {autoScrollIsPlaying ? "Stop" : "Start"} 
// </button> */}


Testimonial.module.css
.embla {
  position: relative;
  padding: 0px 0px 50px;
}

.embla__viewport {
  overflow: hidden;
  padding: 0px 0px 10px;
}

.embla__container {
  display: flex;
}

.embla__slide {
  flex: 0 0 350px;
  display: flex;
  margin-right: 20px;
}

.card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px var(--color-shadow);
  background: var(--color-secondary);
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 100%;
}

.image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.title {
  display: block;
  padding: 10px 15px 25px;
  font-weight: 500;
  text-decoration: none;
  color: var(--color-primary);
  flex: 1;
}

.controls {
  position: absolute;
  top: 30%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
}

.playBtn {
  padding: 6px 5px;
  cursor: pointer;
}

testimonial/emblaButton.jsx
import React, { useCallback, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = ({ disabled, ...props }) => (
  <button disabled={disabled} {...props}>
    <IoIosArrowBack style={{ color: "#fff" }} size={24} />
  </button>
);

export const NextButton = ({ disabled, ...props }) => (
  <button disabled={disabled} {...props}>
    <IoIosArrowForward style={{ color: "#fff" }} size={24} />
  </button>
);

useAutoScroll.js
import { useCallback, useEffect, useState } from "react";

export const useAutoScroll = (emblaApi) => {
  const [autoScrollIsPlaying, setAutoScrollIsPlaying] = useState(false);

  const onAutoScrollButtonClick = useCallback(
    (callback) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll;
      if (!autoScroll) return;

      autoScroll.stop();
      callback();
    },
    [emblaApi]
  );

  const toggleAutoScroll = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    autoScroll.isPlaying() ? autoScroll.stop() : autoScroll.play();
  }, [emblaApi]);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    setAutoScrollIsPlaying(autoScroll.isPlaying());

    emblaApi
      .on("autoscroll:play", () => setAutoScrollIsPlaying(true))
      .on("autoscroll:stop", () => setAutoScrollIsPlaying(false))
      .on("reinit", () =>
        setAutoScrollIsPlaying(autoScroll.isPlaying())
      );
  }, [emblaApi]);

  return {
    autoScrollIsPlaying, toggleAutoScroll, onAutoScrollButtonClick,
  };
}; -->

<!-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------->
<!-- 
llms.txt
- EV Roadside Assistance: https://plusxelectric.com/ev-roadside-assistance-service-dubai
- "Low/empty battery on the road" → https://plusxelectric.com/ev-roadside-assistance-service-dubai

file name : ev-roadside-assistance-service-dubai

import HeroImage    from "@/components/roadsideAssistanceService/heroImage/heroImage";
import Breadcrumbs  from "@/sharedComponents/breadCumb/breadCrumb";
import Intro        from "@/components/roadsideAssistanceService/rsaIntro/rsaIntro";
import Features     from "@/components/roadsideAssistanceService/feature/feature";
import Intro2       from "@/components/roadsideAssistanceService/rsaIntro/rsaIntro2";
import Scenarios    from "@/components/roadsideAssistanceService/scenarios/scenarios";
import BookingSteps from "@/components/roadsideAssistanceService/bookingSteps/bookingSteps";
import Intro3       from "@/components/roadsideAssistanceService/rsaIntro/rsaIntro3";
import WhyChoose    from "@/components/roadsideAssistanceService/whyChoose/whyChoose";
import CTA          from "@/components/roadsideAssistanceService/cta/cta";
import Brands       from "@/components/roadsideAssistanceService/brands/brands";
import Offers       from "@/components/homepage/offers/offers";
import DownloadApp  from "@/sharedComponents/downloadApp/downloadApp";
import FAQ          from "@/components/roadsideAssistanceService/rsaFAQ/rsaFAQ";
import Testimonials from "@/components/roadsideAssistanceService/testimonials/testimonials";

const BASE_URL        = process.env.NEXT_PUBLIC_BASE_URL;
export const metadata = {
  title         : "EV Breakdown Assistance in Dubai | 24/7 Rescue | PlusX Electric",
  description   : "EV broke down in Dubai? PlusX delivers 10 kWh on-site charging & 12V jump-start in 60 min. No towing needed. From AED 185. 1000+ EVs rescued. 24/7.",
  // keywords      : ["plusx", "plusxelectric", "plusx electric", "EV Roadside Assistance service", "On-demand EV roadside assistance service", "emergency ev charging service in dubai", "emergency ev roadside assistance"],
  alternates    : {
      canonical : `${BASE_URL}/ev-breakdown-assistance`,
      languages: {
        "en-AE": `${BASE_URL}/ev-breakdown-assistance`,
      },
   },
  openGraph     : {
    title       : "EV Breakdown Assistance in Dubai | On-Site Charging & 12V Jump-Start | PlusX Electric",
    description : "Stranded EV in Dubai? PlusX Electric delivers 10 kWh on-site charging and 12V jump-start within 60 minutes. No towing. From AED 185. Available 24/7.",
    url         : `${BASE_URL}/ev-breakdown-assistance`,
    type        : "website",
    siteName    : "PlusX Electric",
    locale      : "en_AE",
    images      : [
      {
        url      : "https://plusxelectric.com/PlusX-Electric-EV-charging-services-Dubai.jpeg",
        secureUrl: "https://plusxelectric.com/PlusX-Electric-EV-charging-services-Dubai.jpeg",
        type     : "image/jpeg",
        width    : 1200,
        height   : 630,
        alt      : "PlusX Electric mobile van providing EV breakdown assistance in Dubai",
      },
    ],
  },
  twitter       : {
    card        : "summary_large_image",
    site        : "@plusxelectric",
    title       : "EV Breakdown Assistance in Dubai | On-Site Charging & 12V Jump-Start | PlusX Electric",
    description : "Stranded EV in Dubai? PlusX Electric delivers 10 kWh on-site charging and 12V jump-start within 60 minutes. No towing. From AED 185. Available 24/7.",
    images      : [
      {
        url : "https://plusxelectric.com/PlusX-Electric-EV-charging-services-Dubai.jpeg",
        alt : "PlusX Electric mobile van providing EV breakdown assistance in Dubai",
      },
    ],
  },
};

const structuredData = {
  "@context"      : "https://schema.org",
  "@type"         : "Service",
  "@id"           : "https://plusxelectric.com/ev-breakdown-assistance#service",
  "name"          : "EV Breakdown Assistance in Dubai",
  "alternateName" : [ "EV Roadside Assistance Dubai", "Electric Vehicle Rescue Dubai", "EV Emergency Service Dubai" ],
  "description"   : "24/7 EV breakdown assistance in Dubai with on-site mobile charging and 12V jump-start service. PlusX Electric has rescued 1000+ electric vehicles across Dubai with a typical response time of 60 minutes. No unnecessary towing — we bring the charge to you.",
  "url"           : `${BASE_URL}/ev-breakdown-assistance`,
  "serviceType"   : "Electric Vehicle Breakdown Assistance",
  "category"      : "Automotive Emergency Service",
  "provider"      : {
    "@type"       : "Organization",
    "@id"         : "https://plusxelectric.com/#organization",
    "name"        : "PlusX Electric",
    "legalName"   : "Plus Energy Electric Vehicles Charging Stations LLC",
    "url"         : `${BASE_URL}/`,
    "logo"        : "https://plusxelectric.com/logo-icon.svg",
    "image"       : "https://plusxelectric.com/images/plusx-electric-ev-rescue.jpg",
    "telephone"   : "+971543061473",
    "email"       : "admin@plusxelectric.com",
    "address": {
      "@type"           : "PostalAddress",
      "streetAddress"   : "D55-PBU, Dubai Production City",
      "addressLocality" : "Dubai",
      "addressRegion"   : "Dubai",
      "addressCountry"  : "AE"
    },
    "sameAs": [
      "https://www.facebook.com/people/PlusX-Electric/61558739985983/",
      "https://www.instagram.com/plusx_electric/",
      "https://www.linkedin.com/company/plusxelectric/",
      "https://x.com/plusxelectric"
    ]
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Dubai",
      "containedInPlace": {
        "@type": "Country",
        "name": "United Arab Emirates"
      }
    },
    {
      "@type": "Place",
      "name": "Downtown Dubai"
    },
    {
      "@type": "Place",
      "name": "Business Bay"
    },
    {
      "@type": "Place",
      "name": "Dubai Marina"
    },
    {
      "@type": "Place",
      "name": "Palm Jumeirah"
    },
    {
      "@type": "Place",
      "name": "JLT"
    },
    {
      "@type": "Place",
      "name": "Jumeirah Beach Residence"
    },
    {
      "@type": "Place",
      "name": "DIFC"
    },
    {
      "@type": "Place",
      "name": "Al Barsha"
    },
    {
      "@type": "Place",
      "name": "Dubai Hills"
    },
    {
      "@type": "Place",
      "name": "Arabian Ranches"
    },
    {
      "@type": "Place",
      "name": "Dubai South"
    },
    {
      "@type": "Place",
      "name": "Deira"
    },
    {
      "@type": "Place",
      "name": "Bur Dubai"
    }
  ],
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": `${BASE_URL}/ev-breakdown-assistance`,
    "servicePhone": {
      "@type": "ContactPoint",
      "telephone": "+971543061473",
      "contactType": "emergency",
      "availableLanguage": ["English", "Arabic"],
      "areaServed": "AE"
    },
    "availableLanguage": ["English", "Arabic"]
  },
  "hoursAvailable": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "offers": {
    "@type": "Offer",
    "name": "EV Breakdown Assistance Service",
    "description": "On-site EV charging up to 10 kWh (approximately 50 km of range), 12V battery jump-start service, and emergency EV rescue across Dubai. Final price varies based on time of service, location, and service requirements.",
    "priceCurrency": "AED",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "AED",
      "minPrice": "185",
      "valueAddedTaxIncluded": false,
      "description": "Starting from AED 185 + VAT. Final price confirmed in the PlusX Electric app before dispatch."
    },
    "availability": "https://schema.org/InStock",
    "areaServed": {
      "@type": "City",
      "name": "Dubai"
    },
    "url": "https://plusxelectric.com/ev-breakdown-assistance",
    "validFrom": "2025-01-01"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "EV Breakdown Assistance Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "On-Site EV Charging",
          "description": "Mobile EV charging unit delivers up to 10 kWh directly to your stranded electric vehicle, providing approximately 50 km of range to reach the nearest public charging station or home."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "12V Battery Jump-Start",
          "description": "Jump-start service for EVs with a dead 12V auxiliary battery — the most common cause of EV breakdowns."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency EV Rescue",
          "description": "24/7 emergency response for electric vehicles stranded anywhere in Dubai, with typical arrival within 60 minutes."
        }
      }
    ]
  },
  "termsOfService": "https://plusxelectric.com/terms-and-conditions",
  "slogan": "We bring the charge to you"
}

const breadCrumbList = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": `${BASE_URL}/`,
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "EV Breakdown Assistance",
      "item": `${BASE_URL}/ev-breakdown-assistance`,
    }
  ]
}

function EVRoadsideAssistancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbList) }} />
      <HeroImage />
      <Breadcrumbs />
      <Intro />
      <Scenarios />
      <Features />
      <Intro3 />
      <BookingSteps />
      <WhyChoose />
      <Testimonials />
      <Brands />
      <Offers />
      <Intro2 />
      {/* <CTA /> */}
      <DownloadApp />
      <FAQ />
    </>
  )
}

export default EVRoadsideAssistancePage; -->

<!-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------->

<!-- llms.txt (remove unused url)
- Mobility Solution: https://plusxelectric.com/mobility-solution -->

<!-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------->