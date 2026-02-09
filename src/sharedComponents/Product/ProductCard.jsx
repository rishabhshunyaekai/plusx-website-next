import Link                       from "next/link";
import Image                      from "next/image";
import { FaArrowRightLong }       from "react-icons/fa6";
import styles                     from "./productCard.module.css";

function ProductCard({ product, url }) {
  return (
    <div className={styles.card}>
      <Image
        src={product.image}
        alt={product.name}
        className={styles.image}
      />

      <h4 className={styles.title}>{product.name}</h4>

      <div className={styles.priceWrapper}>
        <div className={styles.price}>
          <span className={styles.oldPrice}>{product.previousPrice}</span>
          <span className={styles.newPrice}>{product.price}</span>
        </div>

        <Link
          href={`${url}/${product.slug}`}
          className={styles.button}
        >
          View Details <FaArrowRightLong />
        </Link>

      </div>
    </div>
  )
}

export default ProductCard;