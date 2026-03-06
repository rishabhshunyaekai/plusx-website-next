import Link     from "next/link";
import Image    from "next/image";
import style    from "./thankYou.module.css";
import Animated from "@/sharedComponents/animatedComponent/animated";
import Thumb    from "@/assets/images/thank-you-page/ThankYou.svg";

function ThankYou() {
  return (
    <section className={style.wrapper}>
      <div className={`container`}>
        <Animated animation="fade" easing="ease-in" duration={1000}>
          <div className={style.thankyouContainer}>
            <Image className={style.thankyouImage} src={Thumb} alt="Thanks" />
            <div className={style.contentWrapper}>
              <h1 className={style.thankyouTitle}>Thanks for reaching out!</h1>
              <h2 className={style.thankyouContent}>We&apos;ve got your info - and you&apos;re all set. The road to be better EV experience begins here.</h2>
            </div>
            <Link href="/" className={style.backToHome}>BACK TO HOME</Link>
          </div>
        </Animated>
      </div>
    </section>
  );
}

export default ThankYou;
