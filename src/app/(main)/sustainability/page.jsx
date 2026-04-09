import HeroImage    from "@/components/sustainability/heroImage/heroImage";
import Breadcrumbs  from "@/sharedComponents/breadCumb/breadCrumb";
import Feature      from "@/components/sustainability/feature/feature";
import DownloadApp  from "@/sharedComponents/downloadApp/downloadApp";
import PlusxForm    from "@/components/plusxBusiness/plusxForm/plusxForm";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const metadata = {
  title         : "Sustainable Energy Company in Dubai | PlusX Electric",
  description   : "Dubai’s leading sustainable energy company. PlusX Electric offers EV incentives, AI charging insights, and carbon credit solutions.",
  // keywords      : ["plusx", "plusxelectric", "plusx electric", "Sustainable", "Energy"],
  alternates    : {
      canonical : `${BASE_URL}/sustainability`,
      languages: {
        "en-AE": `${BASE_URL}/sustainability`,
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
      "name": "Sustainability",
      "item": "https://plusxelectric.com/sustainability"
    }
  ]
}

function SustainabilityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbList) }} />
      <HeroImage />
      <Breadcrumbs />
      <Feature />
      <PlusxForm />
      <DownloadApp />
    </>
  )
}

export default SustainabilityPage;