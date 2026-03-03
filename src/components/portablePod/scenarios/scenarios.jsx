import Image    from "next/image";
import style    from "./scenarios.module.css";
import image    from "@/assets/images/portable-charger-page/challenges.webp";
import Animated from "@/sharedComponents/animatedComponent/animated";

function Scenarios() {
  return (
    <section className={style.scenarios}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          
            <Animated className={`${style.scenariosContent} order-2 lg:order-1`} animation="fade" easing="ease-in" duration={1000}>
              <h2 className={style.scenariosHeading}>Challenges EV Owners Face <br className={style.breakLine}/>with Charging in Dubai</h2>

              <p className={style.scenariosIntro}>EV owners in Dubai often deal with practical charging challenges.</p>

              <ul className={style.scenariosList}>
                <li>Public charging points can be occupied during peak hours.</li>
                <li>Some chargers may be farther away.</li>
                <li>Most buildings have limited access to parking.</li>
                <li>Home charger installation is not possible for everyone because of approvals, building limitations, or cost</li>
                <li>Vehicle not starting after battery depletion</li>
              </ul>

              <p className={style.scenariosFooter}>These small issues can add friction to everyday EV usage.</p>
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
