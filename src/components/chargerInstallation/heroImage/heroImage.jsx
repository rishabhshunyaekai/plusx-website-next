// import Link from "next/link";
import style from "./heroImage.module.css";
import Animated from "@/sharedComponents/animatedComponent/animated";

function ChargerInstallationHeroImage() {
  return (
    <figure className={`figure ${style.figureWrapper}`}>
      <div className={`container ${style.container}`}>
        <div className={`grid grid-col-1 h-100 md:h-87 items-center`}>
          <Animated className={style.textWrapper} animation="fade" easing="ease-in" duration={1000}>
              <h4 className={`${style.highlightedText}`}>Get EV Charger, Accessories</h4>
              <h4 className={`${style.secondaryhighlightedText}`}>& Installation Services</h4>
              <p className={style.outlinerText}>All Types of <span className={style.highlight}>AC & DC</span> Chargers & Adapters Available</p>
              <p className={style.secondaryText}>*Compatible With all EV Brands</p>
            {/* <div className={`${style.buttonContainer}`}>
              <Link href="#">Know more</Link>
            </div> */}
          </Animated>
        </div>
      </div>
  </figure>
  );
}

export default ChargerInstallationHeroImage;
