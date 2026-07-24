import ServiceIconCard  from "@/sharedComponents/serviceIconCard/serviceIconCard";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
import EVCharge         from "@/assets/images/ev-charger-installation-page/plusx_eletric_ev_charger_icon.svg";
import Additional       from "@/assets/images/ev-charger-installation-page/plusx_eletric_team_icon.svg";
import ThirdParty       from "@/assets/images/ev-charger-installation-page/plusx_eletric_agency_icon.svg";
import Noclear          from "@/assets/images/ev-charger-installation-page/plusx_eletric_documents_icon.svg";

const valuesCardData = [
  {
    icon: EVCharge,
    alt : "Free Pickup & Delivery",
    text: (<><strong>Free Pickup & Delivery:</strong> We collect your car from home or office.</>),
  },
  {
    icon: Additional,
    alt : "360° Health Check",
    text: (<><strong>360° Health Check:</strong> Full digital report with images every time.</>),
  },
  {
    icon: ThirdParty,
    alt : "End-to-End Digital Experience",
    text: (<><strong>End-to-End Digital Experience: </strong> Book, track, and manage your entire car service digitally — zero manual follow-up needed.</>),
  },
  {
    icon: Noclear,
    alt : "12-Month Warranty",
    text: (<><strong>12-Month Warranty:</strong> All parts & labour fully guaranteed.</>),
  },
];

function Values() {
  return (
    <section className={`wrapper`}>
      <div className={`container`}>
        <SecondaryHeading title="How Service My Car stand out" />

        <div className={`grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2`}>
          {valuesCardData.map((value, index) => (
            <ServiceIconCard key={index} iconSrc={value.icon} text={value.text} alt={value.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values;
