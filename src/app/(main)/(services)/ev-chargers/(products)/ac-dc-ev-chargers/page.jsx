import HeroImage    from "@/components/chargerList/heroImage/heroImage";
import Breadcrumbs  from "@/sharedComponents/breadCumb/breadCrumb";
import ChargersList from "@/components/chargerList/chargers/chargers";
import Offers       from "@/components/homepage/offers/offers";
import DownloadApp  from "@/sharedComponents/downloadApp/downloadApp";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const metadata = {
  title         : "AC & DC EV Chargers for Homes, Villas, Apartments & Workspaces",
  description   : "Explore AC & DC EV chargers from PlusX Electric for homes, villas, apartments, workspaces, businesses and commercial charging setups.",
  // keywords      : ["plusx", "plusxelectric", "plusx electric", "AC & DC EV Chargers", "portable ac ev charger", "portable ac 7kw ev charger", "wall charger 22kw", "movable dc charger 20kw",
  //                  "wallbox dc charger" ],
  alternates    : {
      canonical : `${BASE_URL}/ev-chargers/ac-dc-ev-chargers`,
      languages: {
        "en-AE": `${BASE_URL}/ev-chargers/ac-dc-ev-chargers`,
      },
    },
};

const breadCrumbList = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://plusxelectric.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "AC DC EV Chargers",
      "item": "https://plusxelectric.com/ev-chargers/ac-dc-ev-chargers"
    }
  ]
}

function EvACDCChargersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbList) }} />
      <HeroImage />
      <Breadcrumbs />
      <ChargersList/>
      <Offers />
      <DownloadApp />
    </>
  )
}

export default EvACDCChargersPage;