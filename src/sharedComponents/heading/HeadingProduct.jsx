import Animated     from "../animatedComponent/animated";
import styles       from "./headingProduct.module.css";

function Heading({ title }) {
  return (
    <Animated
      className={`${styles.headingProduct}`}
      animation="fade"
      easing="ease-in"
      duration={1000}
    >
      <h2>{title}</h2>
    </Animated>
  );
}

export default Heading;
