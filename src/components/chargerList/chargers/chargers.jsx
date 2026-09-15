import Product      from "@/sharedComponents/product/product";
import { chargers } from "@/data/listOfProducts";

function Chargers() {
  const data = {
    title   : `Browse All AC and DC EV Chargers`,
    content : `PlusX Electric offers a wide range of AC and DC EV charger models for homes, villas, <a href="/ev-charger-installation-dubai-apartments" target="_blank">apartments</a> and commercial sites across \nthe UAE, including portable, wall-mounted, and high-power options. All chargers are CE and ISO \ncertified and come with a 3-year manufacturer warranty.`,
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