import Image    from "next/image";
import style    from "./serviceCard.module.css";
import Animated from "@/sharedComponents/animatedComponent/animated";

function ServiceCard({ iconSrc, text, tag }) {
  return (
    <Animated className={style.cardContainer} animation="fade" easing="ease-in" duration={1000}>
      <div className={style.iconWrapper}>
        <Image src={iconSrc} alt="service icon" width={28} height={28} />
      </div>

      <div className={style.serviceText}>
        <p>{text}</p>
      </div>

      {tag && (
        <div className={style.tag}>
          <p>{tag}</p>
        </div>
      )}
    </Animated>
  );
}

export default ServiceCard;