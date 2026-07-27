import Image      from "next/image";
import style      from "./bookingSteps.module.css";
import Animated   from "@/sharedComponents/animatedComponent/animated";
import step1      from "@/assets/images/ev-roadside-assistance-page/Plusx_electric_download_app_icon.webp";
import Arrow      from "@/assets/images/ev-roadside-assistance-page/plusx_electric_arrow_icon.webp";
import Insurance  from "@/assets/images/ev-insurance-page/Plusx_electric_ev_insurance_option_icon.webp";
import FileDocs   from "@/assets/images/ev-insurance-page/Plusx_electric_file_docs_icon.webp";
import Compare    from "@/assets/images/ev-insurance-page/Plusx_electric_ev_insurance_plans_icon.webp";

function BookingSteps() {
  return (
    <section className={`${style.bookingSteps}`}>
      <div className="container">
        <div className="text-center">
          <Animated animation="fade" easing="ease-in" duration={1000}>
            <h2 className={style.bookingStepsHeading}>
              Smooth EV Insurance <br className={style.headingBreakline}/>Digital Process
            </h2>
            <p className={style.bookingStepsSubHeading}>EV car insurance in the UAE does not necessarily have<br className={style.headingBreakline}/> to be time-consuming.</p>
          </Animated>
        </div>

        <Animated className={style.mainSteps} animation="fade" easing="ease-in" duration={1000}>
          <div className={style.stepsCard}>
            <div className={style.stepsImage}>
              <Image src={step1} alt="Download PlusX Electric App " width={58} height={58} />
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
              <Image src={Insurance} alt="EV Insurance Option" width={58} height={58} />
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
              <Image src={FileDocs} alt="Required Information" width={58} height={58} />
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
              <Image src={Compare} alt="Compare coverage & plan suitability based on your vehicle & usage" width={58} height={58} />
            </div>
            <p className={style.steps}>Compare coverage & plan suitability based on your vehicle & usage</p>
          </div>
        </Animated>

        <div className="text-center">
          <Animated animation="fade" easing="ease-in" duration={1000}>
            <p className={style.bookingStepsFooter}>
              The process takes just a few minutes. {/* <br className={style.footerBreakline}/> */}
            </p>
          </Animated>
        </div>
      </div>
    </section>
  );
}

export default BookingSteps;
