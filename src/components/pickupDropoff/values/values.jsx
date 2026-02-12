import ServiceIconCard  from "@/sharedComponents/serviceIconCard/serviceIconCard";
import Chargingstation  from "@/assets/images/pickup-dropoff-page/charging-station.svg";
import Infrastructure   from "@/assets/images/pickup-dropoff-page/infrastructure.svg";
import SavingTime       from "@/assets/images/pickup-dropoff-page/saving-time.svg";
import ChargingTime     from "@/assets/images/pickup-dropoff-page/charging-time.svg";

const valuesCardData = [
  {
    icon: Chargingstation,
    text: "No more worry about busy or faulty chargers, because we handle all the logistics.",
  },
  {
    icon: Infrastructure,
    text: "We will take your EV to public chargers and will manage all connections established safely.",
  },
  {
    icon: SavingTime,
    text: "You can complete your work, errands or free-time activities while we charge your EV in the background.",
  },
  {
    icon: ChargingTime,
    text: "You choose the best time that suits your schedule and lifestyle, and we will take care of the details.",
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
