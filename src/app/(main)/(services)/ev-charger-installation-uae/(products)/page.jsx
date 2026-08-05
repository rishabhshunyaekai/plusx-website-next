import HeroImage    from "@/components/chargerInstallation/heroImage/heroImage";
import Breadcrumbs  from "@/sharedComponents/breadCumb/breadCrumb";
import Intro        from "@/components/chargerInstallation/chargerInstallationIntro/chargerInstallationIntro";
import Values       from "@/components/chargerInstallation/values/values";
import WhyChoose    from "@/components/chargerInstallation/whyChoose/whyChoose";
import Intro1       from "@/components/chargerInstallation/chargerInstallationIntro/rsaCTA";
import Products     from "@/components/chargerInstallation/productCard/productCard";
import Chargers     from "@/components/chargerInstallation/chargers/chargers";
import Assistance   from "@/components/chargerInstallation/assistance/assistance";
import Benefits     from "@/components/chargerInstallation/benefits/benefits";
import BookingSteps from "@/components/chargerInstallation/bookingSteps/bookingSteps";
import Features     from "@/components/chargerInstallation/feature/feature";
import CTA          from "@/components/chargerInstallation/cta/cta";
// import CTASection   from "@/components/chargerInstallation/ctaSection/ctaSection";
import Brands       from "@/components/chargerInstallation/brands/brands";
import Offers       from "@/components/homepage/offers/offers";
import Form         from "@/components/chargerInstallation/chargerInstallationForm/chargerInstallationForm";
import DownloadApp  from "@/sharedComponents/downloadApp/downloadApp";
import Faq          from "@/components/chargerInstallation/chargerFAQ/chargerFAQ";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const metadata = {
  title         : "EV Charger Installation Dubai & UAE | PlusX Electric",
  description   : "EV charger installation across Dubai & the UAE by PlusX Electric — DEWA-approved installers, AC & DC charger supply, fitting, testing, and warranty.",
  // keywords      : ["plusx", "plusxelectric", "plusx electric", "EV Charger installation services", "residential and commercial charger", "buy ev charger", "ev charger for home & offices", "ev charger supplier near me"],
  alternates    : {
      canonical : `${BASE_URL}/ev-charger-installation-uae`,
      languages: {
        "en-AE": `${BASE_URL}/ev-charger-installation-uae`,
      },
    },
};

const ServiceSchema = {
  "@context"    : "https://schema.org",
  "@type"       : "Service",
  "@id"         : "https://plusxelectric.com/ev-charger-installation-uae#service",
  "name"        : "EV Charger Installation in Dubai & UAE",
  "serviceType" : "EV Charger Installation",
  "description" : "End-to-end EV charger installation services in Dubai and across the UAE. PlusX Electric handles DEWA approvals, site assessment, AC and DC charger supply, installation, and testing for residential, commercial, and fleet properties.",
  "url"         : `${BASE_URL}/ev-charger-installation-uae`,
  "provider": {
    "@type"     : "LocalBusiness",
    "@id"       : "https://plusxelectric.com/#localbusiness",
    "name"      : "PlusX Electric",
    "legalName" : "Plus Energy Electric Vehicles Charging Stations LLC",
    "url"       : `${BASE_URL}/`,
    "logo"      : `${BASE_URL}/logo-icon.svg`,
    "telephone" : "+971542796424",
    "email"     : "admin@plusxelectric.com",
    "address"   : {
      "@type"   : "PostalAddress",
      "streetAddress"   : "D55-PBU, Dubai Production City",
      "addressLocality" : "Dubai",
      "addressRegion"   : "Dubai",
      "addressCountry"  : "AE"
    }
  },
  "areaServed": [
    {
      "@type" : "City",
      "name"  : "Dubai"
    },
    {
      "@type" : "City",
      "name"  : "Abu Dhabi"
    },
    {
      "@type" : "City",
      "name"  : "Sharjah"
    },
    {
      "@type" : "City",
      "name"  : "Ras Al Khaimah"
    },
    {
      "@type" : "Country",
      "name"  : "United Arab Emirates"
    }
  ],
  "audience": {
    "@type"         : "Audience",
    "audienceType"  : "EV owners, businesses, and fleet operators in the UAE"
  },
  "category": [
    "Residential EV Charger Installation", "Commercial EV Charger Installation", "Fleet EV Charger Installation"
  ],
  "offers": {
  "@type"       : "Offer",
  "name"        : "EV Charger Installation",
  "description" : "Residential and commercial EV charger installation in Dubai and UAE, starting from AED 999. Pricing varies based on wire length, wire quality, charger type, and site requirements.",
  "priceSpecification": {
    "@type"     : "PriceSpecification",
    "minPrice"  : "999",
    "maxPrice"  : "9000",
    "priceCurrency": "AED",
    "valueAddedTaxIncluded": false
  },
  "availability": "https://schema.org/InStock",
  "url"         : `${BASE_URL}/ev-charger-installation-uae`,
  "areaServed"  : {
    "@type" : "Country",
    "name"  : "United Arab Emirates"
  }
},
  "hasOfferCatalog": {
    "@type" : "OfferCatalog",
    "name"  : "EV Charger Installation Services",
    "itemListElement": [
      {
        "@type"       : "Service",
        "name"        : "Home EV Charger Installation",
        "description" : "AC and DC charger installation for villas, apartments, flats, and townhouses across the UAE."
      },
      {
        "@type"       : "Service",
        "name"        : "Commercial EV Charger Installation",
        "description" : "EV charger installation for offices, hotels, warehouses, shopping malls, and commercial premises."
      },
      {
        "@type"       : "Service",
        "name"        : "Fleet EV Charger Installation",
        "description" : "Large-scale EV charging infrastructure installation for fleet and corporate sites."
      },
      {
        "@type"       : "Service",
        "name"        : "Installation-Only Service",
        "description" : "Professional installation service for customers who already own an EV charger."
      }
    ]
  },
  "termsOfService": `${BASE_URL}/terms-and-conditions`,
  "brand": {
    "@type" : "Brand",
    "name"  : "PlusX Electric"
  }
}

const howToSchema = {
  "@context"    : "https://schema.org",
  "@type"       : "HowTo",
  "name"        : "How to Book EV Charger Installation Through the PlusX App",
  "description" : "Book EV charger installation in Dubai through the PlusX Electric app in 4 simple steps.",
  "totalTime"   : "PT5M",
  "step": [
    {
      "@type" : "HowToStep",
      "name"  : "Download the PlusX Electric App",
      "text"  : "Download the PlusX Electric app from the App Store or Play Store."
    },
    {
      "@type" : "HowToStep",
      "name"  : "Tap Charger Installation Service",
      "text"  : "Open the app and tap on Charger Installation Service."
    },
    {
      "@type" : "HowToStep",
      "name"  : "Share Location and Site Details",
      "text"  : "Share your location and basic site details through the app."
    },
    {
      "@type" : "HowToStep",
      "name"  : "Certified Installation and Testing",
      "text"  : "Our certified technicians complete the installation and testing at your location."
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
      "item": `${BASE_URL}/`,
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "EV Chargers",
      "item": `${BASE_URL}/ev-charger-installation-uae`,
    }
  ]
}

function EVChargerInstallationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbList) }} />
      <HeroImage />
      <Breadcrumbs />
      <Intro />
      <Values />
      <WhyChoose />
      <Intro1 />
      <Assistance />
      <Benefits />
      <BookingSteps />
      <Products />
      <Chargers />
      <Features />
      <CTA />
      {/* <CTASection /> */}
      <Brands />
      <Offers />
      <Form />
      <DownloadApp />
      <Faq />
    </>
  )
}

export default EVChargerInstallationPage;