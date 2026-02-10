import { Fragment }     from "react";
import BrandsIcons      from "./brandsIcons";
import SecondaryHeading from "../heading/secondaryHeading";
import style            from "./brandCard.module.css";

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