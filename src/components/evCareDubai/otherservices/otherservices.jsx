import styles           from "./otherservices.module.css";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
import { FaBolt, FaCar, FaSyncAlt, FaHome, FaMapMarkerAlt } from "react-icons/fa";

function OtherServies() {
  const topCards = [
    {
      icon  : <FaBolt />,
      tag   : "EMERGENCY",
      title : "Emergency EV Charging",
      desc  : "Stranded with a dead battery? Our Power Pod reaches you anywhere in Dubai in 30–45 minutes. No tow truck, no waiting.",
      badge : "24/7 Available",
      // highlight: true,
    },
    {
      icon  : <FaCar />,
      tag   : "DOORSTEP",
      title : "Doorstep EV Charging",
      desc  : "Schedule a charge at your home, office, or anywhere in the city. Our mobile Power Pod comes to your EV — not the other way around.",
      badge : "Book via App",
    },
    {
      icon  : <FaSyncAlt />,
      tag   : "PICKUP SERVICE",
      title : "EV Pickup & Drop-Off",
      desc  : "Hand over your EV and get it back fully charged. Perfect for busy schedules — zero effort from your side.",
      badge : "Full Charge",
    },
  ];

  const bottomCards = [
    {
      icon  : <FaHome />,
      tag   : "INSTALLATION",
      title : "Home & Office Charger Installation",
      desc  : "AC or DC chargers for your villa, apartment, or office. Full DEWA approval and permits handled end-to-end. Packages from AED 3,000.",
      badge : "DEWA Approved",
    },
    {
      icon  : <FaMapMarkerAlt />,
      tag   : "NETWORK",
      title : "Public Charging Station Locator",
      desc  : "Find the nearest available AC/DC charging stations in real time across Dubai via the PlusX Electric App. EV insurance and roadside assistance included.",
      badge : "Real-Time Map",
    },
  ];

  return (
    <section className="wrapper">
      <div className={'container'}>
        <SecondaryHeading title="EV Charging & On-Demand Services" />

        <p className="!pb-8 text-center">DEWA-approved solutions for every EV need — emergency rescue, doorstep<br className="hidden md:block"/> charging, and professional installations across Dubai.</p>

        <div className={styles.row1}>
          {topCards.map((card, i) =>  <Card key={i} {...card} /> )}
        </div>

        <div className={styles.row2}>
          {bottomCards.map((card, i) =>  <Card key={i} {...card} /> )}
        </div>

      </div>
    </section>
  );
}

export default OtherServies;

function Card({ icon, tag, title, desc, badge, highlight }) {
  return (
    <div className={`${styles.card} ${highlight ? styles.highlight : ""}`}>
      <div className={styles.icon}>{icon}</div>

      <span className={styles.tag}>{tag}</span>

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.desc}>{desc}</p>

      <div className={styles.bottom}>
        <span className={styles.badge}>{badge}</span>
        <div className={styles.arrow}>→</div>
      </div>
    </div>
  );
}