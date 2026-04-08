import style    from "./heroImage.module.css";
import Animated from "@/sharedComponents/animatedComponent/animated";

function HeroImage() {
  return (
    <section className={style.plusxBanner}>
      <div className={`${style.container} container`}>
        <Animated className={`${style.heading}`} animation="fade" easing="ease-in" duration={1000}>
          <h2>
            <span className={style.slug}>EV Breakdown ? On-Site Charging</span><br/>
            <span className={style.slug2}>Book Instantly via The PlusX Electric App</span>
          </h2>
        </Animated>
      </div>
    </section>
  );
}

export default HeroImage;
