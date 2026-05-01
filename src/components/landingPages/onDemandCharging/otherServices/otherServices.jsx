import styles           from "@/sharedComponents/landingPagesComponents/otherServices/otherServiceCard.module.css";
import OtherServiceCard from "@/sharedComponents/landingPagesComponents/otherServices/otherServiceCard";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
import Roadside         from "@/assets/images/landing-pages/brands-logo/ServicesImage/Plusx_electric_ev_breakdown_assistance_service.webp";
import Charger          from "@/assets/images/landing-pages/brands-logo/ServicesImage/Plusx_electric_charger_installation_service.webp";
import Insurance        from "@/assets/images/landing-pages/brands-logo/ServicesImage/Plusx_electric_ev_insurance_service.webp";
import Pickup           from "@/assets/images/landing-pages/brands-logo/ServicesImage/Plusx_electric_pickup_dropoff_service.webp";

const services = [
  {
    title       : "Charger Installation",
    description : "EV Chargers, Adapters, Accessories & Installation",
    imgSrc      : Charger,
    buttonText  : "Know More",
    link        : "/ev-charger-installation-uae"
  },
  {
    title       : "EV Breakdown Assistance",
    description : "Emergency Charging Service Delivered Within 45 Mins",
    imgSrc      : Roadside,
    buttonText  : "Know More",
    link        : "/ev-breakdown-assistance"
  },
  {
    title       : "EV Insurance",
    description : "Buy or Renew EV Insurance in Minutes",
    imgSrc      : Insurance,
    buttonText  : "Know More",
    link        : "/ev-car-insurance"
  },
  {
    title       : "Pick Up & Drop Off",
    description : "We'll pick up your car, charge it & drop it back within 3 hrs!",
    imgSrc      : Pickup,
    buttonText  : "Know More",
    link        : "/ev-pickup-dropoff-charging-service"
  },
];

function OtherServices() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SecondaryHeading title="Other Services" />
        <div className={styles.gridContainer}>
          {services.map((service, index) => (
            <OtherServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OtherServices;
