import Image    from "next/image";
import style    from "./whyChoose.module.css";
import Plusx    from "@/assets/images/portable-charger-page/why-choose-plusx.webp";
import Animated from "@/sharedComponents/animatedComponent/animated";

function WhyChoose() {
  return (
    <section className={style.wrapper}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">

          <div className={`${style.isTablet}`}>
            <h2 className={style.whyWeChoose}>
              Why Choose PlusX for <br className={style.headingBreakLine} /> Mobile EV Charging in Dubai
            </h2>
          </div>

          <div className={style.imageWrapper}>
            <Image src={Plusx} alt="EV Charger Installation" width={555} height={555}/>
          </div>
          
          <Animated className={style.rightContent} animation="fade" easing="ease-in" duration={1000}>
            <h2 className={`${style.whyWeChoose} ${style.isDesktop}`}>
              Why Choose PlusX for <br className={style.headingBreakLine} /> Mobile EV Charging in Dubai
            </h2>
            <h3 className={style.whyChooseSubTitle}>With a strong emphasis on reliability and convenience, PlusX Electric offers mobile EV charging service Dubai:</h3>

            <ul className={style.keyPoint}>
              <li>With a strong track record, PlusX Electric has delivered a high service completion rate and charged 5,000+ EVs.</li>
              <li>You can charge your EV up to 80% without having to move your vehicle to a fixed charging station.</li>
              <li>The booking is simple and the service is provided by a qualified team of professionals</li>
              <li>The coverage is throughout Dubai, including Downtown Dubai, Business Bay, Dubai Marina, Jumeirah Lake Towers and others.</li>
            </ul>
          </Animated>

        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
