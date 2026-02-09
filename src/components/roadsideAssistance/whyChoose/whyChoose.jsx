import Image    from "next/image";
import style    from "./whyChoose.module.css";
import Truck    from "@/assets/images/ev-roadside-assistance-page/why-choose-plusx.webp";
import Animated from "@/sharedComponents/animatedComponent/animated";

function WhyChoose() {
  return (
    <section className={style.wrapper}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">

          <div className={`${style.isTablet}`}>
            <h2 className={style.whyWeChoose}>
              Why Choose PlusX Electric <br className={style.headingBreakLine} /> for EV Roadside Assistance
            </h2>
          </div>

          <div className={style.imageWrapper}>
            <Image src={Truck} alt="EV Roadside Assistance Dubai" width={555} height={555}/>
          </div>
          
          <Animated className={style.rightContent} animation="fade" easing="ease-in" duration={1000}>
            <h2 className={`${style.whyWeChoose} ${style.isDesktop}`}>
              Why Choose PlusX Electric <br className={style.headingBreakLine} /> for EV Roadside Assistance
            </h2>

            <ul className={style.keyPoint}>
              <li>Dedicated EV roadside assistance team</li>
              <li><a href="https://plusxelectric.com/doorstep-ev-charging"  target="__blank" className={style.linkColor}>Mobile on-site EV charging</a> units</li>
              <li>No unnecessary towing</li>
              <li>Jump-start service included</li>
              <li>Compatible with most EV models</li>
              <li>Coverage across Dubai</li>
            </ul>
          </Animated>

        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
