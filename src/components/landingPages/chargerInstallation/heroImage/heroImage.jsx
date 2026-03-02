"use client";

import style                from "./heroImage.module.css";
import useAdvertisingWpMess from "@/hooks/useAdvertisingWpMess";

function ChargerHeroImage() {
  const { whatsappUrl } = useAdvertisingWpMess();

  return (
    <figure className={style.chargerBanner}>
      <div className={`container ${style.chargerContainer}`}>
        <h1 className={style.mainHeading}>
          <span className={style.greenBox}>Get EV Charger, Accessories</span><br />
          <span className={style.blueBox}>& Installation Services</span>
        </h1>
        <p className={style.subText}>All Types of <span className={style.highlight}>AC & DC</span> Chargers & Adapters Available</p>
        <p className={style.footNote}>*Compatible With all EV Brands</p>
        <a target="_blank" href={whatsappUrl} rel="noreferrer" className={style.bookSlotButton}>Book Free Consultation</a>
      </div>
    </figure>
  );
}

export default ChargerHeroImage;
