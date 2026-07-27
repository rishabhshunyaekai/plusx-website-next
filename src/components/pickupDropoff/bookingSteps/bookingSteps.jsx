import Image    from "next/image";
import style    from "./bookingSteps.module.css";
import Animated from "@/sharedComponents/animatedComponent/animated";
import step1    from "@/assets/images/ev-roadside-assistance-page/Plusx_electric_download_app_icon.webp";
import Arrow    from "@/assets/images/ev-roadside-assistance-page/plusx_electric_arrow_icon.webp";
import Driver   from "@/assets/images/ev-roadside-assistance-page/Plusx_electric_Ev_driver_icon.webp";
import FileDocs from "@/assets/images/ev-insurance-page/Plusx_electric_file_docs_icon.webp";
import Calender from "@/assets/images/portable-charger-page/Plusx_electric_calender_icon.webp";

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
              <p className={style.bookingStepsSubHeading}>Booking is completed through the PlusX Electric app.</p>
            </Animated>
          </div>

          <Animated className={style.mainSteps} animation="fade" easing="ease-in" duration={1000}>
            <div className={style.stepsCard}>
              <div className={style.stepsImage}>
                <Image src={step1} alt="PlusX Electric App" width={58} height={58} />
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
                <Image src={Driver} alt="EV Pickup and Drop-Off Charging Service" width={58} height={58} />
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
                <Image src={FileDocs} alt="Booking EV pickup service by entering vehicle details and location" width={58} height={58} />
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
                <Image src={Calender} alt="Choosing a time slot for EV pickup and return charging service" width={58} height={58} />
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
