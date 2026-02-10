import PublicCharger    from "@/assets/images/portable-charger-page/public-charger.svg";
import Infrastururecost from "@/assets/images/portable-charger-page/infrasturure-cost.svg";
import ElevenKWH        from "@/assets/images/portable-charger-page/11KWH.svg";
import FiftyKW          from "@/assets/images/portable-charger-page/50KW.svg";
import ServiceIconCard  from "@/sharedComponents/serviceIconCard/serviceIconCard";

const valuesCardData = [
  {
    icon: Infrastururecost,
    text: "No cost for infrastructure – You don't have to buy expensive charging stations or worry about how to set them up.",
  },
  {
    icon: PublicCharger,
    text: "Save Time Looking for Public Chargers – You won't have to look for an available charging station again.",
  },
  {
    icon: FiftyKW,
    text: "Get a fast and useful charge – You can get access to steady charge of 50KW of power.",
  },
  {
    icon: ElevenKWH,
    text: "11 kWh charging speed – Quick EV charging up to 11 kWh.",
  },
];

function Values() {
  return (
    <section className={`wrapper`}>
      <div className={`container`}>
        <div className={`grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-2`}>
          {valuesCardData.map((value, index) => (
            <ServiceIconCard key={index} iconSrc={value.icon} text={value.text} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values;
