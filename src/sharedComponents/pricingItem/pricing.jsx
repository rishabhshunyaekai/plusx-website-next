import style              from "./pricing.module.css";
import SecondaryHeading   from "@/sharedComponents/heading/secondaryHeading";
import PricingItem        from "./pricingItem";

function Pricing({ title, pricingData }) {
  return (
    <section className={`${style.pricing}`}>
      <div className={`container`}>
        <SecondaryHeading title={title} />

        <div className={`grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4`}>
          {pricingData.map((item, index) => (
            <PricingItem key={index} iconSrc={item.icon} title={item.title} price={item.price} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
