import ServiceIconCard  from "@/sharedComponents/serviceIconCard/serviceIconCard";
import Residential      from "@/assets/images/plusx-for-business-page/residential.svg";
import Malls            from "@/assets/images/plusx-for-business-page/malls.svg";
import FleetOperator    from "@/assets/images/plusx-for-business-page/fleet-operator.svg";
import NounHotels       from "@/assets/images/plusx-for-business-page/hotel.svg";

const valuesCardData = [
  {
    icon: Residential,
    text: "Residential and Commercial Buildings",
  },
  {
    icon: Malls,
    text: "Malls and Retail Spaces",
  },
  {
    icon: FleetOperator,
    text: "Fleet Operators",
  },
  {
    icon: NounHotels,
    text: "Hotels & Events",
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
