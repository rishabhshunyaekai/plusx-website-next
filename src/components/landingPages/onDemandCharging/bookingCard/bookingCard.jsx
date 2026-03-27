import Link             from "next/link";
import Image            from "next/image";
import styles           from "./bookingCard.module.css";
import Animated         from "@/sharedComponents/animatedComponent/animated";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
import AppIcon          from "@/assets/images/landing-pages/on-demand/app.svg";
import CalendarIcon     from "@/assets/images/landing-pages/on-demand/calender.svg";
import TeamIcon         from "@/assets/images/landing-pages/on-demand/driver.svg";
import PlayStore        from "@/assets/images/homepage/play-store.svg"
import AppStore         from "@/assets/images/homepage/app-store.svg"
import { APPLE_STORE_URL, PLAY_STORE_URL } from "@/utils/helper";

const steps = [
  {
    icon        : AppIcon,
    text        : "Download & Install The PlusX Electric App",
    showStores  : true,
  },
  {
    icon        : CalendarIcon,
    text        : "Select Available Date & Time Slot",
    showStores  : false,
  },
  {
    icon        : TeamIcon,
    text        : "Our team will reach you at your scheduled date and time to charge your EV",
    showStores  : false,
  },
];

function BookingCard() {
  return (
    <section className={styles.featuredService}>
      <div className={`container ${styles.container}`}>
        <Animated animation="fade" easing="ease-in" duration={1000}>
          <SecondaryHeading title="How to Book Portable Power Pod ?" />
        </Animated>
        
        <Animated className={styles.stepsGrid} animation="fade" easing="ease-in" duration={1000}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
                <Image src={step.icon} alt="icon" className={styles.icon} width={80} height={80} />
                <div className="">
                  <p className={styles.text}>{step.text}</p>
                  {step.showStores && (
                    <div className={`${styles.imageContainer}`}>
                      <Link href={APPLE_STORE_URL} target="_blank" rel="noopener noreferrer">
                        <Image src={AppStore} alt="App Store" width={100} height={28} />
                      </Link>
                      <Link href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                        <Image src={PlayStore} alt="Play Store" width={100} height={28} />
                      </Link>
                    </div>
                  )}
                </div>
            </div>
          ))}
        </Animated>
      </div>
    </section>
  );
}

export default BookingCard;
