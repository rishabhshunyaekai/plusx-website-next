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
  title         : "EV Breakdown Assistance in Dubai | 24/7 Rescue | PlusX Electric",
  description   : "Tuck with a dead EV in Dubai? PlusX Electric delivers on-site charging & jump-start within 60 min. 500+ rescued. From AED 145. Book via app now!",
  // keywords      : ["plusx", "plusxelectric", "plusx electric", "EV Roadside Assistance service", "On-demand EV roadside assistance service", "emergency ev charging service in dubai", "emergency ev roadside assistance"],
  alternates    : {
      canonical : `${BASE_URL}/ev-breakdown-assistance`,
      languages: {
        "en-AE": `${BASE_URL}/ev-breakdown-assistance`,
      },
   },
  openGraph     : {
    title       : "EV Breakdown Assistance in Dubai | 24/7 Rescue | PlusX Electric",
    description : "Stuck with a dead EV in Dubai? PlusX Electric delivers on-site charging & jump-start within 60 min. 500+ rescued. From AED 145. Book via app now!",
    url         : `${BASE_URL}/ev-breakdown-assistance`,
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
        alt      : "PlusX Electric EV Breakdown  service in Dubai",
      },
    ],
  },
  twitter       : {
    card        : "summary_large_image",
    site        : "@plusxelectric",
    title       : "EV Breakdown Assistance in Dubai | 24/7 Rescue | PlusX Electric",
    description : "Stuck with a dead EV in Dubai? On-site charging & jump-start within 60 min. From AED 145. Book via app now!",
    images      : [
      {
        url : "https://plusxelectric.com/PlusX-Electric-EV-charging-services-Dubai.jpeg",
        alt : "PlusX Electric EV Breakdown  service in Dubai",
      },
    ],
  },
};

const structuredData = {
  "@context"      : "https://schema.org",
  "@type"         : "Service",
  "@id"           : "https://plusxelectric.com/ev-breakdown-assistance#service",
  "name"          : "EV Breakdown Assistance in Dubai",
  "alternateName" : [ "EV Roadside Assistance Dubai", "Electric Vehicle Rescue Dubai", "EV Emergency Service Dubai" ],
  "description"   : "24/7 EV breakdown assistance in Dubai with on-site mobile charging and 12V jump-start service. PlusX Electric has rescued 500+ electric vehicles across Dubai with a typical response time of 60 minutes. No unnecessary towing — we bring the charge to you.",
  "url"           : `${BASE_URL}/ev-breakdown-assistance`,
  "serviceType"   : "Electric Vehicle Breakdown Assistance",
  "category"      : "Automotive Emergency Service",
  "provider"      : {
    "@type"       : "Organization",
    "@id"         : "https://plusxelectric.com/#organization",
    "name"        : "PlusX Electric",
    "legalName"   : "Plus Energy Electric Vehicles Charging Stations LLC",
    "url"         : `${BASE_URL}/`,
    "logo"        : "https://plusxelectric.com/logo-icon.svg",
    "image"       : "https://plusxelectric.com/images/plusx-electric-ev-rescue.jpg",
    "telephone"   : "+971543061473",
    "email"       : "media@plusxelectric.com",
    "address": {
      "@type"           : "PostalAddress",
      "streetAddress"   : "D55-PBU, Dubai Production City",
      "addressLocality" : "Dubai",
      "addressRegion"   : "Dubai",
      "addressCountry"  : "AE"
    },
    "sameAs": [
      "https://www.facebook.com/people/PlusX-Electric/61558739985983/",
      "https://www.instagram.com/plusx_electric/",
      "https://www.linkedin.com/company/plusxelectric/",
      "https://x.com/plusxelectric"
    ]
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Dubai",
      "containedInPlace": {
        "@type": "Country",
        "name": "United Arab Emirates"
      }
    },
    {
      "@type": "Place",
      "name": "Downtown Dubai"
    },
    {
      "@type": "Place",
      "name": "Business Bay"
    },
    {
      "@type": "Place",
      "name": "Dubai Marina"
    },
    {
      "@type": "Place",
      "name": "Palm Jumeirah"
    },
    {
      "@type": "Place",
      "name": "JLT"
    },
    {
      "@type": "Place",
      "name": "Jumeirah Beach Residence"
    },
    {
      "@type": "Place",
      "name": "DIFC"
    },
    {
      "@type": "Place",
      "name": "Al Barsha"
    },
    {
      "@type": "Place",
      "name": "Dubai Hills"
    },
    {
      "@type": "Place",
      "name": "Arabian Ranches"
    },
    {
      "@type": "Place",
      "name": "Dubai South"
    },
    {
      "@type": "Place",
      "name": "Deira"
    },
    {
      "@type": "Place",
      "name": "Bur Dubai"
    }
  ],
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": `${BASE_URL}/ev-breakdown-assistance`,
    "servicePhone": {
      "@type": "ContactPoint",
      "telephone": "+971543061473",
      "contactType": "emergency",
      "availableLanguage": ["English", "Arabic"],
      "areaServed": "AE"
    },
    "availableLanguage": ["English", "Arabic"]
  },
  "hoursAvailable": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "offers": {
    "@type": "Offer",
    "name": "EV Breakdown Assistance Service",
    "description": "On-site EV charging up to 10 kWh (approximately 50 km of range), 12V battery jump-start service, and emergency EV rescue across Dubai. Final price varies based on time of service, location, and service requirements.",
    "priceCurrency": "AED",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "AED",
      "minPrice": "145",
      "valueAddedTaxIncluded": false,
      "description": "Starting from AED 145 + VAT. Final price confirmed in the PlusX Electric app before dispatch."
    },
    "availability": "https://schema.org/InStock",
    "areaServed": {
      "@type": "City",
      "name": "Dubai"
    },
    "url": "https://plusxelectric.com/ev-breakdown-assistance",
    "validFrom": "2025-01-01"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "EV Breakdown Assistance Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "On-Site EV Charging",
          "description": "Mobile EV charging unit delivers up to 10 kWh directly to your stranded electric vehicle, providing approximately 50 km of range to reach the nearest public charging station or home."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "12V Battery Jump-Start",
          "description": "Jump-start service for EVs with a dead 12V auxiliary battery — the most common cause of EV breakdowns."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency EV Rescue",
          "description": "24/7 emergency response for electric vehicles stranded anywhere in Dubai, with typical arrival within 60 minutes."
        }
      }
    ]
  },
  "termsOfService": "https://plusxelectric.com/terms-and-conditions",
  "slogan": "We bring the charge to you"
}

const breadCrumbList = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": `${BASE_URL}/`,
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "EV Breakdown Assistance",
      "item": `${BASE_URL}/ev-breakdown-assistance`,
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