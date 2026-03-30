import style                from "./heroImage.module.css";
import Animated             from "@/sharedComponents/animatedComponent/animated";
import RedirectToWhatsapp   from "@/sharedComponents/whatsapp/RedirectToWhatsapp";

function ListofChargersHeroImage() {
  return (
    <figure className={`figure ${style.figureWrapper}`}>
      <div className={`container ${style.container}`}>
        <div className={`grid grid-col-1 h-100 md:h-87 items-center`}>
          <Animated className={style.textWrapper} animation="fade" easing="ease-in" duration={1000}>
              <h2 className={`${style.highlightedText}`}>Get EV Wall Charger</h2>
              <h3 className={`${style.normalText}`}>for Your Home or Office</h3>
              <div className={style.buttonContainer}>
                <RedirectToWhatsapp className={style.chargerButton} isShowIcon={false} text="Book EV Chargers" page="charger" />
                <RedirectToWhatsapp className={style.serviceButton} isShowIcon={false} text="Book Installation Service" page="installation" />
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
