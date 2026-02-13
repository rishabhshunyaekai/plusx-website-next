import ServiceIconCard  from "@/sharedComponents/serviceIconCard/serviceIconCard";
import SecondHeading    from "@/sharedComponents/heading/secondaryHeading";
import CostEffective    from "@/assets/images/mobility-solutions-page/Icons/cost-effective.svg";
import App              from "@/assets/images/mobility-solutions-page/Icons/app.svg";
import Maintainance     from "@/assets/images/mobility-solutions-page/Icons/reduced-maintenance.svg";
import EcoFriendly      from "@/assets/images/mobility-solutions-page/Icons/eco-friendly rides.svg";

const valuesCardData = [
  {
    icon: CostEffective,
    text: "Cost-effective electric mobility",
  },
  {
    icon: App,
    text: "Easy app-based access and control",
  },
  {
    icon: Maintainance,
    text: "Reduced maintenance and fuel expenses",
  },
  {
    icon: EcoFriendly,
    text: "Quiet, smooth, and eco-friendly rides",
  },
];

function Values() {
  return (
    <section className={`wrapper`}>
      <div className={`container`}>
        <SecondHeading title="Benefits for Users" />
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
