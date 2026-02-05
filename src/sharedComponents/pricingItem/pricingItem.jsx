import Image    from "next/image";
import style    from "./pricing.module.css";
import Animated from "@/sharedComponents/animatedComponent/animated";

function PricingItem({ iconSrc, title, price }) {
  return (
    <Animated className={`flex items-center gap-5`} animation="fade" easing="ease-in" duration={1000}>
      <Image className={style.priceIcon} src={iconSrc} alt={title} width={130} height={130} />
      <div className="flex flex-col gap-1 flex-1">
        <h4 className={style.title}>{title}</h4>
        <h5 className={style.price}>{price}</h5>
      </div>
    </Animated>
  );
}

export default PricingItem;
