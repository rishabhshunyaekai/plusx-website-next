import Offer1         from "@/assets/images/homepage/offer-1.webp";
import Offer2         from "@/assets/images/homepage/offer-2.webp";
import ServicesOffer  from "@/sharedComponents/servicesOffer/servicesOffer";

const offers = [
  {
    image : Offer1,
    alt   : "pickup and dropoff charging service",
    link  : "/ev-pickup-dropoff-charging-service",
  },
  {
    image : Offer2,
    alt   : "doorstep ev charging service",
    link  : "/doorstep-ev-charging",
  },
];

function Offers() {
  return <ServicesOffer heading="PlusX Electric Offers" offers={offers} />;
}

export default Offers;
