import { Fragment }       from "react";
import style              from "./partnershipCard.module.css";
import SecondaryHeading   from "../heading/secondaryHeading";
import PartnershipIcons   from "./partnershipIcons";

function Partnership({title, description}) {
  return (
    <section className={`${style.partnershipSection}`}>
      <div className={`container`}>
        <SecondaryHeading title= {title} />

        {description && (
          <p className={style.description}>
            {description.split('\n').map((line, index) => <Fragment key={index}>{line} <br className={style.breakLine}/></Fragment> )}
          </p>
        )}
        
        <PartnershipIcons />
      </div>
    </section>
  );
}

export default Partnership;