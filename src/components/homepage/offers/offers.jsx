import Offer1         from "@/assets/images/homepage/Plusx_electric_pickup&dropoff_service_offer_image.webp";
import Offer2         from "@/assets/images/homepage/Plusx_electric_power_pod_service_offer_image.webp";
import ServicesOffer  from "@/sharedComponents/servicesOffer/servicesOffer";

const offers = [
  {
    image : Offer1,
    alt   : "Pickup and Dropoff charging offer",
    link  : "/ev-pickup-dropoff-charging-service",
  },
  {
    image : Offer2,
    alt   : "Mobile ev charging offer",
    link  : "/mobile-ev-charging-dubai",
  },
];

function Offers() {
  return <ServicesOffer heading="PlusX Electric Offers" offers={offers} />;
}

export default Offers;
