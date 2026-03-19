import ServiceIconCard  from "@/sharedComponents/serviceIconCard/serviceIconCard";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
import EVCharge         from "@/assets/images/ev-charger-installation-page/ev-charge.svg";
import Additional       from "@/assets/images/ev-charger-installation-page/additional-team.svg";
import ThirdParty       from "@/assets/images/ev-charger-installation-page/third-party.svg";
import Noclear          from "@/assets/images/ev-charger-installation-page/no-clear.svg";

const valuesCardData = [
  {
    icon: EVCharge,
    text: (<><strong>Free Pickup & Delivery:</strong> We collect your car from home or office.</>),
  },
  {
    icon: Additional,
    text: (<><strong>360° Health Check:</strong> Full digital report with images every time.</>),
  },
  {
    icon: ThirdParty,
    text: (<><strong>DEWA-Approved CPO:</strong> Licensed EV Charge Point Operator in Dubai.</>),
  },
  {
    icon: Noclear,
    text: (<><strong>12-Month Warranty:</strong> All parts & labour fully guaranteed.</>),
  },
  {
    icon: Noclear,
    text: (<><strong>24/7 Support:</strong> Emergency EV & roadside assistance always on.</>),
  },
];

function Values() {
  return (
    <section className={`wrapper`}>
      <div className={`container`}>
        <SecondaryHeading title="What Makes Us Stand Out" />

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
