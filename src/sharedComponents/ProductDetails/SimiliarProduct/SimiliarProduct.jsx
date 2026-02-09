import style from "./SimiliarProduct.module.css";
import Product from "../../Product/Product.jsx";

const pageTitle = "Similiar Product";

function SimiliarProduct({ product, url }) {
  return (
    <main className={`container ${style.container}`}>
      <Product products={product} url={url} title={pageTitle}/>
    </main>
  );
}

export default SimiliarProduct;
