import Link     from "next/link";
import Image    from "next/image";
import styles   from "./servicesCard.module.css";

function ServiceCard({ title, description, imgSrc, buttonText, link }) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.cardTitle}>{title}</h3>
        {description && (<p className={styles.cardDescription}>{description}</p>)}
        {buttonText && (<Link href={link} className={styles.button}>{buttonText}</Link>)}
      </div>
      <div className={styles.imageContainer}>
        <Image src={imgSrc} alt={title} width={180} height={180} />
      </div>
    </div>
  );
}

export default ServiceCard;
