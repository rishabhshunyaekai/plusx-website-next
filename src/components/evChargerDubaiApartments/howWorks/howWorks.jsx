import styles           from "./howWorks.module.css";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
import { FaBolt, FaCar, FaSyncAlt, FaHome, FaMapMarkerAlt } from "react-icons/fa";

function OtherServies() {
  const topCards = [
    {
      icon  : <FaBolt />,
      tag   : "EMERGENCY",
      title : "Free Site Survey",
      desc  : `Our engineer visits your building, inspects your parking spot, measures the cable run to the nearest electrical source, and checks whether the existing infrastructure supports installation. This also helps identify the right EV charger capacity that can be installed considering both your vehicle capacity and power availability. This is free. There is  no obligation, no charge.`,
      badge : "24/7 Available",
      // highlight: true,
    },
    {
      icon  : <FaCar />,
      tag   : "DOORSTEP",
      title : "Building NOC Coordination",
      desc  : `This is where most people get stuck. We don&apos;t leave you to manage approval process with your building management or residents association alone. PlusX drafts the NOC request, provides the technical documents your building needs, and supports you in smooth coordination with building management to secure approval.`,
      badge : "Book via App",
    },
    {
      icon  : <FaSyncAlt />,
      tag   : "PICKUP SERVICE",
      title : "Professional Installation",
      desc  : `Our electricians complete the physical installation in usually  1 to 3 days depending on scope of work including  wall-mounting the charger, running the cable safely through building pathways, ensuring  all building protocols and complying to HSE requirements . Once installation is completed, a thorough testing is done and the customer is explained the charger usage process.`,
      badge : "Full Charge",
    },
  ];

  const bottomCards = [
    {
      icon  : <FaHome />,
      tag   : "INSTALLATION",
      title : "Post Installation Support",
      desc  : `Once the charger is installed, all invoices, completion documents, warranty details are available on your PlusX Electric app account. Beyond access to the support team available on call, you also get access to complementary services as offered to you at time of installation like free RSA service for the first year directly from the PlusX Electric app.`,
      badge : "DEWA Approved",
    },
    {
      icon  : <FaMapMarkerAlt />,
      tag   : "NETWORK",
      title : "Dedicated Sub-Meter Setup",
      desc  : `In case building management allows sourcing power from a building load, a sub meter is provisioned so your EV charger consumption is billed separately and accurately.`,
      badge : "Real-Time Map",
    },
  ];

  return (
    <section className="wrapper">
      <div className={'container'}>
        <SecondaryHeading title="How It Works — From Enquiry to Plug-In" />

        {/* <p className="!pb-8 text-center">DEWA-approved solutions for every EV need — emergency rescue, doorstep<br className="hidden md:block"/> charging, and professional installations across Dubai.</p> */}

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

      {/* <span className={styles.tag}>{tag}</span> */}

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.desc}>{desc}</p>

      {/* <div className={styles.bottom}>
        <span className={styles.badge}>{badge}</span>
        <div className={styles.arrow}>→</div>
      </div> */}
    </div>
  );
}