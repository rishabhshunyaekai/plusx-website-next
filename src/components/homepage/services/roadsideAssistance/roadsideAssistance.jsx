import Link       from "next/link";
import Image      from "next/image";
import style      from "./roadsideAssistance.module.css";
import Animated   from "@/sharedComponents/animatedComponent/animated";
import RSA        from "@/assets/images/homepage/ev-road-assistance.png";

function EVRoadSideAssistance() {
  return (
    <section className={`${style.wrapper}`}>
      <div className={`container ${style.container}`}>
        <div className={`grid grid-cols-1 lg:grid-cols-3 items-center`}>
          <div className={`lg:col-span-1 order-2 lg:order-1`}>
            <div className={style.cardImageWrapper}>
              <Image className={style.cardImage} src={RSA} alt="Roadside Assistance" width={302} height={408} />
            </div>
          </div>
          <div className={`lg:col-span-2 order-1 lg:order-2`}>
            <Animated className={style.contentWrapper} animation="fade" easing="ease-in" duration={1000}>
              <h2 className={style.cardTitle}>EV Roadside Assistance</h2>
              <h3 className={style.cardSubTitle}>Emergency Roadside Charging <br className={`${style.breakLine}`}/>Now Available Across Dubai.</h3>
              <div className={`${style.buttonContainer}`}>
                <Link href="/ev-roadside-assistance-service" className={style.cardButton}>Know More</Link>
              </div>
            </Animated>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EVRoadSideAssistance;
