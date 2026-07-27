import Image    from "next/image";
import style    from "./scenarios.module.css";
import image    from "@/assets/images/ev-roadside-assistance-page/plusx_eletric_ev_roadside_rescue.webp";
import Animated from "@/sharedComponents/animatedComponent/animated";

function Scenarios() {
  return (
    <section className={style.scenarios}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          
            <Animated className={`${style.scenariosContent} order-2 lg:order-1`} animation="fade" easing="ease-in" duration={1000}>
              <h2 className={style.scenariosHeading}>Why EVs Need a Different Kind of Roadside Rescue </h2>{/* <br className={style.breakLine}/> */}
              <p className={style.scenariosIntro}>A petrol car runs out of fuel, you grab a jerry can — problem solved. An electric car is different. Traditional EV roadside assistance in Dubai usually defaults to towing, which is slow, expensive, and often unnecessary. Worse, most tow operators aren&apos;t trained for EVs, and improper towing can the EV&apos;s battery pack.</p>
              <p className={style.scenariosIntro}><strong>Our approach is simpler: we bring the charge to you</strong></p>
              <p className={style.scenariosFooter}>
                Our mobile EV rescue unit can service roadsides, public parking, villas, communities, warehouses or building parking areas and  delivers up to 10 kWh of on-site EV charging directly into your vehicle — roughly 50 km of range, enough to reach home or the nearest public charger. If your 12V battery is dead (and about half of all electric car breakdowns in Dubai trace back to the 12V, not the main pack), we&apos;ll jump-start it on the spot. No tow truck. No long wait. No damaged drivetrain. Just a team that actually knows EVs.
              </p>
              {/* <ul className={style.scenariosList}>
                <li>Battery drained faster than expected</li>
                <li>Vehicle parked for long periods without charging</li>
                <li><><a href="https://plusxelectric.com/public-ev-charging-stations" target="__blank" className={style.link}>Public charging station </a>unavailable or occupied</></li>
                <li>12V battery failure</li>
                <li>Vehicle not starting after battery depletion</li>
              </ul> */}
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
