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
        {/* <SecondaryHeading title="Powering Dubai's EV Community Every Day" /> */}
        <div className={`${style.cardContainer}`}>
          <Animated className={`${style.card}`} animation="fade" easing="ease-in" duration={1000}>
            <div className={`${style.content}`}>
              <Image src={EvCarDriver} alt="EVs rescued with roadside assistance" width={65} height={65} />
              <div className={`${style.innerContent}`}>
                <span className={`${style.counter}`}>575+</span>
                <p className={`${style.title}`}>Chargers Installed  <br className={`${style.breakLine}`} />Across UAE</p>
              </div>
            </div>
          </Animated>
          
          <Animated className={`${style.card}`} animation="fade" easing="ease-in" duration={1000}>
            <div className={`${style.content}`}>
              <Image src={Booking} alt="EVs charged by PlusX power pod" width={65} height={65} />
              <div className={`${style.innerContent}`}>
                <span className={`${style.counter}`}>5000+</span>
                <p className={`${style.title}`}>EV Owners <br className={`${style.breakLine}`} />Served</p>
              </div>
            </div>
          </Animated>

          <Animated className={`${style.card}`} animation="fade" easing="ease-in" duration={1000}>
            <div className={`${style.content}`}>
              <Image src={Station} alt="EV chargers installed across UAE" width={65} height={65} />
              <div className={`${style.innerContent}`}>
                {/* <span className={`${style.counter}`}>375+</span> */}
                <p className={`${style.title}`}>CPO Approved</p> 
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
