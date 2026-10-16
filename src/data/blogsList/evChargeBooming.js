import portableDesktop  from "@/assets/images/homepage/blogs/banners/plusx_electric_portable_pod_desktop_banner.webp";
import portableMobile   from "@/assets/images/homepage/blogs/banners/plusx_electric_portable_pod_mobile_banner.webp";
import blogImage        from "@/assets/images/homepage/blogs/plusxelectric_ev_charging_booming_in_dubai.webp";

const BASE_URL               = process.env.NEXT_PUBLIC_BASE_URL;
export const eVChargeBooming = [
  {
    type: "paragraph",
    text: `Dubai's public charging network tripled in about a year, from just over 740 charge points in March 2025 to 2,223 by the end of March 2026. The short answer to why: the city opened charging to private operators, EV ownership kept climbing, and drivers started expecting electricity wherever they park.`,
  },
  {
    type: "paragraph",
    text: `But the bigger story is not the number of stations. It is that charging in Dubai has stopped being a single option. A driver today can charge at home, at work, at the mall, on a highway, or have the power brought to them. That range of choice is what is turning curiosity about EVs into confidence.`,
  },
  {
    type: "paragraph",
    text: `This article explains what is driving the rise, how charging has evolved into an ecosystem, and what that shift means for anyone thinking about making the switch.`,
  },
  {
    type: "heading",
    level: 2,
    text: "How Fast Has Dubai's Charging Network Grown?"
  },
  {
    type: "paragraph",
    text: "Dubai added roughly 1,480 charge points in twelve months, an average of about four new points every day. DEWA's own updates show how quickly the curve steepened:"
  },
  {
    type: "table",
    columns: [ "Date", "Charge points in Dubai", "What changed" ],
    rows: [
      [
        "March 2025",
        "740+",
        "DEWA network, before private operators were licensed at scale (DEWA)",
      ],
      [
        "August 2025",
        "1,270+",
        "DEWA plus public and private partners (WAM)",
      ],
      [
        "January 2026",
        "1,860+",
        "Includes stations licensed by DEWA with other entities (WAM)",
      ],
      [
        "March 2026",
        "2,223",
        "DEWA stations plus licensed independent operators (DEWA)",
      ]
    ]
  },
  {
    type: "paragraph",
    text: `The people using the network grew just as sharply. DEWA's Green Charger programme had 14 registered users in 2015. By mid-January 2026 it had 23,600, and it had delivered more than 55,200 MWh of electricity since launch, enough for over 276 million kilometres of electric driving.`
  },
  {
    type: "heading",
    level: 2,
    text: `Five Reasons Charging Stations Are Multiplying in Dubai`,
  },
  {
    type: "heading",
    level: 3,
    text: `1. Charging was opened up to private operators`,
  },
  {
    type: "paragraph",
    text: `Until recently, public charging in Dubai was almost entirely built by DEWA. In late 2024, DEWA published a regulatory framework that lets licensed independent charge point operators (CPOs) build and run paid public charging. Dubai now grows its network on two tracks at once: DEWA's own stations, and stations funded and operated by licensed private companies.`
  },
  {
    type: "paragraph",
    text: `That single change explains much of the jump after early 2025. When private capital can earn a return on a charger, chargers appear far faster than any one authority could build them.`
  },
  {
    type: "heading",
    level: 3,
    text: `2. EV ownership arrived ahead of schedule`,
  },
  {
    type: "paragraph",
    text: `Dubai's Green Mobility Strategy aimed for more than 42,000 electric cars on its roads by 2030. By mid-2025, DEWA reported the emirate had already passed 41,000 EVs. When adoption runs five years ahead of plan, infrastructure has to catch up, and that catch-up is what drivers are now seeing. For the wider picture of how <a href="/the-rise-of-electric-vehicles-in-the-uae-a-comprehensive-overview" target="_blank">EVs in the UAE</a> reached this point, including incentives and market trends, see our overview.`
  },
  {
    type: "heading",
    level: 3,
    text: `3. Charging is moving to where cars already park`,
  },
  {
    type: "paragraph",
    text: `A car in Dubai spends most of its day parked: at home, at the office, at a mall. New chargers increasingly follow that pattern rather than sitting at standalone stations. DEWA's own new headquarters at Al Shera'a, for example, has 46 charge points: 40 AC points for employees who park all day and 6 DC fast points for short-stay visitors. Offices, residential communities and retail destinations are adopting the same logic.`
  },
  {
    type: "heading",
    level: 3,
    text: `4. Fleets are going electric`,
  },
  {
    type: "paragraph",
    text: `Ride-hailing cars, delivery vehicles, limousine operators and newer autonomous vehicle pilots all cover high daily mileage. A fleet that runs on electricity needs dependable, predictable charging, often overnight and at depots. Commercial demand like this justifies investment in chargers that private drivers then benefit from too.`
  },
  {
    type: "heading",
    level: 3,
    text: `5. Long-term climate commitments set the direction`,
  },
  {
    type: "paragraph",
    text: `The UAE Net Zero 2050 strategy, the Dubai Clean Energy Strategy 2050 and the national ambition for half of all vehicles to be electric by 2050 give investors and developers a clear signal. Infrastructure built today is built for a market everyone expects to keep growing.`
  },
  {
    type: "heading",
    level: 2,
    text: `From One Option to Many: Charging Has Become an Ecosystem`,
  },
  {
    type: "paragraph",
    text: `The most important change is not more stations. It is that EV drivers in Dubai are no longer dependent on public stations alone. Charging now comes in several forms, each suited to a different moment in a driver's day:`
  },
  {
    type: "table",
    columns: [ "Way to charge", "When it fits best", "What it solves" ],
    rows: [
      [
        `<a href="/ev-charger-installation-uae" target="_blank">At home or in your building</a>`,
        "Overnight, every day",
        "Wake up with a full battery; no detours",
      ],
      [
        "At work or at destinations",
        "While parked for hours",
        "Top-ups during the day at offices, malls and hotels",
      ],
      [
        "Public fast charging",
        "On longer drives or quick stops",
        "Rapid range when time matters",
      ],
      [
        `Charging brought to the car`,
        "When no charger is nearby or time is short",
        "Power delivered to where the vehicle is parked",
      ],
      [
        `<a href="/ev-breakdown-assistance" target="_blank">Emergency charging on the road</a>`,
        "When the battery runs low unexpectedly",
        "Gets the car moving again without a tow",
      ]
    ]
  },
  {
    type: "paragraph",
    text: `Regulation has kept pace with this shift. DEWA's licence for independent operators explicitly recognises mobile charge points, meaning charging equipment mounted on vehicles or otherwise transportable, alongside fixed stations. In other words, Dubai now treats charging as a service that can move, not only as a fixed post in a car park.`
  },
  {
    type: "paragraph",
    text: `For drivers, this layered setup works like a safety net. If one option is unavailable, another is close at hand. That redundancy is exactly what removes the fear that held many people back from buying an EV. We look at how these newer options work in our guide to <a href="/the-rise-of-evs-in-dubai-and-the-growing-need-for-smart-charging-solutions" target="_blank">smart charging solutions</a>.`
  },
  {
    type: "heading",
    level: 2,
    text: `What We See on the Ground: Drivers Are Switching with Confidence`,
  },
  {
    type: "paragraph",
    text: `At PlusX Electric, we have served more than 12,300 EVs across Dubai, and we work with EV owners every single day. That daily contact gives us a close view of how attitudes have changed.`
  },
  {
    type: "paragraph",
    text: `A few years ago, the most common question from new EV owners was simple: "Where will I charge?" Today the questions are different. Drivers ask which option suits their routine best, not whether charging exists at all. That shift in the question is the clearest sign of confidence we know of.`
  },
  {
    headerText: `What we observe most often:`,
    type: "ul",
    items: [
      `<strong>Drivers mix their options:</strong> Many owners charge at home most days and use other options only when life gets busy or plans change.`,
      `<strong>Apartment residents are no longer left out:</strong> People without a private parking space once felt EVs were not for them. More choice in how and where to charge has opened ownership to them.`,
      `<strong>A low battery is no longer a crisis:</strong> Knowing that help can reach the car wherever it is parked takes the anxiety out of an unexpected low charge.`,
      `<strong>Businesses plan electric fleets with certainty:</strong> Operators now treat charging as a scheduled, reliable input, the same way they once treated fuel.`,
    ],
    footerText: `Trust in green mobility is not built by a single charger. It is built when people know they have more than one way to keep moving.`
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
    text: `What to Watch Next`,
  },
  {
    headerText: `The rise in charging stations is likely to continue, and the network will probably become smarter rather than just larger. Three trends are worth following:`,
    type: "ul",
    items: [
      `<strong>More private operators:</strong> Tesla and UAEV were the first independent operators licensed by DEWA. As more companies enter, expect wider coverage and more competition on speed and convenience.`,
      `<strong>Charging built into new buildings:</strong> As charging moves to where people live and work, it will increasingly be planned into developments from day one rather than added later.`,
      `<strong>Charging that adapts to the driver:</strong> With fixed, destination, fast and mobile options all growing, the question for drivers will shift from "Can I charge?" to "Which way of charging fits my day?"`,
    ],
    footerText: `For anyone considering an EV in Dubai, the takeaway is reassuring. The infrastructure is no longer a single point of failure. It is a network of choices, and it is growing every day.`
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
          "name"  : "Why are there so many more EV charging stations in Dubai now?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "Mainly because DEWA opened public charging to licensed private operators, while EV numbers grew faster than planned. Together, these pushed Dubai from about 740 charge points in March 2025 to 2,223 by March 2026."
          }
        },
        {
          "@type" : "Question",
          "name"  : "What is a charge point operator (CPO)?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "A CPO is a company that owns or runs EV charging equipment and sells charging as a service. In Dubai, any operator other than DEWA needs a CPO licence from DEWA to provide paid public charging."
          }
        },
        {
          "@type" : "Question",
          "name"  : "Who can operate public EV chargers in Dubai?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "DEWA and its subsidiaries, plus independent companies licensed by DEWA. Tesla and UAEV received the first independent licences, and more operators have joined since."
          }
        },
        {
          "@type" : "Question",
          "name"  : "Do EV owners in Dubai still rely only on public stations?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "No. Drivers can charge at home or in their building, at work and destinations, at public fast chargers, or have charging brought to their car. Most owners combine two or more of these."
          }
        },
        {
          "@type" : "Question",
          "name"  : "Is Dubai on track with its EV adoption goals?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "Ahead of track. The Green Mobility Strategy aimed for over 42,000 EVs by 2030, and Dubai had already passed 41,000 by mid-2025."
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
        "headline"    : "From Range Anxiety to Real Confidence: Why EV Charging Is Booming in Dubai",
        "name"        : "From Range Anxiety to Real Confidence: Why EV Charging Is Booming in Dubai | PlusX Electric",
        "description" : "Discover why EV charging is booming in Dubai, with 2,223 charge points by March 2026. Explore network growth, private operators, and flexible charging options.",
        "image"       : `${BASE_URL}${blogImage.src}`,
        "author"      : {
          "@type" : "Person",
          "name"  : "Admin",
          "url"   : `${BASE_URL}/`
        },
        "publisher"   : {
          "@type" : "Organization",
          "name"  : "PlusX Electric",
          "url"   : `${BASE_URL}/`,
          "logo"  : {
            "@type" : "ImageObject",
            "url"   : `${BASE_URL}/logo-icon.svg`
          }
        },
        "mainEntityOfPage" : {
          "@type" : "WebPage",
          "@id"   : `${BASE_URL}/why-ev-charging-is-booming-in-dubai`
        },
        "url"             : `${BASE_URL}/why-ev-charging-is-booming-in-dubai`,
        "articleSection"  : [
          "How Fast Has Dubai's Charging Network Grown?",
          "Five Reasons Charging Stations Are Multiplying in Dubai",
          "From One Option to Many: Charging Has Become an Ecosystem",
          "What We See on the Ground: Drivers Are Switching with Confidence",
          "What to Watch Next"
        ],
        "keywords" : [
          "EV charging in Dubai",
          "Dubai EV charging network",
          "public EV charging stations Dubai",
          "EV charging infrastructure UAE",
          "Dubai electric vehicle adoption",
          "DEWA Green Charger",
          "mobile EV charging Dubai",
          "home EV charging UAE",
          "EV range anxiety",
          "PlusX Electric"
        ],
        "about" : {
          "@type" : "Thing",
          "name"  : "Electric Vehicle Charging Infrastructure in Dubai"
        }
      }
    ]
  }
];
