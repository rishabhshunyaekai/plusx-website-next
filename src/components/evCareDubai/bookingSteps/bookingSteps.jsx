import Image    from "next/image";
import style    from "./bookingSteps.module.css";
import Animated from "@/sharedComponents/animatedComponent/animated";
import step1    from "@/assets/images/ev-roadside-assistance-page/app.webp";
import Arrow    from "@/assets/images/ev-roadside-assistance-page/arrow.webp";
import Map      from "@/assets/images/ev-roadside-assistance-page/map.webp";
import Charger  from "@/assets/images/ev-charger-installation-page/charger-icon.webp";
import Techni   from "@/assets/images/ev-charger-installation-page/technician.webp";

function BookingSteps() {
  return (
    <section className={style.bookingSteps}>
      <div className="container">
        <div className="text-center">
          <Animated animation="fade" easing="ease-in" duration={1000}>
            <h2 className={style.bookingStepsHeading}>
              {/* How to Book EV Charger <br className={style.headingBreakline}/>Installation Through the PlusX App */}
              How Service My Car Works
            </h2>
            {/* <h3 className={style.bookingStepsSubHeading}><strong>Here are the simple steps to book your EV charger installation</strong></h3> */}
          </Animated>
        </div>

        <Animated className={style.mainSteps} animation="fade" easing="ease-in" duration={1000}>
          <div className={style.stepsCard}>
            <div className={style.stepsImage}>
              <Image src={step1} alt="step1" width={58} height={58} />
            </div>
            <p className={style.steps}><b>You Book</b></p>
            <p className={style.steps}>Select your package in 2 minutes via our form or the SMC app</p>
          </div>
          <div className={style.stepsCard}>
            <div className={style.stepsArrowImage}>
              <Image src={Arrow} alt="Arrow" width={58} height={58} />
            </div>
          </div>
          <div className={style.stepsCard}>
            <div className={style.stepsImage}>
              <Image src={Charger} alt="Charger" width={58} height={58} />
            </div>
            <p className={style.steps}><b>We Collect</b></p>
            <p className={style.steps}>Driver arrives at your door, inspects the car, sends a collection report</p>
          </div>
          <div className={style.stepsCard}>
            <div className={style.stepsArrowImage}>
              <Image src={Arrow} alt="Arrow" width={58} height={58} />
            </div>
          </div>
          <div className={style.stepsCard}>
            <div className={style.stepsImage}>
              <Image src={Map} alt="Map" width={58} height={58} />
            </div>
            <p className={style.steps}><b>We Service</b></p>
            <p className={style.steps}>360° health check done — digital quote sent, work only starts with your OK</p>
          </div>
          <div className={style.stepsCard}>
            <div className={style.stepsArrowImage}>
              <Image src={Arrow} alt="Arrow" width={58} height={58} />
            </div>
          </div>
          <div className={style.stepsCard}>
            <div className={style.stepsImage}>
              <Image src={Techni} alt="Techni" width={58} height={58} />
            </div>
            <p className={style.steps}><b>We Deliver</b></p>
            <p className={style.steps}>Freshly washed & serviced car returned to your door. Pay online</p>
          </div>
        </Animated>

        {/* <div className="text-center">
          <Animated animation="fade" easing="ease-in" duration={1000}>
            <p className={style.bookingStepsFooter}>
              As per our service records, we typically reach customers <strong>within 60 minutes</strong>,<br className={style.footerBreakline}/> depending on location and unforeseen conditions.
            </p>
          </Animated>
        </div> */}
      </div>
    </section>
  );
}

export default BookingSteps;
