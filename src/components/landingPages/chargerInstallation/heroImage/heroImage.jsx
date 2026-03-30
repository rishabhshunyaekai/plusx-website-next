import style                from "./heroImage.module.css";
import RedirectToWhatsapp   from "@/sharedComponents/whatsapp/RedirectToWhatsapp";

function ChargerHeroImage() {

  return (
    <figure className={style.chargerBanner}>
      <div className={`container ${style.chargerContainer}`}>
        <h1 className={style.mainHeading}>
          <span className={style.greenBox}>Get EV Charger, Accessories</span><br />
          <span className={style.blueBox}>& Installation Services</span>
        </h1>
        <p className={style.subText}>All Types of <span className={style.highlight}>AC & DC</span> Chargers & Adapters Available</p>
        <p className={style.footNote}>*Compatible With all EV Brands</p>
        <RedirectToWhatsapp className={style.bookSlotButton} isShowIcon={false} text="Book Free Consultation"/>
      </div>
    </figure>
  );
}

export default ChargerHeroImage;
