import ServiceIconCard  from "@/sharedComponents/serviceIconCard/serviceIconCard";
import EVCharge         from "@/assets/images/ev-charger-installation-page/ev-charge.svg";
import FastCharging     from "@/assets/images/ev-charger-installation-page/fast-charging.svg";
import CostEffective    from "@/assets/images/ev-charger-installation-page/cost-effective.svg";
import HassleFree       from "@/assets/images/ev-charger-installation-page/hassle-free-experience.svg";

const valuesCardData = [
  {
    icon: EVCharge,
    text: "Charge your EV overnight or anytime without visiting public stations.",
  },
  {
    icon: FastCharging,
    text: "Faster Charging Speeds – home chargers are more powerful than standard sockets.",
  },
  {
    icon: CostEffective,
    text: "Cost-Effective – save on charging costs over time compared to public station rates.",
  },
  {
    icon: HassleFree,
    text: "Hassle-Free Experience – no waiting in queues or relying on availability.",
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
