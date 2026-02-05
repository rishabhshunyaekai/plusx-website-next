import Image    from "next/image";
import style    from "./features.module.css";
import Animated from "@/sharedComponents/animatedComponent/animated";

function FeatureItem({ title, description, offeringSecondDesc, imageSrc, reverse, listHeading, listDesc, endingDesc }) {
 
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 items-center gap-6 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>

      <Animated animation="fade" easing="ease-in" duration={1000}>
        <Image className={style.featureImage} src={imageSrc} alt={title} width={545} height={365} />
      </Animated>

      <Animated animation="fade" easing="ease-in" duration={1000}>
        <h3 className={style.featureTitle}>{title}</h3>
        <p className={style.featureDescription}>{description}</p>

        {offeringSecondDesc && <p className={style.featureDescription}>{offeringSecondDesc}</p>}
        {listHeading &&  <p className={style.featureListHeading}>{listHeading}</p> }
        
        {listDesc && (
          <ul className={style.featureList}>
            {listDesc.map((desc, index) => <li key={index} className={style.featureListDesc}>{desc}</li>)}
          </ul>
        )}
        {endingDesc && <p className={style.featureDescription}>{endingDesc}</p> }
      </Animated>
    </div>
  );
};

export default FeatureItem;
