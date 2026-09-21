import HeroImage      from "@/components/plusxElectricApp/heroImage/heroImage";
import Breadcrumbs    from "@/sharedComponents/breadCumb/breadCrumb";
import Values         from "@/components/plusxElectricApp/values/values";
import CTASection     from "@/components/plusxElectricApp/ctaSection/ctaSection";
import Services       from "@/components/plusxElectricApp/services/services";
import Offers         from "@/components/homepage/offers/offers";
import DownloadApp    from "@/sharedComponents/downloadApp/downloadApp";
import Faqs           from "@/components/plusxElectricApp/faq/faq";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const metadata = {
  title         : "PlusX Electric App | EV Charging App in Dubai",
  description   : "The PlusX Electric app puts every EV service in Dubai in one place — doorstep  mobile charging, 24/7 roadside rescue, charger installation, EV Chargers and more.",
  // keywords      : [],
  alternates    : {
      canonical : `${BASE_URL}/plusx-electric-app`,
      languages: {
        "en-AE": `${BASE_URL}/plusx-electric-app`,
      },
    },
  openGraph     : {
    title       : "PlusX Electric App — One App for Every EV Owner in Dubai",
    description : "Charging, roadside support, installation, insurance and public charger maps. Download free on iOS and Android.",
    url         : `${BASE_URL}/`,
    type        : "website",
    siteName    : "PlusX Electric",
    locale      : "en_AE",
    images      : [
      {
        url      : "https://plusxelectric.com/PlusX-Electric-EV-charging-services-Dubai.jpeg",
        secureUrl: "https://plusxelectric.com/PlusX-Electric-EV-charging-services-Dubai.jpeg",
        type     : "image/jpeg",
        width    : 1200,
        height   : 630,
        alt      : "PlusX Electric EV charging services Dubai",
      },
    ],
  },
  twitter       : {
    card        : "summary_large_image",
    site        : "@plusxelectric",
    title       : "PlusX Electric App — One App for Every EV Owner in Dubai",
    description : "Charging, roadside support, installation, insurance and public charger maps. Download free on iOS and Android.",
    images      : [
      {
        url : "https://plusxelectric.com/PlusX-Electric-EV-charging-services-Dubai.jpeg",
        alt : "PlusX Electric EV charging services Dubai",
      },
    ],
  },
};

const appSchema = { 
  "@context"            : "https://schema.org", 
  "@type"               : "MobileApplication", 
  "name"                : "PlusX Electric", 
  "alternateName"       : "PlusX Electric App", 
  "applicationCategory" : "EV Charging", 
  "operatingSystem"     : "iOS, Android", 
  "url"                 : `${BASE_URL}/plusx-electric-app`, 
  "downloadUrl"         : [ 
    "https://apps.apple.com/in/app/plusx-electric/id6503144034", 
    "https://play.google.com/store/apps/details?id=com.shunyaekai.plusexelectric&hl=en_IN" 
  ], 
  "installUrl"    : `${BASE_URL}/plusx-electric-app`, 
  "offers"        : { "@type": "Offer", "price": "0", "priceCurrency": "AED" }, 
  "areaServed"    : [ 
    { "@type"     : "City", "name": "Dubai" }, 
    { "@type"     : "Country", "name": "United Arab Emirates" } 
  ], 
  "featureList": [ 
    "Mobile and Portable EV Charging", 
    "24x7 EV Roadside Assistance", 
    "AC and DC Chargers and Installation Service", 
    "EV Insurance", 
    "Public Charging Stations in Real Time" 
  ], 
  "publisher" : { 
    "@type"   : "Organization", 
    "name"    : "PlusX Electric", 
    "url"     : `${BASE_URL}/`, 
    "sameAs"  : [ 
      "https://apps.apple.com/in/app/plusx-electric/id6503144034", 
      "https://play.google.com/store/apps/details?id=com.shunyaekai.plusexelectric&hl=en_IN" 
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
      "name": "PlusX Electric App",
      "item": `${BASE_URL}/plusx-electric-app`
    }
  ]
}

function PlusxElectricAPP() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbList) }} />
      <HeroImage />
      <Breadcrumbs />
      <Values />
      <Services />
      <CTASection />
      <Offers />
      <DownloadApp />
      <Faqs />
    </>
  )
}

export default PlusxElectricAPP;