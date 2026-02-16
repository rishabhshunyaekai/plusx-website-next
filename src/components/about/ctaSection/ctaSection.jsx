import Image from "next/image";
import style from "./ctaSection.module.css";
import Animated from "@/sharedComponents/animatedComponent/animated";
import WhatWeDoImage from "@/assets/images/about-us-page/what-we-do.webp";

function CTASection() {
  return (
    <section className={style.ctaSection}>
      <div className={`container`}>
        <div className="flex flex-col md:flex-row relative">
          <div className={`w-full md:w-1/2 order-2 md:order-1`}>
            <Animated className={`col-md-6 ${style.infoContainer}`} animation="fade" easing="ease-in" duration={1000}>
              <h4 className={style.ctaHeading}>What We Do?</h4>
              <p className={style.ctaContent}>At PlusX Electric, we pride ourselves on providing comprehensive charging services designed to enhance the convenience and sustainability of electric vehicle ownership. We are also building an ecosystem around EV’s and will enable a multitude of services supporting EV adoption.</p>
            </Animated>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <Animated className={`${style.imageContainer}`} animation="fade" easing="ease-in" duration={1000}>
              <Image className={style.image} src={WhatWeDoImage} alt="WhatWeDoImage" width={410} height={575}/>
            </Animated>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
