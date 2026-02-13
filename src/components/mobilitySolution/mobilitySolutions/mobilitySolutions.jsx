import styles         from "./mobilitySolutions.module.css";
import Animated       from "@/sharedComponents/animatedComponent/animated";
import SecondHeading  from "@/sharedComponents/heading/secondaryHeading";

const sections = [
  {
    id          : 1,
    title       : "Universities & Colleges",
    description : "Smart campus commuting, improved parking, and green mobility initiatives",
    imageClass  : styles.bgImage1,
    alignment   : "left",
  },
  {
    id          : 2,
    title       : "Individuals",
    description : "Affordable and sustainable transport with 24/7 access",
    imageClass  : styles.bgImage2,
    alignment   : "right",
  },
];

function MobilitySolutions() {
  return (
    <>
      <SecondHeading title="Solutions For" />
      {sections.map((section) => (
        <section key={section.id} className={styles.solutionsWrapper}>
            <div className={`container ${styles.container} ${section.imageClass}`}>
                <div className={`flex flex-wrap ${styles.flexRow} ${section.alignment === "right" ? styles.reverse : ""}`}>
                  <div className="w-full lg:w-1/2">
                    <Animated className={`${styles.animatedCard} ${section.alignment === "right" ? styles.alignRight : styles.alignLeft}`}
                        animation="fade" easing="ease-in" duration={1000}>
                        <div className={styles.titleBlock}>
                          <h4>{section.title}</h4>
                          <span className={styles.spanText}>{section.description}</span>
                        </div>
                    </Animated>
                  </div>
                </div>
            </div>
        </section>
        ))}
    </>
  );
}

export default MobilitySolutions;
