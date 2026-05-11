import Brand from "@/sharedComponents/brands/brands";

function Brands() {
  const brandsData = {
    title       : "50+ EV Models Rescued Across Dubai",
    description : `PlusX Electric has provided breakdown assistance for every major EV brand and model available in the UAE.`,
  }

  return (
    <Brand title={brandsData?.title} description={brandsData?.description} />
  )
}

export default Brands;