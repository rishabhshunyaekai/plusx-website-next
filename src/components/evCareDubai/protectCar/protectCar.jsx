import Image      from "next/image";
import style      from "./protectCar.module.css";
import image      from "@/assets/images/ev-care-dubai/wrapping.webp";
import Modal      from "@/assets/images/ev-care-dubai/ev-model.svg";
import Xpansion   from "@/assets/images/ev-care-dubai/expansion.svg";
import KM         from "@/assets/images/ev-care-dubai/daily-km.svg";
// import Modal      from "@/assets/images/ev-charger-installation-page/ev-modals.svg";
// import Xpansion   from "@/assets/images/ev-charger-installation-page/expansion.svg";
// import KM         from "@/assets/images/ev-charger-installation-page/daily-km.svg";
import Animated   from "@/sharedComponents/animatedComponent/animated";
import CTAButton  from "@/sharedComponents/ctaButton/ctaButton.jsx";

function ProtectCar() {
  return (
    <section className={style.scenarios}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          
            <Animated className={`${style.scenariosContent} order-2 lg:order-1`} animation="fade" easing="ease-in" duration={1000}>
              <h2 className={style.scenariosHeading}>Transform & Protect Your Car</h2>

              <p className={style.scenariosIntro}>Service My Car&apos;s professional wrapping team delivers showroom-quality results using premium materials — built for Dubai&apos;s extreme climate. Available for both EVs and ICE vehicles.</p>

              {/* <ul className={style.keyPoint}>
                <li>Full & Partial Body Wraps : Complete colour change or accent wraps — Matte, Gloss, Satin & Chrome in premium vinyl</li>
                <li>Paint Protection Film (PPF) : Invisible armour against stone chips, scratches & UV. Self-healing technology</li>
                <li>Ceramic Coating : Nano-ceramic protection — hydrophobic surface, deep gloss, up to 3-year durability</li>
                <li>Detailing & Paint Correction : Full interior & exterior restoration — scratch removal & showroom-finish polish</li>
              </ul> */}
              
              {/* <p className={style.scenariosIntro}>We help you choose the right EV charger for your electric vehicle and your site.</p>

              <p className={style.scenariosIntro}>Our team installs both AC chargers and DC chargers, depending on the requirement of charging speed.</p>

              <p className={style.scenariosIntro}>If you are not sure which charger type is right? We guide you based on: </p> */}
 
              <ul className={style.listContent}>
                <li className={style.list}>
                  <Image className={style.listmage} src={Modal} alt="ev modal" width={80} height={80}/> <p className={style.listPoints}><b>Matte Wrap</b> : Satin-smooth, zero glare finish</p>
                </li>
                <li className={style.list}>
                  <Image className={style.listmage} src={KM} alt="daily km" width={80} height={80}/> <p className={style.listPoints}><b>Gloss Wrap</b> : Mirror-like deep shine</p>
                </li>
                <li className={style.list}>
                  <Image className={style.listmage} src={Xpansion} alt="expansion" width={80} height={80}/> <p className={style.listPoints}><b>Chrome / Satin</b> : Metallic semi-gloss finish</p>
                </li>
                <li className={style.list}>
                  <Image className={style.listmage} src={Modal} alt="ev modal" width={80} height={80}/> <p className={style.listPoints}><b>PPF Guard</b> : Invisible paint protection</p>
                </li>
                <li className={style.list}>
                  <Image className={style.listmage} src={KM} alt="daily km" width={80} height={80}/> <p className={style.listPoints}><b>Ceramic Coating</b> : Long-lasting nano-ceramic protection for Dubai&apos;s heat</p>
                </li>
              </ul> 

              <div className={style.buttonContainer}>
                <CTAButton className={style.chargerButton} text="Book Wrapping Service" handler="scrollToCarServiceForm" />
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
                <Image src={image} alt="EV Roadside Assistance Dubai" width={555} height={455} />
              </div>
            </Animated>

        </div>
      </div>
    </section>
  );
}

export default ProtectCar;
