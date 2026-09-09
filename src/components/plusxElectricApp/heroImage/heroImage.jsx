// import Image                from "next/image";
import style                from "./heroImage.module.css";
// import policybazaar         from "@/assets/images/ev-insurance-page/Plusx_electric_policy_bazaar_logo.svg";
// import RedirectToWhatsapp   from "@/sharedComponents/whatsapp/RedirectToWhatsapp";

function PlusXElectricAppHero() {
  return (
    <section className={style.appBanner}>
      <div className={`container ${style.container}`}>
        <div className={style.appContent}>
          <h1>
            <span className={style.appPrimaryText}>One APP for Every <br /> EV Owner in Dubai</span><br/>
            <p>Charging, insurance, roadside support, installation and more. <br />All your EV needs, in one app. Built for a cleaner, smarter,<br /> more connected Dubai.</p>
            {/* <span className={style.appSecondaryText}>Seamless EV Insurance Powered by</span> */}
          </h1>
          {/* <Image className={style.image} src={policybazaar} alt="policybazaar" width={350} height={50}/>
          <RedirectToWhatsapp className={style.appButton} isShowIcon={true} text="Chat with us"/> */}
        </div>
      </div>
    </section>
  );
}

export default PlusXElectricAppHero;
