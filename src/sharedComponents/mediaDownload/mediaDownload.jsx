import Image          from "next/image";
import Link           from "next/link";
import Animated       from "../animatedComponent/animated";
import AppStore       from "@/assets/images/homepage/app-store.svg";
import PlayStore      from "@/assets/images/homepage/play-store.svg";
import style          from "./mediaDownload.module.css";

function MediaDownload() {
  return (
    <section className={`${style.wrapper}`}>
      <div className={`container ${style.container}`}>
        <div className={`row ${style.row}`}>
          <div className={`col-lg-12`}>
            <Animated className={`${style.appSection}`} animation="fade" easing="ease-in" duration={1000}>
              <div className={`${style.applicaitonContainer}`}>
                <Link href="https://apps.apple.com/in/app/plusx-electric/id6503144034" target="_blank" rel="noopener noreferrer" style={{ marginRight: "15px" }}>
                  <Image className={style.downloadImage} src={AppStore} alt="App Store" width={135} height={40} />
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.shunyaekai.plusexelectric&hl=en&pli=1" target="_blank" rel="noopener noreferrer" style={{ marginRight: "15px" }}>
                  <Image className={style.downloadImage} src={PlayStore} alt="Play Store" width={135} height={40} />
                </Link>
              </div>
              
              <div className={`${style.featuredText}`}>
                <h2 className={`${style.mediaTitle}`}>
                  Download The <br className={`${style.breakLine}`}/><span className={`${style.highlight}`}>PlusX Electric App</span>
                </h2>
              </div>
            </Animated>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MediaDownload;
