import style              from "./heroImage.module.css";
import RedirectToWhatsapp from "@/sharedComponents/whatsapp/RedirectToWhatsapp";
import CTAButton          from "@/sharedComponents/ctaButton/ctaButton";

function ChargerInstallationDubaiHeroImage() {
  return (
    <section className={style.chargeShareBanner}>
      <div className={`container ${style.container}`}>
        <div className={style.shareBannerContent}>
          <h1 className={style.sharePrimaryText}>EV Charger Installation<br className={style.breakLine}/> for Dubai Apartments</h1>
           <p className={style.outlinerText}>From building NOC to approval to final commissioning,<br /> we handle everything.</p>
           <div className={style.buttonContainer}>
              <RedirectToWhatsapp className={style.chargerButton} isShowIcon={false} text="Book Free Site Survey" isRSA={true} />
              <CTAButton className={style.chargerButton} handler={"appRedirect"} text="Download the PlusX App" />
           </div>
        </div>
      </div>
    </section>
  );
}

export default ChargerInstallationDubaiHeroImage;
