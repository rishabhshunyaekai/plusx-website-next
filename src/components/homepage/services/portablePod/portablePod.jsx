import Link       from "next/link";
import Image      from "next/image";
import style      from "./portablePod.module.css";
import Animated   from "@/sharedComponents/animatedComponent/animated";
import PowerPod   from "@/assets/images/homepage/Plusx_electric_Mobile_EV_Charging_homepage_image.png";

function PortablePod() {
  return (
    <section className={`${style.wrapper}`}>
      <div className={`container ${style.container}`}>
        <div className={`grid grid-cols-1 lg:grid-cols-3 items-center`}>
          <div className={`lg:col-span-2`}>
            <Animated className={style.contentWrapper} animation="slide-right" easing="ease-out" duration={1000}>
              <h2 className={style.cardTitle}>
                <Link href="/mobile-ev-charging-dubai">Mobile EV Charging Service</Link>
              </h2>
              <p className={style.cardSubTitle}>We deliver a portable EV charger to <br className={`${style.breakLine}`}/>your location — home, office, or parking.</p>
              <div className={`${style.buttonContainer}`}>
                <Link href="/mobile-ev-charging-dubai" className={style.cardButton}>Know More</Link>
              </div>
            </Animated>
          </div>
          <div className={`lg:col-span-1`}>
            <div className={style.cardImageWrapper}>
              <Image className={style.cardImage} src={PowerPod} alt="PlusX Electric Mobile EV Charging Service in Dubai" width={405} height={370} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortablePod;
