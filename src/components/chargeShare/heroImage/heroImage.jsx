import style      from "./heroImage.module.css";
import CTAButton  from "@/sharedComponents/ctaButton/ctaButton.jsx";

function ChargeShareHeroImage() {
  return (
    <section className={style.chargeShareBanner}>
      <div className={`container ${style.container}`}>
        <div className={style.shareBannerContent}>
          <h1>
            <span className={style.sharePrimaryText}>Share Your</span><br/>
            <span className={style.shareSecondaryText}>Private Charger With</span><br/>
            <span className={style.sharePrimaryText}>EV Owners & Get Paid</span>
          </h1>
          <CTAButton className={style.chargerButton} text="List Your Charger Now" handler="scrollToAppSection" />
        </div>
      </div>
    </section>
  );
}

export default ChargeShareHeroImage;
