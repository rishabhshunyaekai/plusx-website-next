import Link             from "next/link";
import Image            from "next/image";
import styles           from "./bookingCard.module.css";
import Animated         from "@/sharedComponents/animatedComponent/animated";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
import AppIcon          from "@/assets/images/landing-pages/on-demand/Plusx_electric_download_app_icon.svg";
import ProductService   from "@/assets/images/landing-pages/charger-Installation/Plusx_electric_product_services_icon.svg";
import TeamIcon         from "@/assets/images/landing-pages/on-demand/Plusx_electric_Ev_driver_icon.svg";
import PlayStore        from "@/assets/images/homepage/Plusx_electric_google_play_app_download_image_icon.svg"
import AppStore         from "@/assets/images/homepage/Plusx_electric_ios_app_store_download_image_icon.svg"
import { APPLE_STORE_URL, PLAY_STORE_URL } from "@/utils/helper";

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
                <Image src={step.icon} alt={step.text} className={styles.icon} width={80} height={80} />
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
