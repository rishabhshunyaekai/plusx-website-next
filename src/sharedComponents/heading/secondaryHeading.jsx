import Animated from '../animatedComponent/animated';
import styles   from './heading.module.css';

function secondaryHeading({title}) {
  return (
    <Animated animation="fade" easing="ease-in" duration={1000}>
      <h2 className={`${styles.secondaryHeading}`}>{title}</h2>
    </Animated>
  )
}

export default secondaryHeading;