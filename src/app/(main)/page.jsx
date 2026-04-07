import HeroImage      from "@/components/homepage/heroImage/heroImage";
import Achievements   from "@/components/homepage/achievements/achievements";
import Intro          from "@/components/homepage/homeIntro/homeIntro";
import PortablePod    from "@/components/homepage/services/portablePod/portablePod";
import RSA            from "@/components/homepage/services/roadsideAssistance/roadsideAssistance";
import PickupDropoff  from "@/components/homepage/services/pickupDropoff/pickupDropoff";
import Charger        from "@/components/homepage/services/chargerInstallation/chargerInstallation";
import ChargerShare   from "@/components/homepage/services/chargeShare/chargeShare";
import CTASection     from "@/components/homepage/ctaSection/ctaSection";
import Partners       from "@/components/homepage/partnership/partnership";
import Offers         from "@/components/homepage/offers/offers";
import Testimonial    from "@/components/homepage/testimonial/testimonial";
import Sustainability from "@/components/homepage/sustainability/sustainability";
import DownloadApp    from "@/sharedComponents/downloadApp/downloadApp";
import Faqs           from "@/components/homepage/faqs/faqs";

export const metadata = {
  title         : "PlusX Electric — EV Charging Services Dubai | All-in-One EV App",
  description   : "PlusX Electric is Dubai's leading EV charging services company. One app for every EV need — charging, support, and maintenance. Trusted by 5,000+ EV owners across the UAE.",
  // keywords      : ["plusx", "plusxelectric", "plusx electric", "portable ev charger", "on demand ev charging service in dubai", "doorstep ev charging service", "fast electric chargers near me", 
  //                  "ev roadside assistance service", "emergency roadside charging", "buy or renew ev insurance in minutes", "find public ev charging station", "ev charger share service"],
  alternates    : {
    canonical   : "https://plusxelectric.com/",
    languages: {
      "en-AE": "https://plusxelectric.com/",
    },
  },
  openGraph     : {
    title       : "PlusX Electric — EV Charging Services Dubai | All-in-One EV App",
    description : "PlusX Electric is Dubai's leading EV charging services company. One app for every EV need — charging, support, and maintenance. Trusted by 5,000+ EV owners across the UAE.",
    url         : "https://plusxelectric.com/",
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
    title       : "PlusX Electric — EV Charging Services Dubai | All-in-One EV App",
    description : "PlusX Electric is Dubai's leading EV charging services company. One app for every EV need — charging, support, and maintenance.",
    images      : [
      {
        url : "https://plusxelectric.com/PlusX-Electric-EV-charging-services-Dubai.jpeg",
        alt : "PlusX Electric EV charging services Dubai",
      },
    ],
  },
};

const structuredData = {
  "@context"    : "https://schema.org",
  "@type"       : "Organization",
  "name"        : "PlusX Electric",
  "legalName"   : "Plus Energy Electric Vehicles Charging Stations LLC",
  "url"         : "https://plusxelectric.com/",
  "logo"        : "https://plusxelectric.com/logo-icon.svg",
  "description" : "PlusX Electric is an electric vehicle charging services company in Dubai. One app for all EV needs — charging, breakdown assistance, charger installation, and insurance.",
  "foundingLocation": "Dubai, UAE",
  "address" : {
    "@type" : "PostalAddress",
    "streetAddress"   : "D55-PBU, Dubai Production City",
    "addressLocality" : "Dubai",
    "addressCountry"  : "AE"
  },
  "contactPoint": {
    "@type"       : "ContactPoint",
    "telephone"   : "+971542796424",
    "email"       : "media@plusxelectric.com",
    "contactType" : "customer service",
    "availableLanguage": ["English", "Arabic"],
    "areaServed"  : "AE"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United Arab Emirates"
  },
  "sameAs": [
    "https://twitter.com/plusxelectric",
    "https://www.facebook.com/people/PlusX-Electric/61558739985983/",
    "https://www.instagram.com/plusx_electric/",
    "https://www.linkedin.com/company/plusxelectric/"
  ]
}

function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <HeroImage />
      <Intro />
      <Achievements />
      <PortablePod />
      <RSA />
      <PickupDropoff />
      <Charger />
      <ChargerShare />
      <CTASection />
      <Partners />
      <Offers />
      <Testimonial />
      <Sustainability />
      <DownloadApp />
      <Faqs />
    </>
  );
}

export default HomePage;
