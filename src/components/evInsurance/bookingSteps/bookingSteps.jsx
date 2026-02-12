import Image      from "next/image";
import style      from "./bookingSteps.module.css";
import Animated   from "@/sharedComponents/animatedComponent/animated";
import step1      from "@/assets/images/ev-roadside-assistance-page/app.webp";
import Arrow      from "@/assets/images/ev-roadside-assistance-page/arrow.webp";
import Insurance  from "@/assets/images/ev-insurance-page/insurance-option.webp";
import FileDocs   from "@/assets/images/ev-insurance-page/file-docs.webp";
import Compare    from "@/assets/images/ev-insurance-page/compare.webp";

function BookingSteps() {
  return (
    <section className={`${style.bookingSteps}`}>
      <div className="container">
        <div className="text-center">
          <Animated animation="fade" easing="ease-in" duration={1000}>
            <h2 className={style.bookingStepsHeading}>
              Book EV Insurance in UAE With <br className={style.headingBreakline}/>PlusX Electric App
            </h2>
            <h3 className={style.bookingStepsSubHeading}><strong>Book EV Insurance in the UAE with the PlusX Electric App <br className={style.headingBreakline}/>Powered by Policybazaar</strong></h3>
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
              <Image src={Insurance} alt="Insurance" width={58} height={58} />
            </div>
            <p className={style.steps}>Select EV Insurance Option</p>
          </div>
          <div className={style.stepsCard}>
            <div className={style.stepsArrowImage}>
              <Image src={Arrow} alt="Arrow" width={58} height={58} />
            </div>
          </div>
          <div className={style.stepsCard}>
            <div className={style.stepsImage}>
              <Image src={FileDocs} alt="FileDocs" width={58} height={58} />
            </div>
            <p className={style.steps}>Fill in The Required Information</p>
          </div>
          <div className={style.stepsCard}>
            <div className={style.stepsArrowImage}>
              <Image src={Arrow} alt="Arrow" width={58} height={58} />
            </div>
          </div>
          <div className={style.stepsCard}>
            <div className={style.stepsImage}>
              <Image src={Compare} alt="Compare" width={58} height={58} />
            </div>
            <p className={style.steps}>Compare coverage & plan suitability based on your vehicle & usage</p>
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
