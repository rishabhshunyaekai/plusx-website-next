import { Fragment }     from "react";
import Link             from "next/link";
import style            from "./introSection.module.css";
import Animated         from "@/sharedComponents/animatedComponent/animated";
import MainHeading      from "../heading/mainHeading";
import SecondaryHeading from "../heading/secondaryHeading";

function IntroSection({ title, content, additionalContent, additionalContent2, additionalContent3, secondTitle, secondaryContent, extraContent, showButton = false, buttonText, link }) {

  return (
    <section className={style.introSection}>
      <div className={`container flex flex-col ${secondaryContent && "gap-4"}`}>
        <div>
          {title && <MainHeading title={title} />}

          <div className={`flex flex-col ${additionalContent && "gap-4"} pb-8`}>

            <Animated animation="fade" easing="ease-in" duration={1000}>
              <p className={style.introDescription}>
                {typeof content === "string" ? content.split("\n").map((line, index) => (
                      <Fragment key={index}>{line}<br className={style.breakLine} /></Fragment>
                    ))
                  : content}
              </p>
            </Animated>

            {additionalContent && (
              <Animated animation="fade" easing="ease-in" duration={1000}>
                <p className={style.introDescription}>
                  {typeof additionalContent === "string" ? additionalContent.split("\n").map((line, index) => (
                        <Fragment key={index}>{line}<br className={style.breakLine} /></Fragment>
                      ))
                    : additionalContent}
                </p>
              </Animated>
            )}

            {additionalContent2 && (
              <Animated animation="fade" easing="ease-in" duration={1000}>
                <p className={style.introDescription}>
                  {typeof additionalContent2 === "string" ? additionalContent2.split("\n").map((line, index) => (
                        <Fragment key={index}>{line}<br className={style.breakLine} /></Fragment>
                      ))
                    : additionalContent2}
                </p>
              </Animated>
            )}

            {additionalContent3 && (
              <Animated animation="fade" easing="ease-in" duration={1000}>
                <p className={style.introDescription}>
                  {typeof additionalContent3 === "string" ? additionalContent3.split("\n").map((line, index) => (
                        <Fragment key={index}>{line}<br className={style.breakLine} /></Fragment>
                      ))
                    : additionalContent3}
                </p>
              </Animated>
            )}
          </div>
        </div>

        <div>
          {secondTitle && <SecondaryHeading title={secondTitle}  className="mt-10" />}

          <div className="flex flex-col gap-4">
            {secondaryContent && (
              <Animated animation="fade" easing="ease-in" duration={1000}>
                <p className={style.introDescription}>
                  {typeof secondaryContent === "string" ? secondaryContent.split("\n").map((line, index) => (
                        <Fragment key={index}>{line}<br className={style.breakLine} /></Fragment>
                      ))
                    : secondaryContent}
                </p>
              </Animated>
            )}

            {extraContent && (
              <Animated animation="fade" easing="ease-in" duration={1000}>
                <p className={style.introDescription}>
                  {typeof extraContent === "string" ? extraContent.split("\n").map((line, index) => (
                        <Fragment key={index}>{line}<br className={style.breakLine} /></Fragment>
                      ))
                    : extraContent}
                </p>
              </Animated>
            )}
          </div>
        </div>

        {showButton && (
          <div className={`${style.buttonConatiner}`}>
            <Link href={`${link}`} className={style.links}>{buttonText}</Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default IntroSection;
