import Image    from "next/image";
import style    from "./bookingSteps.module.css";
import Animated from "@/sharedComponents/animatedComponent/animated";
import step1    from "@/assets/images/ev-roadside-assistance-page/Plusx_electric_download_app_icon.webp";
import Arrow    from "@/assets/images/ev-roadside-assistance-page/plusx_electric_arrow_icon.webp";
import Map      from "@/assets/images/ev-roadside-assistance-page/plusx_electric_location_icon.webp";
import Driver   from "@/assets/images/ev-roadside-assistance-page/Plusx_electric_Ev_driver_icon.webp";
import Car      from "@/assets/images/ev-roadside-assistance-page/Plusx_electric_onsite_ev_charging_icon.webp";
import RedirectToWhatsapp from "@/sharedComponents/whatsapp/RedirectToWhatsapp";

function BookingSteps() {
  return (
    <section className={style.bookingSteps}>
      <div className="container">
        <div className="text-center">
          <Animated animation="fade" easing="ease-in" duration={1000}>
            <h2 className={style.bookingStepsHeading}>
              How to Book PlusX Electric EV Rescue 
            </h2>
            {/* <br className={style.headingBreakline}/> */}
            <h3 className={style.bookingStepsSubHeading}><strong>Here are the steps to book the service:</strong></h3>
          </Animated>
        </div>

        <Animated className={style.mainSteps} animation="fade" easing="ease-in" duration={1000}>
          <div className={style.stepsCard}>
            <div className={style.stepsImage}>
              <Image src={step1} alt="Download PlusX Electric app for EV breakdown assistance" width={58} height={58} />
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
              <Image src={Map} alt="Add your Dubai location for EV rescue booking" width={58} height={58} />
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
              <Image src={Driver} alt="PlusX Electric EV rescue team dispatched in Dubai" width={58} height={58} />
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
              <Image src={Car} alt="EV charged on site and ready to drive in Dubai" width={58} height={58} />
            </div>
            <p className={style.steps}>On-site charging is done, and you’re ready to move again</p>
          </div>
        </Animated>

        <div className="text-center">
          <Animated animation="fade" easing="ease-in" duration={1000}>
            <p className={style.bookingStepsFooter}>
              As per our service records, we typically reach customers <strong>within 60 minutes</strong>,<br className={style.footerBreakline}/> depending on location and unforeseen conditions.
            </p>
            <RedirectToWhatsapp className={style.chargerButton} isShowIcon={false} text="Get Emergency EV Help" isRSA={true} />
          </Animated>
        </div>
      </div>
    </section>
  );
}

export default BookingSteps;
