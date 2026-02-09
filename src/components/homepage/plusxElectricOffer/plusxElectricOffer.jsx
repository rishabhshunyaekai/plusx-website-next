import Offer1 from "@/assets/images/homepage/offer-1.webp";
import Offer2 from "@/assets/images/homepage/offer-2.webp";
import ElectricOffer from "@/sharedComponents/electricOffer/electricOffer";

const offers = [
  {
    image: Offer1,
    alt: "Offer 1",
    link: '/ev-pickup-dropoff-charging-service',
  },
  {
    image: Offer2,
    alt: "Offer 2",
    link: '/doorstep-ev-charging',
  },
];

function PlusxElectricOffer() {
  return (
    <div>
      <ElectricOffer
        heading="PlusX Electric Offers"
        offers={offers}
        // onScrollToFooter={redirectToFooter}
      />
    </div>
  );
}

export default PlusxElectricOffer;
