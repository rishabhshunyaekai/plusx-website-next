import Link       from "next/link";
import Image      from "next/image";
import style      from "./chargerInstallation.module.css";
import Animated   from "@/sharedComponents/animatedComponent/animated";
import Charger    from "@/assets/images/homepage/Plusx_electric_ev_charger_installation_homepage_icon.png";
import Insurance  from "@/assets/images/homepage/Plusx_electric_ev_insurance_homepage_icon.png";

function ChargerInstallation() {
  return (
    <section className={style.wrapper}>
      <div className={`container`}>
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-15 lg:gap-6`}>
          <div className={`lg:col-span-1`}>
            <Animated className={style.cardContainer} animation="fade" easing="ease-in" duration={1000}>
              <h2 className={style.cardTitle}>
                <Link href="/ev-charger-installation-uae">EV Charger <br className={style.breakLine} /> Installation</Link>
              </h2>
              <p className={style.cardSubTitle}>We install chargers at villas, homes <br className={`${style.paraBreak}`}/> offices, hotels, and malls.</p>
              <div className={style.buttonContainer}>
                <Link href="/ev-charger-installation-uae" className={style.cardButton}>Know More</Link>
              </div>

              <div className={style.cardImageWrapper}>
                <Image className={style.cardImage} src={Charger} alt="PlusX Electric EV charger installation service in Dubai" width={405} height={370} />
              </div>
            </Animated>
          </div>

          <div className={`lg:col-span-1`}>
            <Animated className={style.cardContainer} animation="fade" easing="ease-in" duration={1000}>
              <h2 className={style.cardTitle}>
                <Link href="/ev-car-insurance">EV <br className={style.breakLine} /> Insurance</Link>
              </h2>
              <p className={style.cardSubTitle}>Compare and buy EV insurance in seconds <br className={`${style.paraBreak}`}/> with the PlusX Electric app.</p>
              <div className={style.buttonContainer}>
                <Link href="/ev-car-insurance" className={style.cardButton}>Know More</Link>
              </div>

              <div className={style.cardImageWrapper}>
                <Image className={style.cardImage} src={Insurance} alt="PlusX Electric EV insurance service in Dubai" width={405} height={370} />
              </div>
            </Animated>
          </div>

        </div>
      </div>
    </section>

  );
}

export default ChargerInstallation;
