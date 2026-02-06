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
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <h1 className="text-red-400">EV Roadside Assistance Service Page</h1>
    </div>
  )
}

export default EVRoadsideAssistanceServicePage;