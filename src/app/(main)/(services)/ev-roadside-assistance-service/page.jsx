import HeroImage    from "@/components/roadsideAssistance/heroImage/heroImage";
import Intro        from "@/components/roadsideAssistance/rsaIntro/rsaIntro";
import Scenarios    from "@/components/roadsideAssistance/scenarios/scenarios";
import BookingSteps from "@/components/roadsideAssistance/bookingSteps/bookingSteps";
import WhyChoose    from "@/components/roadsideAssistance/whyChoose/whyChoose";
import CTA          from "@/components/roadsideAssistance/cta/cta";
import Brands       from "@/components/roadsideAssistance/brands/brands";
import Offers       from "@/components/homepage/offers/offers";
import DownloadApp  from "@/sharedComponents/downloadApp/downloadApp";
import FAQ          from "@/components/roadsideAssistance/rsaFAQ/rsaFAQ";

export const metadata = {
  title         : "Emergency EV Charging Service in Dubai | PlusX Electric",
  description   : "On-demand EV roadside charging in Dubai. PlusX Electric delivers quick top-ups or jump-starts anywhere, anytime to get you back on the road.",
  keywords      : ["EV Roadside Assistance", "On-demand EV roadside"],
  alternates    : {
      canonical : "/ev-roadside-assistance-service",
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

function EVRoadsideAssistanceServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <HeroImage />
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

export default EVRoadsideAssistanceServicePage;