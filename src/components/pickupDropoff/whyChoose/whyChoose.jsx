import Image    from "next/image";
import style    from "./whyChoose.module.css";
import Plusx    from "@/assets/images/pickup-dropoff-page/why-choose.webp";
import Animated from "@/sharedComponents/animatedComponent/animated";

function WhyChoose() {
  return (
    <section className={style.wrapper}>
      <div className="container">
        <p className={style.description}><strong>Once booked:</strong></p>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">

          {/* <div className={`${style.isTablet}`}>
            <h2 className={style.whyWeChoose}>
              Why Choose PlusX for <br className={style.headingBreakLine} /> Mobile EV Charging in Dubai
            </h2>
          </div> */}

          <div className={style.imageWrapper}>
            <Image src={Plusx} alt="EV Charger Installation" width={350} height={350}/>
          </div>
          
          <Animated className={style.rightContent} animation="fade" easing="ease-in" duration={1000}>
            {/* <h2 className={`${style.whyWeChoose} ${style.isDesktop}`}>
              Why Choose PlusX for <br className={style.headingBreakLine} /> Mobile EV Charging in Dubai
            </h2>
            <h3 className={style.whyChooseSubTitle}>With a strong emphasis on reliability and convenience, PlusX Electric offers mobile EV charging service Dubai:</h3> */}

            <ul className={style.keyPoint}>
              <li>Your EV is picked up from your selected location.</li>
              <li>The vehicle is taken to a public charging station.</li>
              <li>The charging session is managed safely by the PlusX Electric team.</li>
              <li>Your vehicle is returned to your location in approximately 3 hours.</li>
              <li>You do not need to search for available chargers.</li>
              <li>You do not need to wait at charging stations.</li>
              <li>You can continue your day while PlusX Electric manages the charging process.</li>
            </ul>
          </Animated>

        </div>
        <p className={style.description}>This allows you to keep your EV charged without interrupting your routine.</p>
      </div>
    </section>
  );
}

export default WhyChoose;
