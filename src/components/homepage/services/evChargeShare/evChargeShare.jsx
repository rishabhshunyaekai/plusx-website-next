import Link       from "next/link";
import Image      from "next/image";
import style      from "./evChargeShare.module.css";
import Animated   from "@/sharedComponents/animatedComponent/animated";
import Share      from "@/assets/images/homepage/ev-charge-share.png";

function EVChargeShare() {
  return (
    <section className={`${style.wrapper}`}>
      <div className={`container ${style.container}`}>
        <div className={`grid grid-cols-1 lg:grid-cols-3 items-center`}>
          <div className={`lg:col-span-1 order-2 lg:order-1`}>
            <div className={style.cardImageWrapper}>
              <Image className={style.cardImage} src={Share} alt="EV Charge Share" width={405} height={408} />
            </div>
          </div>
          <div className={`lg:col-span-2 order-1 lg:order-2`}>
            <Animated className={style.contentWrapper} animation="slide-left" easing="ease-in" duration={1000}>
              <h2 className={style.cardTitle}>EV Charge Share</h2>
              <p className={style.cardSubTitle}>List your private charger or find <br className={`${style.breakLine}`}/>available chargers near you.</p>
              <div className={`${style.buttonContainer}`}>
                <Link href="/ev-charge-share" className={style.cardButton}>Know More</Link>
              </div>
            </Animated>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EVChargeShare;
