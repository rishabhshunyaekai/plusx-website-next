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
                      <Link href="https://apps.apple.com/in/app/plusx-electric/id6503144034" target="_blank" rel="noopener noreferrer" width={100} height={28} styles={{ marginRight: "15px" }}>
                        <Image src={AppStore} alt="App Store" />
                      </Link>
                      <Link href="https://play.google.com/store/apps/details?id=com.shunyaekai.plusexelectric&hl=en&pli=1" target="_blank" rel="noopener noreferrer"  width={100} height={28} styles={{ marginRight: "15px" }}>
                        <Image src={PlayStore} alt="Play Store" />
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
