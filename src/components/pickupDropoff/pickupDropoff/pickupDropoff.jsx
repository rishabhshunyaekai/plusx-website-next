// import Image            from "next/image";
import style            from "./pickupDropoff.module.css";
// import Animated         from "@/sharedComponents/animatedComponent/animated";
// import CTAButton        from "@/sharedComponents/ctaButton/ctaButton.jsx";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
// import Pickup           from "@/assets/images/homepage/pickup-dropoff.png";

function PickupDropoff() {
  return (
    <section className="container">
      <SecondaryHeading title={`Service Areas in Dubai`} />
      <p className={style.description}>PlusX Electric offers EV pick up/drop off charging all over Dubai.</p>
      
      <figure className={`${style.wrapper}`}>
        <div className={`container ${style.container}`}>

          {/* <div className={`grid grid-cols-1 lg:grid-cols-3 items-center`}>
            <div className={`lg:col-span-1 order-2 lg:order-1`}>
              <div className={style.cardImageWrapper}>
                <Image className={style.cardImage} src={Pickup} alt="Pickup" width={405} height={370} />
              </div>
            </div>
            <div className={`lg:col-span-2 order-1 lg:order-2`}>
              <Animated className={style.contentWrapper} animation="slide-left" easing="ease-in" duration={1000}>
                <h2 className={style.cardTitle}>On-Demand <br className={style.breakLine}/>Pickup & Drop-Off</h2>
                <h3 className={style.cardSubTitle}><strong>Service Fee: AED 39</strong></h3>
                <div className={`${style.buttonContainer}`}>
                  <CTAButton className={style.cardButton} text="Book Now" handler="scrollToAppSection" />
                </div>
              </Animated>
            </div>
          </div> */}
        </div>
      </figure>
    </section>
  );
}

export default PickupDropoff;
