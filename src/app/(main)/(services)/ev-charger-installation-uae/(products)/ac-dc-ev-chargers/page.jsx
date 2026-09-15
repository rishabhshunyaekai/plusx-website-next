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

const categorySchema = {
  "@context"    : "https://schema.org/",
  "@type"       : "CollectionPage",
  "name"        : "EV Chargers in Dubai & UAE — for Homes, Offices & Businesses",
  "description" : "PlusX Electric offers a full range of CE and ISO certified AC and DC EV chargers for homes, villas, apartments, offices, and commercial sites across the UAE, starting from AED 900 with a 3-year warranty.",
  "url"         : `${BASE_URL}/ev-charger-installation-uae/ac-dc-ev-chargers`,
  "isPartOf"    : {
    "@type"     : "WebSite",
    "name"      : "PlusX Electric",
    "url"       : `${BASE_URL}/`
  },
  "mainEntity"        : {
    "@type"           : "ItemList",
    "name"            : "AC and DC EV Chargers",
    "numberOfItems"   : 11,
    "itemListElement" : [
      {
        "@type"   : "ListItem",
        "position": 1,
        "url"     : `${BASE_URL}/ev-charger-installation-uae/ac-dc-ev-chargers/portable-ev-charger-ac-7kw`,
        "name"    : "Portable EV Charger AC 7kW"
      },
      {
        "@type"   : "ListItem",
        "position": 2,
        "url"     : `${BASE_URL}/ev-charger-installation-uae/ac-dc-ev-chargers/portable-ev-charger-ac-11kw`,
        "name"    : "Portable EV Charger AC 11kW"
      },
      {
        "@type"   : "ListItem",
        "position": 3,
        "url"     : `${BASE_URL}/ev-charger-installation-uae/ac-dc-ev-chargers/wall-charger-ac-7kw`,
        "name"    : "Wall Charger AC 7kW"
      },
      {
        "@type"   : "ListItem",
        "position": 4,
        "url"     : `${BASE_URL}/ev-charger-installation-uae/ac-dc-ev-chargers/wall-charger-ac-11kw`,
        "name"    : "Wall Charger AC 11kW"
      },
      {
        "@type"   : "ListItem",
        "position": 5,
        "url"     : `${BASE_URL}/ev-charger-installation-uae/ac-dc-ev-chargers/wall-charger-ac-22kw`,
        "name"    : "Wall Charger AC 22kW"
      },
      {
        "@type"   : "ListItem",
        "position": 6,
        "url"     : `${BASE_URL}/ev-charger-installation-uae/ac-dc-ev-chargers/movable-charger-dc-20kw`,
        "name"    : "Movable Charger DC 20kW"
      },
      {
        "@type"   : "ListItem",
        "position": 7,
        "url"     : `${BASE_URL}/ev-charger-installation-uae/ac-dc-ev-chargers/movable-charger-dc-30kw`,
        "name"    : "Movable Charger DC 30kW"
      },
      {
        "@type"   : "ListItem",
        "position": 8,
        "url"     : `${BASE_URL}/ev-charger-installation-uae/ac-dc-ev-chargers/wallbox-charger-dc-20kw`,
        "name"    : "Wallbox Charger DC 20kW"
      },
      {
        "@type"   : "ListItem",
        "position": 9,
        "url"     : `${BASE_URL}/ev-charger-installation-uae/ac-dc-ev-chargers/wallbox-charger-dc-30kw`,
        "name"    : "Wallbox Charger DC 30kW"
      },
      {
        "@type"   : "ListItem",
        "position": 10,
        "url"     : `${BASE_URL}/ev-charger-installation-uae/ac-dc-ev-chargers/high-power-dc-60kw`,
        "name"    : "High Power DC 60kW"
      },
      {
        "@type"   : "ListItem",
        "position": 11,
        "url"     : `${BASE_URL}/ev-charger-installation-uae/ac-dc-ev-chargers/high-power-dc-120kw`,
        "name"    : "High Power DC 120kW"
      }
    ]
  }
}

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(categorySchema) }} />
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