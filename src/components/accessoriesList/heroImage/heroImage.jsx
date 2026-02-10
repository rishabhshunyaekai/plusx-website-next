// import Link from "next/link";
import style                from "./heroImage.module.css";
import Animated             from "@/sharedComponents/animatedComponent/animated";

function ListofAccessoriesHeroImage() {
  return (
    <figure className={`figure ${style.figureWrapper}`}>
      <div className={`container ${style.container}`}>
        <div className={`grid grid-col-1 h-100 md:h-87 items-center`}>
          <Animated className={style.textWrapper} animation="fade" easing="ease-in" duration={1000}>
              <h3 className={`${style.normalText}`}>EV Charging</h3>
              <h2 className={`${style.highlightedText}`}>Accessories & Adapters</h2>
              <h2 className={`${style.secondaryhighlightedText}`}>by PlusX Electric</h2>
            {/* <div className={`${style.buttonContainer}`}>
              <Link href="#">Know more</Link>
            </div> */}
          </Animated>
        </div>
      </div>
  </figure>
  );
}

export default ListofAccessoriesHeroImage;
