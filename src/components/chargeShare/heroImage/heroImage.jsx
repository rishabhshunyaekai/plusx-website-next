import style      from "./heroImage.module.css";
import CTAButton  from "@/sharedComponents/ctaButton/ctaButton";

function ChargeShareHeroImage() {
  return (
    <section className={style.chargeShareBanner}>
      <div className={`container ${style.container}`}>
        <div className={style.shareBannerContent}>
          <h1 className={style.sharePrimaryText}>Share Your EV Charger.<br className={style.breakLine}/> Help a Fellow EV Owner.</h1>
           <p className={style.outlinerText}>A community feature that lets EV owners in Dubai list <br className={style.outLinerbreakLine} /> their private chargers and connect with neighbours <br className={style.outLinerbreakLine} /> who can&apos;t install one of their own.</p>
           <div className={style.buttonContainer}>
              <CTAButton className={style.chargerButton} text="List Your Charger Now" handler="scrollToAppSection" />
              <CTAButton className={style.chargerButton} text="Find a charger near me" handler="scrollToAppSection" />
           </div>
        </div>
      </div>
    </section>
  );
}

export default ChargeShareHeroImage;
