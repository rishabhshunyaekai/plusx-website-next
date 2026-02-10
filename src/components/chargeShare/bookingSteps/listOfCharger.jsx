import Image            from "next/image";
import style            from "./bookingSteps.module.css";
import Animated         from "@/sharedComponents/animatedComponent/animated";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
import step1            from "@/assets/images/ev-roadside-assistance-page/app.webp";
import Arrow            from "@/assets/images/ev-charge-share-page/arrow-white.webp";
import EVCharger        from "@/assets/images/ev-charge-share-page/ev-charger.webp";
import FileDocs         from "@/assets/images/ev-insurance-page/file-docs.webp";
import ChargerStation   from "@/assets/images/ev-charge-share-page/charger-station.webp";

function BookingSteps() {
  return (
    <>
      <SecondaryHeading title="How to List or Access Charger?" />;
      <section className={style.listingSection}>
        <div className="container">
          <div className="text-center">
            <Animated animation="fade" easing="ease-in" duration={1000}>
              <h2 className={style.listingStepHeading}>
                List Your Charger
              </h2>
              <h3 className={style.listingSubHeading}>The PlusX Electric app makes it easy to list your <br className={style.breakLine}/>private charger. Please follow steps</h3>
            </Animated>
          </div>

          <Animated className={style.mainSteps} animation="fade" easing="ease-in" duration={1000}>
            <div className={style.stepsCard}>
              <div className={style.stepsImage}>
                <Image src={step1} alt="step1" width={58} height={58} />
              </div>
              <p className={style.listingSteps}>Download the PlusX Electric App from the App Store or Play Store</p>
            </div>
            <div className={style.stepsCard}>
              <div className={style.stepsArrowImage}>
                <Image src={Arrow} alt="Arrow" width={58} height={58} />
              </div>
            </div>
            <div className={style.stepsCard}>
              <div className={style.stepsImage}>
                <Image src={EVCharger} alt="EVCharger" width={58} height={58} />
              </div>
              <p className={style.listingSteps}>Select EV Charge Share Option</p>
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
              <p className={style.listingSteps}>Fill in The Required Information</p>
            </div>
            <div className={style.stepsCard}>
              <div className={style.stepsArrowImage}>
                <Image src={Arrow} alt="Arrow" width={58} height={58} />
              </div>
            </div>
            <div className={style.stepsCard}>
              <div className={style.stepsImage}>
                <Image src={ChargerStation} alt="ChargerStation" width={58} height={58} />
              </div>
              <p className={style.listingSteps}>Your EV Charger Listing is Done</p>
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
