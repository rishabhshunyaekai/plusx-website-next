import style      from "./portableHeroImage.module.css";
import Animated   from "@/sharedComponents/animatedComponent/animated";
import CTAButton  from "@/sharedComponents/ctaButton/ctaButton";

function PortableHeroImage() {
  return (
    <section className={style.plusxBanner}>
      <div className={`${style.container} container`}>
        <Animated className={`${style.heading}`} animation="fade" easing="ease-in" duration={1000}>
          <h1>
            <span className={style.slug}>Mobile EV Charging in Dubai</span><br/>
            <span className={style.slug2}>Charge at Your Location</span>
          </h1>
          <p className={style.priceLine}>At just AED 65 + VAT</p>
          <CTAButton className={style.ctaButton} text="BOOK NOW" handler="portablePage" />
        </Animated>
      </div>
    </section>
  );
}

export default PortableHeroImage;
