import Brand from "@/sharedComponents/brands/brands";

function Brands() {
  const brandsData = {
    title       : "Supported Electric Vehicles",
    description : `PlusX Electric installs chargers for more than 50 EV models on UAE roads, including Tesla, BYD, BMW, Mercedes-\nBenz EQ, Nissan, Audi e-tron, Porsche, Polestar, Lucid, Cadillac and Rolls-Royce.`,
  }

  return (
    <Brand title={brandsData?.title} description={brandsData?.description} />
  )
}

export default Brands;