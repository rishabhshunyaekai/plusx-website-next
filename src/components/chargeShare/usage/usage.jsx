import style        from "./usage.module.css";
import Animated     from "@/sharedComponents/animatedComponent/animated";
import Station      from "@/assets/images/homepage/station.svg";
import EvCarDriver  from "@/assets/images/homepage/ev-car-driver.svg";
import Booking      from "@/assets/images/homepage/booking.svg";
import Card         from "@/sharedComponents/benefitsCard/benefitsCard";

function Usage() {

  const benefits = [
    { icon: EvCarDriver,  text: "Charger owners list their private EV charger" },
    { icon: Booking,      text: "Set availability, choose the days and time slots that work for you" },
    { icon: Station,      text: "Get notified when a nearby EV owner requests access" },
  ];
  const isOdd = benefits.length % 2 !== 0;

  return (
    <section className={`${style.wrapper}`}>
      <div className={`container`}>

        <Animated className={`grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 ${ isOdd ? "lg:grid-cols-3" : "lg:grid-cols-2" }`}>
          {benefits.map((value, index) => {
            const isLast = index === benefits.length - 1;
            return (
              <div key={index} className={ isOdd && isLast ? "md:col-span-2 lg:col-span-1" : "" }>
                <Card iconSrc={value.icon} text={value.text} />
              </div>
            );
          })}
        </Animated>

      </div>
    </section>
  );
}

export default Usage;
