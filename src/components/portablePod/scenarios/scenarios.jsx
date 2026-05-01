import Link     from "next/link";
import Image    from "next/image";
import style    from "./scenarios.module.css";
import image    from "@/assets/images/portable-charger-page/Plusx_electric_Ev_charger_owner_challenges_section_image.webp";
import Animated from "@/sharedComponents/animatedComponent/animated";

function Scenarios() {
  return (
    <section className={style.scenarios}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          
            <Animated className={`${style.scenariosContent} order-2 lg:order-1 lg:mt-5!`} animation="fade" easing="ease-in" duration={1000}>
              <h2 className={style.scenariosHeading}>Challenges EV Owners Face <br className={style.breakLine}/>with Charging in Dubai</h2>

              <p className={style.scenariosIntro}>EV owners in Dubai often deal with practical charging challenges.</p>

              <ul className={style.scenariosList}>
                <li><Link href="/public-ev-charging-stations">Public charging</Link> points can be occupied during peak hours.</li>
                <li>Some chargers may be farther away.</li>
                <li>Most buildings have limited access to parking.</li>
                <li><Link href="/ev-charger-installation-uae">EV charger installation</Link>  in Dubai isn&apos;t possible for everyone due to building approvals, space limitations, or cost.</li>
              </ul>

              <p className={style.scenariosFooter}>These small issues can add friction to everyday EV usage.</p>
            </Animated>

            <Animated className="order-1 lg:order-2" animation="fade" easing="ease-in" duration={1000}>
              <div className={style.imageWrapper}>
                <Image src={image} alt="EV Roadside Assistance Dubai" width={402} height={230} />
              </div>
            </Animated>

        </div>
      </div>
    </section>
  );
}

export default Scenarios;
