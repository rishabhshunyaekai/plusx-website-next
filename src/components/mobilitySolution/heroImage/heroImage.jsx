"use client";

import style  from "./heroImage.module.css";

function MobilityHeroImage() {
  return (
    <section className={style.mobilityBanner}>
      <div className={`container ${style.container}`}>
        {/* <div className={style.insuranceContent}>
          <h2 className={style.insurancePrimaryText}>Insure Instantly, <br /> Drive Worry-Free</h2>
          <h2 className={style.insuranceSecondaryText}>Seamless EV Insurance Powered by</h2>
          <Image className={style.image} src={policybazaar} alt="policybazaar" width={350} height={50}/>
          <a href={whatsappUrl} target="__blank" className={style.insuranceButton}>Chat with us</a>
        </div> */}
      </div>
    </section>
  );
}

export default MobilityHeroImage;
