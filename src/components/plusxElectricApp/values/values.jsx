import SecondaryHeading   from "@/sharedComponents/heading/secondaryHeading";
import ValueIconCard      from "./valueCard/valueCard";
import EVCharge           from "@/assets/images/ev-charger-installation-page/plusx_eletric_ev_charger_icon.svg";
import Booking            from "@/assets/images/homepage/plusx_electric_EVs_Charged_by_Power_POD_icon.svg";
import Techni             from "@/assets/images/ev-charger-installation-page/plusx_eletric_technician_icon.webp";
import Third              from "@/assets/images/ev-insurance-page/Plusx_electric_third_party_ev_insurance_icon.svg";
import step1              from "@/assets/images/ev-roadside-assistance-page/Plusx_electric_download_app_icon.webp";
import FleetOperator      from "@/assets/images/plusx-for-business-page/plusx_electric_fleet_operator_icon.svg";
import RedirectToWhatsapp from "@/sharedComponents/whatsapp/RedirectToWhatsapp";

// const content        = `With PlusX Electric, you don't need to face any of these issues. From consultation and DEWA \napprovals to installation, we take care of everything.`;
const valuesCardData = [
  {
    icon    : Booking,
    alt     : "All EV service in one App",
    heading : "All EV service in one App:",
    text    : "Charging, support, installation, insurance and more.",
  },
  {
    icon    : Techni,
    alt     : "24/7 support across Dubai",
    heading : "24/7 support across Dubai:",
    text    : "Get help whenever you need it, anywhere in Dubai.",
  },
  {
    icon    : step1,
    alt     : "Fast booking in seconds",
    heading : "Fast booking in seconds:",
    text    : "Book services quickly and get on the road sooner.",
  },
  {
    icon    : EVCharge,
    alt     : "Reliable charging help when you need it",
    heading : "Reliable charging help when you need it:",
    text    : "Stay charged and confident, always.",
  },
  {
    icon    : Third,
    alt     : "Manage your EV life more easily",
    heading : "Manage your EV life more easily:",
    text    : "Everything you need at your fingertips.",
  },
  {
    icon    : FleetOperator,
    alt     : "Trusted for everyday EV convenience",
    heading : "Trusted for everyday EV convenience:",
    text    : "Built for Dubai's growing EV community.",
  },
];

function Values() {
  return (
    <section className={`wrapper`}>
      <div className={`container`}>
        <SecondaryHeading title={"Why Every EV Owner in Dubai Should Have \nthe PlusX Electric App"} />
        <p className={`text-center mb-6!`}>More convenience. More support. A smarter EV experience</p>
        <div className={`grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3`}>
          {valuesCardData.map((value, index) => {
            const isLastOdd = valuesCardData.length % 2 !== 0 && index === valuesCardData.length - 1;
            // <ValueIconCard iconSrc={value.icon} heading={value.heading} text={value.text} alt={value.alt} />

            return (
              <div className={isLastOdd ? "lg:col-span-2" : ""} key={index}>
                <ValueIconCard iconSrc={value.icon} heading={value.heading} text={value.text} alt={value.alt} />
              </div>
            );
            
          })}
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
