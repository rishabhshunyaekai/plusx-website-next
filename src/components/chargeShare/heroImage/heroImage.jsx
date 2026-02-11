import style      from "./heroImage.module.css";
import CTAButton  from "@/sharedComponents/ctaButton/ctaButton.jsx";

function ChargeShareHeroImage() {
  return (
    <section className={style.chargeShareBanner}>
      <div className={`container ${style.container}`}>
        <div className={style.shareBannerContent}>
          <h2 className={style.sharePrimaryText}>Share Your</h2>
          <h2 className={style.shareSecondaryText}>Private Charger With</h2>
          <h2 className={style.sharePrimaryText}>EV Owners & Get Paid</h2>
          <CTAButton className={style.chargerButton} text="List Your Charger Now" handler="scrollToBottomWithRedirection" />
        </div>
      </div>
    </section>
  );
}

export default ChargeShareHeroImage;
