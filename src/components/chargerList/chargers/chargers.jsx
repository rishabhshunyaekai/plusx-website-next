import Product      from "@/sharedComponents/product/product";
import { chargers } from "@/utils/listOfProducts";

function Chargers() {
  return (
    <article className="wrapper">
      <div className="container">
        <Product products={chargers} url="/ev-chargers/ac-dc-ev-chargers" title="List of AC & DC Chargers" />
      </div>
    </article>
  );
}

export default Chargers;

// showFilter={true}