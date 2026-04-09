import Link                 from "next/link";
import styles               from "./connect.module.css";
import Animated             from "@/sharedComponents/animatedComponent/animated";
import CTAButton            from "@/sharedComponents/ctaButton/ctaButton";
import SecondaryHeading     from "@/sharedComponents/heading/secondaryHeading";
import { BsWhatsapp }       from "react-icons/bs";
// import RedirectToWhatsapp   from "@/sharedComponents/whatsapp/RedirectToWhatsapp";

function Connect() {
  const whatsappMessage = `🚨 Hi PlusX Electric Team! \nMy EV has broken down and I need emergency EV charging roadside assistance. 🔋📍`

  return (
    <section className={styles.featuredService}>
      <div className={`container`}>
        <Animated animation="fade" easing="ease-in" duration={1000}>
          <SecondaryHeading title={"Is Your EV Battery Drained?"}/>
          <div className={styles.connectButtonContainer}>
            <CTAButton text="BOOK EV ROADSIDE SERVICE NOW" handler="appRedirect" />
            <Link href={`https://api.whatsapp.com/send?phone=+971542796424&text=${whatsappMessage}`} target="__blank" className={styles.innerClass} rel="noreferrer" id="whatsappIcon">
             <BsWhatsapp /> CONNECT WITH US
            </Link>
            {/* <RedirectToWhatsapp className={styles.innerClass} isShowIcon={true} text="CONNECT WITH US" /> */}
          </div>
        </Animated>
      </div>
    </section>
  );
}

export default Connect;
