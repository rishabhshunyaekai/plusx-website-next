import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
import styles           from "./featureList.module.css";
// import Download from "../../../assets/Chargers/download.svg";

function Features({ title, items, buttonText, buttonLink }) {
  return (
    <section className={styles.features}>
      <div className={`container`}>
        <SecondaryHeading title={title} />

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
