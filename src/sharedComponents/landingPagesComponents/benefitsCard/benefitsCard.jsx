import Image    from "next/image";
import style    from "./benefitsCard.module.css";
import Animated from "@/sharedComponents/animatedComponent/animated";

function BeneFitCard({ iconSrc, text }) {

  return (
    <Animated className={`${style.cardContainer}`} animation="fade" easing="ease-in" duration={1000}>
      <div className={style.serviceIcon}>
        <Image src={iconSrc} alt={text} width={60} height={60} />
      </div>
      <div className={style.serviceText}>
        <p>{text}</p>
      </div>
    </Animated>
  )
}

export default BeneFitCard;
