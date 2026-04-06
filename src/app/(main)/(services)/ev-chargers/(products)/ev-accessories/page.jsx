import HeroImage        from "@/components/accessoriesList/heroImage/heroImage";
import AccessoriesList  from "@/components/accessoriesList/accessories/accessories";
import Offers           from "@/components/homepage/offers/offers";
import DownloadApp      from "@/sharedComponents/downloadApp/downloadApp";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const metadata = {
  title         : "EV Charger Accessories | Wall Mount Brackets, Adapters & Carry Bags",
  description   : "Explore EV charger accessories, including durable wall mount brackets, universal adapters, and protective carry bags for portable EV chargers.",
  // keywords      : ["plusx", "plusxelectric", "plusx electric", "EV Charger Accessories", "wall mount bracket for ev charger", "carry bag for portable charger"],
  alternates    : {
      canonical : `${BASE_URL}/ev-chargers/ev-accessories`,
      languages: {
        "en-AE": `${BASE_URL}/ev-chargers/ev-accessories`,
      },
    },
};

function EVAccessoriesPage() {
  return (
    <>
      <HeroImage />
      <AccessoriesList/>
      <Offers />
      <DownloadApp />
    </>
  )
}

export default EVAccessoriesPage;