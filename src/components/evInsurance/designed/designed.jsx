import style      from "./designed.module.css";
import Card       from "@/sharedComponents/benefitsCard/benefitsCard";
import Animated   from "@/sharedComponents/animatedComponent/animated";
import Insurance  from "@/assets/images/ev-insurance-page/Plusx_electric_ev_insurance_icon.svg";
import Third      from "@/assets/images/ev-insurance-page/Plusx_electric_third_party_ev_insurance_icon.svg";
import Coverage   from "@/assets/images/ev-insurance-page/Plusx_electric_coverage_option_icon.svg";

function Designed() {

const benefits = [
  { icon: Insurance,  text: "Comprehensive EV car insurance", alt : "Comprehensive EV car insurance" },
  { icon: Third,      text: "Third-party EV insurance liability cover", alt : "Third-party EV insurance liability cover" },
  { icon: Coverage,   text: "Coverage options for individual EV owners and fleet operators", alt : "Coverage options for individual EV owners and fleet operators" },
];
const isOdd = benefits.length % 2 !== 0;

  return (
    <section className={style.scenarios}>
      <div className="container">
        <Animated className={`${style.scenariosContent} order-2 lg:order-1`} animation="fade" easing="ease-in" duration={1000}>
          <h2 className={style.scenariosHeading}>EV Insurance Designed for <br className={style.breakLine}/> Electric Vehicles</h2>
          <p className={style.scenariosIntro}>EVs have special coverage needs. Insurance plans available on the PlusX Electric <br className={style.breakLine} />platform are designed to address EV ownership.</p>
          <p className={style.scenariosIntro}>Coverage options may include:</p>

          <div className={`grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 ${ isOdd ? "lg:grid-cols-3" : "lg:grid-cols-2" }`}>
            {benefits.map((value, index) => {
              const isLast = index === benefits.length - 1;
              return (
                <div key={index} className={ isOdd && isLast ? "md:col-span-2 lg:col-span-1" : "" }>
                  <Card iconSrc={value.icon} text={value.text} alt={value.alt} />
                </div>
              );
            })}
          </div>

          <p className={style.scenariosIntro2}>You can choose a plan based on your vehicle type, usage, and coverage.</p>
        </Animated>
      </div>
    </section>
  );
}

export default Designed;
