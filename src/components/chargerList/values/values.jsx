import style              from "./values.module.css";
import ServiceIconCard    from "@/sharedComponents/serviceIconCard/serviceIconCard";
import SecondaryHeading   from "@/sharedComponents/heading/secondaryHeading";
import EVCharge           from "@/assets/images/ev-charger-installation-page/plusx_eletric_ev_charger_icon.svg";
import Additional         from "@/assets/images/ev-charger-installation-page/plusx_eletric_team_icon.svg";
import ThirdParty         from "@/assets/images/ev-charger-installation-page/plusx_eletric_agency_icon.svg";
import Noclear            from "@/assets/images/ev-charger-installation-page/plusx_eletric_documents_icon.svg";
import RedirectToWhatsapp from "@/sharedComponents/whatsapp/RedirectToWhatsapp";

const content        = `With PlusX Electric, you don't need to face any of these issues. From consultation and DEWA \napprovals to installation, we take care of everything.`;
const valuesCardData = [
  {
    icon: EVCharge,
    text: <><b>Global certification :</b> Every PlusX EV charger is CE certified and ISO certified, meeting international electrical safety and quality standards.</>,
  },
  {
    icon: Additional,
    text: <><b>One year of free roadside assistance :</b> Every PlusX charger purchase includes complimentary EV roadside assistance for the first year, anywhere in the UAE.</>,
  },
  {
    icon: ThirdParty,
    text: <><b>One free preventive maintenance visit :</b> Within the first year of purchase, we include one free preventive maintenance visit to inspect and verify your charger</>,
  },
  {
    icon: Noclear,
    text: <><b>Compatible with every EV in the UAE :</b> Type 2 (AC) and CCS2 (DC) connectors cover Tesla, BYD, Nissan, Audi, BMW, Mercedes, Polestar, Hyundai, Kia, Lucid, and Cadillac.</>,
  },
];

function Values() {
  return (
    <section className={`wrapper`}>
      <div className={`container`}>
        <SecondaryHeading title={"Why Choose PlusX EV Chargers"} />
        <div className={`grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2`}>
          {valuesCardData.map((value, index) => (
            <ServiceIconCard key={index} iconSrc={value.icon} text={value.text} />
          ))}
        </div>
        {/* <div className={style.buttonContainer}>
          <p className={style.introDescription} dangerouslySetInnerHTML={{ __html: content }}/>
          <RedirectToWhatsapp className={style.button} isShowIcon={false} text="Book Free Consultation" />
        </div> */}
      </div>
    </section>
  );
}

export default Values;
