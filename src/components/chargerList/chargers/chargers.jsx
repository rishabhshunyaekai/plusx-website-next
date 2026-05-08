import Product      from "@/sharedComponents/product/product";
import { chargers } from "@/data/listOfProducts";

function Chargers() {
  const data = {
    title   : `Browse All AC and DC EV Chargers`,
    content : `PlusX Electric offers 11 EV charger models across home, portable, and commercial categories. All chargers \nare CE and ISO certified and come with a 3-year manufacturer warranty.`,
  }
  
  return (
    <article className="wrapper">
      <div className="container">
        <Product products={chargers} url="/ev-charger-installation-uae/ac-dc-ev-chargers" title={data.title} content={data.content} showFilter={true}/>
      </div>
    </article>
  );
}

export default Chargers;

// showFilter={true}