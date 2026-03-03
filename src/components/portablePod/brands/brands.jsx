import Brand from "@/sharedComponents/brands/brands";

function Brands() {
  const brandsData = {
    title       : "Mobile EV Charging Dubai for All EV Brands",
    description : `PlusX Electric is the provider of EV charging at office Dubai for the majority of the EV brands. It also \ncovers the popular models of Tesla, BYD EV, and other major EV manufacturers, so you do \nnot need to worry about compatibility during the service booking.`,
  }

  return (
    <Brand title={brandsData?.title} description={brandsData?.description} />
  )
}

export default Brands;