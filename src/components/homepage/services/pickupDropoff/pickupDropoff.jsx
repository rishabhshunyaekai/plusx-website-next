import Link     from "next/link";
import Image    from "next/image";
import Pickup   from "@/assets/images/homepage/pickup-dropoff.png";
import Animated from "@/sharedComponents/animatedComponent/animated";
import style    from "./pickupDropoff.module.css";

function PickupDropoff() {
  return (
    <section className={`${style.wrapper}`}>
      <div className={`container ${style.container}`}>
        <div className={`grid grid-cols-1 lg:grid-cols-3 items-center`}>
          <div className={`lg:col-span-2`}>
            <Animated className={style.contentWrapper} animation="fade" easing="ease-in" duration={1000}>
              <h2 className={style.cardTitle}>Pick Up & Drop Off</h2>
              <h3 className={style.cardSubTitle}>We&apos;ll pick up your car, charge it <br className={`${style.breakLine}`}/>& drop it back within 2 hrs!</h3>
              <div className={`${style.buttonContainer}`}>
                <Link href="/ev-pickup-dropoff-charging-service" className={style.cardButton}>Know More</Link>
              </div>
            </Animated>
          </div>
          <div className={`lg:col-span-1`}>
            <div className={style.cardImageWrapper}>
              <Image className={style.cardImage} src={Pickup} alt="Pickup" width={405} height={370} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PickupDropoff;
