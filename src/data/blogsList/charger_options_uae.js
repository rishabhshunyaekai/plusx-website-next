import CIDesktop        from "@/assets/images/homepage/blogs/banners/plusx_electric_charger_installation_desktop_banner.webp";
import CIMobile         from "@/assets/images/homepage/blogs/banners/plusx_electric_charger_installation_mobile_banner.webp";
import portableDesktop  from "@/assets/images/homepage/blogs/banners/plusx_electric_portable_pod_desktop_banner.webp";
import portableMobile   from "@/assets/images/homepage/blogs/banners/plusx_electric_portable_pod_mobile_banner.webp";
import blogImage        from "@/assets/images/homepage/blogs/plusx_electric_charging_options.webp";

const BASE_URL              = process.env.NEXT_PUBLIC_BASE_URL;
export const chargerOptions = [
  {
    type: "paragraph",
    text: `If you are thinking about buying an electric car, or you are already comparing models and getting close to a decision, there is one practical question that tends to come up before the keys are even in your hand: how am I actually going to charge it?`,
  },
  {
    type: "paragraph",
    text: `It is one of the most sensible things to research before you switch. The car itself is the easy part. What really shapes day-to-day EV life is how, where, and when you charge. The good news is that the UAE has quietly become one of the most EV-friendly places in the region, and once you understand the options, a lot of the worry around "going electric" simply disappears.`,
  },
  {
    type: "paragraph",
    text: `At PlusX Electric, we have charged more than 6,800 EVs across Dubai, so the picture below is not theory. It is what we see drivers actually use every day. Here is a clear, no-jargon look at every charging solution available, so you can buy your first EV knowing exactly how you will keep it running.`,
  },
  {
    type: "paragraph",
    text: `One note before we start: the prices and approval details below reference Dubai and DEWA, since that is where most of our work happens. Abu Dhabi (through ADDC) and Sharjah (through SEWA) run their own equivalents, but the services themselves — mobile charging, installation, public charging, and roadside help work the same way right across the UAE.`,
  },
  {
    type: "heading",
    level: 2,
    text: "How does EV charging actually work?"
  },
  {
    type: "paragraph",
    text: "There are two kinds of charging, and knowing the difference is enough to understand everything that follows."
  },
  {
    type: "paragraph",
    text: `AC charging is the everyday, slower kind. It is what you use at home or overnight, and it is gentle on the battery, which is one of several simple habits that keep your battery healthy over the years you own the car.`
  },
  {
    type: "paragraph",
    text: "DC fast charging is the quick kind. It is what you use on the road when you want a meaningful top-up in minutes rather than hours."
  },
  {
    type: "paragraph",
    text: `Almost every EV sold in the UAE uses the same regional connector standards (Type 2 for AC and CCS2 for DC), which means whatever car you choose will plug in and charge across the same network. You do not need to memorise any of this. The point is simply that the system is standardised, so you are not locking yourself into anything obscure when you buy.With that out of the way, here are your real options.`
  },
  {
    type: "heading",
    level: 2,
    text: `1. Can the charger come to me?`,
  },
  {
    type: "paragraph",
    text: "Yes, and this is the option most first-time buyers do not even know exists, even though it is often the most convenient."
  },
  {
    type: "paragraph",
    text: `Instead of driving somewhere to charge, a mobile EV charging service brings the charger to you, wherever your car is parked: your apartment building, your villa driveway, an office car park, or any spot without a fixed charger nearby. With PlusX Electric, you can book a Portable Power Pod from AED 65, on demand or scheduled, and our team arrives and charges your car on the spot.`
  },
  {
    type: "paragraph",
    text: `A typical session brings the battery up to around 80%, though the exact time depends on your car's battery size and how low it started , usually a few hours while you work, sleep, or shop. The Pod works with every major brand on UAE roads, from Tesla and BYD to BMW, Mercedes, Audi, and Porsche.`
  },
  {
    type: "paragraph",
    text: `For anyone living in a building without a dedicated charger, or anyone who simply does not want to think about charging logistics, this removes the single biggest worry people have before switching to an EV. If you have been holding off because you are not sure where you would plug in, this option alone may settle the question.`
  },
  {
    type: "paragraph",
    text: `Not sure where you would charge? <a href="/mobile-ev-charging-dubai" target="__blank">Book a Portable Power Pod</a> from AED 65 and let the charger come to you.`
  },
  {
    type: "ctaButton",
    action: "chargerInstallationPage",
    alt: "Best AC DC EV Charger Installation Service in UAE",
    desktop: CIDesktop,
    mobile: CIMobile
  },
  {
    type: "heading",
    level: 2,
    text: `2. Where can I find public EV charging in the UAE?`,
  },
  {
    type: "paragraph",
    text: "Across Dubai, Abu Dhabi, and the wider UAE, public charging stations are now a normal part of the landscape. You will find them at malls, supermarkets, petrol stations, business parks, and along major highways."
  },
  {
    type: "paragraph",
    text: `These stations suit two situations: a quick DC fast top-up while you run errands or grab a coffee, and longer AC charging while your car is parked for a few hours anyway. For longer drives between emirates, a fast station can add a good chunk of range during a short stop, which is exactly what you want on a road trip.`
  },
  {
    type: "paragraph",
    text: `The catch every new driver learns quickly is that a station being on the map does not mean it is free, or even working. A quick check on a charging map or PlusX App before you set off — rather than after you arrive — saves you the frustration of a wasted detour. For a prospective buyer, the reassuring part is how much this network has grown, and how quickly it keeps expanding.`
  },
  // {
  //   type: "heading",
  //   level: 2,
  //   text: `If you still want to know more about AC or DC chargers.`,
  // },
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
  {
    type: "heading",
    level: 2,
    text: `3. Should I install a home charger?`
  },
  {
    type: "paragraph",
    text: "If you own your villa or have a dedicated, fixed parking spot, installing your own wall-mounted charger is the long-term solution that makes EV ownership feel effortless."
  },
  {
    type: "paragraph",
    text: `A properly installed home charger means you wake up every morning to a full battery, the same way you charge your phone overnight. No queues, no apps to open, no detours. For most owners, a home charger covers the large majority of their charging needs, and public or fast charging becomes the occasional backup for road trips.`
  },
  {
    type: "paragraph",
    text: `In the UAE, a home charger should be a DEWA-compliant unit fitted by a DEWA-approved installer to local electrical and safety standards. For a standard residential setup, there is no separate DEWA permit to wait on — PlusX handles <a href="/ev-charger-installation-uae" target="__blank">EV charger installation across the UAE</a> end to end: the site assessment, the wiring, the certified charger, and the documentation, so you are not chasing multiple vendors. Pricing starts from AED 999 and varies with the charger and the cable run, a residential install is usually done in one to three days, and the work is backed by a one-year workmanship warranty — with a three-year warranty on the charger itself when you buy it through PlusX.`
  },
  {
    type: "paragraph",
    text: `What does it actually cost to run? Home charging draws on your standard DEWA residential electricity tariff — roughly AED 0.23 to 0.38 per kWh depending on your usage slab — so a full charge is a few dirhams of electricity rather than a tank of petrol. One thing most people do not realise until the bill arrives: EV charging is added to your normal monthly DEWA bill, and heavy home charging can nudge a household into a higher tariff slab. Charging overnight and keeping half an eye on your slab keeps it predictable.`
  },
  {
    type: "paragraph",
    text: `Done right, it is a one-time setup that pays you back in convenience every single day, and it is often the deciding factor that makes people comfortable going electric.`
  },
  {
    type: "paragraph",
    text: `Own your parking spot? Get a free installation consultation and we will handle the charger, the wiring, and the documentation end to end.`
  },
  {
    type: "heading",
    level: 2,
    text: `Which home charger do I need — 7kW, 11kW, or 22kW?`
  },
  {
    type: "paragraph",
    text: `For most UAE homes, a 7kW charger is the practical answer. The higher numbers sound better, but the right choice comes down to two things: how much range you actually need overnight, and how fast your specific car can accept AC power.`
  },
  {
    type: "table",
    columns: [ "Charger", "Supply", "Range added per hour*", "Best suited to" ],
    rows: [
      [
        "7.4 kW",
        "Single-phase",
        "~40 km",
        "Most villas and homes; easily fills one EV overnight"
      ],
      [
        "11 kW",
        "Three-phase",
        "~65 km",
        "Faster overnight top-ups, if your home has three-phase power and your car accepts 11kW AC"
      ],
      [
        "22 kW",
        "Three-phase",
        "~120 km",
        "Rarely needed at home — mainly for cars that accept 22kW AC, or shared and commercial setups"
      ]
    ]
  },
  {
    type: "paragraph",
    text: "*Approximate, and depends on your car's efficiency."
  },
  {
    type: "paragraph",
    text: "Here is the catch worth knowing before you overspend: a charger can only deliver power as fast as your car's onboard AC charger will accept it. Plenty of EVs cap at 7.4kW or 11kW on AC, which means a 22kW wall box will not charge them any faster — you would be paying for headroom the car cannot use. It also needs a three-phase supply, which not every home has. Matching the charger to your car and your supply, rather than just buying the biggest one, is exactly what we sort out in the free consultation."
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
    text: `4. What happens if my EV runs out of charge on the road?`
  },
  {
    type: "paragraph",
    text: "Range anxiety is the worry almost every new EV owner has, even though it tends to fade fast with experience. This is the option that puts it to rest."
  },
  {
    type: "paragraph",
    text: `Roadside EV charging assistance is an emergency service for the rare moment your battery runs lower than you planned, you misjudge a journey, or you simply get caught out. Rather than waiting for a tow truck, a mobile unit reaches you — usually within about an hour — and delivers up to 10 kWh on the spot, roughly 50 km of range, enough to get you to the nearest station or home. PlusX has done this for more than 500 stranded drivers across the city.`
  },
  {
    type: "paragraph",
    text: `Here is something most buyers never hear until it happens to them: in our experience, around half of EV breakdowns in Dubai are not the main battery at all, but a flat 12V battery — the small one that runs the car's electronics. A tow truck cannot fix that, but a jump-start on the spot can, which is why proper <a href="/ev-breakdown-assistance" target="__blank">EV roadside assistance</a> saves you a slow, expensive, and completely unnecessary tow. Starting from AED 185 plus VAT , it is the cleaner, smarter equivalent of someone bringing you fuel, built specifically for electric cars.`
  },
  {
    type: "paragraph",
    text: `You may never need it, but knowing it exists changes how confidently you drive, and for a lot of buyers, it is the safety net that finally makes the switch feel risk-free.`
  },
  {
    type: "heading",
    level: 2,
    text: `How do these options work together?`
  },
  {
    headerText: `You do not have to choose just one. Most owners end up mixing a few:`,
    type: "ul",
    items: [
      `A home charger or mobile home charging for the day-to-day.`,
      `Public stations for top-ups and longer journeys.`,
      `Roadside assistance as the safety net you are glad to have but rarely use.`,
    ],
    footerText: `Together, these cover every realistic scenario, from the daily commute and the school run to a weekend drive to another emirate. Once you see how they fit together, the picture stops looking complicated and starts looking genuinely easy.`
  },
  {
    type: "heading",
    level: 2,
    text: `The bigger picture: the UAE is building for EV owners`
  },
  {
    type: "paragraph",
    text: `None of this happened by accident. Authorities across the Emirates — DEWA in Dubai, ADDC in Abu Dhabi, SEWA in Sharjah — alongside a growing number of private charging companies, have been steadily expanding charging infrastructure to make the switch to electric as smooth as possible. Every new station, approval process, and service that comes online makes EV ownership a little easier than it was the year before.`
  },
  {
    type: "paragraph",
    text: `For someone deciding whether to make the jump, the takeaway is simple: the support system is already solid, and it is only getting better.`
  },
  {
    type: "heading",
    level: 2,
    text: `Where PlusX Electric fits in`
  },
  {
    type: "paragraph",
    text: "The one thing that can still feel fragmented is having to juggle different providers for each need — one for home charging, another for installation, someone else entirely if you get stranded."
  },
  {
    type: "paragraph",
    text: `That is the gap PlusX was built to close. We offer all four of these solutions — mobile home charging, public charging support, home charger installation, and roadside EV charging assistance — in one place. As a DEWA-approved provider that has already serviced more than 6,800 EVs across the UAE, our aim is straightforward: make charging your car something you barely have to think about.`
  },
  {
    type: "paragraph",
    text: `So if you are still weighing up the switch, charging does not have to be the thing that holds you back. <a href="tel:+971543061473">Talk to the PlusX team</a> for a free consultation, and we will take care of the rest.`
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
          "name"  : "What are the main ways to charge an EV in the UAE?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "There are four: mobile charging that comes to you, public charging stations, a home charger installed at your parking spot, and emergency roadside assistance. Most owners rely on a home charger or mobile charging day to day, with public and roadside as backup."
          }
        },
        {
          "@type" : "Question",
          "name"  : "Do I need to install a home charger to own an EV?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "No, a home charger is convenient but not essential. If you live in an apartment or cannot install one, mobile EV charging brings a Portable Power Pod to your car from AED 65, so you can own an EV comfortably without a fixed charger."
          }
        },
        {
          "@type" : "Question",
          "name"  : "How much does it cost to charge or install an EV charger in Dubai?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "Mobile charging starts at AED 65 per call-out, and home charger installation starts from AED 999 depending on the charger and cable run. PlusX supplies a DEWA-compliant charger, fits it to code with a DEWA-approved team, and backs the work with a one-year workmanship warranty, plus a three-year warranty on the charger when you buy it through PlusX."
          }
        },
        {
          "@type" : "Question",
          "name"  : "What size home charger do I need — 7kW, 11kW, or 22kW?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "For most UAE homes, a 7kW charger comfortably fills an EV overnight. 11kW or 22kW only helps if your home has a three-phase supply and your car's onboard charger can accept that speed — many cap at 7.4kW or 11kW on AC, so a bigger unit will not charge them any faster. A quick consultation matches the charger to your car and your supply."
          }
        },
        {
          "@type" : "Question",
          "name"  : "What happens if my EV runs out of charge on the road in Dubai?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "A mobile unit comes to you and recharges the car on the spot, so you do not need a tow truck. PlusX reaches you in about an hour and delivers up to 10 kWh, around 50 km of range, from AED 145, enough to get to the nearest charger or home."
          }
        },
        {
          "@type" : "Question",
          "name"  : "If my EV will not start, is it always the main battery?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "No, often it is the small 12V battery, not the main drive battery. Around half of EV breakdowns in Dubai trace back to a flat 12V, which runs the car's electronics, and that is fixed with a quick jump-start on the spot rather than a tow. Which EV brands can PlusX Electric charge? All major brands on UAE roads, including Tesla, BYD, BMW, Mercedes, Audi, and Porsche. The Portable Power Pod works with every EV connector standard used here, so compatibility is not something you need to worry about when you buy."
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
        "headline"    : "What Charging Options Are Available for EV Owners in the UAE?",
        "name"        : "EV Charging Options in the UAE: Every Way to Charge | PlusX Electric",
        "description" : "Compare every EV charging option available in the UAE, including mobile charging, public charging stations, home charger installation, and roadside EV charging assistance with real 2026 pricing from PlusX Electric.",
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
        "datePublished" : "2026-05-18",
        "dateModified"  : "2026-05-18",
        "mainEntityOfPage" : {
          "@type" : "WebPage",
          "@id"   : `${BASE_URL}/ev-charging-options-uae`
        },
        "inLanguage" : "en",
        "keywords" : [
          "EV charging options UAE",
          "EV charging Dubai",
          "home EV charger UAE",
          "mobile EV charging Dubai",
          "public EV charging stations UAE",
          "EV charger installation Dubai",
          "DEWA approved EV charger",
          "roadside EV charging UAE",
          "Portable Power Pod",
          "EV charging costs UAE",
          "7kW EV charger UAE",
          "11kW EV charger Dubai",
          "22kW EV charger UAE",
          "EV roadside assistance Dubai",
          "PlusX Electric"
        ],
        "articleSection" : [
          "EV Charging Basics",
          "Mobile EV Charging",
          "Public EV Charging Stations",
          "Home EV Charger Installation",
          "Choosing the Right Home Charger",
          "Roadside EV Charging Assistance",
          "EV Charging Costs",
          "DEWA Approved Chargers",
          "EV Ownership in the UAE"
        ],
        "about" : {
          "@type" : "Thing",
          "name"  : "EV Charging Solutions in the UAE",
          "description" : "A comprehensive guide to every EV charging option available in the UAE, including mobile charging, home charger installation, public charging stations, charger selection, charging costs, and emergency roadside EV charging."
        },
        "isPartOf" : {
          "@type" : "WebPage",
          "name"  : "EV Charging Options in the UAE | PlusX Electric",
          "url"   : `${BASE_URL}/ev-charging-options-uae`
        }
      }
    ]
  }
];
