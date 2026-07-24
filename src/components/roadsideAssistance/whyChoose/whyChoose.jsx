// import Link     from "next/link";
import Image    from "next/image";
import style    from "./whyChoose.module.css";
import Truck    from "@/assets/images/ev-roadside-assistance-page/Plusx_electric_why_choose_breakdown_assistance.webp";
import Animated from "@/sharedComponents/animatedComponent/animated";

function WhyChoose() {
  return (
    <section className={style.wrapper}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">

          {/* <div className={`${style.isTablet}`}>
            <h2 className={style.whyWeChoose}>
              Why Dubai EV Owners <br className={style.headingBreakLine} /> Choose PlusX Electric
            </h2>
          </div>  ${style.isDesktop}*/}

          <div className={style.imageWrapper}>
            <Image src={Truck} alt="EV breakdown Assistance Dubai" width={555} height={555}/>
          </div>
          
          <Animated className={style.rightContent} animation="fade" easing="ease-in" duration={1000}>
            <h2 className={`${style.whyWeChoose}`}>
              Why Dubai EV Owners <br className={style.headingBreakLine} /> Choose PlusX Electric
            </h2>

            <ul className={style.keyPoint}>
              <li>EV Specialists, Not Generic Mechanics</li>
              <li>750+ EVs Rescued Across Dubai</li>
              <li>60-Minute Response Time (depending on your location)</li>
              <li>No Unnecessary Towing</li>
              <li>Instant Booking Through the App</li>
              <li>Transparent Pricing — From AED 185* + VAT</li>
              <li>Available 24/7, Every Day of the Year</li>
              {/* <li><Link href="/mobile-ev-charging-dubai" target="__blank" className={style.linkColor}>Mobile on-site EV charging</Link> units</li> */}
            </ul>

            <p className="mt-3!"><i>Final price may vary based on time of service, location, and additional requirements.</i></p>
          </Animated>

        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
