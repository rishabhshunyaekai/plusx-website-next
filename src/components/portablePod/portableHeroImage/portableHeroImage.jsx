import style      from "./portableHeroImage.module.css";
import Animated   from "@/sharedComponents/animatedComponent/animated";
import CTAButton  from "@/sharedComponents/ctaButton/ctaButton";

function PortableHeroImage() {
  return (
    <section className={style.plusxBanner}>
      <div className={`${style.container} container`}>
        <Animated className={`${style.heading}`} animation="fade" easing="ease-in" duration={1000}>
          <h2>
            <span className={style.slug}>DOORSTEP EV CHARGING</span><br/>
            <span className={style.slug2}>ANYTIME, ANYWHERE IN DUBAI</span><br/>
          </h2>
          <CTAButton className={style.button} text="BOOK NOW" handler="appRedirect" />
        </Animated>
      </div>
    </section>
  );
}

export default PortableHeroImage;
