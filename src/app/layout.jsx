import "@/app/globals.css";
import { Poppins }          from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';

const poppins = Poppins({
  subsets : ['latin'],
  weight  : ['400'],
  variable: '--font-poppins',
})

const GTM_ID         = process.env.NEXT_PUBLIC_GTM_ID;
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
    "addressRegion"   : "Dubai",
    "postalCode"      : "00000",
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

const localBusinessSchema = {
  "@context"    : "https://schema.org",
  "@type"       : "LocalBusiness",
  "@id"         : "https://plusxelectric.com/#localbusiness",
  "name"        : "PlusX Electric",
  "legalName"   : "Plus Energy Electric Vehicles Charging Stations LLC",
  "url"         : "https://plusxelectric.com/",
  "logo"        : "https://plusxelectric.com/logo-icon.svg",
  "image"       : "https://plusxelectric.com/logo-icon.svg",
  "description" : "PlusX Electric provides mobile EV charging in Dubai. Get a Portable Power Pod delivered to your home, office, or parking location — on-demand or scheduled through the PlusX Electric app.",
  "telephone"   : "+971542796424",
  "email"       : "media@plusxelectric.com",
  "priceRange"  : "AED 65+",
  "address"     : {
    "@type"           : "PostalAddress",
    "streetAddress"   : "D55-PBU, Dubai Production City",
    "addressLocality" : "Dubai",
    "addressRegion"   : "Dubai",
    "postalCode"      : "00000",
    "addressCountry"  : "AE"
  },
  "geo": {
    "@type"     : "GeoCoordinates",
    "latitude"  : "25.0317",
    "longitude" : "55.1893"
  },
  "openingHoursSpecification": {
    "@type"     : "OpeningHoursSpecification",
    "dayOfWeek" : [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
    "opens"     : "00:00",
    "closes"    : "23:59"
  },
  "areaServed": [
    {
      "@type" : "City",
      "name"  : "Dubai"
    },
    {
      "@type" : "Place",
      "name"  : "Downtown Dubai"
    },
    {
      "@type" : "Place",
      "name"  : "Business Bay"
    },
    {
      "@type" : "Place",
      "name"  : "Dubai Marina"
    },
    {
      "@type" : "Place",
      "name"  : "Jumeirah Lake Towers"
    }
  ],
  "sameAs": [
    "https://apps.apple.com/in/app/plusx-electric/id6503144034",
    "https://play.google.com/store/apps/details?id=com.shunyaekai.plusexelectric"
  ]
}

function RootLayout({ children }) {
  return (
    <html className={poppins.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <GoogleTagManager gtmId={GTM_ID} />
      </head>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
