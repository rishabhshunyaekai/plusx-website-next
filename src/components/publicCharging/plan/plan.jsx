import style      from "./plan.module.css";
import Card       from "@/sharedComponents/benefitsCard/benefitsCard";
import Animated   from "@/sharedComponents/animatedComponent/animated";
import Available  from "@/assets/images/public-charging-page/available.svg";
import Speed      from "@/assets/images/public-charging-page/speed.svg";
import Plans      from "@/assets/images/public-charging-page/plan.svg";

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
          <p className={style.scenariosIntro}>It is important to plan for a good charging facility when planning longer trips. The PlusX Electric <br className={style.breakLine} />application can help you plan routes and locate charging stations along the way.</p>
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

          <p className={style.scenariosIntro2}>This will ensure that the everyday driving and intercity commuting <br className={style.breakLine} />of the EV owners in Dubai is more predictable.</p>
        </Animated>
      </div>
    </section>
  );
}

export default Plan;
