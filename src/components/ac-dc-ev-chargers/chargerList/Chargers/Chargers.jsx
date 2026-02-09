import Product          from "@/sharedComponents/Product/Product";
import { chargers }     from "@/utils/ProductData";

import style            from "./Chargers.module.css";

function Chargers() {
  return (
    <main className={`container ${style.container}`}>
      {/* <Product products={chargers} showFilter={true}/> */}
      <Product products={chargers} url="/ev-chargers/ac-dc-ev-chargers" title="List of AC & DC Chargers" />
    </main>
  );
}

export default Chargers;
