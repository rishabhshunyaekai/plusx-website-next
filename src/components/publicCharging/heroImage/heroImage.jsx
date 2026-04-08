import style      from "./heroImage.module.css";
import CTAButton  from "@/sharedComponents/ctaButton/ctaButton.jsx";
import Animated   from "@/sharedComponents/animatedComponent/animated";

function PublicChargingHeroImage() {
  return (
    <section className={style.figureWrapper}>
      <div className={`container ${style.container}`}>
        <Animated className={style.figureContent}>
          <h2>
            <span className={style.primaryText}><strong>Find the Nearest</strong></span><br/>
            <span className={style.secondaryText}>Public EV Charging</span><br/>
            <span className={style.primaryText}>Stations in Dubai</span><br/>
          </h2>
          <CTAButton className={style.button} text="Find Now" handler="scrollToAppSection" />
        </Animated>
      </div>
    </section>
  );
}

export default PublicChargingHeroImage;
