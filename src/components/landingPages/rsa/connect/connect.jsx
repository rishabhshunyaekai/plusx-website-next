import styles               from "./connect.module.css";
import Animated             from "@/sharedComponents/animatedComponent/animated";
import CTAButton            from "@/sharedComponents/ctaButton/ctaButton";
import SecondaryHeading     from "@/sharedComponents/heading/secondaryHeading";
import RedirectToWhatsapp   from "@/sharedComponents/whatsapp/RedirectToWhatsapp";

function Connect() {

  return (
    <section className={styles.featuredService}>
      <div className={`container`}>
        <Animated animation="fade" easing="ease-in" duration={1000}>
          <SecondaryHeading title={"Is Your EV Battery Drained?"}/>
          <div className={styles.connectButtonContainer}>
            <CTAButton text="BOOK EV ROADSIDE SERVICE NOW" handler="appRedirect" />
            <RedirectToWhatsapp className={styles.innerClass} isShowIcon={true} text="CONNECT WITH US" />
          </div>
        </Animated>
      </div>
    </section>
  );
}

export default Connect;
