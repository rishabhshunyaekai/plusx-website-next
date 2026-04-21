import style                from "./heroImage.module.css";
import RedirectToWhatsapp   from "@/sharedComponents/whatsapp/RedirectToWhatsapp";
import CTAButton            from "@/sharedComponents/ctaButton/ctaButton";

function ChargerHeroImage() {

  return (
    <figure className={style.chargerBanner}>
      <div className={`container ${style.chargerContainer}`}>
        <h1 className={style.mainHeading}>
          <span className={style.greenBox}>EV Charger Installation </span><br />
          <span className={style.blueBox}>Across the UAE</span>
        </h1>
        <p className={style.subText}>Villa, apartment, office, hotel, mall or fleet — <br/>we install EV chargers everywhere and handle every <br/>step, from the free site survey to the building NOC, <br/>DEWA approvals for commercial, and final commissioning.</p>
        <div className={style.buttonContainer}>
          <RedirectToWhatsapp className={style.bookSlotButton} isShowIcon={false} text="Book Free Site Survey"/>
          <CTAButton className={style.bookSlotButton} handler={"appRedirect"} text={"Download the PlusX App"}/>
        </div>
      </div>
    </figure>
  );
}

export default ChargerHeroImage;

{/* <p className={style.subText}>All Types of <span className={style.highlight}>AC & DC</span> Chargers & Adapters Available</p>
<p className={style.footNote}>*Compatible With all EV Brands</p> */}
