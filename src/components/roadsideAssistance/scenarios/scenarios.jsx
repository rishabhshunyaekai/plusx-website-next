import Image    from "next/image";
import style    from "./scenarios.module.css";
import image    from "@/assets/images/ev-roadside-assistance-page/scenerios.webp";
import Animated from "@/sharedComponents/animatedComponent/animated";

function Scenarios() {
  return (
    <section className={style.scenarios}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          
            <Animated className={`${style.scenariosContent} order-2 lg:order-1`} animation="fade" easing="ease-in" duration={1000}>
              <h2 className={style.scenariosHeading}>Common EV Breakdown <br className={style.breakLine}/>Scenarios in Dubai</h2>

              <p className={style.scenariosIntro}>EV owners commonly face roadside issues such as:</p>

              <ul className={style.scenariosList}>
                <li>Battery drained faster than expected</li>
                <li>Vehicle parked for long periods without charging</li>
                <li><><a href="https://plusxelectric.com/public-ev-charging-stations" target="__blank" className={style.link}>Public charging station </a>unavailable or occupied</></li>
                <li>12V battery failure</li>
                <li>Vehicle not starting after battery depletion</li>
              </ul>

              <p className={style.scenariosFooter}>
                If you face any of these issues, there’s no need to worry.
                <strong> PlusX Electric’s EV rescue service is here to help.
                We have already rescued more than 500 EVs across Dubai.</strong>
              </p>
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
