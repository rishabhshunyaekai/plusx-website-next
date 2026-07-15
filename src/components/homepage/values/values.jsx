// import style              from "./values.module.css";
import ServiceIconCard    from "@/sharedComponents/serviceIconCard/serviceIconCard";
// import SecondaryHeading   from "@/sharedComponents/heading/secondaryHeading";
import EVCharge           from "@/assets/images/ev-charger-installation-page/plusx_eletric_ev_charger_icon.svg";
import Additional         from "@/assets/images/ev-charger-installation-page/plusx_eletric_team_icon.svg";
import ThirdParty         from "@/assets/images/ev-charger-installation-page/plusx_eletric_agency_icon.svg";
import Noclear            from "@/assets/images/ev-charger-installation-page/plusx_eletric_documents_icon.svg";
// import RedirectToWhatsapp from "@/sharedComponents/whatsapp/RedirectToWhatsapp";

const content        = ``;
const valuesCardData = [
  {
    icon: EVCharge,
    text: <>10000+ EVs Charged <br /> Via Mobile/portable chargers</>,
  },
  {
    icon: Additional,
    text: <>10000+ EVs Rescued <br /> Drained Battery & Jump-Start Support </>,
  },
  {
    icon: ThirdParty,
    text: <>450+ Chargers Installed <br /> Across Villas, apartments, commercial buildings, warehouses</>,
  },
  {
    icon: Noclear,
    text: <>1,20,000+ EV 2- wheelers batteries swapped  <br /> Using mobile battery swapping stations</>,
  },
];

function Values() {
  return (
    <section className={`wrapper`}>
      <div className={`container`}>
        {/* <SecondaryHeading title={"PlusX Electric is one of the largest mobile EV charging service providers"} /> */}
        <div className={`grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2`}>
          {valuesCardData.map((value, index) => (
            <ServiceIconCard key={index} iconSrc={value.icon} text={value.text} />
          ))}
        </div>
        {/* <div className={style.buttonContainer}>
          <p className={style.introDescription} dangerouslySetInnerHTML={{ __html: content }}/>
          <RedirectToWhatsapp className={style.button} isShowIcon={false} text="Book Now" />
        </div> */}
      </div>
    </section>
  );
}

export default Values;
