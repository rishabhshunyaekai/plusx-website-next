import Link       from "next/link";
import Image      from "next/image";
import style      from "./roadsideAssistance.module.css";
import Animated   from "@/sharedComponents/animatedComponent/animated";
import RSA        from "@/assets/images/homepage/plusx_electric_EV_breakdown_assistance_service_homepage_icon.png";

function EVRoadSideAssistance() {
  return (
    <section className={`${style.wrapper}`}>
      <div className={`container ${style.container}`}>
        <div className={`grid grid-cols-1 lg:grid-cols-3 items-center`}>
          <div className={`lg:col-span-1 order-2 lg:order-1`}>
            <div className={style.cardImageWrapper}>
              <Image className={style.cardImage} src={RSA} alt="PlusX Electric EV Roadside Assistance in Dubai" width={302} height={408} />
            </div>
          </div>
          <div className={`lg:col-span-2 order-1 lg:order-2`}>
            <Animated className={style.contentWrapper} animation="slide-left" easing="ease-in" duration={1000}>
              <h2 className={style.cardTitle}>
                <Link href="/ev-breakdown-assistance">EV Breakdown Assistance</Link>
              </h2>
              <p className={style.cardSubTitle}>Stuck on the road with a dead EV battery? <br className={`${style.breakLine}`}/>We come to you and charge it on the spot.</p>
              <div className={`${style.buttonContainer}`}>
                <Link href="/ev-breakdown-assistance" className={style.cardButton}>Know More</Link>
              </div>
            </Animated>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EVRoadSideAssistance;
