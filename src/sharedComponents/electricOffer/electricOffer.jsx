
import Link             from "next/link";
import Image            from "next/image";
import Animated         from "../animatedComponent/animated";
import style            from "./electricOffer.module.css";
import SecondHeading    from "../SecondHeading/SecondHeading";

const ElectricOffer = ({ heading, offers }) => {
  return (
    <section className={style.offer}>
      <div className={`container`}>
        <SecondHeading title={heading} />

        <Animated
          className={`row`}
          animation="fade"
          easing="ease-in"
          duration={1000}
        >
          {offers.map((offer, index) => (
            <div className="col-md-6" key={index}>
              <Link href={offer.link}>
                <div className={`${style.mbtMob25} ${style.offerCol}`}>
                  <Image
                    className={style.offerImageTag}
                    src={offer.image}
                    alt={offer.alt}
                    fetchPriority="high"
                    loading="eager"
                    width={530}
                    height={372}
                  />
                </div>
              </Link>
            </div>
          ))}
        </Animated>
      </div>
    </section>
  );
};

export default ElectricOffer;
