import HeroImage  from "@/components/plusxBusiness/heroImage/heroImage";
import PlusxIntro from "@/components/plusxBusiness/plusxIntro/plusxIntro";
import Values     from "@/components/plusxBusiness/values/values";
import Feature    from "@/components/plusxBusiness/feature/feature";
import Offers     from "@/components/homepage/offers/offers";
import PlusxForm  from "@/components/plusxBusiness/plusxForm/plusxForm";
import Breadcrumbs from "@/sharedComponents/breadCumb/breadCrumb";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const metadata = {
  title         : "EV Charging Solutions for Hotels, Malls & Fleets in Dubai",
  description   : "Commercial EV charging solutions in Dubai for offices, malls, hotels, and fleets. PlusX Electric delivers tailored, scalable charging systems.",
  // keywords      : ["plusx", "plusxelectric", "plusx electric", "Commercial EV charging solutions", "charging systems", "ev charger for fleet operator", "ev charger for hotels and malls", "ev charger for residence"],
  alternates    : {
      canonical : `${BASE_URL}/commercial-ev-charging-solutions`,
      languages: {
        "en-AE": `${BASE_URL}/commercial-ev-charging-solutions`,
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
      "name": "Commercial EV Charging Solutions",
      "item": "https://plusxelectric.com/commercial-ev-charging-solutions"
    }
  ]
}

function PlusXforBusinessPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbList) }} />
      <HeroImage />
      <Breadcrumbs />
      <PlusxIntro />
      <Values />
      <Feature />
      <Offers />
      <PlusxForm />
    </>
  )
}

export default PlusXforBusinessPage;