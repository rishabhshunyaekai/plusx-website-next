import Image    from "next/image";
import style    from "./smartModel.module.css";
import Adoption from "@/assets/images/ev-charge-share-page/plusx_electric_community_charging_modal.webp";
import Animated from "@/sharedComponents/animatedComponent/animated";

function SmartModel() {
  return (
    <section className={style.wrapper}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">

          {/* <div className={`${style.isTablet}`}>
            <h2 className={style.whyWeChoose}>
              A Smarter Community <br className={style.headingBreakLine} />Charging Model
            </h2>
          </div> ${style.isDesktop}*/}

          <div className={style.imageWrapper}>
            <Image src={Adoption} alt="A Smarter Community Charging Model" width={555} height={555}/>
          </div>
          
          <Animated className={style.rightContent} animation="fade" easing="ease-in" duration={1000}>
            <h2 className={`${style.whyWeChoose}`}>
              A Smarter Community <br className={style.headingBreakLine} />Charging Model
            </h2>

            <p className={style.content}>PlusX Electric is building a community where EV owners can support each other by sharing private chargers within their neighbourhoods.</p>
            <p className={style.content}>Instead of waiting for large infrastructure upgrades, existing chargers can be shared to improve access to charging in residential communities.</p>

            <p className={style.subTitle}>This approach supports:</p>

            <ul className={style.keyPoint}>
              <li>Stronger EV communities where owners help each other</li>
              <li>Reduced reliance on crowded public charging stations</li>
              <li>Better use of existing charging infrastructure </li>
              <li>Faster EV adoption across Dubai</li>
            </ul>
          </Animated>

        </div>
      </div>
    </section>
  );
}

export default SmartModel;
