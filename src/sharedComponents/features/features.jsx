// import style from "./features.module.css";
import FeaturesItem from "./featuresItem";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";

import styles from "./features.module.css";
import HeadingProduct from "@/sharedComponents/heading/headingProduct";
// import Download from "../../../assets/Chargers/download.svg";

function Features({ title, items, buttonText, buttonLink }) {
  return (
    <section className={styles.features}>
      <div className={`container ${styles.container}`}>
        <HeadingProduct title={title} />

        <ul className={styles.list}>
          {items.map((item, idx) => (
            <li key={idx} className={styles.listItem}>
              <span className={styles.bullet}>●</span> {item}
            </li>
          ))}
        </ul>

        {/* {buttonText && buttonLink && (
          <button onClick={buttonLink} className={styles.button}>
            {buttonText}
            <img className={styles.downloadIcon} src={Download} alt="icon" />
          </button>
        )} */}
      </div>
    </section>
  );
}

export default Features;
