import { Fragment }       from "react";
import SecondaryHeading   from "../heading/secondaryHeading";
import PartnershipIcons   from "./partnershipIcons";
import style              from "./partnershipCard.module.css";

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