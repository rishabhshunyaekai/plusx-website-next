import Image    from "next/image";
import style    from "./bookingSteps.module.css";
import Animated from "@/sharedComponents/animatedComponent/animated";
import step1    from "@/assets/images/ev-roadside-assistance-page/app.webp";
import Arrow    from "@/assets/images/ev-roadside-assistance-page/arrow.webp";
import Driver   from "@/assets/images/ev-roadside-assistance-page/driver.webp";
import FileDocs from "@/assets/images/ev-insurance-page/file-docs.webp";
import Calender from "@/assets/images/portable-charger-page/calender.webp";

function BookingSteps() {
  return (
    <section className={style.wrapper}>
      <div className={`${style.bookingSteps}`}>
        <div className="container">
          <div className="text-center">
            <Animated animation="fade" easing="ease-in" duration={1000}>
              <h2 className={style.bookingStepsHeading}>
                How to Book The Service?
              </h2>
              {/* <br className={style.headingBreakline}/> */}
              <h3 className={style.bookingStepsSubHeading}>Booking is completed through the PlusX Electric app.</h3>
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
                <Image src={Driver} alt="Map" width={58} height={58} />
              </div>
              <p className={style.steps}>Choose the EV Pickup and Drop-Off Charging Service</p>
            </div>
            <div className={style.stepsCard}>
              <div className={style.stepsArrowImage}>
                <Image src={Arrow} alt="Arrow" width={58} height={58} />
              </div>
            </div>
            <div className={style.stepsCard}>
              <div className={style.stepsImage}>
                <Image src={FileDocs} alt="Driver" width={58} height={58} />
              </div>
              <p className={style.steps}>Fill in personal vehicle information and pick-up address</p>
            </div>
            <div className={style.stepsCard}>
              <div className={style.stepsArrowImage}>
                <Image src={Arrow} alt="Arrow" width={58} height={58} />
              </div>
            </div>
            <div className={style.stepsCard}>
              <div className={style.stepsImage}>
                <Image src={Calender} alt="Car" width={58} height={58} />
              </div>
              <p className={style.steps}>Select the time slot you would like</p>
            </div>
          </Animated>

          <div className="text-center">
            <Animated animation="fade" easing="ease-in" duration={1000}>
              <p className={style.bookingStepsFooter}>
                Our team will come to pick up your car at the appointed time. When <br className={style.footerBreakline}/> charging is done, the vehicle is returned to the same location.
              </p>
            </Animated>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingSteps;
