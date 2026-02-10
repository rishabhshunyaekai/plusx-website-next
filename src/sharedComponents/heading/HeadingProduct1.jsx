import Animated     from "../animatedComponent/animated";
import styles       from "./headingProduct1.module.css";

function Heading({ title }) {
  return (
    <Animated
      className={`${styles.headingProduct}`}
      animation="fade"
      easing="ease-in"
      duration={1000}
    >
      <h1>{title}</h1>
    </Animated>
  );
}

export default Heading;
