import HeroImage      from "@/components/plusxElectricApp/heroImage/heroImage";
import Breadcrumbs    from "@/sharedComponents/breadCumb/breadCrumb";
import Values         from "@/components/plusxElectricApp/values/values";
import CTASection     from "@/components/plusxElectricApp/ctaSection/ctaSection";
import Services       from "@/components/plusxElectricApp/services/services";
import Offers         from "@/components/homepage/offers/offers";
import DownloadApp    from "@/sharedComponents/downloadApp/downloadApp";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const metadata = {
  title         : "",
  description   : "",
  // keywords      : [],
  alternates    : {
      canonical : `${BASE_URL}/plusx-electric-app`,
      languages: {
        "en-AE": `${BASE_URL}/plusx-electric-app`,
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
      "name": "PlusX Electric App",
      "item": `${BASE_URL}/plusx-electric-app`
    }
  ]
}

function PlusxElectricAPP() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbList) }} />
      <HeroImage />
      <Breadcrumbs />
      <Values />
      <Services />
      <CTASection />
      <Offers />
      <DownloadApp />
    </>
  )
}

export default PlusxElectricAPP;