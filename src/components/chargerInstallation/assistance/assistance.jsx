import Image    from "next/image";
import style    from "./assistance.module.css";
import image    from "@/assets/images/ev-charger-installation-page/assistance.webp";
import Modal    from "@/assets/images/ev-charger-installation-page/ev-modals.svg";
import Xpansion from "@/assets/images/ev-charger-installation-page/expansion.svg";
import KM       from "@/assets/images/ev-charger-installation-page/daily-km.svg";
import Animated from "@/sharedComponents/animatedComponent/animated";
import CTAButton from "@/sharedComponents/ctaButton/ctaButton.jsx";

function Scenarios() {
  return (
    <section className={style.scenarios}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          
            <Animated className={`${style.scenariosContent} order-2 lg:order-1`} animation="fade" easing="ease-in" duration={1000}>
              <h2 className={style.scenariosHeading}>Get Professional Assistance in Selecting an Appropriate EV Charger</h2>

              <p className={style.scenariosIntro}>We don’t just install chargers like many other companies. We first educate our customers and then provide solutions
                based on their specific needs, from selecting the right charger to the final installation.</p>

              <p className={style.scenariosIntro}>We help you choose the right EV charger for your electric vehicle and your site.</p>

              <p className={style.scenariosIntro}>Our team installs both AC chargers and DC chargers, depending on the requirement of charging speed.</p>

              <p className={style.scenariosIntro}>If you are not sure which charger type is right? We guide you based on: </p>

              <ul className={style.listContent}>
                <li className={style.list}>
                  <Image className={style.listmage} src={Modal} alt="ev modal" width={80} height={80}/> <p className={style.listPoints}>Your EV model(s)</p>
                </li>
                <li className={style.list}>
                  <Image className={style.listmage} src={KM} alt="daily km" width={80} height={80}/> <p className={style.listPoints}>Daily kilometres driven</p>
                </li>
                <li className={style.list}>
                  <Image className={style.listmage} src={Xpansion} alt="expansion" width={80} height={80}/> <p className={style.listPoints}>Future expansion needs</p>
                </li>
              </ul>

              <div className={style.buttonContainer}>
                <CTAButton className={style.chargerButton} text="Book Free Consultation" handler="chargerInstallationPage" />
              </div>

              {/* <ul className={style.scenariosList}>
                <li>Battery drained faster than expected</li>
                <li>Vehicle parked for long periods without charging</li>
                <li><><a href="https://plusxelectric.com/public-ev-charging-stations" target="__blank" className={style.link}>Public charging station </a>unavailable or occupied</></li>
                <li>12V battery failure</li>
                <li>Vehicle not starting after battery depletion</li>
              </ul> */}

              {/* <p className={style.scenariosFooter}>
                If you face any of these issues, there’s no need to worry.
                <strong> PlusX Electric’s EV rescue service is here to help.
                We have already rescued more than 500 EVs across Dubai.</strong>
              </p> */}
            </Animated>

            <Animated className="order-1 lg:order-2" animation="fade" easing="ease-in" duration={1000}>
              <div className={style.imageWrapper}>
                <Image src={image} alt="EV Roadside Assistance Dubai" width={555} height={555} />
              </div>
            </Animated>

        </div>
      </div>
    </section>
  );
}

export default Scenarios;
