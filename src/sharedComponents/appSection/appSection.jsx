import Image      from "next/image";
import style      from "./appSection.module.css";
import Animated   from "@/sharedComponents/animatedComponent/animated";
import appStore   from "@/assets/images/homepage/Plusx_electric_ios_app_store_download_image_icon.svg";
import playStore  from "@/assets/images/homepage/Plusx_electric_google_play_app_download_image_icon.svg";
import { APPLE_STORE_URL, PLAY_STORE_URL } from "@/utils/helper";

function AppSection({title, description, image }) {
  return (
    <section>
      <div className={`${style.appSection}`}>
        <div className="container">
          <div className="flex flex-col md:flex-row">
            <div className={`w-full md:w-1/2 order-2 md:order-1  ${style.infoContainer}`}>
              <Animated className={`${style.infoWrapper}`} animation="fade" easing="ease-in" duration={1000}>
                <h2 className={style.infoTitle}>{title || ""}</h2>

                <p className={style.infoDescription}>{description || ""}</p>

                <article className={style.infoLinks}>
                  <a href={APPLE_STORE_URL} target="__blank">
                    <Image src={appStore} alt="appStore" width={135} height={40}/>
                  </a>
                  <a href={PLAY_STORE_URL} target="__blank">
                    <Image src={playStore} alt="playStore" width={135} height={40}/>
                  </a>
                </article>
              </Animated>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <Animated className={`${style.appImageWrapper}`} animation="fade" easing="ease-in" duration={1000}>
                <Image className={style.appImage} src={image} alt="PlusX Electric App" width={410} height={544} /> 
              </Animated>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppSection;

// import mobileApp from "./../../../../assets/Homepage/mobile-app.png";
// import mobileAppGif from "./../../../../assets/Homepage/Apple-phone-gif.gif";
// import mobileAppWebm from "./../../../../assets/Homepage/Apple-phone.webm";
{/* <img src={mobileAppGif} alt="mobileApp" />  Gif Display */}
{/* <video src={mobileAppWebm} autoPlay loop muted playsInline preload="none" loading="eager" style={{ backgroundColor: "transparent" }}/> Webm display gray background appear on mac */}

{/* <video autoPlay loop muted playsInline preload="none" style={{ backgroundColor: "transparent", borderRadius: "12px" }}> try to fix gray background 
    <source src={mobileApp} type="video/webm" />
    <source src={mobileApps} type="video/mp4" />
    Your browser does not support the video tag.
  </video> */}