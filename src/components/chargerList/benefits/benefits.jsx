import BenefitsCard     from "@/sharedComponents/landingPagesComponents/benefitsCard/benefitsCard";
import Information      from "@/assets/images/ev-insurance-page/Plusx_electric_file_docs_icon.svg";
import Quote            from "@/assets/images/ev-insurance-page/Plusx_electric_request_a_quote_icon.svg";
import Maintaince       from "@/assets/images/landing-pages/charger-Installation/plusx_eletric_ev_maintainace_icon.svg";
// import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
// import ChargeEV         from "@/assets/images/landing-pages/charger-Installation/plusx_eletric_ev_charger_icon.svg";
// import CarRepair        from "@/assets/images/landing-pages/charger-Installation/plusx_eletric_car_repair_icon.svg";

const benefits = [
  { icon: Information,  text: "CE certified" },
  { icon: Quote,        text: "ISO certified" },
  { icon: Maintaince,   text: "All EVs supported" },
];
const isOdd = benefits.length % 2 !== 0;

function Benefits() {
  return (
    <section className={`wrapper`}>
      <div className={`container`}>
        {/* <SecondaryHeading title={`Additional Benefits With Every EV Charger Purchase`} /> */}

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
