import { Fragment }     from "react";
import Link             from "next/link";
import style            from "./introSectionProduct.module.css";
import Animated         from "@/sharedComponents/animatedComponent/animated";
import MainHeading      from "../heading/mainHeading";
import SecondaryHeading from "../heading/secondaryHeading";

function IntroSection({ title, content, additionalContent, secondTitle, showButton=false, buttonText, link }) {
  return (
    <section className={style.introProduct}>
      <div className={`container flex flex-col ${additionalContent && "gap-4"}`}>
        <div>
          { title &&  <MainHeading title={title} /> }

          <div className="flex flex-col gap-4 pb-8">
            <Animated animation="fade" easing="ease-in" duration={1000}>
              <p className={style.introDescription}>
                {content.split('\n').map((line, index) => <Fragment key={index}>{line}<br className={style.breakLine}/></Fragment>)}
              </p>
            </Animated>
          </div>
        </div>

        <div>
          { secondTitle && <SecondaryHeading title={secondTitle} /> }

          <div className="flex flex-col gap-4">
            { additionalContent && (
              <Animated animation="fade" easing="ease-in" duration={1000}>
                <p className={style.introDescription}>
                  {additionalContent.split('\n').map((line, index) => <Fragment key={index}>{line}<br className={style.breakLine}/></Fragment>)}
                </p>
              </Animated>
            )}
          </div>
        </div>
        
        {showButton && (
          <div className={`${style.buttonConatiner}`}>
            <Link to={`${link}`} className={style.links}>{buttonText}</Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default IntroSection;
