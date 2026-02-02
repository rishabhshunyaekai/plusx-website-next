import React from "react";
import Link from "next/link";
import style from "./introSection.module.css";
import Animated from "../animatedComponent/animated";
import MainHeading from "../heading/mainHeading";
import SecondaryHeading from "../heading/secondaryHeading";

function IntroSection({ title, secondTitle, content, secondaryContent, secondDesc, secondDesc2, showButton=false, buttonText, link }) {
  return (
    <section className={style.intro}>
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
        
        {secondaryContent && (
          <div className={`row`}>
            <Animated className={`col-lg-12 `} animation="fade" easing="ease-in" duration={1000}>
              <p>
                {/* {secondaryContent.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br className={style.breakLine}/>
                  </React.Fragment>
                ))} */}
                {typeof secondaryContent === "string"
                  ? secondaryContent.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br className={style.breakLine} />
                      </React.Fragment>
                    ))
                  : secondaryContent}

              </p>
            </Animated>
          </div>
        )}

        { secondTitle && <SecondaryHeading title={secondTitle} /> }

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
        <div className={`row`}>
          { secondDesc2 && (
              <Animated className={`col-lg-12 `} animation="fade" easing="ease-in" duration={1000}>
                <p>
                  {secondDesc2.split('\n').map((line, index) => (
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
            <Link href={`${link}`} className="btn">{buttonText}</Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default IntroSection;
