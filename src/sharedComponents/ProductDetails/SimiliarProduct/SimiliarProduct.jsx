import Product    from "../../product/product.jsx";
import style      from "./similiarProduct.module.css";

const pageTitle = "Similiar Product";

function SimiliarProduct({ product, url }) {
  return (
    <main className={`container ${style.container}`}>
      <Product
        products={product}
        url={url}
        title={pageTitle}
      />
    </main>
  );
}

export default SimiliarProduct;
