import styles           from "./servicesCard/servicesCard.module.css";
import ServiceCard      from "./servicesCard/servicesCard";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
import PortablePod      from "@/assets/images/landing-pages/brands-logo/ServicesImage/Plusx_electric_mobile_ev_charging_service.webp";
import Roadside         from "@/assets/images/landing-pages/brands-logo/ServicesImage/Plusx_electric_ev_breakdown_assistance_service.webp";
import Charger          from "@/assets/images/homepage/Plusx_electric_ev_charger_installation_homepage_icon.png";
import Insurance        from "@/assets/images/homepage/Plusx_electric_ev_insurance_homepage_icon.png";
import Share            from "@/assets/images/homepage/Plusx_electric_ev_charge_share_card_icon.png";
import Charging         from "@/assets/images/homepage/Plusx_electric_public_ev_charging_homepage_icon.png";
import BuyCharger       from "@/assets/images/ev-charger-installation-page/plusx_eletric_ev_ac_dc_charger_image.webp";

const services = [
  {
    title       : "Mobile & Portable EV Charging",
    description : "On-demand charging where you are.",
    imgSrc      : PortablePod,
    // buttonText  : "Know More",
    // link        : "/mobile-ev-charging-dubai"
  },
  {
    title       : "EV Roadside Assistance",
    description : "Quick help, whenever you need it.",
    imgSrc      : Roadside,
    // buttonText  : "Know More",
    // link        : "/ev-breakdown-assistance"
  },
  {
    title       : "Charger Installation",
    description : "Professional home and business installation.",
    imgSrc      : Charger,
    // buttonText  : "Know More",
    // link        : "/ev-charger-installation-uae"
  },
  {
    title       : "Buy AC & DC Chargers",
    description : "Shop trusted chargers for home and business.",
    imgSrc      : BuyCharger,
    // buttonText  : "Know More",
    // link        : "/ev-charger-installation-uae/ac-dc-ev-chargers"
  },
  {
    title       : "EV Insurance",
    description : "Get tailored insurance for your EV.",
    imgSrc      : Insurance,
    // buttonText  : "Know More",
    // link        : "/ev-car-insurance"
  },
  {
    title       : "Public Charging Stations",
    description : "Find and navigate charging stations across Dubai.",
    imgSrc      : Charging,
    // buttonText  : "Know More",
    // link        : "/public-ev-charging-stations"
  },
  {
    title       : "List Your Private Chargers",
    description : "Earn by sharing your chargers with the EV community.",
    imgSrc      : Share,
    // buttonText  : "Know More",
    // link        : "/ev-charge-share"
  },
];

function OtherServices() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SecondaryHeading title="App Features" />
        <p className="text-center mb-6!">Everything an EV owner needs, all in one app</p>
        <div className={styles.gridContainer}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OtherServices;
