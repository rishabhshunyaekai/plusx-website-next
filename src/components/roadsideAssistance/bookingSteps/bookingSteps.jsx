import Image    from "next/image";
import style    from "./bookingSteps.module.css";
import Animated from "@/sharedComponents/animatedComponent/animated";
import step1    from "@/assets/images/ev-roadside-assistance-page/Plusx_electric_download_app_icon.webp";
import Arrow    from "@/assets/images/ev-roadside-assistance-page/plusx_electric_arrow_icon.webp";
// import Map      from "@/assets/images/ev-roadside-assistance-page/plusx_electric_location_icon.webp";
import location from "@/assets/images/landing-pages/rsa/Plusx_electric_charge_on_spot_icon.svg";
import Driver   from "@/assets/images/ev-roadside-assistance-page/Plusx_electric_Ev_driver_icon.webp";
import Car      from "@/assets/images/ev-roadside-assistance-page/Plusx_electric_onsite_ev_charging_icon.webp";
import RedirectToWhatsapp from "@/sharedComponents/whatsapp/RedirectToWhatsapp";
import CTAButton          from "@/sharedComponents/ctaButton/ctaButton";
// import { TbPhoneCall }      from "react-icons/tb";

function BookingSteps() {
  return (
    <section className={style.bookingSteps}>
      <div className="container">
        <div className="text-center">
          <Animated animation="fade" easing="ease-in" duration={1000}>
            <h2 className={style.bookingStepsHeading}>
              How to Book Emergency EV Charging <br className={style.headingBreakline}/> on the PlusX Electric App
            </h2>
            <p className={style.bookingStepsSubHeading}><strong>Here are the steps to book the service:</strong></p>
          </Animated>
        </div>

        <Animated className={style.mainSteps} animation="fade" easing="ease-in" duration={1000}>
          <div className={style.stepsCard}>
            <div className={style.stepsImage}>
              <Image src={step1} alt="PlusX Electric App" width={58} height={58} />
            </div>
            <p className={style.steps}>Book through the PlusX Electric app or share your location and details with us on WhatsApp</p>
          </div>
          <div className={style.stepsCard}>
            <div className={style.stepsArrowImage}>
              <Image src={Arrow} alt="Arrow" width={58} height={58} />
            </div>
          </div>
          <div className={style.stepsCard}>
            <div className={style.stepsImage}>
              <Image src={Driver} alt="PlusX Electric rescue team dispatch" width={58} height={58} />
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
              <Image src={location} alt="PlusX Electric On-site charging" width={58} height={58} />
            </div>
            <p className={style.steps}>On-site charging is done</p>
          </div>
          <div className={style.stepsCard}>
            <div className={style.stepsArrowImage}>
              <Image src={Arrow} alt="Arrow" width={58} height={58} />
            </div>
          </div>
          <div className={style.stepsCard}>
            <div className={style.stepsImage}>
              <Image src={Car} alt="PlusX Electric Jump-start" width={58} height={58} />
            </div>
            <p className={style.steps}>Jump-start if required, and you&apos;re ready to move again.</p>
          </div>
        </Animated>

        <div className="text-center">
          <Animated animation="fade" easing="ease-in" duration={1000}>
            <p className={style.bookingStepsFooter}>
              We have rescued 1,000+ EVs across Dubai and, based on our service records, typically reach customers within 60 minutes. Arrival <br className={style.footerBreakline}/>time may vary depending on location, traffic, weather, service availability, and other unforeseen conditions.
            </p>
            <div className={style.buttonContainer}>
              <a href="tel:+971543061473">Call Now</a>
              <RedirectToWhatsapp isShowIcon={false} text="Whatsapp" isRSA={true} />
              <CTAButton text="Open PlusX App" handler="roadsidePage" />
            </div>
          </Animated>
        </div>
      </div>
    </section>
  );
}

export default BookingSteps;
