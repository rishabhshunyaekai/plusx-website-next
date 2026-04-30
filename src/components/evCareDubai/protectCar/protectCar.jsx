import Image      from "next/image";
import style      from "./protectCar.module.css";
import image      from "@/assets/images/ev-care-dubai/plusx_electric_transform_protect.webp";
import Modal      from "@/assets/images/ev-care-dubai/plusx_electric_matte_wrap.svg";
import Xpansion   from "@/assets/images/ev-care-dubai/plusx_electric_ceramic_coating.svg";
import KM         from "@/assets/images/ev-care-dubai/plusx_electric_gloss_wrap.svg";
import Animated   from "@/sharedComponents/animatedComponent/animated";
import RedirectToWhatsapp from "@/sharedComponents/whatsapp/RedirectToWhatsapp";

function ProtectCar() {
  return (
    <section className={style.scenarios}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          
            <Animated className={`${style.scenariosContent} order-2 lg:order-1`} animation="fade" easing="ease-in" duration={1000}>
              <h2 className={style.scenariosHeading}>Transform & Protect Your Car</h2>
              <p className={style.scenariosIntro}>Service My Car&apos;s professional wrapping team delivers showroom-quality results using premium materials — built for Dubai&apos;s extreme climate. Available for both EVs and ICE vehicles.</p>

              <ul className={style.listContent}>
                <li className={style.list}>
                  <Image className={style.listmage} src={Modal} alt="Matte Wrap" width={80} height={80}/> <p className={style.listPoints}><b>Matte Wrap</b> : Satin-smooth, zero glare finish</p>
                </li>
                <li className={style.list}>
                  <Image className={style.listmage} src={KM} alt="Gloss Wrap" width={80} height={80}/> <p className={style.listPoints}><b>Gloss Wrap</b> : Mirror-like deep shine</p>
                </li>
                <li className={style.list}>
                  <Image className={style.listmage} src={Xpansion} alt="Chrome / Satin" width={80} height={80}/> <p className={style.listPoints}><b>Chrome / Satin</b> : Metallic semi-gloss finish</p>
                </li>
                <li className={style.list}>
                  <Image className={style.listmage} src={Modal} alt="PPF Guard" width={80} height={80}/> <p className={style.listPoints}><b>PPF Guard</b> : Invisible paint protection</p>
                </li>
                <li className={style.list}>
                  <Image className={style.listmage} src={KM} alt="Ceramic Coating" width={80} height={80}/> <p className={style.listPoints}><b>Ceramic Coating</b> : Long-lasting nano-ceramic protection for Dubai&apos;s heat</p>
                </li>
              </ul> 

              <div className={style.buttonContainer}>
                <RedirectToWhatsapp className={style.chargerButton} isShowIcon={false} text="Book Wrapping Service" isRSA={true}/>
              </div>
            </Animated>

            <Animated className="order-1 lg:order-2" animation="fade" easing="ease-in" duration={1000}>
              <div className={style.imageWrapper}>
                <Image src={image} alt="Transform & Protect Your Car" width={555} height={455} />
              </div>
            </Animated>

        </div>
      </div>
    </section>
  );
}

export default ProtectCar;
