import Brand from "@/sharedComponents/brands/brands";

function Brands() {
  const brandsData = {
    title       : "Mobile EV Charging Dubai for All EV Brands",
    description : `PlusX Electric charges all major EV brands in Dubai, including Tesla, BYD, BMW, Mercedes, Audi, Porsche, Rolls-Royce,\n Cadillac, Polestar, and Lucid. Our Portable Power Pod is compatible with every electric vehicle on the\n road, so you can book a mobile charge without worrying about connector types.`,
  }

  return (
    <Brand title={brandsData?.title} description={brandsData?.description} />
  )
}

export default Brands;