import RSADesktop from "@/assets/images/homepage/blogs/banners/plusx_electric_ev_rsa_desktop_banner.webp";
import RSAMobile  from "@/assets/images/homepage/blogs/banners/plusx_electric_ev_rsa_mobile_banner.webp";
import blogImage  from "@/assets/images/homepage/blogs/plusx_electric_ev_mobile_rescue.webp";

const BASE_URL            = process.env.NEXT_PUBLIC_BASE_URL;
export const mobileRescue = [
  {
    type: "paragraph",
    text: `Not long ago, a London tourist named John called us from a hotel lobby in Business Bay. He'd flown into Dubai the night before, picked up an EV from a rental desk at the airport, and parked it at his hotel for the night. The next morning he came down to valet with a problem he hadn't planned for — the battery was almost flat, he had a meeting in Abu Dhabi in three hours, the hotel didn't have a charger, and the rental's 24-hour helpline kept him on hold. He'd never owned an EV before, and he didn't know Dubai's charging network at all.`,
  },
  {
    type: "paragraph",
    text: `So he did what most stranded drivers do, opened Google on his phone, searched something close to "someone bring a charge to my EV in Dubai," and found us. He called and we dispatched our emergency rescue team with a Portable Power POD. John's car was on the road again before his check-out time, and he made his Abu Dhabi meeting.`,
  },
  {
    type: "paragraph",
    text: `This is roughly how most drivers find mobile EV rescue not before they need it, but during. This post is the version of the answer you'd want to read on a calm afternoon, not the one you'd be frantically scrolling in a hotel lobby. It covers the five questions people ask Google and AI search engines the moment a dashboard turns yellow. Save the emergency number at the bottom while you're reading this that's the whole point of reading it now.`,
  },
  {
    type: "buttons",
    buttons: [
      {
        label: "Call us on Emergency Line",
        type: "link",
        href: "tel:+971543061473",
        target: "_self",
      },
      // {
      //   label   : "Call us on Emergency Line",
      //   type    : "whatsapp",
      //   phone   : "+971542796424",
      //   message : `Hi PlusX Electric Team \n\n I need more information about AC vs DC chargers.`,
      // },
      // {
      //   label: "VIEW EV CHARGERS",
      //   type: "redirect",
      //   action: "evChargersPage",
      // },
    ],
  },
  {
    type: "heading",
    level: 2,
    text: "Can someone bring a charge to my car in Dubai?"
  },
  {
    type: "paragraph",
    text: `Yes. PlusX Electric runs a fleet of <a href="/mobile-ev-charging-dubai" target="__blank">mobile charging vans across Dubai</a> that bring a Portable Power POD a high-capacity mobile charging van directly to your car. You request a charge through the PlusX Electric app or by phone, the technician arrives within 60 minutes*, and your car gets enough power on the spot to keep moving. No tow truck, no relocation to a workshop, no losing your car for half a day.`
  },
  {
    type: "paragraph",
    text: `The principle is the same as food delivery: instead of dragging the customer to the station, the station comes to the customer. Except here the "station" is a mobile unit carrying a high-capacity battery pack and certified DC connectors that fit every EV currently sold in the UAE — Tesla, BYD, BMW, Mercedes EQ, Polestar, Lucid, Audi e-tron, Porsche, Nissan Leaf, the lot.`
  },
  {
    type: "heading",
    level: 2,
    text: `How mobile EV charging actually works (the part nobody explains)`,
  },
  {
    type: "paragraph",
    text: "The mechanics are simpler than most people assume. A mobile charging van carries a stored energy reserve enough to handle multiple top-ups across a shift. When you book, the dispatcher routes the nearest van using GPS. The technician arrives with the right connector for your vehicle, plugs into your car's standard charge port, and delivers power at a rate suitable for emergency rescue."
  },
  {
    type: "paragraph",
    text: "What you're not getting is a 0-to-100% fill-up. What you're getting is enough range to keep you moving typically around 10 kWh, which works out to roughly 50 km in most EVs. That's enough to reach your home charger, the nearest public DC station, or your next meeting. Emergency mobile charging is built to unstick you, not replace your normal charging routine."
  },
  {
    type: "paragraph",
    text: "That distinction matters because a lot of people assume mobile charging means waiting an hour for a full battery. It doesn't. It means waiting under an hour for the van to arrive, then 15 to 30 minutes of charging at your location, and you're driving again."
  },
  {
    type: "heading",
    level: 2,
    text: `What's the fastest way to get your EV charged at the roadside in Dubai?`,
  },
  {
    type: "paragraph",
    text: `Mobile EV charging. Nothing else is close. PlusX Electric's service reaches drivers within 60 minutes anywhere in Dubai — Sheikh Zayed Road, Marina, Palm Jumeirah, Business Bay, JLT, Downtown, City Walk, DIFC. You book through the app or call <a href="tel:+971543061473">+971 54 306 1473</a>, and from that moment you're tracking a real van on its way to you.`
  },
  {
    headerText: `Here's what every alternative actually costs you in real time:`,
    type: "ul",
    items: [
      `<b>Calling a friend with a portable charger</b> : Depends entirely on whether they own one (most don't), whether they're free, and whether their unit is compatible with your car's port. Rare to resolve in under two hours.`,
      `<b>Waiting for a regular tow truck</b> : Even if one can reach you, loading the car, transporting it, and dropping it at a workshop rarely finishes in under three to five hours. Tow operators not trained for EVs can also damage drivetrains during loading.`,
      `<b>Walking to a public charger</b> : Doesn't help. There's no jerry-can equivalent for EVs — the energy density of petrol doesn't translate, and you can't carry a meaningful charge in a handheld container.`,
      `<b>Coasting in neutral to the nearest station</b> : If you're below 3%, your car may not have enough auxiliary power online to do this safely. Dubai is also mostly flat, so coasting buys you very little.`,
    ],
    footerText: `Mobile EV rescue is the only option that solves the problem at the location where it happened, in under 90 minutes total, without moving the car.`
  },
  {
    type: "heading",
    level: 2,
    text: `<a href="/ev-solutions-in-dubai" target="__blank">EV Solutions in Dubai: The Complete Guide to Charging, Rescue & Insurance</a>`,
  },
  {
    type: "heading",
    level: 2,
    text: `EV died in a parking garage, who can help?`,
  },
  {
    type: "paragraph",
    text: `If your EV dies in a parking garage anywhere in Dubai — mall, office tower, hotel valet, DIFC, residential basement — call a <a href="/ev-breakdown-assistance" target="__blank">mobile EV rescue service</a> rather than a traditional tow truck. The reason is physical access. Most parking garages in the UAE have ceiling clearance between 2.1 and 2.4 meters, and a standard flatbed tow truck is 2.5 meters or taller. The truck simply can't drive in.`
  },
  {
    type: "paragraph",
    text: "A mobile EV charging van is built on a commercial van chassis sized for exactly these environments. The technician drives down to your level, parks next to your car, and resolves the issue on the spot."
  },
  {
    type: "paragraph",
    text: "The most common parking-garage scenarios PlusX Electric handles aren't only residential basements."
  },
  {
    headerText: `They include:`,
    type: "ul",
    items: [
      `Long lunches and shopping trips at Dubai Mall, Mall of the Emirates, or Marina Mall where the car has been sitting on a hot afternoon and won't power up`,
      `Office building parking where the EV has been parked since Friday and the 12V battery drained over the weekend`,
      `Hotel valet parking where the car was returned with a low charge`,
      `DIFC, Business Bay, and Downtown commercial garages with restricted access`,
      `Villa community parking and tower basement parking with no installed charger`,
    ],
    footerText: `Same fix in every case: the van comes to the car. You stay with your vehicle, watch the work happen, and drive out under your own power.`
  },
  {
    type: "heading",
    level: 2,
    text: `EV charging rescue for rental cars in Dubai`,
  },
  {
    type: "paragraph",
    text: "Rental EV emergencies are their own category. The driver is often unfamiliar with the car, the local charging network, and sometimes the city. Tourists picking up a rental EV at DXB or DWC may have never driven electric before. Business travelers using ekar, Udrive, or Yelo for a quick trip don't always think about charging until the dashboard turns yellow."
  },
  {
    type: "paragraph",
    text: `Here's the thing rental drivers often miss: you don't need to be the registered owner to request mobile charging. PlusX Electric's emergency service is available to whoever is driving the car. You don't have to go through your rental company's process at all — which matters because rental "roadside assistance" is usually a generic third-party tow contract with no EV-specific equipment.`
  },
  {
    headerText: `For rental drivers, mobile charging is usually the better call than the rental's own roadside number, because:`,
    type: "ul",
    items: [
      `The rental's roadside contractor will most likely tow the car back to their depot. That can take 3 to 5 hours, after which you're still without transport.`,
      `Mobile charging gets you back on the road in under 90 minutes, often without ever needing to involve the rental company during the emergency itself.`,
      `You don't get penalized for "letting" the battery die in most rental contracts — drained batteries are treated the same as low fuel.`,
      `The cost is transparent and known up front (service starts from AED 185* + VAT), unlike a tow charge that may show up on your final bill as an opaque "recovery fee."`,
    ],
    footerText: `If you're renting an EV in Dubai, save +971 54 306 1473 in your phone and download the PlusX Electric app the moment you pick up the car. Treat it like you'd treat saving Careem or Uber on your phone before you actually need a ride — not after.`
  },
  {
    type: "ctaButton",
    action: "roadsidePage",
    alt: "EV Breakdown Assistance Services in dubai",
    desktop: RSADesktop,
    mobile: RSAMobile
  },
  {
    type: "heading",
    level: 2,
    text: `Is emergency EV charging safe for your battery's health?`
  },
  {
    type: "paragraph",
    text: "This is the question that comes up most often, and the short answer is yes — when delivered through a purpose-built mobile charger like PlusX Electric's Portable Power POD."
  },
  {
    type: "paragraph",
    text: "Lithium-ion EV batteries are stressed by three specific things: prolonged exposure to high temperatures, repeated deep discharges to 0%, and frequent fast-charging at very high states of charge (above 80%). An emergency top-up does none of these in a meaningful way."
  },
  {
    type: "paragraph",
    text: "A typical mobile rescue delivers around 10 kWh — a modest amount, in the middle of the battery's state-of-charge range, at a rate gentler than the 150-250 kW you'd get at a commercial DC fast charger. The protocols are identical to any other public charger your car accepts every day. There's no manufacturer warranty implication, no special wear pattern, no measurable long-term degradation tied to occasional emergency charging."
  },
  {
    type: "paragraph",
    text: "What's actually worse for your battery is the alternative most people don't think about: letting the pack drain to 0%, sitting at 0% for hours while waiting for a tow, then fast-charging from empty when you get to a workshop. Deep discharges to absolute zero are harder on lithium-ion cells than the small mid-range top-up an emergency van delivers. Getting power into the car before it drops to zero is the battery-healthier choice in almost every realistic scenario."
  },
  {
    type: "paragraph",
    text: "If anyone's told you mobile charging will void your warranty or damage your pack, that's a misunderstanding. The Portable Power POD uses the same charging protocols as any public charger your car already accepts without complaint."
  },
  // {
  //   type: "heading",
  //   level: 2,
  //   text: `Tow truck vs mobile EV rescue: what's actually different`
  // },
  // {
  //   type: "table",
  //   columns: [ "Factor", "Traditional Tow Truck", "Mobile EV Rescue Van" ],
  //   rows: [
  //     [
  //       "Basement access",
  //       "No — usually too tall",
  //       "Yes — fits 2.1m clearance"
  //     ],
  //     [
  //       "Time to resolution",
  //       "2–5 hours including workshop time",
  //       "30–90 minutes, on the spot"
  //     ],
  //     [
  //       "Where your car ends up",
  //       "Unknown workshop",
  //       "Stays in your parking bay"
  //     ],
  //     [
  //       "You stay with the car",
  //       "No — handed off",
  //       "Yes — work happens in front of you"
  //     ],
  //     [
  //       "Dead 12V battery",
  //       "Sometimes",
  //       "Yes — specialized EV jump-start"
  //     ],
  //     [
  //       "Stuck charging cable",
  //       "No",
  //       "Yes — model-specific release"
  //     ],
  //     [
  //       "Main battery depleted",
  //       "Tow only",
  //       "10 kWh on-site charge delivered"
  //     ],
  //     [
  //       "Risk of port or cable damage",
  //       "Higher",
  //       "Lower — EV-trained technician"
  //     ]
  //   ]
  // },
  {
    type: "heading",
    level: 2,
    text: `When mobile EV charging is the right call (and when it isn't)`
  },
  {
    type: "paragraph",
    text: `Mobile charging is the right answer when the car is fine and only the energy is missing. That covers maybe 80% of EV "breakdowns" — drained main battery, dead 12V auxiliary, range miscalculated on a longer drive than planned.`
  },
  {
    type: "paragraph",
    text: "It's not the answer when there's an actual mechanical or accident-related issue. Collision damage, suspension failure, a flat tyre, a blown coolant line — those need a tow to a workshop and a proper diagnostic. The PlusX Electric team will tell you honestly if your situation needs a tow rather than a charge; they've handled 1000+ rescues and know the difference."
  },
  {
    type: "paragraph",
    text: "The decision rule is simple: if the dashboard problem is about power, call mobile rescue. If it's about parts, call a workshop tow."
  },
  {
    type: "heading",
    level: 2,
    text: `How to actually request emergency EV charging in Dubai`
  },
  {
    headerText: `Three options, in order of speed:`,
    type: "ul",
    items: [
      `PlusX Electric app — fastest. Book through the app, share your live location, and track the van on its way. Download on iOS or Android.`,
      `Call — <a href="tel:+971543061473">+971 54 306 1473</a>, available 24/7.`,
      `WhatsApp — message your location and EV model for the fastest acknowledgment outside the app. Open WhatsApp chat.`,
    ],
    footerText: `For tourists and rental drivers without the app installed yet, phone or WhatsApp works fine. The dispatcher only needs three things: your location, your EV's make and model, and your current battery percentage if the dashboard is still readable.`
  },
  {
    type: "heading",
    level: 2,
    text: `The one thing to do before you need this`
  },
  {
    type: "paragraph",
    text: `EV battery emergencies aren't predictable. The fix is. A mobile charging van that fits where you're parked, brings a Portable Power POD, and gets you back on the road within an hour — that's the same answer whether you're a Dubai resident in JLT, a tourist in a rented Polestar in Downtown, or a fleet driver in DIFC.`
  },
  {
    type: "paragraph",
    text: `Mobile EV charging is the kind of service that feels invisible until the moment you suddenly need it. The single most useful thing you can do right now is save +971 54 306 1473 in your phone, download the PlusX Electric app, and forget about it until your dashboard turns yellow at the worst possible moment. The day it does, you'll be glad you did this when it cost you ninety seconds instead of five hours.`
  },
  // {
  //   type: "heading",
  //   level: 2,
  //   text: "FAQ's"
  // },
  // {
  //   type: "faq",
  //   schema :{
  //     "@context"  : "https://schema.org",
  //     "@type"     : "FAQPage",
  //     mainEntity: [
  //       {
  //         "@type" : "Question",
  //         "name"  : "Can I install a fast DC charger at home in Dubai?",
  //         "acceptedAnswer": {
  //             "@type" : "Answer",
  //             "text"  : "DC chargers are not supported in residential spaces because of their high power requirements."
  //         }
  //       },
  //       {
  //         "@type" : "Question",
  //         "name"  : "How much does it cost to install a home EV charger in Dubai?",
  //         "acceptedAnswer": {
  //             "@type" : "Answer",
  //             "text"  : "You can install an AC charger at home for AED 3,000 to AED 7,000. There may be additional costs for setup and wiring."
  //         }
  //       },
  //       {
  //         "@type" : "Question",
  //         "name"  : "What connector is used for EV charging in Dubai?",
  //         "acceptedAnswer": {
  //             "@type" : "Answer",
  //             "text"  : "AC chargers mostly use Type 2 connectors, and DC chargers require CCS2 in the UAE."
  //         }
  //       },
  //       {
  //         "@type" : "Question",
  //         "name"  : "Does my building support EV charger installation?",
  //         "acceptedAnswer": {
  //             "@type" : "Answer",
  //             "text"  : "It depends if your building allows an upgrade for charger infrastructure. You also need approvals and electrical capacity."
  //         }
  //       },
  //       {
  //         "@type" : "Question",
  //         "name"  : "Do I need both AC and DC charging options?",
  //         "acceptedAnswer": {
  //             "@type" : "Answer",
  //             "text"  : "AC charging at home is preferred by most EV owners and rely on DC chargers only during travel, according to their needs."
  //         }
  //       }
  //     ]
  //   }
  // },
  {
    type    : "schema",
    schemas : [
      {
        "@context"    : "https://schema.org",
        "@type"       : "Article",
        "headline"    : "Can Someone Bring a Charge to My EV in Dubai? How Mobile Rescue Works",
        "name"        : "Can Someone Bring a Charge to My EV in Dubai? How Mobile Rescue Works | PlusX Electric",
        "description" : "Dead EV battery in Dubai? Rental car at a hotel, parking garage, or stuck on Sheikh Zayed Road? Here's who brings a charge to you, how fast it arrives, and whether emergency charging is safe for your battery.",
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
            "url"   : "https://plusxelectric.com/logo-icon.svg"
          }
        },

        "datePublished" : "2026-06-01",
        "dateModified"  : "2026-06-01",

        "mainEntityOfPage" : {
          "@type" : "WebPage",
          "@id"   : `${BASE_URL}/can-someone-bring-a-charge-to-my-ev-in-dubai`
        },

        "inLanguage" : "en",

        "keywords" : [
          "mobile EV charging Dubai",
          "emergency EV charging Dubai",
          "dead EV battery Dubai",
          "portable EV charger Dubai",
          "roadside EV charging service",
          "EV rescue Dubai",
          "EV charging van Dubai",
          "Dubai EV breakdown assistance",
          "rental EV charging Dubai",
          "Portable Power POD",
          "EV charging at hotel Dubai",
          "EV charging in parking garage Dubai",
          "EV battery rescue service UAE",
          "mobile EV charger near me",
          "PlusX Electric emergency charging"
        ],

        "articleSection" : [
          "Mobile EV Charging",
          "Emergency EV Rescue",
          "Roadside Charging Services",
          "Rental EV Support",
          "EV Battery Assistance",
          "Portable Charging Solutions",
          "Dubai EV Infrastructure",
          "Electric Vehicle Support UAE"
        ],

        "about" : {
          "@type" : "Thing",
          "name"  : "Mobile EV Charging and Emergency Rescue Services in Dubai",
          "description" : "Explains how mobile EV charging works in Dubai, when to use emergency charging services, support for rental EVs, parking garage breakdowns, and battery-safe rescue charging."
        },

        "isPartOf" : {
          "@type" : "WebPage",
          "name"  : "Mobile EV Charging Dubai | PlusX Electric",
          "url"   : `${BASE_URL}/can-someone-bring-a-charge-to-my-ev-in-dubai`
        }
      }
    ]
  }
];
