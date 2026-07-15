import RSADesktop from "@/assets/images/homepage/blogs/banners/plusx_electric_ev_rsa_desktop_banner.webp";
import RSAMobile  from "@/assets/images/homepage/blogs/banners/plusx_electric_ev_rsa_mobile_banner.webp";
import blogImage  from "@/assets/images/homepage/blogs/plusx_electric_dead_ev_in_dubai.webp";

const BASE_URL               = process.env.NEXT_PUBLIC_BASE_URL;
export const basementParking = [
  {
    type: "paragraph",
    text: `You're on the B3 level of a tower in JLT. Your Tesla won't start. The dashboard is completely dark. You've been at dinner for two hours and now you need to get home. You call your insurance's roadside number. They send a tow truck.`,
  },
  {
    type: "paragraph",
    text: `Twenty minutes later, the driver calls you back. He's at the building entrance. He can't get in. The ceiling clearance in the basement is 2.1 meters. His flatbed is 2.5 meters tall. He suggests you somehow push the car up three levels of ramp to street level.`,
  },
  {
    type: "paragraph",
    text: `You're standing in a basement garage at 11 PM with a dead car and a tow truck that can't reach you. This isn't hypothetical. This happens in Dubai every single week.`,
  },
  {
    type: "heading",
    level: 2,
    text: "Who to call when your EV battery is dead in Dubai"
  },
  {
    type: "paragraph",
    text: "If your EV battery is dead in Dubai, call a mobile EV rescue service like PlusX Electric on WhatsApp or phone — not a traditional tow company. A mobile EV technician drives directly to your parked car, including basement levels, villa compounds, and hotel valet areas, and delivers an on-the-spot charge or 12V jump-start. Your car powers up where it sits and you drive away under your own power, usually within 30 to 90 minutes."
  },
  {
    type: "paragraph",
    text: `Traditional roadside assistance is built around towing. That model collapses the moment your car is below street level, which describes most parking in Dubai's tower neighborhoods.`
  },
  {
    headerText: `<b>Save these now, before you need them:</b>`,
    type: "ul",
    items: [
      `WhatsApp PlusX Electric — fastest response`,
      `Call our 24/7 EV breakdown line - <a href="tel:+971543061473">+971 54 306 1473</a>`,
      `PlusX Electric EV Breakdown Assistance`,
    ],
  },
  {
    type: "heading",
    level: 2,
    text: `What to do if your EV runs out of charge in basement parking`,
  },
  {
    headerText: `Here's the order of operations, in plain steps:`,
    type: "ul",
    items: [
      `<b>Don't try to push the car up the ramp</b> : Modern EVs weigh between 1,800 and 2,500 kg. Dubai basement ramps are steep enough that this is genuinely dangerous, even with several people.`,
      `<b>Don't call a standard tow truck first</b> : Flatbeds cannot enter most basements — ceiling clearance is typically 2.1 to 2.4 meters, and the truck is 2.5 meters or taller.`,
      `<b>Call a mobile EV charging service</b> : that operates a van-based rescue unit. Share your tower name, basement level (B1, B2, B3), and parking bay number.`,
      `<b>Stay with the car if you can</b> : The technician needs access to the vehicle when they arrive.`,
      `<b>Confirm the unit carries portable DC charging equipment </b> : — typically a 10 kWh delivery, enough for 40 to 70 km of driving range to reach home or a public fast charger.`,
    ],
  },
  {
    type: "paragraph",
    text: `PlusX Electric's <a href="/mobile-ev-charging-dubai" target="__blank">mobile EV charging service in Dubai</a> was built for exactly this scenario. The van fits standard basement clearance, the technicians are EV-trained, and the charging equipment is DEWA-approved.`
  },
  // {
  //   type: "buttons",
  //   buttons: [
  //     // {
  //     //   label: "Explore Our EV Charging Services",
  //     //   type: "link",
  //     //   href: "/",
  //     // },
  //     {
  //       label   : "Book a Free Consultation",
  //       type    : "whatsapp",
  //       phone   : "+971542796424",
  //       message : `Hi PlusX Electric Team \n\n I need more information about AC vs DC chargers.`,
  //     },
  //     // {
  //     //   label: "VIEW EV CHARGERS",
  //     //   type: "redirect",
  //     //   action: "evChargersPage",
  //     // },
  //   ],
  // },
  // {
  {
    type: "heading",
    level: 2,
    text: `The architecture problem nobody planned for`,
  },
  {
    type: "paragraph",
    text: "Dubai is a vertical city. The majority of its residential population lives in towers with underground parking. Business Bay, Dubai Marina, JLT, Downtown, JVC, JBR — the most EV-dense neighborhoods are dominated by high-rises with multi-level basement parking."
  },
  {
    type: "paragraph",
    text: "And tow trucks cannot access basement parking."
  },
  {
    type: "paragraph",
    text: "This isn't a minor gap. It's a fundamental incompatibility between the city's architecture and the traditional roadside assistance model. When a petrol car breaks down in a basement, the driver can at least receive a fuel delivery or a jump-start from any passing vehicle. When an EV breaks down underground, the only traditional option is to somehow get the car to street level — which is impossible if the car won't turn on."
  },
  {
    type: "heading",
    level: 2,
    text: `<a href="/emergency-ev-charging-in-dubai" target="__blank">Emergency EV Charging in Dubai: Fast Help When You’re Running Low</a>`,
  },
  {
    type: "heading",
    level: 2,
    text: `Why EVs break down while parked`,
  },
  {
    type: "paragraph",
    text: "Most people assume EV breakdowns happen on highways. A significant portion actually occur while the car is parked."
  },
  {
    type: "paragraph",
    text: "The 12V auxiliary battery drains overnight. This is especially common in hot weather or when the car hasn't been driven for several days. The main battery could be at 80 percent, but without the 12V, nothing works. The dashboard stays dark, the doors may not unlock, and the car appears completely dead."
  },
  {
    type: "paragraph",
    text: `<b>A software update fails mid-process</b> Some EVs download updates while parked. If the process is interrupted, the car can enter a frozen state where it won't start.`
  },
  {
    type: "paragraph",
    text: `<b>The charging cable gets stuck</b> The driver plugged into a slow charger in the building's shared parking area. The connector latch failed. The cable won't release, the car won't move, and pulling forcefully risks damaging the charge port.`
  },
  {
    type: "paragraph",
    text: `In every one of these scenarios, the car is underground and the tow truck can't reach it.`
  },
  {
    type: "heading",
    level: 2,
    text: `What actually fits in a basement garage`,
  },
  {
    type: "paragraph",
    text: "Mobile EV rescue services operate from vehicles built on standard commercial van chassis. They're designed to navigate exactly the environments where EVs actually break down — basement parking levels, multi-storey garages, narrow villa compound roads, hotel underground valet areas."
  },
  {
    type: "paragraph",
    text: "A van carrying portable DEWA-approved charging equipment and EV-trained technicians can drive straight down to B3, park next to your car, and resolve the issue on the spot."
  },
  {
    type: "paragraph",
    text: `If the main battery is drained, the technician delivers a 10 kWh charge — enough for 40 to 70 km of driving range — directly to your vehicle. You drive out under your own power. No ramps, no pushing, no flatbed.`
  },
  {
    type: "paragraph",
    text: `If the 12V battery is dead, the technician jump-starts it using equipment calibrated for EV electrical systems. The car powers up, you see the main battery sitting at 60 or 70 percent on the dashboard, and you drive home. Problem solved in 15 minutes.`
  },
  {
    type: "paragraph",
    text: `If the charging cable is stuck, the technician uses model-specific manual release procedures to safely extract the connector without damaging the port.`
  },
  {
    type: "paragraph",
    text: `PlusX Electric's <a href="/ev-breakdown-assistance" target="__blank">on-site EV breakdown support</a> was specifically designed for these scenarios — urban Dubai environments where traditional roadside assistance physically cannot operate.`
  },
  {
    type: "heading",
    level: 2,
    text: `Beyond access: the control factor`
  },
  {
    type: "paragraph",
    text: "Even when a tow truck can technically reach your car, mobile rescue is still better for a simple reason: your car never leaves your sight.Charging speed depends not just on the charger, but also on your vehicle and power supply."
  },
  {
    type: "paragraph",
    text: "With towing, your vehicle gets loaded onto a truck, driven to an unknown workshop, handled by people you've never met, and returned hours later. With mobile rescue, the technician works on your car right in front of you. You see the diagnostic, the charge being delivered, and your car powering up. The entire interaction happens in one location, in under 90 minutes, and you're present for all of it."
  },
  {
    type: "paragraph",
    text: "For a vehicle worth AED 150,000 to AED 400,000, that visibility matters."
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
    text: `Tow truck vs mobile EV rescue: what's actually different`
  },
  {
    type: "table",
    columns: [ "Factor", "Traditional Tow Truck", "Mobile EV Rescue Van" ],
    rows: [
      [
        "Basement access",
        "No — usually too tall",
        "Yes — fits 2.1m clearance"
      ],
      [
        "Time to resolution",
        "2–5 hours including workshop time",
        "30–90 minutes, on the spot"
      ],
      [
        "Where your car ends up",
        "Unknown workshop",
        "Stays in your parking bay"
      ],
      [
        "You stay with the car",
        "No — handed off",
        "Yes — work happens in front of you"
      ],
      [
        "Dead 12V battery",
        "Sometimes",
        "Yes — specialized EV jump-start"
      ],
      [
        "Stuck charging cable",
        "No",
        "Yes — model-specific release"
      ],
      [
        "Main battery depleted",
        "Tow only",
        "10 kWh on-site charge delivered"
      ],
      [
        "Risk of port or cable damage",
        "Higher",
        "Lower — EV-trained technician"
      ]
    ]
  },
  {
    type: "heading",
    level: 2,
    text: `When to call PlusX Electric`
  },
  {
    headerText: `Call us if any of these apply:`,
    type: "ul",
    items: [
      `Your EV won't start in a basement, villa compound, hotel valet, or any location a flatbed can't reach`,
      `Your dashboard is dark and you suspect a 12V auxiliary battery drain`,
      `You're on the road with under 5% range and the nearest charger is too far`,
      `A charging cable is locked in your charge port and won't release`,
      `Your main battery is depleted and you need enough range to reach a fast charger or home`,
      `You've already called your insurance roadside number and the tow truck can't get into the building`,
    ],
  },
  {
    type: "heading",
    level: 2,
    text: `What you should do right now`
  },
  {
    type: "paragraph",
    text: "If you live in any Dubai tower with basement parking — and that's the majority of the city's EV-driving population — save a mobile EV rescue number in your phone today. Specifically, one that offers both 10 kWh mobile charging and 12V jump-start capability, because these two problems account for the vast majority of basement parking breakdowns."
  },
  {
    type: "paragraph",
    text: "The van fits in your garage. The technician reaches your car. The problem gets solved where it actually happened. The time to learn this is before your car dies on B3 at midnight, not after."
  },
  {
    type: "heading",
    level: 2,
    text: `Get help now`
  },
  {
    headerText: `24/7 EV breakdown response across Dubai — basement-friendly, no tow needed.`,
    type: "ul",
    items: [
      `WhatsApp us: Message PlusX Electric on WhatsApp`,
      `Call our breakdown line: <a href="tel:+971543061473">Tap to call</a>`,
      `Mobile EV Charging Dubai`,
      `EV Breakdown Assistance`,
    ],
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
        "headline"    : "Dead EV in a Dubai Basement Parking Garage: Who to Call and What to Do",
        "name"        : "Dead EV in a Dubai Basement Parking Garage: Who to Call and What to Do | PlusX Electric",
        "description" : "Your EV won't start in a Dubai basement and tow trucks can't reach you. Here's exactly who to call, what to do, and how mobile EV rescue solves it on the spot.",
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

        "datePublished" : "2026-05-27",
        "dateModified"  : "2026-05-27",

        "mainEntityOfPage" : {
          "@type" : "WebPage",
          "@id"   : `${BASE_URL}/dead-ev-in-a-dubai-basement-parking-garage`
        },
        "inLanguage" : "en",
        "keywords" : [ "dead EV battery Dubai", "EV breakdown basement parking Dubai", "mobile EV rescue Dubai", "PlusX Electric roadside assistance", "EV jump start Dubai", "portable EV charging Dubai", "Tesla dead battery basement", "EV towing Dubai", "12V EV battery drain Dubai", "mobile EV charging service Dubai" ],
        "articleSection" : [ "EV Breakdown Assistance", "Mobile EV Rescue Dubai", "Basement Parking EV Problems", "Emergency EV Charging", "12V Battery Jump Start", "Portable EV Charging", "Dubai EV Infrastructure Challenges", "On-Site EV Rescue Solutions" ],

        "about" : {
          "@type" : "Thing",
          "name"  : "Mobile EV Rescue and Basement Parking EV Assistance in Dubai",
          "description" : "Explains what EV drivers should do when their electric vehicle stops working in Dubai basement parking garages and how mobile EV rescue services solve the problem."
        },

        "isPartOf" : {
          "@type" : "WebPage",
          "name"  : "Dubai EV Breakdown Support Guide | PlusX Electric",
          "url"   : `${BASE_URL}/dead-ev-in-a-dubai-basement-parking-garage`
        }
      },
    ]
  }
];
