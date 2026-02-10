import Animated     from '../animatedComponent/animated';
import styles       from './secondheading.module.css';

const SecondHeading = ({title}) => {
  return (
    <Animated className={`${styles.heading}`} animation="fade" easing="ease-in" duration={1000}>
      <h2>{title}</h2>
    </Animated>
  )
}

export default SecondHeading;
