import style      from "./heroImage.module.css";
import Animated   from "@/sharedComponents/animatedComponent/animated";
import RedirectToWhatsapp from "@/sharedComponents/whatsapp/RedirectToWhatsapp";

function HeroImage() {
  return (
    <section className={style.plusxBanner}>
      <div className={`${style.container} container`}>
        <Animated className={`${style.heading}`} animation="fade" easing="ease-in" duration={1000}>
          <h1>
            <span className={style.slug}>EV Breakdown Assistance in Dubai</span><br/>
            <span className={style.slug2}>On-Site Charging & Jump-Start — 24/7 Rescue</span>
          </h1>
          <p className={style.priceLine}>Starting from <strong>AED 185*</strong> + VAT</p>
          <RedirectToWhatsapp className={style.ctaButton} isShowIcon={true} text="Get Emergency Help" isRSA={true} />
        </Animated>
      </div>
    </section>
  );
}

export default HeroImage;
