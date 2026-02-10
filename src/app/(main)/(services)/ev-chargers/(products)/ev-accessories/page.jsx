import HeroImage        from "@/components/accessoriesList/heroImage/heroImage";
import AccessoriesList  from "@/components/accessoriesList/accessories/accessories";
import Offers           from "@/components/homepage/offers/offers";
import DownloadApp      from "@/sharedComponents/downloadApp/downloadApp";

export const metadata = {
  title         : "EV Charger Accessories | Wall Mount Brackets, Adapters & Carry Bags",
  description   : "Explore EV charger accessories, including durable wall mount brackets, universal adapters, and protective carry bags for portable EV chargers.",
  keywords      : ["EV Charger Accessories"],
  alternates    : {
      canonical : "/ev-chargers/ev-accessories",
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