import style    from "./heroImage.module.css";
import FlipText from "./flipText";

function ContactHeroImage() {
  return (
    <figure className={style.contactBanner}>
      <div className={`${style.container} container`}>
        <h4 className={style.heroTitle}>It&apos;s Time to Simplify</h4>
        <FlipText />
      </div>
    </figure>
  );
}

export default ContactHeroImage;
