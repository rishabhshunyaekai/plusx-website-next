import PortableHeroImage  from "@/components/portablePod/portableHeroImage/portableHeroImage";
import Breadcrumbs        from "@/sharedComponents/breadCumb/breadCrumb";
import PortableIntro      from "@/components/portablePod/portableIntro/portableIntro";
import Scenarios          from "@/components/portablePod/scenarios/scenarios";
import CTAIntro           from "@/components/portablePod/portableIntro/ctaIntro";
import WhyChoose          from "@/components/portablePod/whyChoose/whyChoose";
import OtherCTA           from "@/components/portablePod/portableIntro/otherCTA";
import BookingSteps       from "@/components/portablePod/bookingSteps/bookingSteps";
import Brands             from "@/components/portablePod/brands/brands";
import Offers             from "@/components/homepage/offers/offers";
import DownloadApp        from "@/sharedComponents/downloadApp/downloadApp";
import Faqs               from "@/components/portablePod/portablePodFAQ/portablePodFAQ";
// import Values             from "@/components/portablePod/values/values";
// import Pricing            from "@/components/portablePod/pricing/pricing";
// import Feature            from "@/components/portablePod/feature/feature";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const metadata = {
  title         : "Mobile EV Charging Dubai | Charge at Your Location",
  description   : "Book mobile EV charging in Dubai at AED 65 + VAT. PlusX Electric delivers a portable charger to your home, office, or parking , on-demand or scheduled via app.",
  // keywords      : ["plusx", "plusxelectric", "plusx electric", "doorstep EV charging Dubai", "portable EV charging", "home EV charging", "on demand ev charging service in dubai", "doorstep ev charging service", "fast electric chargers near me"],
  alternates    : {
    canonical   : `${BASE_URL}/mobile-ev-charging-dubai`,
    languages: {
      "en-AE": `${BASE_URL}/mobile-ev-charging-dubai`,
    },
  },
};

const ServiceSchema = {
  "@context"      : "https://schema.org",
  "@type"         : "Service",
  "@id"           : "https://plusxelectric.com/mobile-ev-charging-dubai#service",
  "name"          : "Mobile EV Charging in Dubai",
  "alternateName" : "Doorstep EV Charging",
  "serviceType"   : "Mobile EV Charging",
  "description"   : "On-demand mobile EV charging service in Dubai. PlusX Electric delivers a Portable Power Pod to your home, office, or parking location to charge your electric vehicle. Book instantly or schedule a session through the PlusX Electric app.",
  "provider"    : {
    "@type"     : "LocalBusiness",
    "@id"       : "https://plusxelectric.com/#localbusiness",
    "name"      : "PlusX Electric",
    "telephone" : "+971542796424",
    "url"       : "https://plusxelectric.com/"
  },
  "areaServed": {
    "@type"             : "City",
    "name"              : "Dubai",
    "containedInPlace"  : {
      "@type"           : "Country",
      "name"            : "United Arab Emirates"
    }
  },
  "offers": {
    "@type"         : "Offer",
    "name"          : "Mobile EV Charging Call-Out",
    "description"   : "Call-out fee for delivering the Portable Power Pod to your location in Dubai. Additional charging costs are shown in the app at booking.",
    "price"         : "65",
    "priceCurrency" : "AED",
    "priceSpecification": {
      "@type"                 : "PriceSpecification",
      "price"                 : "65",
      "priceCurrency"         : "AED",
      "valueAddedTaxIncluded" : false
    },
    "availability"  : "https://schema.org/InStock",
    "url"           : "https://plusxelectric.com/mobile-ev-charging-dubai"
  },
  "hasOfferCatalog": {
    "@type" : "OfferCatalog",
    "name"  : "EV Charging Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type"       : "Service",
          "name"        : "On-Demand EV Charging",
          "description" : "Instant mobile EV charging delivered to your location in Dubai."
        }
      },
      {
        "@type"         : "Offer",
        "itemOffered"   : {
          "@type"       : "Service",
          "name"        : "Scheduled EV Charging",
          "description" : "Pre-booked mobile EV charging at a time that suits you."
        }
      }
    ]
  },
  "audience": {
    "@type"       : "Audience",
    "audienceType": "EV Owners in Dubai"
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
      "name": "Mobile EV Charging Dubai",
      "item": "https://plusxelectric.com/mobile-ev-charging-dubai"
    }
  ]
}

function PortableChargerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbList) }} />
      <PortableHeroImage />
      <Breadcrumbs />
      <PortableIntro />
      <Scenarios />
      <CTAIntro />
      <WhyChoose />
      <OtherCTA />
      <BookingSteps />
      <Brands />
      <Offers />
      <DownloadApp />
      <Faqs/>
      {/* <Values />
      <Pricing />
      <Feature /> */}
    </>
  );
}

export default PortableChargerPage;
