import style      from "./heroImage.module.css";
import Animated   from "@/sharedComponents/animatedComponent/animated";
import CTAButton  from "@/sharedComponents/ctaButton/ctaButton";
import RedirectToWhatsapp from "@/sharedComponents/whatsapp/RedirectToWhatsapp";

function HeroImage() {
  return (
    <section className={style.plusxBanner}>
      <div className={`${style.container} container`}>
        <Animated className={`${style.heading}`} animation="fade" easing="ease-in" duration={1000}>
          <div>
            <span className={style.slug}>EV Breakdown Assistance in Dubai</span><br/>
            <span className={style.slug2}>On-Site Charging & Jump-Start — 24/7 Rescue</span>
          </div>
          <p className={style.priceLine}>Starting from <strong>AED 185*</strong> + VAT<br/>Get 10% Off When You Book Through Our App<br/>Use Coupon Code: <strong>RSA10%OFF</strong></p>
          <div className={style.buttonContainer}>
            <RedirectToWhatsapp className={style.ctaButton} isShowIcon={false} text="Get Emergency Help" isRSA={true} />
            <CTAButton className={style.ctaButton} text="Download App" handler="roadsidePage" />
          </div>
        </Animated>
      </div>
    </section>
  );
}

export default HeroImage;
