import Link         from "next/link";
import Image        from "next/image";
import AppStore     from "@/assets/images/homepage/app-store.svg";
import PlayStore    from "@/assets/images/homepage/play-store.svg";
import style        from "./downloadApp.module.css";

function DownloadApp() {
  return (
    <section id="download-app" className={`wrapper`}>
      <div className={`${style.downloadWrapper}`}>
        <div className={`container`}>
          <div className={`grid grid-cols-1`}>
              <div className={`${style.downloadAppSection}`}>
                <div className={`${style.appContainer}`}>
                  <Link href="https://apps.apple.com/in/app/plusx-electric/id6503144034" target="_blank" rel="noopener noreferrer" style={{ marginRight: "15px" }}>
                    <Image className={style.appImage} src={AppStore} alt="App Store" width={135} height={40} />
                  </Link>
                  <Link href="https://play.google.com/store/apps/details?id=com.shunyaekai.plusexelectric&hl=en&pli=1" target="_blank" rel="noopener noreferrer" style={{ marginRight: "15px" }}>
                    <Image className={style.appImage} src={PlayStore} alt="Play Store" width={135} height={40} />
                  </Link>
                </div>
                
                <div className={`${style.keyText}`}>
                  <h2 className={`${style.highlightedText}`}>
                    Download The <br className={`${style.breakLine}`}/><span className={`${style.highlight}`}>PlusX Electric App</span>
                  </h2>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;
