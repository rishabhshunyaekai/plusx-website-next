import Link                 from "next/link";
import styles               from "./connect.module.css";
import Animated             from "@/sharedComponents/animatedComponent/animated";
import CTAButton            from "@/sharedComponents/ctaButton/ctaButton";
import SecondaryHeading     from "@/sharedComponents/heading/secondaryHeading";
import { BsWhatsapp }       from "react-icons/bs";
// import RedirectToWhatsapp   from "@/sharedComponents/whatsapp/RedirectToWhatsapp";

function Connect() {
  const whatsappMessage = `Hi PlusX Electric Team! ⚡ \nI'm interested in buying and installing a fixed EV Charger at my location in Dubai.`

  return (
    <section className={styles.featuredService}>
      <div className={`container`}>
        <Animated animation="fade" easing="ease-in" duration={1000}>
          <SecondaryHeading title={"Get EV Charger, Accessories & Installation Service"}/>
          <div className={styles.connectButtonContainer}>
            <CTAButton text="Buy EV Chargers" handler="evChargersPage" />
            <Link href={`https://api.whatsapp.com/send?phone=+971542796424&text=${whatsappMessage}`} target="__blank" className={styles.innerClass} rel="noreferrer" id="whatsappIcon">
             <BsWhatsapp /> CONNECT WITH US
            </Link>
            {/* <RedirectToWhatsapp className={styles.innerClass} isShowIcon={true} text="CONNECT WITH US"/> */}
          </div>
        </Animated>
      </div>
    </section>
  );
}

export default Connect;
