import OnDemand         from "@/assets/images/portable-charger-page/on-demand.svg";
import Monthly          from "@/assets/images/portable-charger-page/montly.svg";
import PricingComponent from "@/sharedComponents/pricingItem/pricing";

const title = "Pricing";
const pricingData = [
  {
    icon  : OnDemand,
    title : "On Demand",
    price : "AED 39",
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
