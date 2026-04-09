import HeroImage    from "@/components/roadsideAssistance/heroImage/heroImage";
import Breadcrumbs  from "@/sharedComponents/breadCumb/breadCrumb";
import Intro        from "@/components/roadsideAssistance/rsaIntro/rsaIntro";
import Scenarios    from "@/components/roadsideAssistance/scenarios/scenarios";
import BookingSteps from "@/components/roadsideAssistance/bookingSteps/bookingSteps";
import WhyChoose    from "@/components/roadsideAssistance/whyChoose/whyChoose";
import CTA          from "@/components/roadsideAssistance/cta/cta";
import Brands       from "@/components/roadsideAssistance/brands/brands";
import Offers       from "@/components/homepage/offers/offers";
import DownloadApp  from "@/sharedComponents/downloadApp/downloadApp";
import FAQ          from "@/components/roadsideAssistance/rsaFAQ/rsaFAQ";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const metadata = {
  title         : "EV Breakdown Assistance in Dubai | PlusX Electric",
  description   : "Get fast EV breakdown assistance in Dubai with PlusX Electric. On-site charging, 12V jump-start support, and quick help to get your EV moving again.",
  // keywords      : ["plusx", "plusxelectric", "plusx electric", "EV Roadside Assistance service", "On-demand EV roadside assistance service", "emergency ev charging service in dubai", "emergency ev roadside assistance"],
  alternates    : {
      canonical : `${BASE_URL}/ev-breakdown-assistance`,
      languages: {
        "en-AE": `${BASE_URL}/ev-breakdown-assistance`,
      },
    },
};

const structuredData = {
    "@context": "https://schema.org",
    "@type"   : "Service",
    "name"    : "EV Roadside Assistance Service in Dubai",
    "description": "Dedicated EV roadside assistance in Dubai with on-site charging, jump-start support, and no unnecessary towing. Fast response across Dubai.",
    "provider": {
      "@type" : "Organization",
      "name"  : "PlusX Electric",
      "url"   : "https://plusxelectric.com"
    },
    "areaServed": {
      "@type" : "Place",
      "name"  : "Dubai, UAE"
    },
    "serviceType": "Electric Vehicle Roadside Assistance",
    "availableChannel": {
      "@type"         : "ServiceChannel",
      "serviceLocation": {
        "@type" : "Place",
        "name"  : "Dubai"
      }
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "AED",
      "price": "145",
      "availability": "https://schema.org/InStock"
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
      "item": "https://plusxelectric.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "EV Breakdown Assistance",
      "item": "https://plusxelectric.com/ev-breakdown-assistance"
    }
  ]
}

function EVBreakdownAssistancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbList) }} />
      <HeroImage />
      <Breadcrumbs />
      <Intro />
      <Scenarios />
      <BookingSteps />
      <WhyChoose />
      <CTA />
      <Brands />
      <Offers />
      <DownloadApp />
      <FAQ />
    </>
  )
}

export default EVBreakdownAssistancePage;