import Brand from "@/sharedComponents/brands/brands";

function Brands() {
  const brandsData = {
    title       : "Supported Electric Vehicles",
    description : `PlusX Electric supports EV charger installation in UAE for more than 50 electric vehicle models, including \nTesla, BYD, BMW electric variants, Mercedes-Benz EQ series, Nissan Leaf, Audi e-tron, and other \nleading EV brands, ensuring wide compatibility and reliable charging solutions.`,
  }

  return (
    <Brand title={brandsData?.title} description={brandsData?.description} />
  )
}

export default Brands;