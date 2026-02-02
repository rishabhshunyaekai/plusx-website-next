import style from "./heroImage.module.css";
import CTAButton from "@/sharedComponents/ctaButton/ctaButton.jsx";

function HeroImage() {
  return (
    <>
      <section className={style.intro}>
        <div className={style.bannerImage}>
          <div className={style.bannerContent}>
            <h1 className={style.primaryText}>Book EV Charging in</h1>
            <h1 className={style.secondaryText}>Dubai Anytime, Anywhere</h1>
            <CTAButton className={style.downloadButton} text="Download Now" handler="appRedirect" />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroImage;

// import Navigation from "../Navigation";
// import Navigation from "./../Navigation/Navigation";
// <div className={style.bannerOverlay}></div>
//   <div className={style.bannerContent}>
//     <h1>Struggling to Charge Your EV?</h1>
//     <h4 className={style.changingTexts}>
//       Charge Anytime, Anywhere
//       <br />
//       with PlusX Electric
//     </h4>
// </div>
// <Navigation />
