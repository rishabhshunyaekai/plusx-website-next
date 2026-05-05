import RSADesktop from "@/assets/images/homepage/blogs/banners/RSADesktop.webp";
import RSAMobile  from "@/assets/images/homepage/blogs/banners/RSAMobile.webp";
import blogImage  from "@/assets/images/homepage/blogs/emergency-ev-charging.webp";

const BASE_URL           = process.env.NEXT_PUBLIC_BASE_URL;
export const emergencyEV = [
  {
    type: "paragraph",
    text: `Low battery is one of those situations that can catch you off guard when you are travelling. You may think that there is enough charge to get through the journey. However, when you are stuck in slow-moving traffic on Al Khail Road or simply driving on Sheikh Zayed Road, the battery can drain faster than you would expect.`,
  },
  {
    type: "paragraph",
    text: `You may think of driving to the nearest charging station instead of your destination. So, emergency <strong>EV charging in Dubai is now essential</strong>. The real struggle is whether your car will reach there, and if it does, how long will you have to wait? All you need in such situations is enough charge to complete your journey without any further delays.`,
  },
  {
    type: "heading",
    level: 2,
    text: "When Emergency EV Charging Is Actually Needed"
  },
  {
    type: "paragraph",
    text: "Although it is better to plan vehicle charging, real-life situations can be unpredictable, no matter the planning."
  },
  {
    headerText : `In practice, emergency charging is needed in situations that most EV drivers eventually face.`,
    type: "ul",
    items: [
      `Your <a href="https://plusxelectric.com/why-ev-owners-trust-plusx-electric-when-their-ev-battery-drains-on-dubai-roads" target="__blank" rel="noopener noreferrer">battery might drain faster than expected</a> in traffic or heat.`,
      `You might reach a DEWA charging station only to find it occupied.`,
      `Sometimes, it is simply a case of being too far from the next available charger or missing a planned charging stop during a busy day.`,
      `Late-night driving or less crowded routes can make access even more limited.`,
    ],
    footerText: `All of these cases can benefit from <strong>urgent EV charging in Dubai</strong>, as it provides immediate support without requiring you to move your vehicle.`
  },
  {
    type: "heading",
    level: 2,
    text: `What Emergency EV Charging Means`,
  },
  {
    type: "paragraph",
    text: "Emergency EV charging is a response-based service that brings charging to your vehicle when you cannot reasonably reach a station."
  },
  {
    type: "paragraph",
    text: `Instead of focusing on a full charge, the goal is simple. A mobile unit reaches your location and provides enough power to help you get back on the road and reach a nearby charging station`
  },
  {
    type: "paragraph",
    text: `This type of service is useful when you cannot physically reach any charging station.`
  },
  {
    type: "ctaButton",
    action: "roadsidePage",
    alt: "Portable-EV-Charger",
    desktop: RSADesktop,
    mobile: RSAMobile
  },
  {
    type: "heading",
    level: 2,
    text: `Roadside Assistance vs Doorstep Charging`
  },
  {
    type: "paragraph",
    text: "Many EV owners confuse emergency charging with regular mobile charging. But they are different though they charge your car at the location."
  },
  {
    type: "table",
    columns: [ "Feature", "Emergency EV Charging (Roadside Assistance)", "Doorstep EV Charging" ],
    rows: [
      [
        "Purpose",
        "It is meant for urgent low-battery situations",
        "It is for routine and planned charging"
      ],
      [
        "Response Time",
        "Rapid response, usually within ~60 minutes",
        "Scheduled in advance"
      ],
      [
        "Charging Output",
        "Provides enough charge to restore mobility",
        "Supports longer, full charging sessions"
      ],
      [
        "Use Case",
        "When your EV cannot reach a charging station",
        "When you want convenient charging at your location"
      ],
      [
        "Planning",
        "Unplanned, used in emergencies",
        "Planned and scheduled as per your routine"
      ]
    ]
  },
  {
    type: "heading",
    level: 2,
    text: `How Fast Is Emergency Charging Assistance?`
  },
  {
    type: "paragraph",
    text: "Emergencies demand quick assistance."
  },
  {
    headerText: `There are many benefits of Plus X Electric services.`,
    type: "ul",
    items: [
      `Help reaches you within 60 minutes, depending on location.`,
      `On-site charging provides up to 10 kWh or approximately 50 km range.`,
      `You receive enough power to safely reach a charging station or your destination.`,
    ],
    footerText: `It is enough to avoid towing and continue your journey.`
  },
  {
    type: "heading",
    level: 2,
    text: `Cost and Practical Consideration`
  },
  {
    type: "paragraph",
    text: `In many cases, towing an EV in Dubai can cost between AED 150 and AED 400 depending on distance. This is <a href="https://plusxelectric.com/why-dubai-ev-owners-are-choosing-roadside-assistance-over-towing" target="__blank" rel="noopener noreferrer">why many EV owners are now choosing roadside assistance over towing</a>.  Emergency charging can help avoid that by giving you enough range to reach the nearest station instead.`
  },
  {
    type: "heading",
    level: 2,
    text: `Who Needs Emergency EV Charging the Most`
  },
  {
    type: "paragraph",
    text: `While any EV driver can face a low-battery situation, it is more common for those who rely heavily on public charging, travel long distances, or are still getting used to how their vehicle’s range behaves in real-world conditions.`
  },
  {
    type: "heading",
    level: 2,
    text: `How PlusX Electric Handles Emergency EV Charging?`
  },
  {
    type: "paragraph",
    text: `PlusX Electric provides <b>emergency EV charging in Dubai</b> through a dedicated roadside assistance service.`
  },
  {
    headerText: `The process is simple.`,
    type: "ul",
    items: [
      `Book emergency charging through the PlusX Electric app.`,
      `Share your location details.`,
      `The rescue team is dispatched immediately.`,
      `On-site charging is delivered.`,
      `You regain enough range to continue driving.`,
    ],
    footerText: `The service also includes jump-start support for 12V battery issues, which is a comprehensive solution for EV emergencies.`
  },
  {
    type: "heading",
    level: 2,
    text: `A Smarter Backup for Every EV Driver`
  },
  {
    type: "paragraph",
    text: `Charging needs of your EV can change at the last moment, no matter how much you planned. Having access to fast EV charging assistance in Dubai ensures that you are never left stranded.`
  },
  {
    type: "paragraph",
    text: `Emergency charging acts as a backup solution that complements your regular charging routine. It can give you confidence on every drive.`
  },
  {
    type: "heading",
    level: 2,
    text: `Conclusion`
  },
  {
    type: "paragraph",
    text: `Situations on the road can change quickly, even if you plan for emergencies. Emergency charging services are a reliable backup when things do not go according to plan. They are also convenient to use. Having access to such services can give you confidence to drive every day in the busy city.`
  },
  {
    type: "paragraph",
    text: `<a href="https://plusxelectric.com/ev-breakdown-assistance" target="__blank" rel="noopener noreferrer">Book Emergency Charging Service Now</a>`
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
          "name"  : "What should I do immediately if my EV battery is critically low?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "Check the location of the nearest charger after moving to a safe spot. If it is unreachable, contact roadside EV support."
          }
        },
        {
          "@type" : "Question",
          "name"  : "How long does emergency EV charging take in Dubai?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "It takes around 60 minutes* to respond, depending on your location. It can provide you with enough charging to reach the nearest station."
          }
        },
        {
          "@type" : "Question",
          "name"  : "Is emergency EV charging better than towing?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "In many cases, yes. It helps you avoid towing costs and gets you moving faster by providing enough charge to continue."
          }
        },
        {
          "@type" : "Question",
          "name"  : "Can I call for help anywhere in Dubai?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "It depends on where you are exactly and the traffic conditions. However, most services cover major areas of the city."
          }
        },
        {
          "@type" : "Question",
          "name"  : "How much range do I get in an emergency charge?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "You can get 10 kWh or around 50 km to reach a nearby charging station."
          }
        }
      ]
    }
  },
  {
    type    : "schema",
    schemas  : [
      {
        "@context"    : "https://schema.org",
        "@type"       : "Article",
        "headline"    : "Emergency EV Charging in Dubai: Fast Help When You're Running Low",
        "description" : "Running low on EV battery in Dubai? Discover how emergency EV charging offers fast, on-demand help to get you back on the road.",
        "image"       : `${BASE_URL}${blogImage.src}`,
        "author"  : {
          "@type" : "Organization",
          "name"  : "PlusX Electric",
          "url"   : "https://plusxelectric.com"
        },
        "publisher": {
          "@type" : "Organization",
          "name"  : "PlusX Electric",
          "url"   : `${BASE_URL}/`,
          "logo"  : {
            "@type" : "ImageObject",
            "url" : "https://plusxelectric.com/logo-icon.svg"
          }
        },
        "datePublished": "2026-04-17",
        "dateModified": "2026-04-17"
      }
    ]
  }
];
