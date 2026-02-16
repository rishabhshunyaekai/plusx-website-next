import style    from "./heroImage.module.css";
import Animated from "@/sharedComponents/animatedComponent/animated";

function AboutHeroImage() {
  return (
    <figure className={`figure ${style.figureWrapper}`}>
      <div className={`container ${style.container}`}>
        <div className={`grid grid-col-1 h-100 md:h-87 items-center`}>
          <Animated className={style.textWrapper} animation="fade" easing="ease-in" duration={1000}>
            <div>
              <span className={style.normalText}>Smarter Charge</span>
              <h4 className={`${style.highlightedText}`}>Greener Drive</h4>
            </div>
            <div className={`${style.buttonContainer}`}>
              <span className={`${style.outlinerText}`}>Charge With Our Portable Power Pod</span>
            </div>
          </Animated>
        </div>
      </div>
  </figure>
  );
}

export default AboutHeroImage;
