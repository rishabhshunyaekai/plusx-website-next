import style              from "./heroImage.module.css";
import RedirectToWhatsapp from "@/sharedComponents/whatsapp/RedirectToWhatsapp";

function ChargerInstallationHeroImage() {
  return (
    <section className={style.chargeShareBanner}>
      <div className={`container ${style.container}`}>
        <div className={style.shareBannerContent}>
          <h2 className={style.sharePrimaryText}>Get EV Charger, Accessories<br className={style.breakLine}/> & Installation Services</h2>
           <p className={style.outlinerText}>All Types of <span className={style.highlight}>AC & DC</span> Chargers & Adapters Available</p>
           <p className={style.secondaryText}>*Compatible With all EV Brands</p>
           <RedirectToWhatsapp className={style.chargerButton} isShowIcon={false} text="Book Free Consultation" />
        </div>
      </div>
    </section>
  );
}

export default ChargerInstallationHeroImage;
