import style from "./features.module.css";
import FeaturesItem from "./featuresItem";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";

function Features({ heading, featuresData }) {
  return (
    <section className={style.features}>
      <div className={`container`}>
        <SecondaryHeading title={heading} />

        <article className="flex flex-col gap-12">
          {featuresData.map((offering, index) => (
            <FeaturesItem key={index} title={offering.title} description={offering.description} offeringSecondDesc={offering?.secondDescription} listHeading={offering.listHeading} 
              listDesc={offering.listDesc} endingDesc={offering.endingDesc} imageSrc={offering.imageSrc} reverse={offering.reverse} />
          ))}
        </article>
        {/* <ul className={styles.list}>
          {featuresData.map((item, idx) => (
            <li key={idx} className={styles.listItem}>
              <span className={styles.bullet}>●</span> {item}
            </li>
          ))}
        </ul> */}

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
