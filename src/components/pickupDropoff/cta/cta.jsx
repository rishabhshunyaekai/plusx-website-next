import style      from "./cta.module.css";
import Animated   from "@/sharedComponents/animatedComponent/animated";
import CTAButton  from "@/sharedComponents/ctaButton/ctaButton.jsx";

function CTA() {
  return (
    <div className={style.main}>
      <div className={`container text-center`}>
        <Animated className={`${style.ctaContainer}`} animation="fade" easing="ease-in" duration={1000}>
          <h2 className={style.ctaHeading}>A Smarter Way to Manage <br className={style.breakLine} /> EV Charging in Dubai</h2>
          <p className={style.ctaContent}>
            EV ownership must be efficient and stress-free. The process of charging has been made easier with PlusX electric, which incorporates pickup, charging, and return into a single smooth service.
          </p>
          <p className={style.ctaContent}>
            The service is a convenient time-saving alternative when you have a EV in Dubai and do not want to spend time at the public charging stations.
          </p>
          <div className={style.buttonContainer}>
            <CTAButton className={style.chargerButton} text="Book Now" handler="chargerInstallationPage" />
          </div>
        </Animated>
      </div>
    </div>
  );
}

export default CTA;
