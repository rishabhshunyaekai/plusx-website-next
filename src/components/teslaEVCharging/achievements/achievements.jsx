import Image            from "next/image";
import style            from "./achievements.module.css";
import Animated         from "@/sharedComponents/animatedComponent/animated";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
import Station          from "@/assets/images/homepage/plusx_electric_EV_Chargers_installed_across_UAE_icon.svg";
import EvCarDriver      from "@/assets/images/homepage/plusx_electric_EV_rescued_with_RSA_icon.svg";
import Booking          from "@/assets/images/homepage/plusx_electric_EVs_Charged_by_Power_POD_icon.svg";
import Quote            from "@/assets/images/ev-insurance-page/Plusx_electric_request_a_quote_icon.svg";

function Achievements() {

  const achievements = [
    {
      icon    : EvCarDriver,
      alt     : "EVs rescued from a drained battery",
      counter : "1,150+",
      title   : "EVs Rescued from a drained battery",
    },
    {
      icon    : Booking,
      alt     : "EVs charged in Dubai",
      counter : "12,300+",
      title   : "EVs Charged in Dubai",
    },
    {
      icon    : Station,
      alt     : "EV chargers installed across UAE",
      counter : "520+",
      title   : "Charger Installations",
    },
    {
      icon    : Quote,
      alt     : "EV charging company",
      counter : "DEWA-Approved",
      title   : "EV Charging Company",
    },
  ];

  return (
    <section className={style.wrapper}>
      <div className={`container ${style.container}`}>
        {/* <SecondaryHeading title="" /> */}
        <div className={style.cardContainer}>
          {achievements.map((item, index) => (
            <Animated key={index} className={style.card} animation="fade" easing="ease-in" duration={1000} >
              <div className={style.content}>
                <Image src={item.icon} alt={item.alt} width={65} height={65} />

                <div className={style.innerContent}>
                  <span className={style.counter}>{item.counter}</span>
                  <p className={style.title}>{item.title}</p>
                </div>
              </div>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;


{/* <section className={`${style.wrapper}`}>
  <div className={`container ${style.container}`}>
    <SecondaryHeading title="Powering Dubai's EV Community Every Day" />
    <div className={`${style.cardContainer}`}>
      <Animated className={`${style.card}`} animation="fade" easing="ease-in" duration={1000}>
        <div className={`${style.content}`}>
          <Image src={EvCarDriver} alt="EVs rescued from a drained battery" width={65} height={65} />
          <div className={`${style.innerContent}`}>
            <span className={`${style.counter}`}>1,150+</span>
            <p className={`${style.title}`}>EVs Rescued  <br className={`${style.breakLine}`} />from a drained battery</p>
          </div>
        </div>
      </Animated>
      
      <Animated className={`${style.card}`} animation="fade" easing="ease-in" duration={1000}>
        <div className={`${style.content}`}>
          <Image src={Booking} alt="EVs charged in Dubai" width={65} height={65} />
          <div className={`${style.innerContent}`}>
            <span className={`${style.counter}`}>12,300+</span>
            <p className={`${style.title}`}>EVs Charged  <br className={`${style.breakLine}`} />in Dubai</p>
          </div>
        </div>
      </Animated>

      <Animated className={`${style.card}`} animation="fade" easing="ease-in" duration={1000}>
        <div className={`${style.content}`}>
          <Image src={Station} alt="EV chargers installed across UAE" width={65} height={65} />
          <div className={`${style.innerContent}`}>
            <span className={`${style.counter}`}>520+</span>
            <p className={`${style.title}`}>Charger Installations</p> 
          </div>
        </div>
      </Animated>

      <Animated className={`${style.card}`} animation="fade" easing="ease-in" duration={1000}>
        <div className={`${style.content}`}>
          <Image src={Station} alt="EV charging company" width={65} height={65} />
          <div className={`${style.innerContent}`}>
            <span className={`${style.counter}`}>DEWA-approved</span>
            <p className={`${style.title}`}>EV Charging Company</p> 
          </div>
        </div>
      </Animated>
    </div>
  </div>
</section> */}