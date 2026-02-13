import Image      from "next/image";
import style      from "./ctaSection.module.css";
import Animated   from "@/sharedComponents/animatedComponent/animated";
import mobileApp  from "@/assets/images/mobility-solutions-page/app-phone.webp";
import app        from "@/assets/images/mobility-solutions-page/Icons/app-with-shape.svg";
import cycle      from "@/assets/images/mobility-solutions-page/Icons/cycle-with-shape.svg";
import QR         from "@/assets/images/mobility-solutions-page/Icons/qr-with-shape.svg";

function AppSection() {
  return (
    <section>
      <div className={`${style.appSection}`}>
        <div className="container">
          <div className="flex flex-col md:flex-row">
            <div className={`w-full md:w-1/2 order-2 md:order-1  ${style.infoContainer}`}>
              <Animated className={`${style.infoWrapper}`} animation="fade" easing="ease-in" duration={1000}>
                <h2 className={style.infoTitle}>How It Works</h2>

                <ul className={style.listContent}>
                  <li className={style.list}>
                    <Image className={style.listmage} src={app} alt="app" width={80} height={80}/> <p className={style.listPoints}>Download The PlusX Electric App</p>
                  </li>
                  <li className={style.list}>
                    <Image className={style.listmage} src={cycle} alt="cycle" width={80} height={80}/> <p className={style.listPoints}>Choose Your Cycle (Rent or Lease) & Make The Payment</p>
                  </li>
                  <li className={style.list}>
                    <Image className={style.listmage} src={QR} alt="QR" width={80} height={80}/> <p className={style.listPoints}>Unlock & Ride</p>
                  </li>
                </ul>
              </Animated>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <Animated className={`${style.appImageWrapper}`} animation="fade" easing="ease-in" duration={1000}>
                <Image className={style.appImage} src={mobileApp} alt="mobileApp" width={410} height={544} /> 
              </Animated>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppSection;
