import Link     from "next/link";
import Image    from "next/image";
import style    from "./scenarios.module.css";
import image    from "@/assets/images/tesla-ev-charging-page/plusx_electric_three_ways_charging.webp";
import Animated from "@/sharedComponents/animatedComponent/animated";

function Scenarios() {
  return (
    <section className={style.scenarios}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          
            <Animated className={`${style.scenariosContent} order-2 lg:order-1 lg:mt-5!`} animation="fade" easing="ease-in" duration={1000}>
              <h2 className={style.scenariosHeading}>Three Ways We Keep Your Tesla Charged</h2> 
                {/* <br className={style.breakLine}/> */}
              <p className={style.scenariosIntro}><strong>1. <Link href="/mobile-ev-charging-dubai">Tesla mobile charging at your doorstep:</Link></strong> Book a charge on the PlusX app and our team arrives in a mobile charging van with a Portable Power Pod to charge your Tesla at home, at the office or in your building's parking. Useful if you live in an apartment without a private charger.</p>
              <p className={style.scenariosIntro}><strong>2. <Link href="/ev-breakdown-assistance">Tesla roadside assistance:</Link></strong> charged on the spot If your Tesla runs out of battery on the road or in a car park, we charge it on the spot so you can drive away without a tow. If the low-voltage (12V) battery has died and the car won't power up, the jump-start is included in the same call-out.</p>
              <p className={style.scenariosIntro}><strong>3. Home charger installation for your Tesla:</strong> Our DEWA-approved team handles Tesla charger installation in Dubai for villas, apartments and commercial parking, whether it's a Tesla Wall Connector or any Type 2 charger. We first look at your parking and electrical supply, then recommend the right charger rather than just selling one.</p>

              {/* <ul className={style.scenariosList}>
                <li><Link href="/public-ev-charging-stations">Public charging</Link> points can be occupied during peak hours.</li>
                <li>Some chargers may be farther away.</li>
                <li>Most buildings have limited access to parking.</li>
                <li><Link href="/ev-charger-installation-uae">EV charger installation</Link>  in Dubai isn&apos;t possible for everyone due to building approvals, space limitations, or cost.</li>
              </ul>

              <p className={style.scenariosFooter}>These small issues can add friction to everyday EV usage.</p> */}
            </Animated>

            <Animated className="order-1 lg:order-2" animation="fade" easing="ease-in" duration={1000}>
              <div className={style.imageWrapper}>
                <Image src={image} alt="PlusX Electric Mobile EV Charging" width={402} height={230} />
              </div>
            </Animated>

        </div>
      </div>
    </section>
  );
}

export default Scenarios;
