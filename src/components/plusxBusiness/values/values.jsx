import ServiceIconCard  from "@/sharedComponents/serviceIconCard/serviceIconCard";
import Residential      from "@/assets/images/plusx-for-business-page/plusx_electric_ev_residential_icon.svg";
import Malls            from "@/assets/images/plusx-for-business-page/plusx_electric_malls_icon.svg";
import FleetOperator    from "@/assets/images/plusx-for-business-page/plusx_electric_fleet_operator_icon.svg";
import NounHotels       from "@/assets/images/plusx-for-business-page/plusx_electric_hotels_icon.svg";

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
