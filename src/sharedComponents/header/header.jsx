"use client";

import React, { useState, useEffect, useRef } from "react";
import Link                           from "next/link";
import Image                          from "next/image";
import style                          from "./header.module.css";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

import CompanyLogo                    from "@/sharedComponents/companyLogo/companyLogo.jsx";
import Drawer                         from "./drawer";
import { handleDeviceRedirect, REDIRECT_PATHS, 
    APPLE_STORE_URL, PLAY_STORE_URL } from "@/utils/helper";

import QR                             from "@/assets/images/homepage/plusx_electric_header_qr_code.svg";
import AppStore                       from "@/assets/images/homepage/Plusx_electric_ios_app_store_download_image_icon.svg";
import PlayStore                      from "@/assets/images/homepage/Plusx_electric_google_play_app_download_image_icon.svg";

import Icon1                          from "@/assets/images/homepage/navbar-icons/Plusx_electric_nav_mobile_ev_charging_icon.svg";
import Icon2                          from "@/assets/images/homepage/navbar-icons/Plusx_electric_nav_pickup_dropoff_icon.svg";
import Icon3                          from "@/assets/images/homepage/navbar-icons/Plusx_electric_nav_public_ev_charging_icon.svg";
import Icon4                          from "@/assets/images/homepage/navbar-icons/Plusx_electric_nav_ev_charger_icon.svg";
import Icon5                          from "@/assets/images/homepage/navbar-icons/Plusx_electric_nav_ev_breakdown_assistance_icon.svg";
import Icon6                          from "@/assets/images/homepage/navbar-icons/Plusx_electric_nav_ev_accessories_icon.svg";
// import Icon4                          from "@/assets/images/homepage/navbar-icons/Plusx_electric_nav_ev_charger_installation_icon.svg";
// import Icon6                          from "@/assets/images/homepage/navbar-icons/Plusx_electric_nav_ev_charge_share_icon.svg";

import about                          from "@/assets/images/homepage/navbar-icons/Plusx_electric_nav_about_icon.svg";
import contact                        from "@/assets/images/homepage/navbar-icons/Plusx_electric_nav_contact_icon.svg";
import sustainability                 from "@/assets/images/homepage/navbar-icons/Plusx_electric_nav_sustainability_icon.svg";


function Header() {
  const headerRef                         = useRef(null);
  const [isDrawerOpen, setIsDrawerOpen]   = useState(false);

  const plusXOptions = [
    { label: "About",           path: "/about-us" },
    { label: "Sustainability",  path: "/sustainability" },
    { label: "Contact",         path: "/contact-us" },
  ]

  const chargingSolutionsOptions = [
    { label: "Mobile EV Charging",      path: "/mobile-ev-charging-dubai" },
    { label: "Pickup & Dropoff",        path: "/ev-pickup-dropoff-charging-service" },
    { label: "Find Public Charger",     path: "/public-ev-charging-stations" },
    { label: "EV Charger Installation", path: "/ev-charger-installation-uae" },
    { label: "EV Chargers",             path: "/ev-charger-installation-uae/ac-dc-ev-chargers" },
    { label: "EV Accessories",          path: "/ev-charger-installation-uae/ev-accessories" },
    { label: "EV Breakdown Assistance", path: "/ev-breakdown-assistance" },
    { label: "EV Charge Share",         path: "/ev-charge-share" },
  ]

  function handleScroll() {
    const triggerPoint = window.innerHeight * 0.3;
    if (window.scrollY > triggerPoint) {
      headerRef.current?.classList.add(style.headerScrolled);
    } else {
      headerRef.current?.classList.remove(style.headerScrolled);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toggleDrawer() {
    setIsDrawerOpen((prevState) => !prevState);
  }

  return (
    <header ref={headerRef} className={`${style.header}`}>
      <div className={`container`}>
        <div className={style.wrapper}>
          <div id={style.logo}>
            <Link href="/"><CompanyLogo /></Link>
          </div>
          { !isDrawerOpen && (
            <main className={`${style.navbarWrapper}`}>
              <nav>
                <ul className={`${style.navbarLinks}`}>
                  <li className={style.navBarPosition}>
                    <Link href="#">PlusX</Link>
                    <div className={style.invisibleContainerOptions}>
                      <div className={style.navOptionsBar}>
                        <div className={style.navOptionsContainer}>
                          <Link href="/about-us" className={style.productIcons}>
                            <div className={style.icon}>
                              <Image src={about} alt="about-us" width={50} height={50} />
                            </div>
                            <p>About</p>
                          </Link>
                          <Link href="/sustainability" className={style.productIcons}>
                            <div className={style.icon}>
                              <Image src={sustainability} alt="sustainability" width={50} height={50} />
                            </div>
                            <p>Sustainability</p>
                          </Link>
                          <Link href="/contact-us" className={style.productIcons}>
                            <div className={style.icon}>
                              <Image src={contact} alt="contact-us" width={50} height={50} />
                            </div>
                            <p>Contact</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className={style.navBarPosition}>
                    <Link href="#">Charging Solution</Link>
                    <div className={style.invisibleContainer}>
                      <div className={style.navBar}>
                        <div className={style.navContainer}>
                          <Link href="/mobile-ev-charging-dubai" className={style.productIcons}>
                            <div className={style.icon}>
                              <Image src={Icon1} alt="mobile-ev-charger" width={50} height={50} />
                            </div>
                            <p>Mobile EV <br className={style.navBR} /> Charging</p>
                          </Link>
                          <Link href="/ev-pickup-dropoff-charging-service" className={style.productIcons}>
                            <div className={style.icon}>
                              <Image src={Icon2} alt="pick-drop" width={50} height={50} />
                            </div>
                            <p>Pickup & <br className={style.navBR} /> Dropoff</p>
                          </Link>
                          <Link href="/ev-charger-installation-uae" className={style.productIcons}>
                            <div className={style.icon}>
                              <Image src={Icon3} alt="charger-installation" width={50} height={50} />
                            </div>
                            <p>EV Charger <br className={style.navBR} /> Installation</p>
                          </Link>
                          <Link href="/ev-charger-installation-uae/ac-dc-ev-chargers" className={style.productIcons}>
                            <div className={style.icon}>
                              <Image src={Icon4} alt="ev-chargers" width={50} height={50} />
                            </div>
                            <p>EV <br className={style.navBR} /> Chargers</p>
                          </Link>
                          <Link href="/ev-charger-installation-uae/ev-accessories" className={style.productIcons}>
                            <div className={style.icon}>
                              <Image src={Icon6} alt="ev-accessories" width={50} height={50} />
                            </div>
                            <p>EV <br className={style.navBR} />  Accessories</p>
                          </Link>
                          <Link href="/ev-breakdown-assistance" className={style.productIcons}>
                            <div className={style.icon}>
                              <Image src={Icon5} alt="ev-breakdown-assistance" width={50} height={50} />
                            </div>
                            <p>EV Breakdown <br className={style.navBR} /> Assistance</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li><Link href="/ev-car-insurance">EV Insurance</Link></li>
                  <li><Link href="/commercial-ev-charging-solutions">PlusX for Business</Link></li>
                </ul>
              </nav>
              
              <div className={style.downloadApp}>
                <Link href="#">DOWNLOAD APP</Link>

                <div className={style.hoverContainer}>
                  <div className={style.hoverPopup}>
                    <div className={style.qrCode}>
                      <Image src={QR} alt="Plusx Electric App Download QR Code" width={80} height={90} />
                    </div>
                    <div className={style.hoverLinks}>
                      <div className={style.hoverText}>Scan to download Plusx Electric app in your phone. Or get it here:</div>
                      <div className={style.hoverImageSection}>
                        <a href={APPLE_STORE_URL} target="_blank" rel="noopener noreferrer">
                          <Image src={AppStore} alt="App Store" width={110} height={30} />
                        </a>
                        <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                          <Image src={PlayStore} alt="Play Store" width={110} height={30} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className={style.guestLogin}>
                <Link href="/login">Guest Login</Link>
              </div> */}
            </main>
          )}
          {!isDrawerOpen && <span className={style.displayHamburger} onClick={toggleDrawer}>☰</span>}
          { isDrawerOpen && <span className={style.displayClose} onClick={toggleDrawer}>✕</span>}
        </div>
      </div>

      { isDrawerOpen && (
        <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
          <ul className={style.navMenuMobile}>
            <MobileDropdown title="PlusX" links={plusXOptions} /><hr className={style.mobileHr} />
            <MobileDropdown title="Charging Solutions" links={chargingSolutionsOptions} /><hr className={style.mobileHr} />
            <li><Link href="/ev-car-insurance">EV Insurance</Link> <hr className={style.mobileHr} /></li>
            <li><Link href="/commercial-ev-charging-solutions">PlusX for Business</Link> <hr className={style.mobileHr} /></li>
            <li><button onClick={()=> handleDeviceRedirect(REDIRECT_PATHS.app)} className={style.downloadAppButton}>Download App</button></li>
          </ul>
        </Drawer>
      )}
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
            <React.Fragment key={item.path}>
              <li><Link href={item.path}>{item.label}</Link></li>{index !== links.length - 1 && <hr className={style.mobileHr} />}
            </React.Fragment>
          ))}
        </ul>
      )}
    </li>
  );
};

{/* <li><Link href="/mobility-solution">Mobility Solution</Link> <hr className={style.mobileHr} /></li>
<li><Link href="/login">Guest Login</Link></li> */}