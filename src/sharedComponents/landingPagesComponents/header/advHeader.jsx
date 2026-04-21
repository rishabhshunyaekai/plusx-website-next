import style                from "./advHeader.module.css";
import CompanyLogo          from "@/sharedComponents/companyLogo/companyLogo";
import CTAButton            from "@/sharedComponents/ctaButton/ctaButton";
import RedirectToWhatsapp   from "@/sharedComponents/whatsapp/RedirectToWhatsapp";
import { TbPhoneCall }      from "react-icons/tb";

function AdvHeader() {

  return (
    <header className={`${style.header}`}>
      <div className={`container`}>
        <div className={style.headerWrap}>
          <div id={style.logo}>
            <CompanyLogo />
          </div>
          <div className={style.headerButtonContainer}>
            <a href="tel:+971542796424" rel="noreferrer" className={style.button}><TbPhoneCall /></a>
            <RedirectToWhatsapp className={style.button} isShowIcon={true} />
            <CTAButton className={style.downloadAppLink} text="DOWNLOAD APP" handler="appRedirect" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default AdvHeader;

// import Image                from "next/image";
// import Call                 from "@/assets/images/landing-pages/on-demand/call.svg";
// import Whatsapp             from "@/assets/images/landing-pages/on-demand/whatsapp-background.svg";
{/* <a href="tel:+971542796424" rel="noreferrer"><Image src={Call} alt="Call" width={55} height={55} priority /></a>
    <RedirectToWhatsapp className={style.chargerButton} imageSrc={Whatsapp} />
    <CTAButton className={style.downloadAppLink} text="DOWNLOAD APP" handler="appRedirect" /> */}