import Image    from "next/image";
import style    from "./scenarios.module.css";
// import image    from "@/assets/images/ev-roadside-assistance-page/plusx_eletric_ev_roadside_rescue.webp";
import image    from "@/assets/images/ev-roadside-assistance-page/plusx_eletric_ev_roadside_rescue.png";
import Animated from "@/sharedComponents/animatedComponent/animated";

function Scenarios() {
  return (
    <section className={style.scenarios}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          
            <Animated className={`${style.scenariosContent} order-2 lg:order-1`} animation="fade" easing="ease-in" duration={1000}>
              <h2 className={style.scenariosHeading}>Why EVs Need a Different Kind of EV Roadside Assistance </h2>{/* <br className={style.breakLine}/> */}
              <p className={style.scenariosIntro}>EV roadside assistance is emergency support built specifically for electric vehicles. Traditional roadside assistance in Dubai usually defaults to towing, which is slow, expensive, and often unnecessary. Worse, most tow operators aren&apos;t trained for EVs, and improper towing can damage the EV&apos;s battery pack.</p>
              <p className={style.scenariosIntro}><strong>Our approach is simpler: we bring the charge to you</strong></p>
              <p className={style.scenariosFooter}>
                Our EV rescue team can service roadsides, public parking, villas, communities, warehouses or building parking areas and delivers up to 10 kWh of on-site EV charging directly into your vehicle — roughly 50 km of range, enough to reach home or the <a href="https://plusxelectric.com/public-ev-charging-stations" target="__blank" className={style.link}>nearest public charger</a>. If your 12V battery is dead (and about half of all electric car breakdowns in Dubai trace back to the 12V, not the main pack), we&apos;ll jump-start it on the spot.
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
                <Image src={image} alt="Emergency EV charging in Dubai using a portable Power Pod" width={555} height={555} />
              </div>
            </Animated>

        </div>
      </div>
    </section>
  );
}

export default Scenarios;
