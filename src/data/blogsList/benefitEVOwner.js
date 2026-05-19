import portableDesktop  from "@/assets/images/homepage/blogs/banners/plusx_electric_portable_pod_desktop_banner.webp";
import portableMobile   from "@/assets/images/homepage/blogs/banners/plusx_electric_portable_pod_mobile_banner.webp";
import blogImage        from "@/assets/images/homepage/blogs/plusx_electric_benefits_of_ev_owners.webp";

const BASE_URL              = process.env.NEXT_PUBLIC_BASE_URL;
export const benefitEVOwner = [
  {
    type: "paragraph",
    text: `Electric vehicle adoption is growing rapidly in the UAE, and this rise has created a strong demand for dependable EV Charging Solutions that match the country’s fast-paced, modern way of life. PlusX Electric offers a powerful app designed to simplify, streamline, and elevate the charging experience for every EV owner in Dubai. More than a digital tool, the PlusX Electric app is a complete ecosystem that helps drivers access Mobile EV Charging, track usage, monitor efficiency, and stay connected with seamless energy solutions wherever they go.`,
  },
  {
    type: "heading",
    level: 2,
    text: "How PlusX Electric Makes EV Ownership Smarter and More Convenient"
  },
  {
    type: "paragraph",
    text: "The PlusX Electric app is designed with a single purpose: to simplify EV ownership. It eliminates the hassle of searching for chargers, reduces reliance on public stations, and provides users with accurate, real-time insights into their charging patterns. These are built for both residential and commercial users. The app supports the brand’s mission as well as Dubai’s clean agenda to offer clean, accessible, and reliable EV Charging Solutions throughout Dubai."
  },
  {
    type: "heading",
    level: 2,
    text: "Charging Facility Updates"
  },
  {
    type: "paragraph",
    text: `One of the strongest benefits of the PlusX Electric app is the ability to track everything in one place. EV owners get information related to Emergency EV charging about nearest <a href="https://plusxelectric.com/public-ev-charging-stations" target='_blank' rel="noopener noreferrer">EV charging stations</a>, and get insurance in a few taps for your EV etc.`
  },
  {
    type: "heading",
    level: 2,
    text: "On-Demand Mobile EV Charging for Convenience"
  },
  {
    type: "paragraph",
    text: `Modern lifestyles demand flexibility, especially when driving an EV in a busy city like Dubai. That is where PlusX Electric stands out. You need Mobile EV Charging on demand or want instant updates on charger availability, the app equips EV owners with smart features that make the entire charging process easier, faster, and more environmentally friendly.`
  },
  {
    type: "paragraph",
    text: `Whether you are at home, at work, or stuck somewhere with a low battery, users can request Mobile EV Charging directly from the app. The PlusX team dispatches a charging unit to your location, eliminating long waits at public stations or the fear of running out of power during peak hours. In a fast-moving city, this convenience becomes essential.`
  },
  {
    type: "heading",
    level: 2,
    text:  `<a href="https://plusxelectric.com/stuck-with-a-drained-ev-battery-heres-how-on-demand-charging-saves-the-day" target='blank' rel="noopener noreferrer">Stuck with a Drained EV Battery? Here’s How On-Demand Charging Saves the Day</a>`
  },
  {
    type: "heading",
    level: 2,
    text:  `Smart Notifications and Seamless Scheduling`
  },
  {
    type: "paragraph",
    text: `The PlusX Electric app also supports scheduled charging, helping users plan sessions during off-peak hours or at times that suit their routine. Smart notifications alert users when charging is complete, when a Mobile EV Charging unit is on the way, or when the vehicle needs attention. This thoughtful automation enhances the experience and ensures EV owners stay informed at all times.`
  },
  {
    type: "ctaButton",
    action: "portablePage",
    alt: "Portable EV charger delivery",
    desktop: portableDesktop,
    mobile: portableMobile
  },
  {
    type: "heading",
    level: 2,
    text:  `Smoother Charging Experience`
  },
  {
    type: "paragraph",
    text: `The PlusX Electric app removes the guesswork from charging. Accurate data, simple navigation, quick service requests, and clean design come together to offer a seamless digital experience. Users can manage multiple vehicles, monitor workplace charging, or request Mobile EV Charging without switching apps or dealing with complicated interfaces. Everything is built to support the modern EV owner’s lifestyle.`
  },
  {
    type: "heading",
    level: 2,
    text:  `Power Your EV Journey with PlusX Electric`
  },
  {
    type: "paragraph",
    text: `The PlusX Electric app is more than a convenience; it is a complete charging companion that gives EV drivers the confidence, flexibility, and control they need. It will provide you with real-time insights, <a href="https://plusxelectric.com/mobile-ev-charging-dubai" target='blank' rel="noopener noreferrer">on-demand Mobile EV Charging</a>, smart scheduling, and robust energy tools. The app stands at the heart of advanced EV Charging Solutions in Dubai.`
  },
  {
    type: "paragraph",
    text: `Ready to upgrade the way you charge your EV, download the PlusX Electric app today and experience smarter, faster, and more convenient charging wherever you go.`
  },
  {
    type: "heading",
    level: 2,
    text: "FAQ's"
  },
  {
    type: "faq",
    schema :{
      "@context"  : "https://schema.org",
      "@type"     : "FAQPage",
      mainEntity: [
        {
          "@type" : "Question",
          "name"  : "What is the PlusX Electric app?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "The PlusX Electric app is a mobile platform where one can access EV charging stations and mobile charging services, ensuring seamless charging for the owners of EVs."
          }
        },
        {
          "@type" : "Question",
          "name"  : "How does Mobile EV Charging work?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "Users will be able to schedule on-demand charging at their location, and a PlusX Electric service team will arrive to efficiently charge the EV safely."
          }
        },
        {
          "@type" : "Question",
          "name"  : "Can I monitor my EV charging in real time?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "Yes, the app gives real-time indications on charging progress, battery levels, and estimated time of completion."
          }
        },
        {
          "@type" : "Question",
          "name"  : "Are the payments via the app secure?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "Of course, the app supports several secure options for payment, such as by credit/debit cards and digital wallets."
          }
        },
        {
          "@type" : "Question",
          "name"  : "Does PlusX Electric support energy-efficient charging?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "Yes, it provides energy consumption insights that enable users to optimize their charging schedule for sustainability."
          }
        }
      ]
    }
  },
  {
    type    : "schema",
    schemas : [
      {
        "@context"    : "https://schema.org",
        "@type"       : "Article",
        "headline"    : "The Benefits for EV owner having PlusX Electric app",
        "name"        : "The Benefits for EV owner having PlusX Electric app | PlusX Electric",
        "description" : "Simplify EV ownership with PlusX Electric’s advanced EV Charging Solutions and on-demand Mobile EV Charging designed for unmatched convenience across Dubai and the UAE.",
        "image"       : `${BASE_URL}${blogImage.src}`,
        "author"      : {
          "@type"     : "Person",
          "name"      : "Admin",
          "url"       : `${BASE_URL}/`
        },
        "publisher"   : {
          "@type"     : "Organization",
          "name"      : "PlusX Electric",
          "url"       : `${BASE_URL}/`,
          "logo"      : {
            "@type"   : "ImageObject",
            "url"     : "https://plusxelectric.com/logo-icon.svg"
          }
        },
        "datePublished"   : "2026-05-19",
        "dateModified"    : "2026-05-19",
        "mainEntityOfPage": {
          "@type"         : "WebPage",
          "@id"           : `${BASE_URL}/the-benefits-for-ev-owner-having-plusx-electric-app`
        },
        "inLanguage"    : "en",
        "keywords"      : [
          "PlusX Electric app",
          "EV charging app Dubai",
          "mobile EV charging app UAE",
          "EV charging solutions Dubai",
          "EV charging management app",
          "smart EV charging Dubai",
          "EV charging station finder",
          "on-demand EV charging Dubai",
          "electric vehicle app UAE",
          "EV charging control app"
        ],
        "articleSection": [
          "How PlusX Electric Makes EV Ownership Smarter",
          "Charging Facility Updates",
          "On-Demand Mobile EV Charging",
          "Smart Notifications and Scheduling",
          "Smoother Charging Experience",
          "EV Journey Optimization",
          "Digital EV Charging Ecosystem",
          "Benefits of EV Charging App",
          "Real-Time EV Charging Management"
        ],
        "about"         : {
          "@type"       : "Thing",
          "name"        : "EV Charging Mobile Application and Smart Charging Solutions",
          "description" : "A digital EV charging ecosystem providing mobile EV charging, real-time monitoring, scheduling, and smart energy management for EV owners in Dubai."
        },
        "isPartOf"      : {
          "@type"       : "WebPage",
          "name"        : "EV Charging App Dubai | PlusX Electric",
          "url"         : `${BASE_URL}/the-benefits-for-ev-owner-having-plusx-electric-app`
        }
      }
    ]
  }
];
