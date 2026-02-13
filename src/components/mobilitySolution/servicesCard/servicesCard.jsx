// import Link             from "next/link";
import Image            from "next/image";
import style            from "./servicesCard.module.css";
import Animated         from "@/sharedComponents/animatedComponent/animated";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
import Rent             from "@/assets/images/mobility-solutions-page/service-1.webp";
import Lease            from "@/assets/images/mobility-solutions-page/service-2.webp";

function ServicesCard() {
  return (
    <section className={`${style.wrapper}`}>
      <div className={`container ${style.container}`}>
        <SecondaryHeading title="Our Services" />
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-15 lg:gap-6`}>
          <Animated className={`${style.cardContainer}`} animation="fade" easing="ease-in" duration={1000}>
              <h2 className={style.cardTitle}>Electric Cycle on Rent</h2>
              <h3 className={style.cardSubTitle}>A smart choice for short trips <br className={`${style.breakLine}`}/>and flexible daily commutes</h3>
               {/* <div className={`${style.buttonContainer}`}>
                <Link href="/ev-chargers/ac-dc-ev-chargers" className={style.cardButton}>View Details</Link>
              </div> */}
              <div className={style.cardImageWrapper}>
                <Image className={style.cardImage} src={Rent} alt="Rent" width={405} height={370} />
              </div>
            </Animated>
            
            <Animated className={`${style.cardContainer}`} animation="fade" easing="ease-in" duration={1000}>
              <h2 className={style.cardTitle}>Electric Cycle on Lease</h2>
              <h3 className={style.cardSubTitle}>Long-term convenience with <br className={`${style.breakLine}`}/>significant cost savings</h3>
               {/* <div className={`${style.buttonContainer}`}>
                <Link href="/ev-chargers/ev-accessories" className={style.cardButton}>View Details</Link>
              </div> */}
              <div className={style.cardImageWrapper}>
                <Image className={style.cardImage} src={Lease} alt="Lease" width={405} height={370} />
              </div>
            </Animated>
        </div>
      </div>
    </section>
  );
}

export default ServicesCard;
