import Image    from "next/image";
import style    from "./whyChooseService.module.css";
import image    from "@/assets/images/pickup-dropoff-page/pickup.webp";
import Animated from "@/sharedComponents/animatedComponent/animated";

function WhyChooseService() {
  return (
    <section className={style.scenarios}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          
            <Animated className={`${style.scenariosContent} order-2 lg:order-1`} animation="fade" easing="ease-in" duration={1000}>
              <h2 className={style.scenariosHeading}>Why EV Owners Choose This Service</h2>
              <p className={style.scenariosIntro}>The problems of waiting time, peak-hour congestion, and access limitations may be associated with public charging in Dubai. Not every residential or commercial building offers easy access to charging.</p>
              <p className={style.scenariosIntro}>The PlusX Electric eliminates these obstacles with an organized, stable pickup-and-return Tesla valet charging model</p>

              <ul className={style.scenariosList}>
                <li>Professionals with limited time during workdays</li>
                <li>Residents without direct charger access</li>
                <li>EV owners who prefer not to wait at charging stations</li>
                <li>Customers managing multiple commitments</li>
              </ul>

              <p className={style.scenariosFooter}>Your vehicle gets charged while you focus on your priorities.</p>
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

export default WhyChooseService;

// import Modal    from "@/assets/images/ev-charger-installation-page/ev-modals.svg";
// import Xpansion from "@/assets/images/ev-charger-installation-page/expansion.svg";
// import KM       from "@/assets/images/ev-charger-installation-page/daily-km.svg";
// import CTAButton from "@/sharedComponents/ctaButton/ctaButton.jsx";
{/* <ul className={style.listContent}>
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
</div> */}