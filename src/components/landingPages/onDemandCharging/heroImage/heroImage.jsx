import style      from "./heroImage.module.css";
import CTAButton  from "@/sharedComponents/ctaButton/ctaButton.jsx";

function OnDemandHeroImage() {
  return (
    <figure className={style.onDemandBanner}>
      <div className={`container ${style.container}`}>
        <div className={style.onDemandContent}>
          <article className={style.onDemandContainer}>
            <h2 className={style.primaryText}>On-Demand</h2>
            <h3 className={style.secondaryText}>EV-Charging Starts Here</h3> 
          </article>

          <div className="">
            <h2 className={style.priceText}>Only at AED 65*</h2>
            <CTAButton className={style.chargerButton} text="Book Your Slot Now" handler="appRedirect" />
          </div>
        </div>
      </div>
    </figure>
  );
}

export default OnDemandHeroImage;
