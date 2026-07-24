import Image      from "next/image";
import style      from "./bookingSteps.module.css";
import Animated   from "@/sharedComponents/animatedComponent/animated";
import Arrow      from "@/assets/images/ev-roadside-assistance-page/plusx_electric_arrow_icon.webp";
import ChargeEV   from "@/assets/images/landing-pages/charger-Installation/plusx_eletric_ev_charger_icon.svg";
import FileDocs   from "@/assets/images/ev-insurance-page/Plusx_electric_file_docs_icon.webp";
import Call       from "@/assets/images/ev-charge-share-page/Plusx_electric_connect_ev_charger_icon.webp";
// import step1      from "@/assets/images/ev-roadside-assistance-page/Plusx_electric_download_app_icon.webp";
// import Compare    from "@/assets/images/ev-insurance-page/Plusx_electric_ev_insurance_plans_icon.webp";
// import Insurance  from "@/assets/images/ev-insurance-page/Plusx_electric_ev_insurance_option_icon.webp";
// import Residential from "@/assets/images/plusx-for-business-page/plusx_electric_ev_residential_icon.svg";

function BookingSteps() {
  return (
    <section className={`${style.bookingSteps}`}>
      <div className="container">
        <div className="text-center">
          <Animated animation="fade" easing="ease-in" duration={1000}>
            <h2 className={style.bookingStepsHeading}>
              From Enquiry to First Charge — How It Works
            </h2>
            <h3 className={style.bookingStepsSubHeading}>A simple 3-step process to get you charging</h3>
          </Animated>
        </div>

        <Animated className={style.mainSteps} animation="fade" easing="ease-in" duration={1000}>
          <div className={style.stepsCard}>
            <div className={style.stepsImage}>
              <Image src={ChargeEV} alt="Share Your EV & Charging Requirements" width={58} height={58} />
            </div>
            <p className={style.steps}><b>Share Your EV & Charging Requirements</b> <br />EV Share your EV make and model, daily driving
              distance, and where you plan to install or use the charger — at home, office, or commercial site.
            </p>
          </div>
          <div className={style.stepsCard}>
            <div className={style.stepsArrowImage}>
              <Image src={Arrow} alt="Arrow" width={58} height={58} />
            </div>
          </div>
          <div className={style.stepsCard}>
            <div className={style.stepsImage}>
              <Image src={Call} alt="Consultation and recommendation" width={58} height={58} />
            </div>
            <p className={style.steps}><b>Consultation and Recommendation</b> <br />Our team reviews your requirements and
              recommends the right charger from our range, based on your EV&apos;s onboard capacity and your charging needs.
            </p>
          </div>
          <div className={style.stepsCard}>
            <div className={style.stepsArrowImage}>
              <Image src={Arrow} alt="Arrow" width={58} height={58} />
            </div>
          </div>
          <div className={style.stepsCard}>
            <div className={style.stepsImage}>
              <Image src={FileDocs} alt="Optional Professional Installation" width={58} height={58} />
            </div>
            <p className={style.steps}><b>Optional Professional Installation</b> <br />If you need installation, our certified electricians handle wiring, mounting, and
              commissioning. Or just receive your charger and install it yourself.
            </p>
          </div>
          {/* <div className={style.stepsCard}>
            <div className={style.stepsArrowImage}>
              <Image src={Arrow} alt="Arrow" width={58} height={58} />
            </div>
          </div>
          <div className={style.stepsCard}>
            <div className={style.stepsImage}>
              <Image src={Compare} alt="Compare" width={58} height={58} />
            </div>
            <p className={style.steps}>Compare coverage & plan suitability based on your vehicle & usage</p>
          </div> */}
        </Animated>

        {/* <div className="text-center">
          <Animated animation="fade" easing="ease-in" duration={1000}>
            <p className={style.bookingStepsFooter}>
              The process takes just a few minutes. 
            </p>
          </Animated>
        </div> */}
      </div>
    </section>
  );
}

export default BookingSteps;
