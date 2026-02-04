import Link             from "next/link";
import style            from "./sustainability.module.css";
import Animated         from "@/sharedComponents/animatedComponent/animated";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";

const heading = "Sustainability";

function Sustainability() {
  return (
    <section className={style.sustainability}>
      <SecondaryHeading title={heading} />

      <div className={`container ${style.backgroundContainer}`}>
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <Animated className={`${style.sustainabilityWrapper}`} animation="fade" easing="ease-in" duration={1000}>
              <h3 className={style.tagline}>Sustainable Energy <br className={`${style.breakLine}`}/>& Environment</h3>
              <Link href="/sustainability" className={style.sustainabilityButton}>
                Know More
              </Link>
            </Animated>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sustainability;
