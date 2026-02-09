"use client";
import useAdvertisingWpMess   from "@/hooks/useAdvertisingWpMess";
import Animated               from "@/sharedComponents/animatedComponent/animated";

import style                  from "./ChargerInstallationHeroImage.module.css";

function ChargerInstallationHeroImage() {
  const { whatsappUrl: charger } = useAdvertisingWpMess("charger");
  const { whatsappUrl: installation } = useAdvertisingWpMess("installation");

  return (
    <main className={`${style.main} ${style.page}`}>
      <section className={style.featuredService}>
        <div className={style.container}>
          <div className={`row`}>
            <div className={`col-lg-10 `}>
              <Animated className={`${style.featuredText}`} animation="fade" easing="ease-in" duration={1000}>
                <div className={`${style.title}`}>
                  <h4>Get EV Wall Charger</h4><br/>
                </div>
                
                <span className={style.spanText}>for Your Home or Office</span>

                <div className={`${style.buttonContainer}`}>
                   {/* <span className={`${style.border}`}>All Types of AC & DC Chargers Available</span>
                  <p><span className={style.highlightedText}>*Installation Service</span> is also available</p> */}
                  <a href={charger} target="__blank" className={style.chargerButton}>Book EV Chargers</a>
                  <a href={installation} target="__blank" className={style.serviceButton}>Book Installation Service</a>
                </div>
              </Animated>
            </div>
          </div>
        </div>
      </section>
  </main>
  );
}

export default ChargerInstallationHeroImage;
