import Product          from "@/sharedComponents/product/product";
import { accessories }  from "@/data/listOfProducts";

function Chargers() {
  return (
    <article className="wrapper">
      <div className="container">
        <Product products={accessories} url="/ev-charger-installation-uae/ev-accessories" title="List of Accessories" />
      </div>
    </article>
  );
}

export default Chargers;

// showFilter={true}