import style            from "./achievement.module.css";
import Image            from "next/image";
import Animated         from "@/sharedComponents/animatedComponent/animated";
// import Card             from "@/sharedComponents/benefitsCard/benefitsCard";
// import EvCarDriver      from "@/assets/images/homepage/plusx_electric_575+_EV_rescued_with_RSA_icon.svg";
// import NoTowing         from "@/assets/images/ev-roadside-assistance-page/Plusx_electric_no_towing_icon.svg";
// import Booking          from "@/assets/images/homepage/plusx_electric_5000+_EVs_Charged_by_Power_POD_icon.svg";
// import JumpStart        from "@/assets/images/ev-roadside-assistance-page/Plusx_electric_jump_start_icon.svg";
// import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
// import Station          from "@/assets/images/homepage/plusx_electric_EV_Chargers_installed_across_UAE_icon.svg";
// import Booking          from "@/assets/images/homepage/plusx_electric_EVs_Charged_by_Power_POD_icon.svg";

import Station          from "@/assets/images/homepage/plusx_electric_EV_Chargers_installed_across_UAE_icon.svg";
import EvCarDriver      from "@/assets/images/homepage/plusx_electric_EV_rescued_with_RSA_icon.svg";
import Booking          from "@/assets/images/homepage/plusx_electric_EVs_Charged_by_Power_POD_icon.svg";

function Achievement() {

  const benefits = [
    { icon: Station,      count: "450+ ",           text: "EV Chargers Installed Across UAE",     alt: "EV Chargers Installed Across UAE" },
    { icon: Booking,      count: "AED 999",         text: "Charger Installation Service Starts",  alt: "Charger Installation Service Starts" },
    { icon: EvCarDriver,  count: "1-Year Warranty", text: "On All Installation Workmanship",      alt: "On All Installation Workmanship" },
  ];
  const isOdd = benefits.length % 2 !== 0;

  return (
    <section className={`${style.wrapper}`}>
      <div className={`container`}>

        <Animated className={`grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 ${ isOdd ? "lg:grid-cols-3" : "lg:grid-cols-2" }`}>
          {benefits.map((value, index) => {
            const isLast = index === benefits.length - 1;
            return (
              <div key={index} className={isOdd && isLast ? "md:col-span-2 lg:col-span-1" : "" }>
                <Card iconSrc={value.icon} text={value.text} alt={value.alt} count={value.count} />
              </div>
            );
          })}
        </Animated>

        <p className={style.description}>Every EV charger installer on our team is certified for both AC and DC charger installation.</p>

      </div>
    </section>
  );
}

export default Achievement;

function Card({ iconSrc, text, alt, count }) {
  return (
    <div className={`${style.card}`}>
      <div className={`${style.content}`}>
          <Image src={iconSrc} alt={alt} width={65} height={65} />
          <div className={`${style.innerContent}`}>
            <span className={`${style.counter}`}>{count}</span>
            <p className={`${style.title}`} dangerouslySetInnerHTML={{ __html: text }} />
          </div>
      </div>
    </div>
  );
}