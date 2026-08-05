"use client";

import { useEffect, useState } from "react";
import Link   from "next/link";
import React  from "react";
import styles from "./stickyBar.module.css";
// import { BsWhatsapp }   from "react-icons/bs";

function MobileStickyBar() {
  const [showBar, setShowBar] = useState(false);
  const whatsappMessage       = `Hi PlusX Electric, I need emergency EV help in Dubai. Please assist.`;

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.2;
      setShowBar(window.scrollY >= triggerPoint);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showBar) return null;
  
  return (
    <div className={styles.mobileStickyBar}>
      <div className={styles.topRow}>
        <div>
          <h4>Stranded right now?</h4>
          <p>We charge your EV on the spot — no tow.</p>
        </div>

        <div className={styles.badge}>
          <span>1000+</span>
          <small>EVs Rescued</small>
        </div>
      </div>

      <div className={styles.buttons}>
        <Link href="tel:+971543061473" className={styles.callBtn}>Call Now</Link>
        <Link href={`https://api.whatsapp.com/send?phone=+971543061473&text=${whatsappMessage}`} target="__blank" className={`${styles.whatsappBtn}`} rel="noreferrer" id="whatsappIcon">
          WhatsApp{/* <BsWhatsapp /> WhatsApp */}
        </Link>
      </div>
    </div>
  );
}

export default MobileStickyBar;
