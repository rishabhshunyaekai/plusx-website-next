import style                from "./heroImage.module.css";
import Animated             from "@/sharedComponents/animatedComponent/animated";
import RedirectToWhatsapp   from "@/sharedComponents/whatsapp/RedirectToWhatsapp";

function ListofChargersHeroImage() {
  return (
    <figure className={`figure ${style.figureWrapper}`}>
      <div className={`container ${style.container}`}>
        <div className={`grid grid-col-1 h-100 md:h-87 items-center`}>
          <Animated className={style.textWrapper} animation="fade" easing="ease-in" duration={1000}>
              <h1 className={`${style.highlightedText}`}>EV Chargers in Dubai & UAE — for <br className={style.breakLine} />Homes, Offices & Businesses</h1>
              <p>CE & ISO certified AC and DC chargers from AED 900, <br className={style.breakLine} /> with 3-year warranty</p>
              <div className={style.buttonContainer}>
                <RedirectToWhatsapp className={style.chargerButton} isShowIcon={false} text="Request consultation" page="charger" />
                <RedirectToWhatsapp className={style.serviceButton} isShowIcon={false} text="WhatsApp us" page="installation" />
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
