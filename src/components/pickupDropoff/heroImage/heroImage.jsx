import style      from "./heroImage.module.css";
import CTAButton  from "@/sharedComponents/ctaButton/ctaButton.jsx";
import Animated   from "@/sharedComponents/animatedComponent/animated";

function PickupDropoffHeroImage() {
  return (
    <section className={style.figureWrapper}>
      <div className={`container ${style.container}`}>
        <Animated className={style.figureContent}>
          <h2>
            <span className={style.primaryText}><strong>We Pick up,</strong></span><br/>
            <span className={style.secondaryText}>Charge it, & Drop it</span><br/>
            <span className={style.primaryText}>Back Fully Charged</span><br/>
          </h2>
          <CTAButton className={style.button} text="Book Now" handler="scrollToAppSection" />
        </Animated>
      </div>
    </section>
  );
}

export default PickupDropoffHeroImage;
