import HeroImage      from "@/components/teslaEVCharging/heroImage/heroImage";
import Breadcrumbs    from "@/sharedComponents/breadCumb/breadCrumb";
import Achievements   from "@/components/teslaEVCharging/achievements/achievements";
import Intro          from "@/components/teslaEVCharging/intro/intro";
import Scenerios      from "@/components/teslaEVCharging/scenarios/scenarios";
import WhyChoose      from "@/components/teslaEVCharging/whyChoose/whyChoose";
import Intro2         from "@/components/teslaEVCharging/intro/intro2";
import Table          from "@/components/teslaEVCharging/table/table";
import BookingSteps   from "@/components/teslaEVCharging/bookingSteps/bookingSteps";
import Table2         from "@/components/teslaEVCharging/table/table2";
import CTA            from "@/components/teslaEVCharging/ctaSection/ctaSection";
// import AvailablePlace from "@/components/teslaEVCharging/availablePlaces/availablePlaces";
import Disclaimer     from "@/components/teslaEVCharging/intro/disclaimer";
import CTA2            from "@/components/teslaEVCharging/cta/cta";
import FAQ            from "@/components/teslaEVCharging/faq/faq";
import Offers         from "@/components/homepage/offers/offers";
import DownloadApp    from "@/sharedComponents/downloadApp/downloadApp";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const metadata = {
  title         : "Tesla Charging Dubai | Mobile Charging & Roadside Rescue",
  description   : "Tesla out of charge in Dubai? PlusX Electric charges your Model 3, Y, S or X on the spot: at home, in basement parking or on the road. Book on the app.",
  alternates    : {
      canonical : `${BASE_URL}/tesla-ev-charging-dubai`,
      languages: {
        "en-AE": `${BASE_URL}/tesla-ev-charging-dubai`,
      },
    },
};

const structuredData = {
 "@context" : "https://schema.org",
 "@graph"   : [
   {
     "@type"        : "Service",
     "name"         : "Tesla Charging in Dubai",
     "serviceType"  : "Mobile EV charging and roadside assistance for Tesla vehicles",
     "provider"     : {
       "@type"      : "LocalBusiness",
       "name"       : "PlusX Electric",
       "url"        : `${BASE_URL}/`,
       "address"    : {
         "@type"            : "PostalAddress",
         "addressLocality"  : "Dubai Production City",
         "addressRegion"    : "Dubai",
         "addressCountry"   : "AE"
       }
     },
     "areaServed"         : { "@type": "City", "name": "Dubai" },
     "hasOfferCatalog"    : {
       "@type"            : "OfferCatalog",
       "name"             : "Tesla charging services",
       "itemListElement"  : [
         { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tesla mobile charging" } },
         { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tesla roadside charging with 12V jump-start" } },
         { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tesla home charger installation" } }
       ]
     }
   }
 ]
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
      "name": "Tesla EV Charging Dubai",
      "item": `${BASE_URL}/tesla-ev-charging-dubai`
    }
  ]
}

function TeslaCharingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbList) }} />
      <HeroImage />
      <Breadcrumbs />
      <Achievements />
      <Intro />
      <Scenerios />
      <WhyChoose />
      <Intro2 />
      <Table />
      <BookingSteps />
      <Table2 />
      <CTA />
      <Offers />
      <DownloadApp />
      <CTA2 />
      <Disclaimer />
      <FAQ />
    </>
  )
}

export default TeslaCharingPage;