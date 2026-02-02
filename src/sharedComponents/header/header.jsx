"use client";

import { useState, useEffect }        from "react";
import Link                           from "next/link";
import Image                          from "next/image";
import style                          from "./header.module.css";

import { IoMdMenu }                   from "react-icons/io";
import { IoMdClose }                  from "react-icons/io";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

import CompanyLogo                    from "@/sharedComponents/companyLogo/companyLogo.jsx";
import Drawer                         from "./drawer";
import { appRedirectionHandler }      from "@/utils/helper.js";

import QR                             from "@/assets/images/homepage/qr-code.svg";
import AppStore                       from "@/assets/images/homepage/app-store.svg";
import PlayStore                      from "@/assets/images/homepage/play-store.svg";

import Icon1                          from "@/assets/images/homepage/navbar-icons/portable-charger.svg";
import Icon2                          from "@/assets/images/homepage/navbar-icons/pickup-dropoff.svg";
import Icon3                          from "@/assets/images/homepage/navbar-icons/installation.svg";
import Icon4                          from "@/assets/images/homepage/navbar-icons/ev-charger-installation.svg";
import Icon5                          from "@/assets/images/homepage/navbar-icons/ev-roadside-assistance.svg";
import Icon6                          from "@/assets/images/homepage/navbar-icons/ev-charge-share.svg";

import about                          from "@/assets/images/homepage/navbar-icons/about.svg";
import contact                        from "@/assets/images/homepage/navbar-icons/contact.svg";
import sustainability                 from "@/assets/images/homepage/navbar-icons/sustainability.svg";


function Header() {
  const [isDrawerOpen, setIsDrawerOpen]             = useState(false);
  const [isDisplayHamburger, setIsDisplayHamburger] = useState(false);
  const [isDisplayQR, setIsDisplayQR]               = useState(false);
  const [isNavbarVisible, setIsNavbarVisible]       = useState(false);
  const [isOptionVisible, setIsOptionVisible]       = useState(false);
  const [isScrolled, setIsScrolled]                 = useState(false);

  const plusXOptions = [
    { label: "About",           path: "/about-us" },
    { label: "Sustainability",  path: "/sustainability" },
    { label: "Contact",         path: "/contact-us" },
  ]

  const chargingSolutionsOptions = [
    { label: "Portable Charger",        path: "/doorstep-ev-charging" },
    { label: "Pick & Drop Off",         path: "/ev-pickup-dropoff-charging-service" },
    { label: "Find Public Charger",     path: "/public-ev-charging-stations" },
    { label: "EV Charger Installation", path: "/ev-chargers" },
    { label: "EV Roadside Assistance",  path: "/ev-roadside-assistance-service" },
    { label: "EV Charge Share",         path: "/share-private-ev-charger" },
  ]

  function handleScroll() {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  useEffect(() => {
    const preloadQRImage = new window.Image();
    preloadQRImage.src = QR;

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toggleDrawer() {
    setIsDrawerOpen((prevState) => !prevState);
    setIsDisplayHamburger((prevState) => !prevState);
  }

  return (
    <header className={`${style.header}  ${isScrolled ? style.headerScrolled : ""}`}>
      <div className={`container ${style.resizableContainer}`}>
        <div className={style.headerWrap}>
          <div id={style.logo}>
            <Link href="/"><CompanyLogo /></Link>
          </div>
          <main className={`${style.nav}`}>
            <nav id={`${style.navMenuContainer} mt-2`}>
              <ul className={`${style.navMenu}`}>
                <li style={{ position: "relative" }} onMouseEnter={() => setIsOptionVisible(true)} onMouseLeave={() => setIsOptionVisible(false)}>
                  <Link href="#">PlusX</Link>
                  
                  {isOptionVisible && (
                    <div className={style.invisibleContainerOptions}>
                      <div className={style.navOptionsBar}>
                        <div className={style.navOptionsContainer}>
                          <Link href="/about-us" className={style.productIcons}>
                            <div className={style.icon}>
                              <Image src={about} alt="public-charger" width={50} height={50} priority/>
                            </div>
                            <p>About</p>
                          </Link>
                          <Link href="/sustainability" className={style.productIcons}>
                            <div className={style.icon}>
                              <Image src={sustainability} alt="pick-drop" width={50} height={50} priority/>
                            </div>
                            <p>Sustainability</p>
                          </Link>
                          <Link href="/contact-us" className={style.productIcons}>
                            <div className={style.icon}>
                              <Image src={contact} alt="leasing" width={50} height={50} priority/>
                            </div>
                            <p>Contact</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
                <li style={{ position: "relative" }} onMouseEnter={() => setIsNavbarVisible(true)} onMouseLeave={() => setIsNavbarVisible(false)}>
                  <Link href="#">Charging Solution</Link>
                  
                  {isNavbarVisible && (
                    <div className={style.invisibleContainer}>
                      <div className={style.navBar}>
                        <div className={style.navContainer}>
                          <Link href="/doorstep-ev-charging" className={style.productIcons}>
                            <div className={style.icon}>
                              <Image src={Icon1} alt="public-charger" width={50} height={50} priority/>
                            </div>
                            <p>Portable <br className={style.navBR} /> Charger</p>
                          </Link>
                          <Link href="/ev-pickup-dropoff-charging-service" className={style.productIcons}>
                            <div className={style.icon}>
                              <Image src={Icon2} alt="pick-drop" width={50} height={50} priority/>
                            </div>
                            <p>Pickup & <br className={style.navBR} /> Dropoff</p>
                          </Link>
                          <Link href="/public-ev-charging-stations" className={style.productIcons}>
                            <div className={style.icon}>
                              <Image src={Icon4} alt="leasing" width={50} height={50} priority/>
                            </div>
                            <p>Find Public <br className={style.navBR} /> Charger</p>
                          </Link>
                          <Link href="/ev-chargers" className={style.productIcons}>
                            <div className={style.icon}>
                              <Image src={Icon3} alt="bike-hire" width={50} height={50} priority/>
                            </div>
                            <p>EV Charger <br className={style.navBR} /> Installation</p>
                          </Link>
                          <Link href="/ev-roadside-assistance-service" className={style.productIcons}>
                            <div className={style.icon}>
                              <Image src={Icon5} alt="installation" width={50} height={50} priority/>
                            </div>
                            <p>EV Roadside <br className={style.navBR} /> Assistance</p>
                          </Link>
                          <Link href="/share-private-ev-charger" className={style.productIcons}>
                            <div className={style.icon}>
                              <Image src={Icon6} alt="ev charge share" width={50} height={50} priority/>
                            </div>
                            <p>EV Charge <br className={style.navBR} /> Share</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
                <li><Link href="/mobility-solution">Mobility Solution</Link></li>
                <li><Link href="/ev-car-insurance">EV Insurance</Link></li>
                <li><Link href="/commercial-ev-charging-solutions">PlusX for Business</Link></li>
              </ul>
            </nav>
            
            <div className={style.downloadApp} onMouseEnter={() => setIsDisplayQR(true)} onMouseLeave={() => setIsDisplayQR(false)}>
              <Link href="#">DOWNLOAD APP</Link>
              {isDisplayQR && (
                <div className={style.hoverContainer} onMouseEnter={() => setIsDisplayQR(true)} onMouseLeave={() => setIsDisplayQR(false)}>
                  <div className={style.hoverPopup}>
                    <div className={style.qrCode}>
                      <Image src={QR} alt="QR Code" width={80} height={90} priority/>
                    </div>
                    <div className={style.hoverLinks}>
                      <div className={style.hoverText}>Scan to download Plusx Electric app in your phone. Or get it here:</div>
                      <div className={style.hoverImageSection}>
                        <a href="https://apps.apple.com/in/app/plusx-electric/id6503144034" target="_blank" rel="noopener noreferrer">
                          <Image src={AppStore} alt="App Store" width={110} height={30} priority/>
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.shunyaekai.plusexelectric&hl=en&pli=1" target="_blank" rel="noopener noreferrer">
                          <Image src={PlayStore} alt="Play Store" width={110} height={30} priority/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* <div className={style.guestLogin}>
              <Link href="/login">Guest Login</Link>
            </div> */}
          </main>
          {!isDisplayHamburger && <span className={style.displayHamburger} onClick={toggleDrawer}><IoMdMenu /></span>}
          {isDisplayHamburger &&  <span className={style.displayClose} onClick={toggleDrawer}><IoMdClose /></span>}
        </div>
      </div>
      
      <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
        <ul className={style.navMenuMobile}>
          <MobileDropdown title="PlusX" links={plusXOptions} /><hr className={style.mobileHr} />
          <MobileDropdown title="Charging Solutions" links={chargingSolutionsOptions} /><hr className={style.mobileHr} />
          <li><Link href="/mobility-solution">Mobility Solution</Link></li><hr className={style.mobileHr} />
          <li><Link href="/ev-car-insurance">EV Insurance</Link></li><hr className={style.mobileHr} />
          <li><Link href="/commercial-ev-charging-solutions">PlusX for Business</Link></li><hr className={style.mobileHr} />
          <li><button onClick={appRedirectionHandler} >Download App</button></li>
          {/* <li><Link href="/login">Guest Login</Link></li> */}
        </ul>
      </Drawer>
    </header>
  );
}

export default Header;

function MobileDropdown({ title, links }) {
  const [open, setOpen] = useState(false);

  return (
    <li className={style.dropdownItem}>
      <div className={style.dropdownToggle} onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <span className={style.arrow}>{open ? <FaChevronUp /> : <FaChevronDown />}</span>
      </div>

      {open && (
        <ul className={style.subMenu}>
          {links.map((item, index) => (
            <>
              <li key={index}><Link href={item.path}>{item.label}</Link></li>{index !== links.length - 1 && <hr className={style.mobileHr} />}
            </>
          ))}
        </ul>
      )}
    </li>
  );
};