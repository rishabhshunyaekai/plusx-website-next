import Link         from "next/link";
import Image        from "next/image";
import style        from "./productCard.module.css";
import Animated     from "@/sharedComponents/animatedComponent/animated";
import Charger      from "@/assets/images/ev-charger-installation-page/charger.webp";
import Accessories  from "@/assets/images/ev-charger-installation-page/accessories.webp";

function ProductsCard() {
  return (
    <section className={`${style.wrapper}`}>
      <div className={`container ${style.container}`}>
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-15 lg:gap-6`}>
          <Animated className={`${style.cardContainer}`} animation="fade" easing="ease-in" duration={1000}>
              <h2 className={style.cardTitle}>Buy EV <br className={`${style.breakLine}`}/>Chargers</h2>
              <h3 className={style.cardSubTitle}>All Type of AC & DC <br className={`${style.breakLine}`}/>Chargers Available</h3>
               <div className={`${style.buttonContainer}`}>
                <Link href="/ev-chargers/ac-dc-ev-chargers" className={style.cardButton}>View Details</Link>
              </div>
              <div className={style.cardImageWrapper}>
                <Image className={style.cardImage} src={Charger} alt="Charger" width={405} height={370} />
              </div>
            </Animated>
            
            <Animated className={`${style.cardContainer}`} animation="fade" easing="ease-in" duration={1000}>
              <h2 className={style.cardTitle}>Buy Charging <br className={`${style.breakLine}`}/>Accessories</h2>
              <h3 className={style.cardSubTitle}>Accessories, Spare <br className={`${style.breakLine}`}/>Parts</h3>
               <div className={`${style.buttonContainer}`}>
                <Link href="/ev-chargers/ev-accessories" className={style.cardButton}>View Details</Link>
              </div>
              <div className={style.cardImageWrapper}>
                <Image className={style.cardImage} src={Accessories} alt="Accessories" width={405} height={370} />
              </div>
            </Animated>
        </div>
      </div>
    </section>
  );
}

export default ProductsCard;
