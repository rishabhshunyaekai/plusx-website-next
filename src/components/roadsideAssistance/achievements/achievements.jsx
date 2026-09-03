import Image            from "next/image";
import style            from "./achievements.module.css";
import Animated         from "@/sharedComponents/animatedComponent/animated";
import EvCarDriver      from "@/assets/images/homepage/plusx_electric_EV_rescued_with_RSA_icon.svg";
import NoTowing         from "@/assets/images/ev-roadside-assistance-page/Plusx_electric_no_towing_icon.svg";
import JumpStart        from "@/assets/images/ev-roadside-assistance-page/Plusx_electric_jump_start_icon.svg";
// import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
// import Station          from "@/assets/images/homepage/plusx_electric_EV_Chargers_installed_across_UAE_icon.svg";
// import Booking          from "@/assets/images/homepage/plusx_electric_EVs_Charged_by_Power_POD_icon.svg";

function Achievements() {
  return (
    <section className={`${style.wrapper}`}>
      <div className={`container ${style.container}`}>
        {/* <SecondaryHeading title="Powering Dubai's EV Community Every Day" /> */}
        <div className={`${style.cardContainer}`}>
          <Animated className={`${style.card}`} animation="fade" easing="ease-in" duration={1000}>
            <div className={`${style.content}`}>
              <Image src={EvCarDriver} alt="PlusX Electric EVs rescued with roadside assistance" width={65} height={65} />
              <div className={`${style.innerContent}`}>
                <span className={`${style.counter}`}>1,150+</span>
                <p className={`${style.title}`}>EVs Rescued  <br className={`${style.breakLine}`} />across Dubai</p>
              </div>
            </div>
          </Animated>
          
          <Animated className={`${style.card}`} animation="fade" easing="ease-in" duration={1000}>
            <div className={`${style.content}`}>
              <Image src={NoTowing} alt="PlusX Electric on spot EV charging" width={65} height={65} />
              <div className={`${style.innerContent}`}>
                <span className={`${style.counter}`}>On the spot</span>
                <p className={`${style.title}`}>We charge your EV  <br className={`${style.breakLine}`} />where it stands — no tow truck</p>
              </div>
            </div>
          </Animated>

          <Animated className={`${style.card}`} animation="fade" easing="ease-in" duration={1000}>
            <div className={`${style.content}`}>
              <Image src={JumpStart} alt="PlusX Electric 12V jump-start" width={65} height={65} />
              <div className={`${style.innerContent}`}>
                <span className={`${style.counter}`}>12V jump-start</span>
                <p className={`${style.title}`}>Dead 12V? We jump-start it on site</p> 
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
