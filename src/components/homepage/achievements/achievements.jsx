import Image            from "next/image";
import style            from "./achievements.module.css";
import Animated         from "@/sharedComponents/animatedComponent/animated";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
import Station          from "@/assets/images/homepage/plusx_electric_EV_Chargers_installed_across_UAE_icon.svg";
import EvCarDriver      from "@/assets/images/homepage/plusx_electric_EV_rescued_with_RSA_icon.svg";
import Booking          from "@/assets/images/homepage/plusx_electric_EVs_Charged_by_Power_POD_icon.svg";

function Achievements() {
  return (
    <section className={`${style.wrapper}`}>
      <div className={`container ${style.container}`}>
        <SecondaryHeading title="Powering Dubai's EV Community Every Day" />
        <div className={`${style.cardContainer}`}>
          <Animated className={`${style.card}`} animation="fade" easing="ease-in" duration={1000}>
            <div className={`${style.content}`}>
              <Image src={EvCarDriver} alt="EVs rescued with roadside assistance" width={65} height={65} />
              <div className={`${style.innerContent}`}>
                <span className={`${style.counter}`}>1,150+</span>
                <p className={`${style.title}`}>EVs Rescued  <br className={`${style.breakLine}`} />with RSA Service</p>
              </div>
            </div>
          </Animated>
          
          <Animated className={`${style.card}`} animation="fade" easing="ease-in" duration={1000}>
            <div className={`${style.content}`}>
              <Image src={Booking} alt="EVs charged by PlusX power pod" width={65} height={65} />
              <div className={`${style.innerContent}`}>
                <span className={`${style.counter}`}>12,300+</span>
                <p className={`${style.title}`}>EVs Charged by  <br className={`${style.breakLine}`} />Power Pod</p>
              </div>
            </div>
          </Animated>

          <Animated className={`${style.card}`} animation="fade" easing="ease-in" duration={1000}>
            <div className={`${style.content}`}>
              <Image src={Station} alt="EV chargers installed across UAE" width={65} height={65} />
              <div className={`${style.innerContent}`}>
                <span className={`${style.counter}`}>520+</span>
                <p className={`${style.title}`}>EV Chargers Installed Across UAE</p> 
                {/* <br className={`${style.breakLine}`}UAE--> */}
              </div>
            </div>
          </Animated>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
