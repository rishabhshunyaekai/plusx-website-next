import style              from "./heroImage.module.css";
import RedirectToWhatsapp from "@/sharedComponents/whatsapp/RedirectToWhatsapp";
import CTAButton          from "@/sharedComponents/ctaButton/ctaButton";

function TeslaHeroImage() {
  return (
    <section className={style.teslaBanner}>
      <div className={`container ${style.container}`}>
        <div className={style.teslaBannerContent}>
          <h1 className={style.teslaPrimaryText}>Tesla Charging in Dubai<br className={style.breakLine}/> We Come to Your Tesla</h1>
          <p className={style.outlinerText}>PlusX Electric charges your Tesla where it is parked <br className={style.breakLine}/>at your villa, in your building's parking, in a basement <br className={style.breakLine}/>or at the roadside. Book on the app, WhatsApp or call, 24/7</p>

          <div className={style.buttonContainer}>
              <CTAButton className={style.chargerButton} handler={"appRedirect"} text="Book via App" />
              <RedirectToWhatsapp className={style.chargerButton} isShowIcon={false} text="Whatsapp Us" isRSA={true} />
              <a href="tel:+971543061473" className={style.chargerButton}>Call Now</a>
           </div>
        </div>
      </div>
    </section>
  );
}

export default TeslaHeroImage;
