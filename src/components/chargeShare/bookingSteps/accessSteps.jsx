import Image          from "next/image";
import style          from "./bookingSteps.module.css";
import Animated       from "@/sharedComponents/animatedComponent/animated";
import step1          from "@/assets/images/ev-roadside-assistance-page/app.webp";
import Arrow          from "@/assets/images/ev-roadside-assistance-page/arrow.webp";
import EVCharger      from "@/assets/images/ev-charge-share-page/ev-charger.webp";
import Call           from "@/assets/images/ev-charge-share-page/call.webp";
import ChargerStation from "@/assets/images/ev-charge-share-page/charger-station.webp";

function BookingSteps() {
  return (
    <section className={style.bookingSteps}>
      <div className="container">
        <div className="text-center">
          <Animated animation="fade" easing="ease-in" duration={1000}>
            <h2 className={style.bookingStepsHeading}>
              How to Access Shared EV Charger?
            </h2>
            <h3 className={style.bookingStepsSubHeading}>The PlusX Electric app makes it easy to access <br className={style.breakLine}/>shared EV chargers. Please follow steps</h3>
          </Animated>
        </div>

        <Animated className={style.mainSteps} animation="fade" easing="ease-in" duration={1000}>
          <div className={style.stepsCard}>
            <div className={style.stepsImage}>
              <Image src={step1} alt="step1" width={58} height={58} />
            </div>
            <p className={style.steps}>Download the PlusX Electric App from the App Store or Play Store</p>
          </div>
          <div className={style.stepsCard}>
            <div className={style.stepsArrowImage}>
              <Image src={Arrow} alt="Arrow" width={58} height={58} />
            </div>
          </div>
          <div className={style.stepsCard}>
            <div className={style.stepsImage}>
              <Image src={EVCharger} alt="EVCharger" width={58} height={58} />
            </div>
            <p className={style.steps}>Select EV Charge Share Option</p>
          </div>
          <div className={style.stepsCard}>
            <div className={style.stepsArrowImage}>
              <Image src={Arrow} alt="Arrow" width={58} height={58} />
            </div>
          </div>
          <div className={style.stepsCard}>
            <div className={style.stepsImage}>
              <Image src={ChargerStation} alt="ChargerStation" width={58} height={58} />
            </div>
            <p className={style.steps}>See The List of EV Chargers Available Around You</p>
          </div>
          <div className={style.stepsCard}>
            <div className={style.stepsArrowImage}>
              <Image src={Arrow} alt="Arrow" width={58} height={58} />
            </div>
          </div>
          <div className={style.stepsCard}>
            <div className={style.stepsImage}>
              <Image src={Call} alt="Call" width={58} height={58} />
            </div>
            <p className={style.steps}>Connect With The EV Charger Owner to Get Access</p>
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
