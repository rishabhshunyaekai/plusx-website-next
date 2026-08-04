import Brand from "@/sharedComponents/brands/brands";

function Brands() {
  const brandsData = {
    title       : "Supported Electric Vehicles",
    description : `We've supported 50+ EV models in Dubai, including Tesla, BYD, BMW i-series, Mercedes-Benz EQ, Audi e-tron, Porsche \nTaycan, Polestar, Lucid, Nissan Leaf, VinFast, Cadillac and Rolls-Royce Spectre.`,
  }

  return (
    <Brand title={brandsData?.title} description={brandsData?.description} />
  )
}

export default Brands;