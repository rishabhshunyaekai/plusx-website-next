// import Link from "next/link";
import style from "./heroImage.module.css";
import Animated from "@/sharedComponents/animatedComponent/animated";

function PublicChargingHeroImage() {
  return (
    <figure className={`figure ${style.figureWrapper}`}>
      <div className={`container ${style.container}`}>
        <div className={`grid grid-col-1 h-100 md:h-87 items-center`}>
          <Animated className={style.textWrapper} animation="fade" easing="ease-in" duration={1000}>
              <span className={style.normalText}>Find The Nearest</span>
              <h4 className={`${style.highlightedText}`}>Public EV Charging Station</h4>
            {/* <div className={`${style.buttonContainer}`}>
              <Link href="#">Know more</Link>
            </div> */}
          </Animated>
        </div>
      </div>
  </figure>
  );
}

export default PublicChargingHeroImage;
