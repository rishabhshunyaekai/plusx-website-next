import Link               from "next/link";
import ServiceIconCard    from "@/sharedComponents/serviceIconCard/serviceIconCard";
import SecondaryHeading   from "@/sharedComponents/heading/secondaryHeading";
import Quote              from "@/assets/images/ev-insurance-page/Plusx_electric_request_a_quote_icon.svg";
import CarRepair          from "@/assets/images/landing-pages/charger-Installation/plusx_eletric_car_repair_icon.svg";
import Techni             from "@/assets/images/ev-charger-installation-page/plusx_eletric_technician_icon.webp";
import Insurance          from "@/assets/images/ev-insurance-page/Plusx_electric_ev_insurance_option_icon.webp";
// import style              from "./values.module.css";
// import RedirectToWhatsapp from "@/sharedComponents/whatsapp/RedirectToWhatsapp";

// const content        = `With PlusX Electric, you don't need to face any of these issues. From consultation and DEWA \napprovals to installation, we take care of everything.`;
const valuesCardData = [
  {
    icon    : Quote,
    alt     : "Global certification",
    heading : `Global certification :`,
    text    : `Every PlusX EV charger is CE certified and ISO certified, meeting international electrical safety and quality standards.`,
  },
  {
    icon    : CarRepair,
    alt     : "One free roadside assistance service:",
    heading : `One free roadside assistance service :`,
    text    : <>Every PlusX charger purchase includes one complimentary <Link href="/ev-breakdown-assistance">EV roadside assistance service</Link>.</>,
  },
  {
    icon    : Techni,
    alt     : "One free preventive maintenance visit",
    heading : `One free preventive maintenance visit :`,
    text    : `Within the first year of purchase, we include one free preventive maintenance visit to inspect and verify your charger`,
  },
  {
    icon    : Insurance,
    alt     : "Compatible with every EV in the UAE",
    heading : `Compatible with every EV in the UAE :`,
    text    : `Type 2 (AC) and CCS2 (DC) connectors cover Tesla, BYD, Nissan, Audi, BMW, Mercedes, Polestar, Hyundai, Kia, Lucid, and Cadillac.`,
  },
];

function Values() {
  return (
    <section className={`wrapper`}>
      <div className={`container`}>
        <SecondaryHeading title={"Why Choose PlusX EV Chargers"} />
        <div className={`grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2`}>
          {valuesCardData.map((value, index) => (
            <ServiceIconCard key={index} iconSrc={value.icon} heading={value.heading} text={value.text} alt={value.alt} />
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
