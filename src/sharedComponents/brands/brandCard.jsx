import Image    from "next/image";
import Animated from "../animatedComponent/animated";
import style    from "./brandCard.module.css";

function BrandCard({ iconSrc, text }) {
  return (
    <div className={style.cardWrapper}>
      <Animated className={style.cardContainer} animation="fade" easing="ease-in" duration={1000}>
        <div className={style.serviceIcon}>
          <Image src={iconSrc} alt={text || "Brand Logo"} width={100} height={100} />
        </div>
      </Animated>
    </div>
  )
}

export default BrandCard;