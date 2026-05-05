import portableDesktop  from "@/assets/images/homepage/blogs/banners/PodDesktopBanner.webp";
import portableMobile   from "@/assets/images/homepage/blogs/banners/PodMobile.webp";
import blogImage        from "@/assets/images/homepage/blogs/doorstep-ev.webp";

const BASE_URL          = process.env.NEXT_PUBLIC_BASE_URL;
export const doorstepEV = [
  {
    type: "paragraph",
    text: `Locating an available EV charging station in Dubai is not necessarily as easy as it may seem. You may need to drive out of your way, wait for a charger to free up, or adjust your schedule just to charge your vehicle.`,
  },
  {
    type: "paragraph",
    text: `As EV adoption grows, the challenge is no longer just <a href="https://plusxelectric.com/public-ev-charging-stations" target="__blank">finding a charger</a>, but finding one that is available, convenient, and fits into your routine.`,
  },
  {
    type: "paragraph",
    text: `This is where doorstep EV charging offers a different approach. Instead of going to the charger, the charging service comes to you.`,
  },
  {
    type: "heading",
    level: 2,
    text: "What Is Doorstep EV Charging?"
  },
  {
    type: "paragraph",
    text: "Doorstep EV charging allows your vehicle to be charged wherever it is parked, whether at home, office, or any parking space."
  },
  {
    type: "paragraph",
    text: `You book a session through an app, and a <a href="https://plusxelectric.com/mobile-ev-charging-dubai" target="__blank">mobile charging</a> unit is delivered to your location. This removes the need to search for stations or wait in queues.`
  },
  {
    type: "paragraph",
    text: "This is particularly useful in places like Dubai, where time efficiency matters for many drivers."
  },
  {
    type: "heading",
    level: 2,
    text: `What Is Public EV Charging?`,
  },
  {
    type: "paragraph",
    text: "Public EV charging refers to fixed charging stations located across the city. These are typically available in malls, commercial areas, parking zones, and highways."
  },
  {
    type: "paragraph",
    text: `Drivers visit these stations to charge their vehicles, either during daily routines or while travelling.`
  },
  {
    type: "ctaButton",
    action: "portablePage",
    alt: "On Demand Doorstep EV Chargering in Dubai",
    desktop: portableDesktop,
    mobile: portableMobile
  },
  {
    type: "heading",
    level: 2,
    text: `Doorstep Charging vs Public Charging: A Real Comparison`
  },
  {
    type: "paragraph",
    text: "The difference between the two is not just about convenience. It affects time, planning, and how you manage your day."
  },
  {
    type: "table",
    columns: [ "Factor", "Doorstep EV Charging", "Public EV Charging" ],
    rows: [
      [
        "Convenience",
        "Charging happens at your location",
        "Requires travel to a station"
      ],
      [
        "Time",
        "No travel or waiting time",
        "May include queues and delays"
      ],
      [
        "Availability",
        "Depends on service slots",
        "Depends on real-time station availability"
      ],
      [
        "Best Use Case",
        "Daily routines, busy schedules",
        "Planned stops, long-distance travel"
      ],
      [
        "Location Suitability",
        "Homes, offices, private parking",
        "Malls, highways, public spaces"
      ],
      [
        "Emergency Situations",
        "Useful when battery is low",
        "May not be accessible nearby"
      ]
    ]
  },
  {
    type: "heading",
    level: 2,
    text: `When Doorstep Charging Is a Better Option`
  },
  {
    headerText: `Doorstep charging becomes more practical in specific everyday situations.`,
    type: "ul",
    items: [
      `<b>Apartment Living</b> : Installing a private charger in many buildings can be difficult due to approvals or infrastructure limits.`,
      `<b>Busy Workdays</b> : Charging can happen while you work, without interrupting your schedule.`,
      `<b>Low-Battery Situations</b> : If your battery is too low to comfortably reach a station, charging at your location becomes the safer option.`,
    ],
  },
  {
    type: "heading",
    level: 2,
    text: `When Public Charging Is a Better Option`
  },
  {
    type: "ul",
    items: [
      `<b>Planned Top-Ups</b> : Public charging works well when you have already planned your stop and can charge during a break or while visiting a location.`,
      `<b>Travel Routes</b> : For long-distance travel or highway driving, public charging stations are an important part of the journey.`,
      `<b>Nearby Availability</b> : If a charging station is easily accessible and available nearby, it can be a quick and efficient option.`,
    ],
  },
  {
    type: "heading",
    level: 2,
    text: `<a href="https://plusxelectric.com/the-rise-of-evs-in-dubai-and-the-growing-need-for-smart-charging-solutions" target="__blank">The Rise of EVs in Dubai and the Growing Need for Smart Charging Solutions</a>`
  },
  {
    type: "heading",
    level: 2,
    text: `Can EV Owners Use Both?`
  },
  {
    type: "paragraph",
    text: `In reality, most EV owners use a combination of both options.`
  },
  {
    type: "paragraph",
    text: `Public charging works well for travel and routine stops. Doorstep charging is useful when time, access, or availability becomes a constraint.`
  },
  {
    type: "paragraph",
    text: `Using both reduces dependency on a single charging method and gives more flexibility in daily use.`
  },
  {
    type: "heading",
    level: 2,
    text: `How It Works in Practice`
  },
  {
    type: "paragraph",
    text: `Doorstep EV charging is designed to be simple to use in real-world situations.`
  },
  {
    headerText: `<b>With platforms like PlusX Electric:</b>`,
    type: "ul",
    items: [
      `Book your charging session through the app`,
      `Select your preferred location and time`,
      `A trained team arrives with a portable charger`,
      `Your EV is charged at your location`,
    ],
  },
  {
    type: "heading",
    level: 2,
    text: `Conclusion`
  },
  {
    type: "paragraph",
    text: `With the increase in EV adoption, charging technology is also evolving to meet users' requirements. Although public charging is necessary, it is not always the most convenient option.`
  },
  {
    type: "paragraph",
    text: `Doorstep EV charging in Dubai is a flexible alternative that saves time, requires no rigid schedule, relies less on infrastructure, and can be effortlessly incorporated into daily life.`
  },
  {
    type: "paragraph",
    text: `PlusX Electric’s <a href="https://plusxelectric.com/mobile-ev-charging-dubai" target="__blank">mobile charging solutions</a> are becoming an important part of the EV ecosystem for those prioritizing convenience and efficiency.`
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
          "name"  : "Is doorstep EV charging better than public charging?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "It depends on your situation. Doorstep charging saves time, while public charging works well for planned stops and travel."
          }
        },
        {
          "@type" : "Question",
          "name"  : "Can I use doorstep charging every day?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "Yes, many EV owners use it regularly, especially if they do not have access to home charging."
          }
        },
        {
          "@type" : "Question",
          "name"  : "How long does doorstep EV charging take?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "Charging time depends on your vehicle and battery level, but it typically works well when your car is parked for a few hours."
          }
        },
        {
          "@type" : "Question",
          "name"  : "Where can I use doorstep EV charging in Dubai?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "It can be used in most parking locations, including homes, offices, and commercial spaces."
          }
        },
        {
          "@type" : "Question",
          "name"  : "How do I book doorstep EV charging?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "You can book it through the PlusX Electric app by selecting your location and preferred time."
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
        "headline"    : "Doorstep EV Charging in Dubai: When Is It Better Than Public Charging?",
        "name"        : "Doorstep EV Charging in Dubai vs Public Charging | Which Is Better?",
        "description" : "Explore when doorstep EV charging in Dubai is a better choice than public stations. Learn about convenience, time savings, and how PlusX Electric makes charging easier.",
        "image"       : `${BASE_URL}${blogImage.src}`,
        "author"      : {
          "@type"     : "Person",
          "name"      : "Admin",
          "url"       : `${BASE_URL}`,
        },
        "publisher"   : {
          "@type"     : "Organization",
          "name"      : "PlusX Electric",
          "url"       : `${BASE_URL}`,
          "logo"      : {
            "@type"   : "ImageObject",
            "url"     : "https://plusxelectric.com/logo-icon.svg"
          }
        },
        "datePublished"   : "2026-04-29",
        "dateModified"    : "2026-04-29",
        "mainEntityOfPage": {
          "@type"         : "Blog",
          "@id"           : `${BASE_URL}/doorstep-ev-charging-in-dubai`
        },
        "inLanguage": "en",
        "keywords": [
          "doorstep EV charging Dubai", "public EV charging Dubai", "mobile EV charging Dubai", "EV charging stations Dubai", "portable EV charger Dubai", "PlusX Electric",
          "mobile charging unit", "electric vehicle charging Dubai"
        ],
        "articleSection": [
          "What Is Doorstep EV Charging?", "What Is Public EV Charging?", "Doorstep Charging vs Public Charging: A Real Comparison", "When Doorstep Charging Is a Better Option",
          "When Public Charging Is a Better Option", "Can EV Owners Use Both?", "How It Works in Practice"
        ],
        "about": {
          "@type" : "Thing",
          "name"  : "Doorstep EV Charging vs Public EV Charging",
          "description": "A comparison between mobile doorstep EV charging services and fixed public charging stations in Dubai, UAE."
        },
        "isPartOf": {
          "@type": "WebPage",
          "name"  : "Doorstep EV Charging in Dubai vs Public Charging | Which Is Better?",
          "url"   : `${BASE_URL}/doorstep-ev-charging-in-dubai`
        }
      }
    ]
  }
];
