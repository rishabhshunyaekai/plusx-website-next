import Image from "next/image";
import style from "./achievements.module.css";
import Animated from "@/sharedComponents/animatedComponent/animated";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
import Station from "@/assets/images/homepage/station.svg";
import EvCarDriver from "@/assets/images/homepage/ev-car-driver.svg";
import Booking from "@/assets/images/homepage/booking.svg";

function Achievements() {
  return (
    <section className={`${style.wrapper}`}>
      <div className={`container ${style.container}`}>
        <SecondaryHeading title="Trusted by EV Owners" />
        <div className={`${style.cardContainer}`}>
          <Animated className={`${style.card}`} animation="fade" easing="ease-in" duration={1000}>
            <div className={`${style.content}`}>
              <Image src={EvCarDriver} alt="Image" width={65} height={65} />
              <div className={`${style.innerContent}`}>
                <span className={`${style.counter}`}>575+</span>
                <p className={`${style.title}`}>EVs Rescued  <br className={`${style.breakLine}`} />with RSA Service</p>
              </div>
            </div>
          </Animated>
          
          <Animated className={`${style.card}`} animation="fade" easing="ease-in" duration={1000}>
            <div className={`${style.content}`}>
              <Image src={Booking} alt="Image" width={65} height={65} />
              <div className={`${style.innerContent}`}>
                <span className={`${style.counter}`}>5000+</span>
                <p className={`${style.title}`}>EVs Charged by  <br className={`${style.breakLine}`} />Power Pod</p>
              </div>
            </div>
          </Animated>

          <Animated className={`${style.card}`} animation="fade" easing="ease-in" duration={1000}>
            <div className={`${style.content}`}>
              <Image src={Station} alt="Image" width={65} height={65} />
              <div className={`${style.innerContent}`}>
                <span className={`${style.counter}`}>375+</span>
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
