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
            <Image src={Truck} alt="Roadside assistance for electric cars in Dubai by PlusX Electric" width={555} height={555}/>
          </div>
          
          <Animated className={style.rightContent} animation="fade" easing="ease-in" duration={1000}>
            <h2 className={`${style.whyWeChoose}`}>
              Why Dubai EV Owners <br className={style.headingBreakLine} /> Choose PlusX Electric
            </h2>

            <ul className={style.keyPoint}>
              <li>1,150+ EVs rescued across Dubai</li>
              <li>Charged on the spot — up to 10 kWh delivered where your car stands, no tow</li>
              <li>12V jump-start on site — the cause of roughly half the breakdowns we attend</li>
              <li>EV specialists, not general mechanics</li>
              <li>60-Minute Response Time (depending on your location)</li>
              <li>24/7, every day of the year</li>
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
