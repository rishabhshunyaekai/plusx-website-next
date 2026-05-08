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
    icon: Quote,
    text: <><b>Global certification :</b> Every PlusX EV charger is CE certified and ISO certified, meeting international electrical safety and quality standards.</>,
  },
  {
    icon: CarRepair,
    text: <><b>One year of free roadside assistance :</b> Every PlusX charger purchase includes complimentary EV roadside assistance for the first year, anywhere in the dubai.</>,
  },
  {
    icon: Techni,
    text: <><b>One free preventive maintenance visit :</b> Within the first year of purchase, we include one free preventive maintenance visit to inspect and verify your charger</>,
  },
  {
    icon: Insurance,
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
