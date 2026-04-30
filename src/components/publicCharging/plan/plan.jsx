import style      from "./plan.module.css";
import Card       from "@/sharedComponents/benefitsCard/benefitsCard";
import Animated   from "@/sharedComponents/animatedComponent/animated";
import Available  from "@/assets/images/public-charging-page/Plusx_electric_station_availablity_icon.svg";
import Speed      from "@/assets/images/public-charging-page/Plusx_electric_estimated_time_icon.svg";
import Plans      from "@/assets/images/public-charging-page/plusx_eletric_ev_charger_icon.svg";

function Plan() {

const benefits = [
  { icon: Plans,      text: "Plan charging stops in advance" },
  { icon: Available,  text: "Compare multiple nearby stations" },
  { icon: Speed,      text: "Choose based on speed & availability" },
];
const isOdd = benefits.length % 2 !== 0;

  return (
    <section className={style.scenarios}>
      <div className="container">
        <Animated className={`${style.scenariosContent} order-2 lg:order-1`} animation="fade" easing="ease-in" duration={1000}>
          <h2 className={style.scenariosHeading}>How PlusX Electric Helps <br className={style.breakLine}/> EV Drivers Plan Routes</h2>
          <p className={style.scenariosIntro}>Planning charging stops is important for longer drives. Instead of relying on tools like Google Maps, which may<br className={style.breakLine} /> not show accurate EV data, use the PlusX Electric app. It shows public charging stations in real time <br className={style.breakLine} />and is updated every 15 days for better accuracy.</p>
          <p className={style.scenariosIntro}>Download the PlusX Electric app to quickly find chargers, check details, and plan your route with confidence.</p>
          <p className={style.scenariosIntro}><strong>You can:</strong></p>

          <div className={`grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 ${ isOdd ? "lg:grid-cols-3" : "lg:grid-cols-2" }`}>
            {benefits.map((value, index) => {
              const isLast = index === benefits.length - 1;
              return (
                <div key={index} className={ isOdd && isLast ? "md:col-span-2 lg:col-span-1" : "" }>
                  <Card iconSrc={value.icon} text={value.text} />
                </div>
              );
            })}
          </div>

          <p className={style.scenariosIntro2}>This helps EV drivers in Dubai plan daily travel and longer journeys with more confidence.</p>
        </Animated>
      </div>
    </section>
  );
}

export default Plan;
