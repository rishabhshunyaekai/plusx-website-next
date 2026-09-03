import RSADesktop from "@/assets/images/homepage/blogs/banners/plusx_electric_ev_rsa_desktop_banner.webp";
import RSAMobile  from "@/assets/images/homepage/blogs/banners/plusx_electric_ev_rsa_mobile_banner.webp";
import blogImage  from '@/assets/images/homepage/blogs/plusx_electric_ev_battery_die.webp';

const BASE_URL          = process.env.NEXT_PUBLIC_BASE_URL;
export const batteryDie = [
  {
    type: "paragraph",
    text: `Running out of charge happens to experienced EV drivers too. You misjudge the traffic on Sheikh Zayed Road, the air conditioning works harder than you expected, and the range estimate that looked comfortable at the start of the trip suddenly doesn't. Whether you're parked at a mall or halfway through your commute, that low-battery warning can turn into a full stop.`,
  },
  {
    type: "paragraph",
    text: `This guide walks through exactly what to do — how to work out whether it's really the battery, how far you can still drive once the display reads zero, what your recovery options are, and why towing an EV the wrong way can cost you far more than the charge you're missing. If you're stranded right now and need <a href="/ev-breakdown-assistance" target="_blank" rel="noopener noreferrer">EV breakdown assistance in Dubai</a>, skip to Step 4.`,
  },
  {
    type: "heading",
    level: 2,
    text: "Step 1: Pull Over Safely and Assess Your Surroundings"
  },
  {
    type: "paragraph",
    text: "Don't panic, and don't wait for the car to decide where it stops"
  },
  {
    type: "paragraph",
    text: "If the vehicle is still moving, pull over to the hard shoulder or the nearest safe area while you still have power. An EV that stops in a live lane is far harder to recover than one that's already parked."
  },
  {
    type: "paragraph",
    text: "Switch on your hazard lights immediately."
  },
  {
    type: "paragraph",
    text: "Stay in the vehicle if you're on a highway. Getting out on the shoulder of a Dubai motorway is more dangerous than sitting inside with your hazards on."
  },
  {
    type: "paragraph",
    text: "Note your exact location — nearest exit number, landmark, or building — or drop a map pin. Recovery time depends almost entirely on how precisely you can describe where you are."
  },
  {
    type: "paragraph",
    text: "Check the dashboard before assuming it's the battery. A drained pack is only one of several reasons an EV stops."
  },
  {
    type: "heading",
    level: 2,
    text: "Step 2: Work Out Whether It's the 12V Battery or the Main Pack"
  },
  {
    type: "paragraph",
    text: "This is the step most drivers skip, and it changes what help you actually need. Every electric car has two batteries: the high-voltage pack that drives the wheels, and a small 12V battery that powers the electronics and, crucially, wakes the car up. A dead 12V battery leaves you stranded even with a nearly full main pack."
  },
  {
    type: "ctaButton",
    action: "portablePage",
    alt: "On Demand Doorstep EV Chargering in Dubai",
    desktop: RSADesktop,
    mobile: RSAMobile
  },
  {
    type: "heading",
    level: 3,
    text: "Signs the main battery is empty:"
  },
  {
    type: "ul",
    items: [
      `The car powers on normally and the dash lights up`,
      `You saw a range countdown to zero, then warnings about reduced power`,
      `The vehicle enters a limited-power or "turtle" mode before stopping`,
      `Climate control and infotainment still work`,
    ],
  },
  {
    type: "heading",
    level: 3,
    text: "Signs the 12V battery is the problem:"
  },
  {
    type: "ul",
    items: [
      `Nothing happens at all — no dash, no lights, no chime`,
      `The key fob won't unlock the doors`,
      `The charge port flap won't release`,
      `The car was working fine yesterday with plenty of charge showing`,
      `The car was working fine yesterday with plenty of charge showing`,
    ],
    footerText: `If it's the 12V, no amount of charging the main pack will help until the 12V is jump-started. A recovery service that only brings a charger will arrive and be unable to do anything — worth mentioning when you call.`,
  },
  {
    type: "heading",
    level: 2,
    text: "Step 3: How Far Can You Actually Drive at 0%?"
  },
  {
    type: "paragraph",
    text: "Most EVs don't stop dead the moment the display reads zero. Manufacturers build in a small hidden reserve, and the car will usually enter a reduced-power mode that limits acceleration and top speed to stretch what's left. In practice that reserve is short — think a few kilometres at low speed, not a comfortable run across town — and it varies by model, temperature, and how you drive it."
  },
  {
    headerText: `If you're in that window:`,
    type: "ul",
    items: [
      `Reduce speed. Steady, slow driving uses far less energy than accelerating and braking.`,
      `Switch off the air conditioning if it's safe to do so. In Dubai heat this is genuinely uncomfortable, but climate control is one of the largest non-drivetrain loads on the battery.`,
      `Head for the nearest safe stopping point, not the nearest charger, unless the charger is clearly within reach.`,
      `Don't try to squeeze the last kilometre out of it on a busy road. Stopping voluntarily in a safe spot is always better than stopping involuntarily in traffic.`,
    ],
  },
  {
    type: "heading",
    level: 2,
    text: "Step 4: Find a Charger — or Bring the Charge to You"
  },
  {
    type: "paragraph",
    text: "Before arranging recovery, check what's nearby."
  },
  {
    type: "paragraph",
    text: `Apps like PlusX Electric, DEWA and Google Maps will show the <a href="/public-ev-charging-stations" target="_blank" rel="noopener noreferrer">nearest EV charging station</a>.`
  },
  {
    type: "paragraph",
    text: `Then ask two honest questions: can I actually reach it without stopping midway, and is it available and working? Occupied bays, offline units and queues at peak times are among the <a href="/ev-charging-problems-dubai" target="_blank" rel="noopener noreferrer">most common EV charging problems in Dubai</a>, so don't assume a listed charger is a working one.`
  },
  {
    type: "paragraph",
    text: `If the answer to either is no, the alternative is on-site charging. A mobile unit comes to wherever you are and puts enough energy into the vehicle for you to drive to a charger or get home — no tow truck, no drivetrain risk, and you don't leave your car behind. This is what <a href="/ev-breakdown-assistance" target="_blank" rel="noopener noreferrer">EV roadside assistance</a> for electric vehicles should look like, and it's usually faster than arranging recovery.`
  },
  {
    type: "paragraph",
    text: "If the 12V battery is the culprit, you need a jump-start rather than a charge — make sure whoever you call can do both."
  },
  {
    type: "heading",
    level: 2,
    text: "Step 5: Consider Towing Only if Recovery Isn't Possible"
  },
  {
    headerText: `Towing is a fallback, not a first choice. If you're in a very remote area or on-site charging isn't available, your options are:`,
    type: "ul",
    items: [
      `Your EV brand's official roadside assistance`,
      `Your insurance provider's emergency service`,
      `Dubai Police on 901 for non-urgent recovery`,
    ],
    footerText: `<strong>Critical:</strong> an electric vehicle must be transported on a flatbed. Wheel-lift towing — where two wheels stay on the road — turns the motor into a generator and can damage the drivetrain and power electronics. The repair bill dwarfs anything you'd have spent on a charge. Many general recovery operators still default to wheel lifts, so say it explicitly when you book: flatbed only.`,
  },
  {
    type: "paragraph",
    text: "Also check whether your car has a specific tow mode or transport procedure in the owner's manual. Several EVs require the vehicle to be woken and put into a neutral transport state before it can be loaded safely."
  },
  {
    type: "heading",
    level: 3,
    text: "What Not to Do"
  },
  {
    type: "ul",
    items: [
      `<strong>Don't push the car :</strong> Most EVs won't release the parking brake or shift out of park without power, and pushing a heavy vehicle in traffic is dangerous.`,
      `<strong>Don't accept a wheel-lift tow:</strong> See above.`,
      `<strong>Don't try to "reset" the battery:</strong> There's no reset that restores charge — the pack needs energy put back into it.`,
      `<strong>Don't stand behind the vehicle on a motorway shoulder</strong> while waiting.`,
      `<strong>Don't repeatedly run the pack to zero:</strong> Deep discharges are hard on lithium-ion cells over time, and if the pack sits fully drained for a long period the damage can be permanent.`,
    ],
  },
  {
    type: "heading",
    level: 3,
    text: "Why Dubai Makes This More Likely"
  },
  {
    type: "paragraph",
    text: "Range estimates are generally calculated under mild conditions, and Dubai isn't mild for much of the year. Sustained high ambient temperatures mean the air conditioning runs almost constantly, and the battery's own thermal management system draws power to keep the pack cool. Both come out of the same battery."
  },
  {
    type: "paragraph",
    text: "Highway speeds compound it — energy use rises sharply with speed, so a run out to Abu Dhabi or Hatta consumes range faster per kilometre than city driving. The practical effect is that a summer estimate of 60 km left may not behave like 60 km. Treat the last 20% as a buffer, not as usable range."
  },
  {
    type: "heading",
    level: 3,
    text: "How to Avoid Getting Stuck Again"
  },
  {
    type: "ul",
    items: [
      `<strong>Don't go below 20%, especially in summer:</strong> It protects long-term battery health and leaves you a real margin when traffic or heat eats into your estimate.`,
      `<strong>Park in shade where you can:</strong> A cooler cabin means less energy spent pulling the temperature back down when you set off.`,
      `<strong>Set a charging reminder:</strong> Most EVs will alert you at a low state of charge, but a habit-based reminder — same time each evening — is more reliable than reacting to a warning.`,
      `<strong>Plan long trips around confirmed chargers:</strong> Check availability before you leave, and have a second option in mind. Chargers do go offline.`,
      `<strong>If you live in a villa, a home charger removes the problem entirely:</strong> You leave every morning full, and low-battery situations stop happening. In the UAE, a home installation needs a DEWA-approved contractor to carry out the work.`,
    ],
    footerText: `Running the pack flat is only one of the habits that shortens battery life and leaves drivers stranded. Our service team has written up the <a href="/ev-battery-mistakes-dubai" target="_blank" rel="noopener noreferrer">9 EV battery mistakes we see every week in Dubai</a> — worth a read if you want to avoid a repeat.`
  },
  {
    type: "heading",
    level: 2,
    text: "Conclusion"
  },
  {
    type: "paragraph",
    text: `A drained EV battery is an inconvenience, not a crisis — as long as you stop safely, work out which battery has failed, and avoid the one mistake that turns a flat pack into a repair bill: the wrong kind of tow. Most EV breakdowns in Dubai can be resolved where the car is standing, without recovery at all. If you're stranded and need help now, PlusX Electric provides <a href="/ev-breakdown-assistance" target="_blank" rel="noopener noreferrer">emergency EV charging and jump-start support across Dubai</a>, 24/7.`
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
          "name"  : "Does running an EV battery to 0% damage it?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "A single full discharge is unlikely to cause lasting harm, but repeated deep discharges accelerate battery degradation. The bigger risk is leaving the pack fully drained for an extended period, which can damage cells permanently. Recharge as soon as you reasonably can."
          }
        },
        {
          "@type" : "Question",
          "name"  : "How far can an EV go after it hits 0%?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "Most Ev's include a small hidden reserve, and the car will drop into a reduced-power mode to extend it. It's typically short — a few kilometres at low speed — and it varies by model, temperature and driving style. Treat it as enough to reach a safe stopping point, not enough to reach a charger across town."
          }
        },
        {
          "@type" : "Question",
          "name"  : "Is it my 12V battery or the main battery?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "If the car is completely unresponsive — no dashboard, no lights, fob won't unlock the doors — it's almost certainly the 12V. If the car powers on normally but won't move or warned you about range before stopping, it's the main pack. The two need different fixes: a jump-start versus a charge."
          }
        },
        {
          "@type" : "Question",
          "name"  : "Can you charge an electric car with a portable generator?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "Technically possible with a suitable generator and the right cable, but it's slow, inefficient and not recommended. Generator power quality varies, and some onboard chargers will reject an unstable supply outright. A purpose-built mobile charging unit is a far better option."
          }
        },
        {
          "@type" : "Question",
          "name"  : "Can I push my electric car to the side of the road?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "Usually not. Without power, most EVs keep the parking brake engaged and won't shift into neutral, and many need a specific procedure to release. Combined with the weight of the vehicle, pushing is both impractical and unsafe. Move the car while you still have charge instead."
          }
        },
        {
          "@type" : "Question",
          "name"  : "Can an EV be towed like a normal car?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "No. Electric vehicles should be transported on a flatbed. Wheel-lift towing spins the drive wheels while the motor is connected, which can damage the drivetrain and power electronics. Specify flatbed when you book recovery."
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
        "headline"    : "What to Do When Your EV Battery Dies in Dubai: A Step-by-Step Guide",
        "name"        : "What to Do When Your EV Battery Dies in Dubai: A Step-by-Step Guide | PlusX Electric",
        "description" : "Out of charge? Get quick EV emergency service in Dubai with PlusX Electric. We deliver on-demand roadside charging to your location—no towing, no stress.",
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

        "datePublished"    : "2026-05-19",
        "dateModified"     : "2026-05-19",

        "mainEntityOfPage" : {
          "@type" : "WebPage",
          "@id"   : `${BASE_URL}/what-to-do-when-your-ev-battery-dies-in-dubai`
        },

        "inLanguage" : "en",

        "keywords" : [
          "EV battery dead Dubai",
          "EV emergency charging Dubai",
          "what to do EV battery dies",
          "roadside EV charging Dubai",
          "mobile EV charging Dubai",
          "EV breakdown assistance Dubai",
          "PlusX Electric emergency charging",
          "doorstep EV charging Dubai",
          "EV stranded Dubai help",
          "EV towing alternatives Dubai"
        ],

        "articleSection" : [
          "EV Emergency Guide",
          "Battery Breakdown Assistance",
          "Roadside EV Charging",
          "Dubai EV Support Services",
          "On-Demand Charging Solutions",
          "EV Safety Tips",
          "Emergency Vehicle Assistance",
          "Mobile EV Charging UAE"
        ],

        "about" : {
          "@type" : "Thing",
          "name"  : "EV Battery Failure and Emergency Charging Solutions in Dubai",
          "description" : "Step-by-step guide explaining what to do when an EV battery dies in Dubai and how PlusX provides emergency charging support."
        },

        "isPartOf" : {
          "@type" : "WebPage",
          "name"  : "EV Emergency Charging Guide Dubai | PlusX Electric",
          "url"   : `${BASE_URL}/what-to-do-when-your-ev-battery-dies-in-dubai`
        }
      }
    ]
  }
];
