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
          </div> */}

          <div className={style.imageWrapper}>
            <Image src={Truck} alt="Why Dubai EV owners choose PlusX Electric for EV breakdown assistance — 575 plus vehicles rescued" width={555} height={555}/>
          </div>
          
          <Animated className={style.rightContent} animation="fade" easing="ease-in" duration={1000}>
            <h2 className={`${style.whyWeChoose} ${style.isDesktop}`}>
              Why Dubai EV Owners <br className={style.headingBreakLine} /> Choose PlusX Electric
            </h2>

            <ul className={style.keyPoint}>
              {/* <li>EV Specialists, Not Generic Mechanics</li>
              <li>750+ EVs Rescued Across Dubai</li>
              <li>60-Minute Response Time (depending on your location)</li>
              <li>No Unnecessary Towing</li>
              <li>Instant Booking Through the App</li>
              <li>Transparent Pricing — From AED 185* + VAT</li>
              <li>Available 24/7, Every Day of the Year</li> */}
              {/* <li><Link href="/mobile-ev-charging-dubai" target="__blank" className={style.linkColor}>Mobile on-site EV charging</Link> units</li> */}

              <li><b>EV Specialists, Not Generic Mechanics —</b> Our technicians are trained specifically on electric vehicle systems, including high-voltage battery packs, 12V auxiliary diagnostics, and charge port troubleshooting across all major brands.</li>
              <li><b>750+ EVs Rescued Across Dubai —</b> Real experience with real breakdowns, not theoretical training. We&apos;ve handled dead batteries on Sheikh Zayed Road, 12V failures in JLT building parking, and stuck charge connectors in Palm Jumeirah villas.</li>
              <li><b>60-Minute Response Time —</b> Depending on your location, our average dispatch-to-arrival time across 750+ rescues is under 60 minutes.</li>
              <li><b>No Unnecessary Towing —</b> We resolve the vast majority of breakdowns on-site with mobile charging or 12V jump-start. Towing is used only when on-site recovery is genuinely not feasible.</li>
              <li><b>Building Parking Access —</b>  Our vans fit in building parking garages where flatbed tow trucks cannot enter. We reach underground levels, podium parking, and multi-storey structures across Dubai.</li>
              <li><b>Instant Booking Through the App —</b>  The PlusX Electric app is trusted by 6800+ EV drivers in the UAE. Book a rescue in under 60 seconds. <i>Transparent Pricing — From AED 185* + VAT</i> — No hidden fees. Your confirmed quote is shown in the app before dispatch.</li>
              <li><b>Available 24/7, Every Day of the Year —</b>  Breakdowns don&apos;t follow business hours. Neither do we.</li>
            </ul>

            <p className="mt-3!"><i>Final price may vary based on time of service, location, and additional requirements.</i></p>
          </Animated>

        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
