import Link               from "next/link";
import Image              from "next/image";
import style              from "./servicesOffer.module.css";
import Animated           from "@/sharedComponents/animatedComponent/animated";
import SecondaryHeading   from "@/sharedComponents/heading/secondaryHeading";

const ServicesOffer = ({ heading, offers }) => {
  return (
    <section className={style.offer}>
      <div className={`container`}>
        <SecondaryHeading title={heading} />

        <Animated className={`grid grid-cols-1 md:grid-cols-2 gap-6`} animation="fade" easing="ease-in" duration={1000}>
          {offers.map((offer, index) => (
            <Link key={index} href={offer?.link} >
              <div className={`${style.offerImageContainer}`}>
                <Image className={style.offerImage} src={offer.image} alt={offer.alt} width={530} height={372} />
              </div>
            </Link>
          ))}
        </Animated>
      </div>
    </section>
  );
};

export default ServicesOffer;
