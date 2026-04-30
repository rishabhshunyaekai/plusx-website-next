import Link             from "next/link";
import BenefitsCard     from "@/sharedComponents/benefitsCard/benefitsCard";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
import ChargeEV         from "@/assets/images/landing-pages/charger-Installation/plusx_eletric_ev_charger_icon.svg";
import CarRepair        from "@/assets/images/landing-pages/charger-Installation/plusx_eletric_car_repair_icon.svg";
import Maintaince       from "@/assets/images/landing-pages/charger-Installation/plusx_eletric_ev_maintainace_icon.svg";

const benefits = [
  { icon: ChargeEV,   text: "3 Years Warranty" },
  { icon: CarRepair,  text: (
      <> 1 Free{" "}
        <Link href="/ev-breakdown-assistance">
          Roadside Assistance
        </Link>{" "}
        Service for the First Year
      </>
    )},
  { icon: Maintaince, text: "1 Free Preventive Maintenance in  The First Year" },
];
const isOdd = benefits.length % 2 !== 0;

function Benefits() {
  return (
    <section className={`wrapper`}>
      <div className={`container`}>
        <SecondaryHeading title={`What's Included With Every EV Charger Installation`} />

        <p className="!pb-8 text-center">PlusX Electric offers more than just installation. Every package includes a<br className="hidden md:block"/> reliable, end-to-end, and transparent service experience.</p>

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
