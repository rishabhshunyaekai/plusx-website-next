import Image      from "next/image";
import style      from "./heroImage.module.css";
import appStore   from "@/assets/images/homepage/Plusx_electric_ios_app_store_download_image_icon.svg";
import playStore  from "@/assets/images/homepage/Plusx_electric_google_play_app_download_image_icon.svg";
import { APPLE_STORE_URL, PLAY_STORE_URL } from "@/utils/helper";
// import policybazaar         from "@/assets/images/ev-insurance-page/Plusx_electric_policy_bazaar_logo.svg";
// import RedirectToWhatsapp   from "@/sharedComponents/whatsapp/RedirectToWhatsapp";

function PlusXElectricAppHero() {
  return (
    <section className={style.appBanner}>
      <div className={`container ${style.container}`}>
        <div className={style.appContent}>
          <div>
            <div className={style.appPrimaryText}>One App For Every <br className={style.breakLine} /> 
              <div className={style.highlightedText}>EV Owner In Dubai</div>
            </div>
            <p className={style.appText}>Charging, insurance, roadside support, installation and more. <br className={style.breakLine} />All your EV needs, in one app. Built for a cleaner, smarter,<br className={style.breakLine} /> more connected Dubai.</p>
            {/* <span className={style.appSecondaryText}>Seamless EV Insurance Powered by</span> */}
          </div>
          <article className={style.infoLinks}>
            <a href={APPLE_STORE_URL} target="__blank">
              <Image src={appStore} alt="App Store" width={135} height={40}/>
            </a>
            <a href={PLAY_STORE_URL} target="__blank">
              <Image src={playStore} alt="Play Store" width={135} height={40}/>
            </a>
          </article>
          {/* <Image className={style.image} src={policybazaar} alt="policybazaar" width={350} height={50}/>
          <RedirectToWhatsapp className={style.appButton} isShowIcon={true} text="Chat with us"/> */}
        </div>
      </div>
    </section>
  );
}

export default PlusXElectricAppHero;
