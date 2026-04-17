import style      from "./cta.module.css";
import Animated   from "@/sharedComponents/animatedComponent/animated";
import RedirectToWhatsapp from "@/sharedComponents/whatsapp/RedirectToWhatsapp";

function CTA() {
  return (
    <div className={style.main}>
      <div className={`container text-center`}>
        <Animated className={`${style.ctaContainer}`} animation="fade" easing="ease-in" duration={1000}>
          <h2 className={style.ctaHeading}>Book EV Charger Installation in Dubai & UAE</h2>
          <p className={style.ctaContent}>
            Looking to install an EV charger at home or on commercial premises? PlusX Electric handles everything  from choosing the right charger to final installation.
          </p>
          <div className={style.buttonContainer}>
            <RedirectToWhatsapp className={style.chargerButton} isShowIcon={false} text="Book Free Consultation"/>
          </div>
        </Animated>
      </div>
    </div>
  );
}

export default CTA;
