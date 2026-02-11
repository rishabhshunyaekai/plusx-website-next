import Product          from "@/sharedComponents/product/product";
import { accessories }  from "@/utils/listOfProducts";

function Chargers() {
  return (
    <article className="wrapper">
      <div className="container">
        <Product products={accessories} url="/ev-chargers/ev-accessories" title="List of Accessories" />
      </div>
    </article>
  );
}

export default Chargers;

// showFilter={true}