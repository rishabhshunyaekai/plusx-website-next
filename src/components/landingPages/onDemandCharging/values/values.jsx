import ServiceIconCard  from "@/sharedComponents/serviceIconCard/serviceIconCard";
import PublicCharger    from "@/assets/images/portable-charger-page/infrasturure-cost.svg";
import Infrastururecost from "@/assets/images/portable-charger-page/public-charger.svg";

const valuesCardData = [
  {
    icon: PublicCharger,
    text: (<><strong>Convenience First:</strong> Get your EV charged wherever you are — no need to hunt for ev charging stations.</>),
  },
  {
    icon: Infrastururecost,
    text: (<><strong>Affordable & Transparent:</strong> Know your mobile EV charging service cost upfront — no hidden charges.</>),
  },
];

function Values() {
  return (
    <section className={`wrapper`}>
      <div className={`container`}>
        <div className={`grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2`}>
          {valuesCardData.map((value, index) => (
            <ServiceIconCard key={index} iconSrc={value.icon} text={value.text} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values;
