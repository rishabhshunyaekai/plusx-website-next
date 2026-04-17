import style              from "./heroImage.module.css";
import RedirectToWhatsapp from "@/sharedComponents/whatsapp/RedirectToWhatsapp";

function RSAHeroImage() {
  return (
    <figure className={style.rsaBanner}>
      <main className={`container ${style.rsaContainer}`}>
        <h1 className={style.secondaryHeading}>
          <span className={style.tagline}>EV battery dead?</span><br />
          <span className={style.tagline}>We bring the charge to you </span><br className={style.breakLine}/>
          <span className={style.tagline}>anywhere in Dubai.</span>
        </h1>
        <p className={style.outlinerText}>AED 145 + VAT (Jump-start included)</p>
        <div className={style.buttonContainer}>
          <a href="tel:+971543061473" className={style.greenBox}>Call Now</a>
          <RedirectToWhatsapp className={style.WhiteBox} text="Get Help on WhatsApp" isRSA={true}/>
        </div>
      </main>
    </figure>
  );
}

export default RSAHeroImage;
