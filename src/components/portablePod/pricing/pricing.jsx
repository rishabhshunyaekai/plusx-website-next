import Monthly          from "@/assets/images/portable-charger-page/montly.svg";
import OnDemand         from "@/assets/images/portable-charger-page/on-demand.svg";
import PricingComponent from "@/sharedComponents/pricingItem/pricing";

const title = "Pricing";
const pricingData = [
  {
    icon  : OnDemand,
    title : "On Demand",
    price : "Book Power Pod for just AED 65",
  },
  {
    icon  : Monthly,
    title : "Monthly Subscription",
    price : "Coming Soon",
  },
];

function Pricing() {
  return <PricingComponent title={title} pricingData={pricingData} />;
}

export default Pricing;
