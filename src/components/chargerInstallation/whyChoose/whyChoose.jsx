import Image    from "next/image";
import style    from "./whyChoose.module.css";
import Plusx    from "@/assets/images/ev-charger-installation-page/why-choose.webp";
import Animated from "@/sharedComponents/animatedComponent/animated";

function WhyChoose() {
  return (
    <section className={style.wrapper}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">

          <div className={`${style.isTablet}`}>
            <h2 className={style.whyWeChoose}>
              Why Choose PlusX Electric <br className={style.headingBreakLine} /> for EV Charger Installation?
            </h2>
          </div>

          <div className={style.imageWrapper}>
            <Image src={Plusx} alt="EV Charger Installation" width={555} height={555}/>
          </div>
          
          <Animated className={style.rightContent} animation="fade" easing="ease-in" duration={1000}>
            <h2 className={`${style.whyWeChoose} ${style.isDesktop}`}>
              Why Choose PlusX Electric <br className={style.headingBreakLine} /> for EV Charger Installation?
            </h2>

            <ul className={style.keyPoint}>
              <li>Provides Charger and installation together (if you want both)</li>
              <li>Installation only solution if you already have a charger.</li>
              <li>An experienced team to help in AC and DC charger installation.</li>
              <li>Expert consultation so you install the right charger for your EV and daily usage.</li>
              <li>Easy tracking of your charger and installation records on PlusX App</li>
            </ul>
          </Animated>

        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
