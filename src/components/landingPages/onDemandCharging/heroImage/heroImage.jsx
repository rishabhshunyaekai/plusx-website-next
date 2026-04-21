import style      from "./heroImage.module.css";
import CTAButton  from "@/sharedComponents/ctaButton/ctaButton.jsx";

function OnDemandHeroImage() {
  return (
    <figure className={style.onDemandBanner}>
      <div className={`container ${style.container}`}>
        <div className={style.onDemandContent}>
          <h1 className={style.onDemandContainer}>
            <span className={style.primaryText}>On-Demand</span>
            <span className={style.secondaryText}>EV-Charging Starts Here</span> 
          </h1>

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
