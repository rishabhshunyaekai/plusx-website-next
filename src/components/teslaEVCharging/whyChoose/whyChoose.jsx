import Image    from "next/image";
import style    from "./whyChoose.module.css";
import Plusx    from "@/assets/images/tesla-ev-charging-page/plusx_electric_when_to_call.webp";
import Animated from "@/sharedComponents/animatedComponent/animated";

function WhyChoose() {
  return (
    <section className={style.wrapper}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">

          {/* <div className={`${style.isTablet}`}>
            <h2 className={style.whyWeChoose}>
              Why Choose PlusX for <br className={style.headingBreakLine} /> Mobile EV Charging in Dubai
            </h2>
          </div> ${style.isDesktop}*/}

          <div className={style.imageWrapper}>
            <Image src={Plusx} alt="PlusX Electric mobile EV charging service in Dubai" width={555} height={555}/>
          </div>
          
          <Animated className={style.rightContent} animation="fade" easing="ease-in" duration={1000}>
            <h2 className={`${style.whyWeChoose}`}>
              Tesla Stranded With a Dead Battery? When to Call PlusX
            </h2>
            {/* <br className={style.headingBreakLine} /> */}
            {/* <p className={style.whyChooseSubTitle}>With a strong emphasis on reliability and convenience, PlusX Electric offers mobile EV charging service Dubai:</p> */}

            <ul className={style.keyPoint}>
              <li><span><strong>Tesla shows 0% or "charge now"</strong> and the nearest charger is too far to reach.</span></li>
              <li><span><strong>Tesla stuck in basement parking</strong> with no charging point in your building.</span></li>
              <li><span><strong>Tesla won't start or unlock</strong> because the 12V battery is dead.The screen is black and the car won't respond.</span></li>
              <li><span><strong>Ran out of charge on the highway</strong> or in a car park far from a Supercharger.</span></li>
              <li><span><strong>No charger at home</strong> and you need a top-up before a long drive.</span></li>
            </ul>

            <p className="mt-3!"><i>In each case, we charge the car where it stands instead of towing it.</i></p>
          </Animated>

        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
