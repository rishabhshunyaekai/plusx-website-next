import HeroImage    from "@/components/publicCharging/heroImage/heroImage";
import Breadcrumbs  from "@/sharedComponents/breadCumb/breadCrumb";
import Intro        from "@/components/publicCharging/publicChargingIntro/publicChargingIntro";
import ChargingInfo from "@/components/publicCharging/chargingInfo/chargingInfo";
import Integrated   from "@/components/publicCharging/integrated/integrated";
import Plan         from "@/components/publicCharging/plan/plan";
import Offers       from "@/components/homepage/offers/offers";
import DownloadApp  from "@/sharedComponents/downloadApp/downloadApp";
import Disclaimer   from "@/components/publicCharging/disclaimer/disclaimer";
import Faqs         from "@/components/publicCharging/publicChargingFAQ/publicChargingFAQ";
// import Values       from "@/components/publicCharging/values/values";
// import CTASection   from "@/components/publicCharging/ctaSection/ctaSection";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const metadata = {
  title         : "Public EV Charging Stations in Dubai | Find Nearby Chargers",
  description   : "Find public EV charging stations in Dubai easily with PlusX Electric. Locate nearby chargers, check availability, view pricing. Download the app now.",
  // keywords      : ["plusx", "plusxelectric", "plusx electric", "nearest EV charging station Dubai", "public EV chargers in Dubai", "Nearest EV Chargers", "find public ev charger", 
  //                   "public ev charger near me", "EV charging stations map Dubai", "find EV chargers in Dubai", "EV charging app Dubai", "EV charger locations Dubai", "real-time EV charger availability"],
  alternates    : {
      canonical : `${BASE_URL}/public-ev-charging-stations`,
      languages: {
        "en-AE": `${BASE_URL}/public-ev-charging-stations`,
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
      "name": "Public EV Charging Stations",
      "item": "https://plusxelectric.com/public-ev-charging-stations"
    }
  ]
}

function PublicChargingSolutionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbList) }} />
      <HeroImage />
      <Breadcrumbs />
      <Intro />
      <ChargingInfo />
      <Integrated />
      <Plan />
      <Offers />
      <DownloadApp />
      <Disclaimer />
      <Faqs />
      {/* <Values />
      <CTASection /> */}
    </>
  )
}

export default PublicChargingSolutionPage;