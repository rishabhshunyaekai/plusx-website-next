import React from "react";
import Link from "next/link";
import SecondHeading from "../secondHeading/secondHeading";
import Animated from "@/sharedComponents/animatedComponent/animated";

import style from "./IntroSectionProduct.module.css";
import MainHeading from "@/sharedComponents/heading/headingProduct1";

function IntroSection({ title, secondTitle, content, secondDesc, showButton=false, buttonText, link }) {
  return (
    <section className={style.introProduct}>
      <div className={`container ${style.container}`}>
        { title &&  <MainHeading title={title} /> }

        <div className={`row`}>
          <Animated className={`col-lg-12 `} animation="fade" easing="ease-in" duration={1000}>
            <p>
              {content.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br className={style.breakLine}/>
                </React.Fragment>
              ))}
            </p>
          </Animated>
        </div>

        { secondTitle && <SecondHeading title={secondTitle} /> }

        <div className={`row`}>
          { secondDesc && (
              <Animated className={`col-lg-12 `} animation="fade" easing="ease-in" duration={1000}>
                <p>
                  {secondDesc.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br className={style.breakLine}/>
                    </React.Fragment>
                  ))}
                </p>
              </Animated>
            )
          }
        </div>
        
        {showButton && (
          <div className={`${style.buttonConatiner}`}>
            <Link to={`${link}`} className="btn">{buttonText}</Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default IntroSection;
