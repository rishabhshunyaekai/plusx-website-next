import HeroImage    from "@/components/chargerList/heroImage/heroImage";
import Breadcrumbs  from "@/sharedComponents/breadCumb/breadCrumb";
import Benefits     from "@/components/chargerList/benefits/benefits";
import Intro        from "@/components/chargerList/intro/intro";
import Filter       from "@/components/chargerList/dropdownFilter/dropdownFilter";
// import ChargersList from "@/components/chargerList/chargers/chargers";
import Values       from "@/components/chargerList/values/values";
import BookingSteps from "@/components/chargerList/bookingSteps/bookingSteps";
import Offers       from "@/components/homepage/offers/offers";
import DownloadApp  from "@/sharedComponents/downloadApp/downloadApp";
import FAQ          from "@/components/chargerList/faq/faq";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const metadata = {
  title         : "AC & DC EV Chargers in UAE | Home, Villa & Commercial Charging – PlusX Electric",
  description   : "Shop AC and DC EV chargers in the UAE from AED 900. Home, villa, apartment and commercial options — CE & ISO certified, 3-year warranty.",
  // keywords      : ["plusx", "plusxelectric", "plusx electric", "AC & DC EV Chargers", "portable ac ev charger", "portable ac 7kw ev charger", "wall charger 22kw", "movable dc charger 20kw",
  //                  "wallbox dc charger" ],
  alternates    : {
      canonical : `${BASE_URL}/ev-charger-installation-uae/ac-dc-ev-chargers`,
      languages: {
        "en-AE": `${BASE_URL}/ev-charger-installation-uae/ac-dc-ev-chargers`,
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
      "item": `${BASE_URL}/`
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "EV Chargers",
      "item": `${BASE_URL}/ev-charger-installation-uae`
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "AC DC EV Chargers",
      "item": `${BASE_URL}/ev-charger-installation-uae/ac-dc-ev-chargers`
    }
  ]
}

function EvACDCChargersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbList) }} />
      <HeroImage />
      <Breadcrumbs />
      <Benefits />
      <Intro />
      <Filter />
      {/* <ChargersList/> */}
      <Values />
      <BookingSteps />
      <Offers />
      <DownloadApp />
      <FAQ />
    </>
  )
}

export default EvACDCChargersPage;