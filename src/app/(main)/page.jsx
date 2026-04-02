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
    canonical   : "/",
    languages: {
      "en-AE": "/",
    },
  },
  // openGraph : {
  //   title       : "Emergency & Doorstep EV Charging Dubai | PlusX Electric",
  //   description : "",
  //   siteName    : "PlusX Electric",
  //   locale      : "en_US",
  //   type        : "website",
  //   images      : [
  //   {
  //     url       : "/images/homepage/desktop-banner.webp",
  //     width     : 1200,
  //     height    : 630,
  //     alt       : "PlusX Electric EV Charging",
  //   },
  // ],
  // },
  // twitter       : {
  //   card        : "summary_large_image",
  //   title       : "Emergency & Doorstep EV Charging Dubai | PlusX Electric",
  //   description : "",
  //   creator     : "https://plusxelectric.com",
  //   images      : [image],
  // },
  // robots        : {
  //   index       : true,
  //   follow      : true,
  //   googleBot   : {
  //     index     : true,
  //     follow    : true,
  //     "max-snippet"       : -1,
  //     "max-image-preview" : "large",
  //     "max-video-preview" : -1,
  //   },
  // },
};

const structuredData = {
  "@context"  : "https://schema.org",
  "@type"     : "Organization",
  "name"      : "PlusX Electric",
  "legalName" : "Plus Energy Electric Vehicles Charging Stations LLC",
  "url"       : "https://plusxelectric.com",
  "logo"      : "https://plusxelectric.com/_next/static/media/logo-icon.0rebs46jo1m04.svg",
  "description": "PlusX Electric is Dubai's all-in-one EV services company offering doorstep charging, roadside assistance, pickup & drop-off charging, EV charger installation, EV insurance, and public charger locator.",
  "foundingLocation": "Dubai, UAE",
  "areaServed": {
    "@type" : "Country",
    "name"  : "United Arab Emirates"
  },
  "contactPoint": {
    "@type"       : "ContactPoint",
    "telephone"   : "+971542796424",
    "contactType" : "customer service",
    "availableLanguage" : ["English", "Arabic"]
  },
  "sameAs": [
    "https://twitter.com/plusxelectric",
    "https://www.instagram.com/plusx.electric/",
    "https://www.linkedin.com/company/plusxelectric/"
  ]
}

function HomePage() {
  return (
    <>
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}

export default HomePage;
