"use client";

import Image                from "next/image";
import style                from "./advHeader.module.css";
import CompanyLogo          from "@/sharedComponents/companyLogo/companyLogo";
import Call                 from "@/assets/images/landing-pages/on-demand/call.svg";
import Whatsapp             from "@/assets/images/landing-pages/on-demand/whatsapp-background.svg";
import CTAButton            from "@/sharedComponents/ctaButton/ctaButton";
import useAdvertisingWpMess from "@/hooks/useAdvertisingWpMess";

function AdvHeader() {
  const { whatsappUrl } = useAdvertisingWpMess();

  return (
    <header className={`${style.header}`}>
      <div className={`container`}>
        <div className={style.headerWrap}>
          <div id={style.logo}>
            <CompanyLogo />
          </div>
          <div className={style.headerButtonContainer}>
            <a href="tel:+971542796424" rel="noreferrer"><Image src={Call} alt="Call" width={50} height={50} priority /></a>
            <a target="_blank" href={whatsappUrl} rel="noreferrer" id="whatsappIcon"><Image src={Whatsapp} alt="Whatsapp" width={50} height={50} priority /></a>
            <CTAButton className={style.downloadAppLink} text="DOWNLOAD APP" handler="appRedirect" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default AdvHeader;
