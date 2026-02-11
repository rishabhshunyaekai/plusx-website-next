import Link                 from "next/link";
import Image                from "next/image";
import styles               from "./productCard.module.css";
import { FaArrowRightLong } from "react-icons/fa6";

function ProductCard({ product, url }) {
  return (
    <div className={styles.card}>
      <Image src={product.image} alt={product.name} className={styles.image} width={310} height={210} />

      <h4 className={styles.title}>{product.name}</h4>

      <div className={styles.priceWrapper}>
        <div className={styles.price}>
          <span className={styles.oldPrice}>{product.previousPrice}</span>
          <span className={styles.newPrice}>{product.price}</span>
        </div>

        {/* <Link to={`${url}/${product.name}`} className={styles.button}> */}
        <Link href={`${url}/${product.slug}`} className={styles.button}>
          View Details <FaArrowRightLong />
        </Link>

      </div>
    </div>
  )
}

export default ProductCard;