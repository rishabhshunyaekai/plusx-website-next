import style              from "./heroImage.module.css";
import RedirectToWhatsapp from "@/sharedComponents/whatsapp/RedirectToWhatsapp";

function ChargerInstallationHeroImage() {
  return (
    <section className={style.chargeShareBanner}>
      <div className={`container ${style.container}`}>
        <div className={style.shareBannerContent}>
          <p className={style.sharePrimaryText}>EV Charger Installation<br className={style.breakLine}/> in Dubai, UAE</p>
           <p className={style.outlinerText}>AC & DC chargers for home, office & fleet</p>
           <RedirectToWhatsapp className={style.chargerButton} isShowIcon={false} text="Book Free Consultation" />
           {/* <p className={style.outlinerText}>All Types of <span className={style.highlight}>AC & DC</span> Chargers & Adapters Available</p>
           <p className={style.secondaryText}>*Compatible With all EV Brands</p> */}
        </div>
      </div>
    </section>
  );
}

export default ChargerInstallationHeroImage;
