import Image    from "next/image";
import style    from "./bookingSteps.module.css";
import Animated from "@/sharedComponents/animatedComponent/animated";
import step1    from "@/assets/images/ev-roadside-assistance-page/Plusx_electric_download_app_icon.webp";
import Arrow    from "@/assets/images/ev-charge-share-page/plusx_electric_arrow_white_icon.webp";
// import Map      from "@/assets/images/ev-roadside-assistance-page/plusx_electric_location_icon.webp";
import location from "@/assets/images/landing-pages/rsa/Plusx_electric_charge_on_spot_icon.svg";
import Driver   from "@/assets/images/ev-roadside-assistance-page/Plusx_electric_Ev_driver_icon.webp";
import Car      from "@/assets/images/ev-roadside-assistance-page/Plusx_electric_onsite_ev_charging_icon.webp";
import EVCharger from "@/assets/images/ev-charge-share-page/Plusx_electric_ev_charge_share_icon.webp";
// import RedirectToWhatsapp from "@/sharedComponents/whatsapp/RedirectToWhatsapp";
// import CTAButton          from "@/sharedComponents/ctaButton/ctaButton";
// import { TbPhoneCall }      from "react-icons/tb";

function BookingSteps() {
  return (
    <>
      <section className={style.listingSection}>
        <div className="container">
          <div className="text-center">
            <Animated animation="fade" easing="ease-in" duration={1000}>
              <h2 className={style.listingStepHeading}>
                How It Works
              </h2>
              {/* <p className={style.listingSubHeading}>The PlusX Electric app makes it easy to list your <br className={style.breakLine}/>private charger. Please follow steps</p> */}
            </Animated>
          </div>

          <Animated className={style.mainSteps} animation="fade" easing="ease-in" duration={1000}>
            <div className={style.stepsCard}>
              <div className={style.stepsImage}>
                <Image src={step1} alt="Download PlusX Electric App" width={58} height={58} />
              </div>
              <p className={style.listingSteps}>Book on the PlusX app, WhatsApp or call us. Share your location (including the basement level and bay number)</p>
            </div>
            <div className={style.stepsCard}>
              <div className={style.stepsArrowImage}>
                <Image src={Arrow} alt="Arrow" width={58} height={58} />
              </div>
            </div>
            <div className={style.stepsCard}>
              <div className={style.stepsImage}>
                <Image src={Driver} alt="Our technician arrives in a PlusX mobile charging van" width={58} height={58} />
              </div>
              <p className={style.listingSteps}>Our technician arrives in a PlusX mobile charging van</p>
            </div>
            <div className={style.stepsCard}>
              <div className={style.stepsArrowImage}>
                <Image src={Arrow} alt="Arrow" width={58} height={58} />
              </div>
            </div>
            <div className={style.stepsCard}>
              <div className={style.stepsImage}>
                <Image src={EVCharger} alt="PlusX Electric On-site charging" width={58} height={58} />
              </div>
              <p className={style.listingSteps}>We plug into your Tesla's charge port and add enough range to get you moving, or the full top-up you booked</p>
            </div>
            <div className={style.stepsCard}>
              <div className={style.stepsArrowImage}>
                <Image src={Arrow} alt="Arrow" width={58} height={58} />
              </div>
            </div>
            <div className={style.stepsCard}>
              <div className={style.stepsImage}>
                <Image src={Car} alt="PlusX Electric app" width={58} height={58} />
              </div>
              <p className={style.listingSteps}>Pay through the app</p>
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
    </>
  );
}

export default BookingSteps;