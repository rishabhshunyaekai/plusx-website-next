import style      from "./heroImage.module.css";
import CTAButton  from "@/sharedComponents/ctaButton/ctaButton.jsx";
import Animated   from "@/sharedComponents/animatedComponent/animated";

function PublicChargingHeroImage() {
  return (
    <section className={style.figureWrapper}>
      <div className={`container ${style.container}`}>
        <Animated className={style.figureContent}>
          <h2 className={style.primaryText}><strong>Find The Nearest</strong></h2>
          <h2 className={style.secondaryText}>Public EV Charging</h2>
          <h2 className={style.primaryText}>Stations in Dubai</h2>
          <CTAButton className={style.button} text="Find Now" handler="scrollToBottomWithRedirection" />
        </Animated>
      </div>
    </section>
  );
}

export default PublicChargingHeroImage;
