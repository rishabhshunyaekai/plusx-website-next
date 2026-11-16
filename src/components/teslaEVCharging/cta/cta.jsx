import style     from "./cta.module.css";
import Animated  from "@/sharedComponents/animatedComponent/animated";
import CTAButton from "@/sharedComponents/ctaButton/ctaButton";
// import RedirectToWhatsapp from "@/sharedComponents/whatsapp/RedirectToWhatsapp";

function CTA() {
  return (
    <div className={style.main}>
      <div className={`container text-center`}>
        <Animated className={`${style.ctaContainer}`} animation="fade" easing="ease-in" duration={1000}>
          <h2 className={style.ctaHeading}>Tesla low on charge right now?</h2>
          <p className={style.ctaContent}>
            Book a charge on the PlusX app or WhatsApp us your location.
          </p>
          <div className={style.buttonContainer}>
            <CTAButton className={style.chargerButton} handler={"appRedirect"} text="Book via App" />
            {/* <RedirectToWhatsapp className={style.chargerButton} isShowIcon={false} text="Whatsapp Us" isRSA={true} /> */}
            <a href="tel:+971543061473" className={style.chargerButton}>Call Now</a>
          </div>
        </Animated>
      </div>
    </div>
  );
}

export default CTA;
