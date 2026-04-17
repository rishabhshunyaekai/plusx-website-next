import style                  from "./heroImage.module.css";
import Image                  from "next/image";
import Plusx                  from "@/assets/images/ev-care-dubai/plusx-logo-white.webp";
import Service                from "@/assets/images/ev-care-dubai/car-my-service-logo.webp";
import CTAButton              from "@/sharedComponents/ctaButton/ctaButton";
import RedirectToWhatsapp     from "@/sharedComponents/whatsapp/RedirectToWhatsapp";

function EVCareHeroImage() {
  return (
    <section className={style.chargeShareBanner}>
      <div className={`container ${style.container}`}>
        <div className={style.shareBannerContent}>
          <div className={style.brandContainer}>
            <Image src={Plusx} alt="logo 1" width={170}  />
            <Image src={Service} alt="Logo 2" width={170} />
          </div>

          <div className={style.headingSection}>
            <h1>
              <span className={style.sharePrimaryText}>OFFERING COMPLETE CAR CARE</span><br/><br />
              <span className={style.sharePrimaryText2}>FOR <span className={style.shareSecondaryText}>EVERY EV & ICE CAR</span> IN DUBAI </span>
            </h1>
          </div>

          <p className={style.secondaryText}>Get professional car servicing, wrapping, EV <br className={style.breakLine}/> charging, and accessories - all from one<br className={style.breakLine}/> trusted partnership in Dubai.</p>

          <div className={style.buttonContainer}>
            <RedirectToWhatsapp className={style.serviceButton} isShowIcon={false} text="Book a Service Now" isRSA={true}/>
            <CTAButton className={style.chargerButton} text="Explore Car Services" handler="scrollToCarService" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EVCareHeroImage;
