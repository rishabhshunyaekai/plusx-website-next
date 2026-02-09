import Image      from "next/image";
import appStore   from "@/assets/images/homepage/app-store.svg";
import playStore  from "@/assets/images/homepage/play-store.svg";
import Animated   from "@/sharedComponents/animatedComponent/animated";
import style      from "./appSection.module.css";

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
                  <a href="https://apps.apple.com/in/app/plusx-electric/id6503144034" target="__blank">
                    <Image src={appStore} alt="appStore" width={135} height={40}/>
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.shunyaekai.plusexelectric&hl=en&pli=1" target="__blank">
                    <Image src={playStore} alt="playStore" width={135} height={40}/>
                  </a>
                </article>
              </Animated>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <Animated className={`${style.appImageWrapper}`} animation="fade" easing="ease-in" duration={1000}>
                <Image className={style.appImage} src={image} alt="mobileApp" width={410} height={544} /> 
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