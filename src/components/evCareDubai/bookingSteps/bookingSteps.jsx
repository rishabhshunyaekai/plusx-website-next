import Image    from "next/image";
import style    from "./bookingSteps.module.css";
import Animated from "@/sharedComponents/animatedComponent/animated";
import step1    from "@/assets/images/ev-roadside-assistance-page/Plusx_electric_download_app_icon.webp";
import Arrow    from "@/assets/images/ev-roadside-assistance-page/plusx_electric_arrow_icon.webp";
import Map      from "@/assets/images/ev-roadside-assistance-page/plusx_electric_location_icon.webp";
import Charger  from "@/assets/images/ev-charger-installation-page/plusx_eletric_ev_charger_icon.webp";
import Techni   from "@/assets/images/ev-charger-installation-page/plusx_eletric_technician_icon.webp";
import RedirectToWhatsapp from "@/sharedComponents/whatsapp/RedirectToWhatsapp";

function BookingSteps() {
  return (
    <section className={style.bookingSteps}>
      <div className="container">
        <div className="text-center">
          <Animated animation="fade" easing="ease-in" duration={1000}>
            <h2 className={style.bookingStepsHeading}>
              How Service My Car Works
            </h2>
          </Animated>
        </div>

        <Animated className={style.mainSteps} animation="fade" easing="ease-in" duration={1000}>
          <div className={style.stepsCard}>
            <div className={style.stepsImage}>
              <Image src={step1} alt="Select package" width={58} height={58} />
            </div>
            <div className={style.textWrapper}>
              <p className={style.steps}><b>You Book</b></p>
              <p className={style.steps}>Select your package in 2 minutes via our form or the SMC app</p>
            </div>
          </div>
          <div className={style.stepsCard}>
            <div className={style.stepsArrowImage}>
              <Image src={Arrow} alt="Arrow" width={58} height={58} />
            </div>
          </div>
          <div className={style.stepsCard}>
            <div className={style.stepsImage}>
              <Image src={Charger} alt="Driver arrives at your door" width={58} height={58} />
            </div>
            <div className={style.textWrapper}>
              <p className={style.steps}><b>We Collect</b></p>
              <p className={style.steps}>Driver arrives at your door, inspects the car, sends a collection report</p>
            </div>
          </div>
          <div className={style.stepsCard}>
            <div className={style.stepsArrowImage}>
              <Image src={Arrow} alt="Arrow" width={58} height={58} />
            </div>
          </div>
          <div className={style.stepsCard}>
            <div className={style.stepsImage}>
              <Image src={Map} alt="health check" width={58} height={58} />
            </div>
            <div className={style.textWrapper}>
              <p className={style.steps}><b>We Service</b></p>
              <p className={style.steps}>360° health check done — digital quote sent, work only starts with your OK</p>
            </div>
          </div>
          <div className={style.stepsCard}>
            <div className={style.stepsArrowImage}>
              <Image src={Arrow} alt="Arrow" width={58} height={58} />
            </div>
          </div>
          <div className={style.stepsCard}>
            <div className={style.stepsImage}>
              <Image src={Techni} alt="washed & serviced" width={58} height={58} />
            </div>
            <div className={style.textWrapper}>
              <p className={style.steps}><b>We Deliver</b></p>
              <p className={style.steps}>Freshly washed & serviced car returned to your door. Pay online</p>
            </div>
          </div>
        </Animated>

        <div className="text-center !mt-8">
          <Animated animation="fade" easing="ease-in" duration={1000}>
            <RedirectToWhatsapp className={style.chargerButton} isShowIcon={false} text="Book a Service Now" isRSA={true}/>
          </Animated>
        </div>
      </div>
    </section>
  );
}

export default BookingSteps;
