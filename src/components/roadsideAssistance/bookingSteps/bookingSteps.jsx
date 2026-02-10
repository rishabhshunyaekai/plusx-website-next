import Image    from "next/image";
import style    from "./bookingSteps.module.css";
import Animated from "@/sharedComponents/animatedComponent/animated";
import step1    from "@/assets/images/ev-roadside-assistance-page/app.webp";
import Arrow    from "@/assets/images/ev-roadside-assistance-page/arrow.webp";
import Map      from "@/assets/images/ev-roadside-assistance-page/map.webp";
import Driver   from "@/assets/images/ev-roadside-assistance-page/driver.webp";
import Car      from "@/assets/images/ev-roadside-assistance-page/car.webp";

function BookingSteps() {
  return (
    <section className={style.bookingSteps}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <Animated animation="fade" easing="ease-in" duration={1000}>
              <h2 className={style.bookingStepsHeading}>
                How PlusX Electric EV Roadside <br className={style.headingBreakline}/>Assistance Works
              </h2>
              <h3 className={style.bookingStepsSubHeading}><strong>Here are the steps to book the service:</strong></h3>
            </Animated>
          </div>
        </div>

        <div className="row">

          {/* LEFT CONTENT */}
          <div className="col-lg-12 col-md-12">
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
                  <Image src={Map} alt="Map" width={58} height={58} />
                </div>
                <p className={style.steps}>Add your location details on the RSA booking screen</p>
              </div>
              <div className={style.stepsCard}>
                <div className={style.stepsArrowImage}>
                  <Image src={Arrow} alt="Arrow" width={58} height={58} />
                </div>
              </div>
              <div className={style.stepsCard}>
                <div className={style.stepsImage}>
                  <Image src={Driver} alt="Driver" width={58} height={58} />
                </div>
                <p className={style.steps}>Our rescue team is dispatched immediately</p>
              </div>
              <div className={style.stepsCard}>
                <div className={style.stepsArrowImage}>
                  <Image src={Arrow} alt="Arrow" width={58} height={58} />
                </div>
              </div>
              <div className={style.stepsCard}>
                <div className={style.stepsImage}>
                  <Image src={Car} alt="Car" width={58} height={58} />
                </div>
                <p className={style.steps}>On-site charging is done, and you’re ready to move again</p>
              </div>
            </Animated>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 text-center">
            <Animated animation="fade" easing="ease-in" duration={1000}>
              <p className={style.bookingStepsFooter}>
                As per our service records, we typically reach customers <strong>within 60 minutes</strong>,<br className={style.footerBreakline}/> depending on location and unforeseen conditions.
              </p>
            </Animated>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingSteps;
