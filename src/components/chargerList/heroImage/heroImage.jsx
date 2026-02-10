"use client"
// import Link from "next/link";
import style                from "./heroImage.module.css";
import Animated             from "@/sharedComponents/animatedComponent/animated";
import useAdvertisingWpMess from "@/hooks/useAdvertisingWpMess";

function ListofChargersHeroImage() {
  const { whatsappUrl: charger }      = useAdvertisingWpMess("charger");
  const { whatsappUrl: installation } = useAdvertisingWpMess("installation");
  return (
    <figure className={`figure ${style.figureWrapper}`}>
      <div className={`container ${style.container}`}>
        <div className={`grid grid-col-1 h-100 md:h-87 items-center`}>
          <Animated className={style.textWrapper} animation="fade" easing="ease-in" duration={1000}>
              <h2 className={`${style.highlightedText}`}>Get EV Wall Charger</h2>
              <h3 className={`${style.normalText}`}>for Your Home or Office</h3>
              <div className={style.buttonContainer}>
                <a href={charger} target="__blank" className={style.chargerButton}>Book EV Chargers</a>
                <a href={installation} target="__blank" className={style.serviceButton}>Book Installation Service</a>
              </div>
            {/* <div className={`${style.buttonContainer}`}>
              <Link href="#">Know more</Link>
            </div> */}
          </Animated>
        </div>
      </div>
  </figure>
  );
}

export default ListofChargersHeroImage;
