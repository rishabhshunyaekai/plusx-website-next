import Link     from "next/link";
import Image    from "next/image";
import styles   from "./otherServiceCard.module.css";

function OtherServiceCard({ title, description, imgSrc, buttonText, link }) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <Link href={link} className={styles.button}>{buttonText}</Link>
      </div>
      <div className={styles.imageContainer}>
        <Image src={imgSrc} alt={title} width={180} height={180} />
      </div>
    </div>
  );
}

export default OtherServiceCard;
