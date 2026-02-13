import BenefitsCard     from "@/sharedComponents/benefitsCard/benefitsCard";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
import Animated         from "@/sharedComponents/animatedComponent/animated";
import ChargeEV         from "@/assets/images/landing-pages/charger-Installation/charge-ev.svg";
import CarRepair        from "@/assets/images/landing-pages/charger-Installation/car-repair.svg";
import Maintaince       from "@/assets/images/landing-pages/charger-Installation/maintaince.svg";
import { Fragment } from "react";

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
        <SecondaryHeading title={`Get Additional Benefits with\n PlusX Electric EV Charger Installation`} />

        <p className="!pb-8 text-center">PlusX Electric offers more than just installation. You get an end-to-end<br className="hidden md:block"/> reliable, and transparent service experience</p>

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
