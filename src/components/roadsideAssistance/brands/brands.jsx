import Brand from "@/sharedComponents/brands/brands";

function Brands() {
  const brandsData = {
    title       : "Supported Electric Vehicles",
    description : `PlusX Electric has supported 50+ EV models in Dubai, including Tesla, BYD, BMW electric models, \nMercedes-Benz EQ series, Nissan Leaf, Audi e-tron, and more.`,
  }

  return (
    <Brand title={brandsData?.title} description={brandsData?.description} />
  )
}

export default Brands;