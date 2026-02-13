import ServiceIconCard  from "@/sharedComponents/serviceIconCard/serviceIconCard";
import EVCharge         from "@/assets/images/ev-charger-installation-page/ev-charge.svg";
import Additional       from "@/assets/images/ev-charger-installation-page/additional-team.svg";
import ThirdParty       from "@/assets/images/ev-charger-installation-page/third-party.svg";
import Noclear          from "@/assets/images/ev-charger-installation-page/no-clear.svg";

const valuesCardData = [
  {
    icon: EVCharge,
    text: "One firm for the charger supply",
  },
  {
    icon: Additional,
    text: "Additional team for installation",
  },
  {
    icon: ThirdParty,
    text: "Third-party services for approvals & compliance.",
  },
  {
    icon: Noclear,
    text: "No clear record of documents and accountability.",
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
