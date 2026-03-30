import Image                from "next/image";
import style                from "./heroImage.module.css";
import policybazaar         from "@/assets/images/ev-insurance-page/policy-bazaar-logo.svg";
import RedirectToWhatsapp   from "@/sharedComponents/whatsapp/RedirectToWhatsapp";

function InsuranceHeroImage() {
  return (
    <section className={style.insuranceBanner}>
      <div className={`container ${style.container}`}>
        <div className={style.insuranceContent}>
          <h2 className={style.insurancePrimaryText}>Insure Instantly, <br /> Drive Worry-Free</h2>
          <h2 className={style.insuranceSecondaryText}>Seamless EV Insurance Powered by</h2>
          <Image className={style.image} src={policybazaar} alt="policybazaar" width={350} height={50}/>
          <RedirectToWhatsapp className={style.insuranceButton} isShowIcon={true} text="Chat with us"/>
        </div>
      </div>
    </section>
  );
}

export default InsuranceHeroImage;
