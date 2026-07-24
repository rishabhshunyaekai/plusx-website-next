import Link     from "next/link";
import Image    from "next/image";
import style    from "./pickupDropoff.module.css";
import Animated from "@/sharedComponents/animatedComponent/animated";
import Pickup   from "@/assets/images/homepage/Plusx_electric_Ev_pickup_dropoff_homepage_icon.png";

function PickupDropoff() {
  return (
    <section className={`${style.wrapper}`}>
      <div className={`container ${style.container}`}>
        <div className={`grid grid-cols-1 lg:grid-cols-3 items-center`}>
          <div className={`lg:col-span-2`}>
            <Animated className={style.contentWrapper} animation="slide-right" easing="ease-in" duration={1000}>
              <h2 className={style.cardTitle}>
                <Link href="/ev-pickup-dropoff-charging-service">EV Pick Up & Drop Off</Link>
              </h2>
              <p className={style.cardSubTitle}>We pick up your EV, charge it, and drop <br className={`${style.breakLine}`}/>it back within 2 hours.</p>
              <div className={`${style.buttonContainer}`}>
                <Link href="/ev-pickup-dropoff-charging-service" className={style.cardButton}>Know More</Link>
              </div>
            </Animated>
          </div>
          <div className={`lg:col-span-1`}>
            <div className={style.cardImageWrapper}>
              <Image className={style.cardImage} src={Pickup} alt="PlusX Electric EV pickup and dropoff service in Dubai" width={405} height={370} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PickupDropoff;
