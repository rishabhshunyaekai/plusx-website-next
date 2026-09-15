import Image     from "next/image";
import style     from "./valueCard.module.css";
import Animated  from "@/sharedComponents/animatedComponent/animated";

function ValueIconCard({ iconSrc, heading, text, alt }) {
  return (
    <Animated className={`${style.cardContainer}`} animation="fade" easing="ease-in" duration={1000}>
      <div className={style.valueIcon}>
        <Image src={iconSrc} alt={alt} width={60} height={60} />
      </div>
      <div className={style.valueText}>
        {heading && (<h3 className={style.cardTitle}>{heading}</h3>)}
        {text && (<p className={style.cardContent}>{text}</p>)}
      </div>
    </Animated>
  );
}

export default ValueIconCard;
