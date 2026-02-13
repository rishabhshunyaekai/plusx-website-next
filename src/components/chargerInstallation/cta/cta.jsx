import style      from "./cta.module.css";
import Animated   from "@/sharedComponents/animatedComponent/animated";
import CTAButton  from "@/sharedComponents/ctaButton/ctaButton.jsx";

function CTA() {
  return (
    <div className={style.main}>
      <div className={`container text-center`}>
        <Animated className={`${style.ctaContainer}`} animation="fade" easing="ease-in" duration={1000}>
          <h2 className={style.ctaHeading}>Book EV Charger Installation in the UAE</h2>
          <p className={style.ctaContent}>
            Looking to have an EV charging station installed at home or commercial premises? At PlusX Electric, we are ready to offer assistance from the point of choosing to install the EV charger.
          </p>
          <div className={style.buttonContainer}>
            <CTAButton className={style.chargerButton} text="Book Free Consultation" handler="chargerInstallationPage" />
          </div>
        </Animated>
      </div>
    </div>
  );
}

export default CTA;
