import style    from "./cta.module.css";
import Animated from "@/sharedComponents/animatedComponent/animated";

function CTA() {
  return (
    <div className={style.main}>
      <div className={`container text-center`}>
        <Animated className={`${style.ctaContainer}`} animation="fade" easing="ease-in" duration={1000}>
          <h2 className={style.ctaHeading}>EV Roadside Assistance Coverage in Dubai</h2>
          <p className={style.ctaContent}>
            We cover most areas across Dubai, including Downtown Dubai, Business Bay, City Walk, Dubai Marina, JLT, Palm Jumeirah, and more. We are not limited to any specific area, if you are stuck anywhere in Dubai, our service is available 24/7.
          </p>
        </Animated>
      </div>
    </div>
  );
}

export default CTA;
