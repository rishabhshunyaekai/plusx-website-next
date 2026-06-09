import portableDesktop  from "@/assets/images/homepage/blogs/banners/plusx_electric_portable_pod_desktop_banner.webp";
import portableMobile   from "@/assets/images/homepage/blogs/banners/plusx_electric_portable_pod_mobile_banner.webp";
import CIDesktop        from "@/assets/images/homepage/blogs/banners/plusx_electric_charger_installation_desktop_banner.webp";
import CIMobile         from "@/assets/images/homepage/blogs/banners/plusx_electric_charger_installation_mobile_banner.webp";
import blogImage        from "@/assets/images/homepage/blogs/plusx_electric_ev_battery_mistakes_in_dubai.webp";

const BASE_URL               = process.env.NEXT_PUBLIC_BASE_URL;
export const batteryMistakes = [
  {
    type: "paragraph",
    text: `The most common EV battery mistakes we see in Dubai are neglecting the 12V battery health check, charging to 100% daily, relying on fast charging for everyday use, driving below 10% charge, leaving the car parked idle for 30–60 days, over-using climate features while the car is unplugged, ignoring BMS and TPMS warnings, using incorrect chargers or loose sockets, and parking in direct heat. Fixing these habits can roughly halve your battery's annual capacity loss.`,
  },
  {
    type: "paragraph",
    text: `At PlusX Electric, our team has serviced more than 6,800 electric vehicles across Dubai. Teslas, BYDs, Polestars, Mercedes EQs, and almost every other EV on UAE roads. That gives us something most battery guides don't have: a pattern. The same preventable problems arrive at our workshop week after week, and most of them have nothing to do with the battery technology itself. They come from habits.`,
  },
  {
    type: "paragraph",
    text: `Here are the nine mistakes we see most often, why each one matters in Dubai's climate specifically, and what to do instead.`,
  },
  {
    type: "heading",
    level: 2,
    text: "Nobody checks the 12V battery until the car won't start"
  },
  {
    type: "paragraph",
    text: `This is the single most common surprise for EV owners who come to us. Your EV has two batteries: the big high-voltage pack that drives the wheels, and a small 12V battery that powers the computers, screens, locks, and the contactors that wake the main pack up. When the 12V dies, the car is bricked, even with 80% charge sitting in the main battery.`
  },
  {
    type: "paragraph",
    text: `Dubai heat is brutal on 12V batteries; they often fail in 2–3 years here versus 4–5 in mild climates, and they rarely give much warning. We recommend having the 12V tested at every service visit, and immediately if you notice slow screen boot-ups, flickering electronics, or unusual error messages on startup.`
  },
  {
    type: "heading",
    level: 2,
    text: `Charging to 100% every day instead of 20–80%`,
  },
  {
    type: "paragraph",
    text: "In our workshop, around 15 out of every 20 drivers , roughly three in four — charge their EV to 100% every night, usually without realising it harms battery health."
  },
  {
    type: "paragraph",
    text: "That single habit drives a large share of the heavy degradation we measure: plugging in every night and charging to full. Sitting at 100% charge accelerates the chemical ageing inside lithium-ion cells — and in a car that then spends the day on a 45°C parking lot, that ageing runs even faster. Real-world fleet data backs up what we see in the workshop: batteries kept habitually near full or near empty degrade significantly faster than those cycled in the middle of their range."
  },
  {
    type: "paragraph",
    text: "The fix is simple. Set your daily charge limit to 80% in the car or app, and only charge to 100% right before a long trip , timed to finish as you leave, not hours earlier. (Exception: LFP-battery EVs such as many BYD and Tesla Standard Range models are designed to take a weekly 100% charge — follow your manual.)"
  },
  {
    type: "heading",
    level: 2,
    text: `Daily fast charging as the default`,
  },
  {
    type: "paragraph",
    text: `<a href="/ev-charger-installation-uae/ac-dc-ev-chargers" target="__blank">DC fast charging</a> is built for road trips, not routine. Among the EVs we service, the vehicles with the most measurable capacity loss are consistently the ones that fast-charge several times a week taxis, ride-hailing cars, and owners without home charging. Geotab's 2026 study of 22,700 EVs found the same thing at scale: heavy DC fast-charging users degraded at up to double the rate of drivers who mostly charge on AC.`
  },
  {
    type: "paragraph",
    text: `Fast charging generates heat inside an already heat-soaked pack — in a Dubai summer you're stacking thermal stress on thermal stress. Keep fast charging under roughly one session in ten, and do your routine charging on home or office AC power overnight.`
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
    text: `Driving below 10% and gambling on reaching the destination`,
  },
  {
    type: "paragraph",
    text: `We see this constantly: drivers running the battery to 5%, 3%, even 1% because the navigation says they'll just make it. Deep discharges stress the cells, and repeatedly parking or charging from near-empty accelerates wear at the bottom of the battery's range. It also leaves zero margin for Dubai realities, a Sheikh Zayed Road diversion, a queue at the charger, or summer AC load eating the last estimated kilometres faster than predicted.`
  },
  {
    type: "paragraph",
    text: "Treat 10–20% as your practical empty. Below that, you're not saving time; you're borrowing against your battery and your schedule."
  },
  {
    type: "heading",
    level: 2,
    text: `Parking the car idle for 30–60 days`,
  },
  {
    type: "paragraph",
    text: "Dubai people out in summer, and every September we get the same calls: residents return from two months abroad to an EV that won't wake up. Long idle parking is a double hit. The 12V battery drains and weakens (see mistake #1), and if the main pack was left near full or near empty, it spent two months ageing in the worst possible state in the hottest months of the year."
  },
  {
    type: "paragraph",
    text: `Before extended travel: charge to around 50–60%, park in covered or basement parking, switch off non-essential connectivity features (sentry/surveillance modes are the biggest silent drains), and if possible leave the car plugged in on a home charger with a sensible limit, or arrange for someone to check it monthly. If the car will sit longer than a month, a 12V maintainer or a mid-stay checkup is cheap insurance.`
  },
  {
    type: "heading",
    level: 2,
    text: `<a href="/ev-charging-problems-dubai" target="__blank">Common EV Charging Problems in Dubai and How to Avoid Them</a>`,
  },
  {
    type: "heading",
    level: 2,
    text: `Climate comfort features quietly draining the battery`
  },
  {
    type: "paragraph",
    text: "Features like Tesla's Cabin Overheat Protection and keep-climate modes are wonderful in the UAE — the AC switches on automatically when the parked cabin passes your set temperature, so the car is cool when you return. But owners are often shocked by how much charge these features consume when the car sits unplugged all day in direct sun. We’ve seen this first-hand: in 2 to 3 out of every 10 EVs we service, this comfort feature alone has drained the battery over a workday, leaving owners to fast-charge from a low state — combining three of the mistakes on this list at once."
  },
  {
    type: "paragraph",
    text: "Our advice isn't to switch these features off entirely; in extreme heat, some thermal management protects the pack. Instead: use moderate set temperatures rather than the coldest setting, prefer covered parking so the feature barely needs to run, rely on pre-conditioning while plugged in before you drive, and be conscious that an unplugged car running its AC in the sun is spending your range."
  },
  {
    type: "heading",
    level: 2,
    text: `Ignoring BMS and TPMS warning lights`
  },
  {
    type: "paragraph",
    text: "EVs are excellent at telling you something is wrong early — and drivers are excellent at ignoring them. A Battery Management System (BMS) warning is never cosmetic: it can indicate cell-balance problems, cooling system faults, or sensor failures, all of which are far cheaper to address early than after the pack has been stressed for months. Even tyre pressure (TPMS) warnings matter more in an EV: under-inflated tyres in Dubai heat increase consumption, deepen discharge cycles, and create a safety risk at highway speed."
  },
  {
    type: "paragraph",
    text: "If a warning appears, get it diagnosed within days, not months. A proper EV diagnostic reads the individual cell data and catches problems while they're still small."
  },
  {
    type: "heading",
    level: 2,
    text: `Wrong chargers, cheap adapters, and loose sockets`
  },
  {
    type: "paragraph",
    text: `We regularly attend callouts for melted plugs, scorched wall sockets, and charging faults caused by non-certified chargers or worn household sockets feeding a <a href="/mobile-ev-charging-dubai" target="__blank">portable charging</a> cable for months. An EV draws sustained high current for hours — a loose or degraded socket heats up, damages the charging equipment, confuses the car's charging electronics, and at worst becomes a fire risk.`
  },
  {
    type: "paragraph",
    text: "Use a properly installed, certified home charger on a dedicated circuit (DEWA's regulations for home EV charging exist for good reason), inspect plugs occasionally for discoloration or heat, and avoid daisy-chained extension leads entirely. If your charging cable or port ever feels hot to the touch, stop and get it inspected."
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
    text: `Parking in direct heat when shade is available`
  },
  {
    type: "paragraph",
    text: `The quietest battery killer in Dubai is also the simplest: where the car spends its parked hours. A car on open asphalt in July absorbs heat for ten hours while its owner is at work; pack temperature rises, and calendar ageing accelerates — fastest of all if the car is also sitting at a high state of charge. Multiply that by 150+ hot days a year and the difference between a "shade car" and a "sun car" shows up clearly on battery health reports a few years later.`
  },
  {
    type: "paragraph",
    text: `Basement and covered parking first, always. If open parking is unavoidable, avoid leaving the car there at 100% charge, and let the car's battery protection features do their job.`
  },
  {
    type: "heading",
    level: 2,
    text: `The pattern behind all nine mistakes`
  },
  {
    type: "paragraph",
    text: `Notice what these have in common: none of them are about the battery technology failing. Modern EV packs sold in the UAE are liquid-cooled and engineered for hot climates, and fleet data shows average degradation of only around 2.3% per year. The cars are fine. The gap we see at PlusX is between drivers who treat the battery as a system that responds to habits — and drivers who find out the expensive way.`
  },
  {
    type: "paragraph",
    text: `A twice-yearly EV health check , high-voltage pack diagnostics, 12V test, cooling system, tyres, and charging equipment inspection — catches all nine of these issues before they cost you range or a <a href="/ev-breakdown-assistance" target="__blank">roadside breakdown</a>.`
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
          "name"  : "How often should the 12V battery be checked in Dubai?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "At minimum every service visit, and ideally every 6 months in the UAE climate. 12V batteries here commonly fail a year or two earlier than in mild climates, and a failed 12V immobilizes the car regardless of main battery charge."
          }
        },
        {
          "@type" : "Question",
          "name"  : "Is it OK to use Tesla Cabin Overheat Protection every day?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "Yes, but understand the trade: unplugged in direct sun, it can consume meaningful charge over a workday. Use moderate temperature settings, prefer shaded parking, and pre-condition while plugged in for the biggest comfort with the smallest battery cost."
          }
        },
        {
          "@type" : "Question",
          "name"  : "What charge level should I leave my EV at when travelling for the summer?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "Around 50–60%, parked in covered parking, with high-drain features like surveillance mode disabled. For absences over a month, leave it plugged in with a charge limit if possible, or arrange a mid-stay check."
          }
        },
        {
          "@type" : "Question",
          "name"  : "Does fast charging at public stations damage the battery?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "Occasional fast charging is fine and what the network is built for. Habitual fast charging — several sessions a week as your main method — measurably accelerates degradation, especially in summer heat. Keep it to roughly 10% of your charging."
          }
        },
        {
          "@type" : "Question",
          "name"  : "How do I know if my EV battery is actually degrading?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "Summer range drop is mostly temporary (AC load and heat). Real degradation is gradual — around 1–3% a year. A professional battery health report reads actual capacity and cell balance, and is worth getting before buying or selling any used EV in the UAE."
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
        "headline"    : "9 EV Battery Mistakes Dubai Drivers Make: Guide by PlusX Electric",
        "name"        : "9 EV Battery Mistakes Dubai Drivers Make | PlusX Electric",
        "description" : "After servicing 6,800+ electric vehicles across Dubai, these are the 9 EV battery-killing habits our team see most and how to fix each one before it costs you range.",
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

        "datePublished" : "2026-06-09",
        "dateModified"  : "2026-06-09",

        "mainEntityOfPage" : {
          "@type" : "WebPage",
          "@id"   : `${BASE_URL}/ev-battery-mistakes-dubai`
        },

        "inLanguage" : "en",

        "keywords" : [
          "EV battery maintenance Dubai",
          "EV battery degradation UAE",
          "electric vehicle battery health",
          "Dubai EV battery guide",
          "12V battery EV problems",
          "EV charging mistakes",
          "EV battery lifespan Dubai",
          "fast charging battery degradation",
          "Tesla battery maintenance UAE",
          "BYD battery care Dubai",
          "EV battery diagnostics",
          "EV service Dubai",
          "electric car battery tips",
          "EV ownership Dubai",
          "PlusX Electric battery inspection"
        ],

        "articleSection" : [
          "EV Battery Maintenance",
          "Battery Health & Diagnostics",
          "EV Charging Best Practices",
          "Electric Vehicle Ownership",
          "Dubai EV Guide",
          "Battery Degradation Prevention",
          "EV Service & Maintenance",
          "Electric Vehicle Education"
        ],

        "about" : {
          "@type" : "Thing",
          "name"  : "Common EV Battery Mistakes and Maintenance Best Practices",
          "description" : "A practical guide explaining the most common EV battery mistakes Dubai drivers make, including charging habits, 12V battery failures, fast charging, heat exposure, storage practices, and battery health management."
        },

        "isPartOf" : {
          "@type" : "WebPage",
          "name"  : "EV Battery Care & Maintenance Resources | PlusX Electric",
          "url"   : `${BASE_URL}/ev-battery-mistakes-dubai`
        }
      }
    ]
  }
];
