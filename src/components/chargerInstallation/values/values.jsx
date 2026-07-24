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
    text: "Dealing with one vendor for charger supply",
    alt : "Dealing with one vendor for charger supply",
  },
  {
    icon: Additional,
    text: "Hiring a separate team for installation",
    alt : "Hiring a separate team for installation",
  },
  {
    icon: ThirdParty,
    text: "Another agency for DEWA approvals",
    alt : "Another agency for DEWA approvals",
  },
  {
    icon: Noclear,
    text: "No single record of documents or accountability",
    alt : "No single record of documents or accountability",
  },
];

function Values() {
  return (
    <section className={`wrapper`}>
      <div className={`container`}>
        <SecondaryHeading title={"Common EV Charger Installation Challenges in Dubai"} />
        <div className={`grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2`}>
          {valuesCardData.map((value, index) => (
            <ServiceIconCard key={index} iconSrc={value.icon} text={value.text} alt={value.alt} />
          ))}
        </div>
        <div className={style.buttonContainer}>
          <p className={style.introDescription} dangerouslySetInnerHTML={{ __html: content }}/>
          <RedirectToWhatsapp className={style.button} isShowIcon={false} text="Book Free Consultation" />
        </div>
      </div>
    </section>
  );
}

export default Values;
