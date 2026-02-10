import BenefitsCard     from "@/sharedComponents/benefitsCard/benefitsCard";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
import ChargeEV         from "@/assets/images/landing-pages/charger-Installation/charge-ev.svg";
import CarRepair        from "@/assets/images/landing-pages/charger-Installation/car-repair.svg";
import Maintaince       from "@/assets/images/landing-pages/charger-Installation/maintaince.svg";

const benefits = [
  { icon: ChargeEV,   text: "3 Years Warranty" },
  { icon: CarRepair,  text: "1 Free Roadside Assistance Service for the First Year" },
  { icon: Maintaince, text: "1 Free Preventive Maintenance in  The First Year" },
];
const isOdd = benefits.length % 2 !== 0;

function Benefits() {
  return (
    <section className={`wrapper`}>
      <div className={`container`}>
        <SecondaryHeading title={`Additional Benefits With Every EV Charger Purchase`} />
        <div className={`grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 ${ isOdd ? "lg:grid-cols-3" : "lg:grid-cols-2" }`}>
          {benefits.map((value, index) => {
            const isLast = index === benefits.length - 1;
            return (
              <div key={index} className={ isOdd && isLast ? "md:col-span-2 lg:col-span-1" : "" }>
                <BenefitsCard iconSrc={value.icon} text={value.text} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
