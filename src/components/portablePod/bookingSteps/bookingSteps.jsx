import Image    from "next/image";
import style    from "./bookingSteps.module.css";
import Animated from "@/sharedComponents/animatedComponent/animated";
import step1    from "@/assets/images/ev-roadside-assistance-page/app.webp";
import Arrow    from "@/assets/images/ev-roadside-assistance-page/arrow.webp";
import Driver   from "@/assets/images/ev-roadside-assistance-page/driver.webp";
import Pod      from "@/assets/images/portable-charger-page/pod.webp";
import Calender from "@/assets/images/portable-charger-page/calender.webp";

function BookingSteps() {
  return (
    <section className={style.wrapper}>
      <div className={`${style.bookingSteps}`}>
        <div className="container">
          <div className="text-center">
            <Animated animation="fade" easing="ease-in" duration={1000}>
              <h2 className={style.bookingStepsHeading}>
                How to Book EV Charging in Dubai
              </h2>
              {/* <br className={style.headingBreakline}/> */}
              <h3 className={style.bookingStepsSubHeading}><strong>It is easy to book the EV charging at home Dubai with PlusX Electric.</strong></h3>
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
                <Image src={Pod} alt="Map" width={58} height={58} />
              </div>
              <p className={style.steps}>Select Portable Charger</p>
            </div>
            <div className={style.stepsCard}>
              <div className={style.stepsArrowImage}>
                <Image src={Arrow} alt="Arrow" width={58} height={58} />
              </div>
            </div>
            <div className={style.stepsCard}>
              <div className={style.stepsImage}>
                <Image src={Calender} alt="Driver" width={58} height={58} />
              </div>
              <p className={style.steps}>Fill Given Information & Select Available Date & Time Slot</p>
            </div>
            <div className={style.stepsCard}>
              <div className={style.stepsArrowImage}>
                <Image src={Arrow} alt="Arrow" width={58} height={58} />
              </div>
            </div>
            <div className={style.stepsCard}>
              <div className={style.stepsImage}>
                <Image src={Driver} alt="Car" width={58} height={58} />
              </div>
              <p className={style.steps}>Our team will reach you at your scheduled date & time to charge your EV</p>
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
      </div>
    </section>
  );
}

export default BookingSteps;
