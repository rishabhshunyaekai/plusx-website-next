import Link       from "next/link";
import Image      from "next/image";
import style      from "./chargeShare.module.css";
import Animated   from "@/sharedComponents/animatedComponent/animated";
import Charging   from "@/assets/images/homepage/public-charging.png";
import Share      from "@/assets/images/homepage/ev-car-service.png";

function ChargerShare() {
  return (
    <section className={style.wrapper}>
      <div className={`container`}>
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-15 lg:gap-6`}>
          <div className={`lg:col-span-1`}>
            <Animated className={style.cardContainer} animation="fade" easing="ease-in" duration={1000}>
              <h2 className={style.cardTitle}>Public EV <br className={style.breakLine} /> Charging Stations</h2>
              <p className={style.cardSubTitle}>Find the nearest public charger with <br className={`${style.paraBreak}`}/> real-time availability on the app.</p>
              <div className={style.buttonContainer}>
                <Link href="/public-ev-charging-stations" className={style.cardButton}>Know More</Link>
              </div>

              <div className={style.cardImageWrapper}>
                <Image className={style.cardImage} src={Charging} alt="Public Charging" width={405} height={370} />
              </div>
            </Animated>
          </div>

          <div className={`lg:col-span-1`}>
            <Animated className={style.cardContainer} animation="fade" easing="ease-in" duration={1000}>
              <h2 className={style.cardTitle}>EV Car <br className={style.breakLine} /> Detailing Service</h2>
              <p className={style.cardSubTitle}>Give your EV the glow it deserves. <br className={`${style.paraBreak}`}/>We clean, polish, and protect — tailored for electric vehicles.</p>
              <div className={style.buttonContainer}>
                <Link href="/complete-ev-care-dubai" className={style.cardButton}>Know More</Link>
              </div>

              <div className={style.cardImageWrapper}>
                <Image className={style.cardImage} src={Share} alt="EV Car Detailing Service" width={405} height={370} />
              </div>
            </Animated>
          </div>

        </div>
      </div>
    </section>

  );
}

export default ChargerShare;
