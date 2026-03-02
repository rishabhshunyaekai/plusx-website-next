import style      from "./heroImage.module.css";
import CTAButton  from "@/sharedComponents/ctaButton/ctaButton.jsx";

function RSAHeroImage() {
  return (
    <figure className={style.rsaBanner}>
      <main className={`container ${style.rsaContainer}`}>
        <h2 className={style.secondaryHeading}>
          <span className={style.tagline}>EV Battery Down ?</span><br />
          <span className={style.tagline}>No Worries!</span>
        </h2>
        <h1 className={style.mainHeading}>
          <CTAButton className={style.greenBox} text="Book Your Emergency" handler="appRedirect" /><br />
          <span className={style.WhiteBox}>EV Charging Assistance</span>
        </h1>
      </main>
    </figure>
  );
}

export default RSAHeroImage;
