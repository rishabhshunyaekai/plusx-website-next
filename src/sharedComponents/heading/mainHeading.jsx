import styles from "./heading.module.css";
import Animated from "../animatedComponent/animated";

function MainHeading({ title }) {
  return (
    <Animated className={`${styles.mainHeading}`} animation="fade" easing="ease-in" duration={1000}>
      <h1>{title}</h1>
    </Animated>
  );
}

export default MainHeading;