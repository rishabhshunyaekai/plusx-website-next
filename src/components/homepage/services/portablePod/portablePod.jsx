import Link       from "next/link";
import Image      from "next/image";
import PowerPod   from "@/assets/images/homepage/power-pod.png";
import Animated   from "@/sharedComponents/animatedComponent/animated";
import style      from "./portablePod.module.css";

function PortablePod() {
  return (
    <section className={`${style.wrapper}`}>
      <div className={`container ${style.container}`}>
        <div className={`grid grid-cols-1 lg:grid-cols-3 items-center`}>
          <div className={`lg:col-span-2`}>
            <Animated className={style.contentWrapper} animation="fade" easing="ease-in" duration={1000}>
              <h2 className={style.cardTitle}>Portable Charging Pod</h2>
              <h3 className={style.cardSubTitle}>Delivered At Your Doorstep. <br className={`${style.breakLine}`}/>Anytime, Anyplace.</h3>
              <div className={`${style.buttonContainer}`}>
                <Link href="/doorstep-ev-charging" className={style.cardButton}>Know More</Link>
              </div>
            </Animated>
          </div>
          <div className={`lg:col-span-1`}>
            <div className={style.cardImageWrapper}>
              <Image className={style.cardImage} src={PowerPod} alt="PowerPod" width={405} height={370} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortablePod;
