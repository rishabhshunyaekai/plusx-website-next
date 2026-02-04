import Image from "next/image";
import style from "./partnershipCard.module.css";
import Animated from "../animatedComponent/animated";

function PartnershipCard({ iconSrc, text }) {
  return (
    <div className={style.parthersCardWrapper}>
      <Animated className={style.parthersCardContainer} animation="fade" easing="ease-in" duration={1000}>
        <div className={style.parthersLogo}>
          <Image src={iconSrc} alt={text || "Brand Logo"} width={100} height={100} />
        </div>
      </Animated>
    </div>
  )
}

export default PartnershipCard;