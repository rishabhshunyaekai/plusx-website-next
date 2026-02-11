import Product from "@/sharedComponents/product/product";

const pageTitle = "Similiar Product";

function SimiliarProduct({ product, url }) {
  return (
    <article className={`wrapper container`}>
      <section className="container">
        <Product products={product} url={url} title={pageTitle}/>
      </section>
    </article>
  );
}

export default SimiliarProduct;
