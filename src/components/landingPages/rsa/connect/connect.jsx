import Link                 from "next/link";
import styles               from "./connect.module.css";
import Animated             from "@/sharedComponents/animatedComponent/animated";
import SecondaryHeading     from "@/sharedComponents/heading/secondaryHeading";
import { BsWhatsapp }       from "react-icons/bs";
import { TbPhoneCall }      from "react-icons/tb";
// import CTAButton            from "@/sharedComponents/ctaButton/ctaButton";
// import RedirectToWhatsapp   from "@/sharedComponents/whatsapp/RedirectToWhatsapp";

function Connect() {
  const whatsappMessage = `🚨 Hi PlusX Electric Team! \nMy EV has broken down and I need emergency EV charging roadside assistance. 🔋📍`

  return (
    <section className={styles.featuredService}>
      <div className={`container`}>
        <Animated animation="fade" easing="ease-in" duration={1000}>
          <SecondaryHeading title={"Is Your EV Battery Drained?"}/>
          <div className={styles.connectButtonContainer}>
            <a href="tel:+971543061473" className={styles.innerClass}><TbPhoneCall /> Call Now</a>
            <Link href={`https://api.whatsapp.com/send?phone=+971543061473&text=${whatsappMessage}`} target="__blank" className={styles.innerClass} rel="noreferrer" id="whatsappIcon">
               <BsWhatsapp /> CONNECT WITH US
            </Link>
            {/* <CTAButton text="BOOK EV ROADSIDE SERVICE NOW" handler="appRedirect" />
            <RedirectToWhatsapp className={styles.innerClass} isShowIcon={true} text="CONNECT WITH US" /> */}
          </div>
        </Animated>
      </div>
    </section>
  );
}

export default Connect;
