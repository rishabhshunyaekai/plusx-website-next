import Image    from "next/image";
import style    from "./whyChoose.module.css";
import Plusx    from "@/assets/images/portable-charger-page/Plusx_electric_why_choose_plusx_Mobile_ev_charging_section_image.webp";
import Animated from "@/sharedComponents/animatedComponent/animated";

function WhyChoose() {
  return (
    <section className={style.wrapper}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">

          {/* <div className={`${style.isTablet}`}>
            <h2 className={style.whyWeChoose}>
              Why Every EV Owner in Dubai Should Have the PlusX Electric App
            </h2>
          </div> ${style.isDesktop}*/}

          <div className={style.imageWrapper}>
            <Image src={Plusx} alt="PlusX Electric should have choose the PlusX Electric App in Dubai" width={555} height={555}/>
          </div>
          
          <Animated className={style.rightContent} animation="fade" easing="ease-in" duration={1000}>
            <h2 className={`${style.whyWeChoose}`}>
              {/*<br className={style.headingBreakLine} /> */}
              Why Every EV Owner in Dubai Should Have the PlusX Electric App
            </h2>
            <p className={style.whyChooseSubTitle}>More convenience. More support. A smarter EV experience</p>

            <ul className={style.keyPoint}>
              <li><strong>All EV service in one App: </strong>Charging, support, installation, insurance and more.</li>
              <li><strong>24/7 support across Dubai: </strong>Get help whenever you need it, anywhere in Dubai.</li>
              <li><strong>Fast booking in seconds: </strong>Book services quickly and get on the road sooner.</li>
              <li><strong>Reliable charging help when you need it: </strong>Stay charged and confident, always.</li>
              <li><strong>Manage your EV life more easily: </strong>Everything you need at your fingertips.</li>
              <li><strong>Trusted for everyday EV convenience: </strong>Built for Dubai&apos;s growing EV community.</li>
            </ul>
          </Animated>

        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
