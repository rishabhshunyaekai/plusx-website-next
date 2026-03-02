import Link             from "next/link";
import Image            from "next/image";
import styles           from "./bookingCard.module.css";
import Animated         from "@/sharedComponents/animatedComponent/animated";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
import AppIcon          from "@/assets/images/landing-pages/on-demand/app.svg";
import ProductService   from "@/assets/images/landing-pages/charger-Installation/product-service.svg";
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
    icon        : ProductService,
    text        : "Select The products or service You are interested in",
    showStores  : false,
  },
  {
    icon        : TeamIcon,
    text        : "Our team will reach you to schedule free consultation or schedule delivery",
    showStores  : false,
  },
];

function BookingCard() {
  return (
    <section className={styles.featuredService}>
      <div className={`container ${styles.container}`}>
        <Animated animation="fade" easing="ease-in" duration={1000}>
          <SecondaryHeading title="To Buy EV Chargers, Adapters & Book Installation Service" />
        </Animated>
        
        <Animated className={styles.stepsGrid} animation="fade" easing="ease-in" duration={1000}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
                <Image src={step.icon} alt="icon" className={styles.icon} width={80} height={80} />
                <div className="">
                  <p className={styles.text}>{step.text}</p>
                  {step.showStores && (
                    <div className={`${styles.imageContainer}`}>
                      <Link href="https://apps.apple.com/in/app/plusx-electric/id6503144034" target="_blank" rel="noopener noreferrer">
                        <Image src={AppStore} alt="App Store" width={100} height={28} />
                      </Link>
                      <Link href="https://play.google.com/store/apps/details?id=com.shunyaekai.plusexelectric&hl=en&pli=1" target="_blank" rel="noopener noreferrer">
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
