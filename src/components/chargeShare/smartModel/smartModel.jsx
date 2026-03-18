import Image    from "next/image";
import style    from "./smartModel.module.css";
import Adoption from "@/assets/images/ev-charge-share-page/adoption.webp";
import Animated from "@/sharedComponents/animatedComponent/animated";

function SmartModel() {
  return (
    <section className={style.wrapper}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">

          <div className={`${style.isTablet}`}>
            <h2 className={style.whyWeChoose}>
              A Smarter Community <br className={style.headingBreakLine} />Charging Model
            </h2>
          </div>

          <div className={style.imageWrapper}>
            <Image src={Adoption} alt="EV Charger Installation" width={555} height={555}/>
          </div>
          
          <Animated className={style.rightContent} animation="fade" easing="ease-in" duration={1000}>
            <h2 className={`${style.whyWeChoose} ${style.isDesktop}`}>
              A Smarter Community <br className={style.headingBreakLine} />Charging Model
            </h2>

            <p className={style.content}>PlusX Electric Charge Sharing allows the utilisation of the current charging infrastructure rather than postponing a massive upgrade.</p>

            <h3 className={style.subTitle}>It supports:</h3>

            <ul className={style.keyPoint}>
              <li>Scalable EV growth in residential communities</li>
              <li>Reduced dependency on public charging stations</li>
              <li>More efficient energy usage </li>
              <li>Faster EV adoption across Dubai</li>
            </ul>
          </Animated>

        </div>
      </div>
    </section>
  );
}

export default SmartModel;
