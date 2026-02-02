import styles from './heading.module.css';
import Animated from '../animatedComponent/animated';

const SecondHeading = ({title}) => {
  return (
    <Animated className={`${styles.secondHeading}`} animation="fade" easing="ease-in" duration={1000}>
      <h2>{title}</h2>
    </Animated>
  )
}

export default SecondHeading;