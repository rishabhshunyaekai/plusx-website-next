import Image            from "next/image";
import style            from "./benefits.module.css";
import AdditionalIncome from "@/assets/images/ev-charge-share-page/plusx_electric_benefits_of_charger.webp";
import Infra            from "@/assets/images/ev-charge-share-page/plusx_electric_benefits_of_charger_looking.webp";
import Income           from "@/assets/images/ev-charge-share-page/plusx_electric_ev_community_icon.svg";
import Control          from "@/assets/images/ev-charge-share-page/plusx_electric_full_control_icon.svg";
import Secure           from "@/assets/images/ev-charge-share-page/plusx_electric_hassle_free_icon.svg";
import Charger          from "@/assets/images/ev-charge-share-page/plusx_electric_use_of_charger_icon.svg";
import Booking          from "@/assets/images/ev-charge-share-page/plusx_electric_direct_access_icon.svg";
import Anxiety          from "@/assets/images/ev-charge-share-page/plusx_electric_public_station_icon.svg";
import Access           from "@/assets/images/ev-charge-share-page/plusx_electric_close_to_home_icon.svg";

const chargerBenefits = [
  {
    title : "Help your EV community",
    desc  : "Make it easier for fellow EV owners in your building or neighbourhood to charge — especially those who can't install their own charger.",
    icon  : Income,
  },
  {
    title : "Full control over availability",
    desc  : "You decide when your charger is on and off. Set time slots that work around your own charging schedule.",
    icon  : Control,
  },
  {
    title : "Better use of your charger",
    desc  : "Get more value from the charger you already paid for and installed, without any additional investment.",
    icon  : Charger,
  },
  {
    title : "Hassle-free listing",
    desc  : "Listing on PlusX Electric is free. No setup fees, no platform costs, no commission.",
    icon  : Secure,
  },
];

const evBenefits = [
  {
    title : "Charge close to home",
    desc  : "Find a private EV charger in your own building or nearby community.",
    icon  : Access,
  },
  {
    title : "Less reliance on public stations",
    desc  : "Reduce range anxiety without depending on crowded public charging points.",
    icon  : Anxiety,
  },
  {
    title : "Direct, flexible access",
    desc  : "View available chargers in the PlusX Electric app and connect directly with the owner to arrange access.",
    icon  : Booking,
  },
];

function Benefits() {
  return (
    <section className={style.wrapper}>
      <div className={`container ${style.mainContent}`}>

        <div className={style.grid}>
          <div className={style.content}>
            <h2>Benefits for Charger Owners</h2>
            <p className={style.subText}>When you have a private EV charger, here&apos;s what sharing it through PlusX Electric gives you:</p>

            <div className={style.list}>
              {chargerBenefits.map((item, i) => (
                <div key={i} className={style.listItem}>
                  <Image src={item.icon} alt="" width={40} height={40} />
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={style.imageWrapper}>
            <Image src={AdditionalIncome} alt="charger owner" width={500} height={800} />
          </div>
        </div>

        <div className={`${style.grid} ${style.reverse}`}>
          <div className={style.imageWrapper}>
            <Image src={Infra} alt="ev owner" width={500} height={500} />
          </div>

          <div className={style.content}>
            <h2>Benefits for EV Owners Looking for a Charger</h2>
            <p className={style.subText}>If installing your own charger isn&apos;t an option, this feature gives you a practical alternative.</p>

            <div className={style.list}>
              {evBenefits.map((item, i) => (
                <div key={i} className={style.listItem}>
                  <Image src={item.icon} alt="" width={40} height={40} />
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className={style.footerText}>Together, this builds a community-based EV charging network across Dubai — owners helping owners.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Benefits;