import Brand from "@/sharedComponents/brands/brands";

function Brands() {
  const brandsData = {
    title       : "Supported Electric Vehicles",
    description : `PlusX Electric supports EV charger installation across the UAE for more than 50 electric vehicle\n models, including Tesla, BYD, BMW, Mercedes-Benz EQ series, Nissan Leaf, \nAudi e-tron, and other leading EV brands.`,
  }

  return (
    <Brand title={brandsData?.title} description={brandsData?.description} />
  )
}

export default Brands;