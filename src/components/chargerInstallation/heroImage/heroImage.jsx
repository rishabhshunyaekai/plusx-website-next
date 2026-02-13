// import Link from "next/link";
import style      from "./heroImage.module.css";
import CTAButton  from "@/sharedComponents/ctaButton/ctaButton.jsx";

function ChargerInstallationHeroImage() {
  return (
    <section className={style.chargeShareBanner}>
      <div className={`container ${style.container}`}>
        <div className={style.shareBannerContent}>
          <h2 className={style.sharePrimaryText}>Get EV Charger, Accessories<br className={style.breakLine}/> & Installation Services</h2>
           <p className={style.outlinerText}>All Types of <span className={style.highlight}>AC & DC</span> Chargers & Adapters Available</p>
           <p className={style.secondaryText}>*Compatible With all EV Brands</p>
          <CTAButton className={style.chargerButton} text="Book Free Consultation" handler="chargerInstallationPage" />
        </div>
      </div>
    </section>
  );
}

export default ChargerInstallationHeroImage;
