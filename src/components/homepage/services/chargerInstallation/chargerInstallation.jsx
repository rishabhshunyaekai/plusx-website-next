import Link       from "next/link";
import Image      from "next/image";
import Charger    from "@/assets/images/homepage/charger-installation.png";
import Insurance  from "@/assets/images/homepage/ev-insurance.png";
import Animated   from "@/sharedComponents/animatedComponent/animated";
import style      from "./chargerInstallation.module.css";

function ChargerInstallation() {
  return (
    <section className={style.wrapper}>
      <div className={`container`}>
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-15 lg:gap-6`}>
          <div className={`lg:col-span-1`}>
            <Animated className={style.cardContainer} animation="fade" easing="ease-in" duration={1000}>
              <h2 className={style.cardTitle}>EV Charger <br className={style.breakLine} /> Installation</h2>
              <h3 className={style.cardSubTitle}>At Homes, Offices & <br /> Hotels</h3>
              <div className={style.buttonContainer}>
                <Link href="/ev-chargers" className={style.cardButton}>Know More</Link>
              </div>

              <div className={style.cardImageWrapper}>
                <Image className={style.cardImage} src={Charger} alt="PowerPod" width={405} height={370} />
              </div>
            </Animated>
          </div>

          <div className={`lg:col-span-1`}>
            <Animated className={style.cardContainer} animation="fade" easing="ease-in" duration={1000}>
              <h2 className={style.cardTitle}>EV <br className={style.breakLine} /> Insurance</h2>
              <h3 className={style.cardSubTitle}>Buy or Renew <br /> EV Insurance in Minutes</h3>
              <div className={style.buttonContainer}>
                <Link href="/ev-car-insurance" className={style.cardButton}>Know More</Link>
              </div>

              <div className={style.cardImageWrapper}>
                <Image className={style.cardImage} src={Insurance} alt="PowerPod" width={405} height={370} />
              </div>
            </Animated>
          </div>

        </div>
      </div>
    </section>

  );
}

export default ChargerInstallation;
