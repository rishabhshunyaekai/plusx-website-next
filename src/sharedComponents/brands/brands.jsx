import { Fragment }     from "react";
import style            from "./brandCard.module.css";
import SecondaryHeading from "../heading/secondaryHeading";
import BrandsIcons      from "./brandsIcons";

function Brands({title, description}) {
  return (
    <section className={"wrapper"}>
      <div className={`container`}>
        <SecondaryHeading title= {title} />
        
        {description && (
          <p className={style.description}>
            {description.split('\n').map((line, index) => <Fragment key={index}>{line}<br className={style.breakLine}/></Fragment>)}
          </p>
        )}
        
        <BrandsIcons />
      </div>
    </section>
  );
}

export default Brands;