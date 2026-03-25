"use client";

import styles               from "./connect.module.css";
import Animated             from "@/sharedComponents/animatedComponent/animated";
import CTAButton            from "@/sharedComponents/ctaButton/ctaButton";
import SecondaryHeading     from "@/sharedComponents/heading/secondaryHeading";
import useAdvertisingWpMess from "@/hooks/useAdvertisingWpMess";
import { BsWhatsapp }       from "react-icons/bs";
// import Whatsapp             from "@/assets/images/landing-pages/on-demand/whatsapp.svg";

function Connect() {
  const { whatsappUrl } = useAdvertisingWpMess();

  return (
    <section className={styles.featuredService}>
      <div className={`container`}>
        <Animated animation="fade" easing="ease-in" duration={1000}>
          {/* <h2 className={styles.title}>Get your EV charged wherever you are</h2> */}
          <SecondaryHeading title={"Get your EV charged wherever you are"}/>
          <div className={styles.connectButtonContainer}>
            <CTAButton text="BOOK POWER POD NOW" handler="appRedirect" />
            <a target="_blank" className={styles.innerClass} href={whatsappUrl} rel="noreferrer" id="whatsappIcon">
              {/* <Image src={Whatsapp} alt="Whatsapp" width={30} height={30} />CONNECT WITH US */}
              <BsWhatsapp /> CONNECT WITH US
            </a>
          </div>
        </Animated>
      </div>
    </section>
  );
}

export default Connect;
