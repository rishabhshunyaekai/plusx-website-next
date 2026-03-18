import Image            from "next/image";
import style            from "./benefits.module.css";
import AdditionalIncome from "@/assets/images/ev-charge-share-page/additional-income.webp";
import Infra            from "@/assets/images/ev-charge-share-page/infra.webp";
import Income           from "@/assets/images/ev-charge-share-page/income.svg";
import Control          from "@/assets/images/ev-charge-share-page/control.svg";
import Secure           from "@/assets/images/ev-charge-share-page/secure.svg";
import Charger          from "@/assets/images/ev-charge-share-page/ev-charger.svg";
import Booking          from "@/assets/images/ev-charge-share-page/booking.svg";
import Anxiety          from "@/assets/images/ev-charge-share-page/anxiety.svg";
import Access           from "@/assets/images/ev-charge-share-page/access.svg";

const chargerBenefits = [
  {
    title : "Earn Additional Income",
    desc  : "You can list an EV charger for rent. Create passive revenue on infrastructure.",
    icon  : Income,
  },
  {
    title : "Full Control Over Availability",
    desc  : "You decide when your charger is on. Choose time slots that are convenient to you.",
    icon  : Control,
  },
  {
    title : "Secure and Managed Platform",
    desc  : "The PlusX Electric app handles bookings, payments, and usage details.",
    icon  : Secure,
  },
  {
    title : "Better Infrastructure Utilisation",
    desc  : "Maximise the value of your charger without additional investment.",
    icon  : Charger,
  },
];

const evBenefits = [
  {
    title : "Improved Local Access",
    desc  : "Locate the nearest private EV charger in your community.",
    icon  : Access,
  },
  {
    title : "Reduced Range Anxiety",
    desc  : "Get access to good charging without necessarily relying on public charging points.",
    icon  : Anxiety,
  },
  {
    title : "Flexible Booking",
    desc  : "View available chargers and Contact EV charger owner directly through the app.",
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
            <p className={style.subText}>When you have a personal EV charger, there are several benefits you can get with PlusX Electric.</p>

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
            <h2>Benefits for EV Owners</h2>
            <p className={style.subText}>This feature is a convenient alternative for EV owners who cannot access private charging.</p>

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

            <p className={style.footerText}>This will establish a community-based EV charging network in Dubai.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Benefits;