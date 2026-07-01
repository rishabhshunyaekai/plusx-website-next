import CIDesktop  from "@/assets/images/homepage/blogs/banners/plusx_electric_charger_installation_desktop_banner.webp";
import CIMobile   from "@/assets/images/homepage/blogs/banners/plusx_electric_charger_installation_mobile_banner.webp";
import blogImage  from "@/assets/images/homepage/blogs/plusx_electric_five_common_mistakes.webp";

const BASE_URL                  = process.env.NEXT_PUBLIC_BASE_URL;
export const fiveCommonMistakes = [
  {
    type: "paragraph",
    text: `There's a moment we have seen hundreds of times. We finish setting up a new home charger, plug it into the customer's new EV, and check how fast it is really charging. The owner leans in, hoping to see a big number. Then their face drops. The charger box says 22kW. But the car is only taking 7.`,
  },
  {
    type: "paragraph",
    text: `"Is it broken?" they ask.`,
  },
  {
    type: "paragraph",
    text: `It's not. And telling them why has become one of the most common talks we have on the job.`,
  },
  {
    type: "paragraph",
    text: `After 450+ installs across Dubai, Abu Dhabi and the rest of the UAE — in villas, flats, townhouses, and a few homes where the power point was a long way from the car — we don't see these as one-off problems anymore. They are patterns. The same few mistakes come up in every emirate. And almost all of them happen before we arrive, usually in a car showroom, decided by someone whose job was to sell a car, not to think about how your home is wired.`,
  },
  {
    type: "paragraph",
    text: `These are not tips we copied from somewhere. They are the things we see again and again in real homes. Here is what we have learned — and what we wish every EV owner knew before they picked a charger.`,
  },
  {
    type: "heading",
    level: 2,
    text: "What size EV charger do I need — is a 22kW charger better than 7kW?"
  },
  {
    type: "paragraph",
    text: "A bigger charger only charges faster if your car can take the extra power. Most cars can't. The real limit is inside your car, in a part called the onboard charger. That is the number that sets your home charging speed — not the number on the box on the wall."
  },
  {
    type: "paragraph",
    text: `Here is what is really happening in that "is it broken?" moment. When you charge at home, you are using AC power, and your car has a small charger built inside it. This built-in charger takes the AC power from your home and changes it into DC power to feed the battery. (If you want the full picture, here is <a href="/ac-vs-dc-ev-chargers" target='_blank'>the difference between AC and DC EV chargers</a>.) This built-in charger has a top speed. If that top speed is 7kW, then 7kW is all the car will take at home — even if the wall charger says 22kW.`
  },
  {
    type: "paragraph",
    text: `We see this all the time. A showroom gives the customer a 22kW charger, often with the cost of a three-phase connection they did not need. The customer pays extra for power the car can never use. The charger is not faulty. It was just never the right one for that car.`
  },
  {
    type: "paragraph",
    text: `The sad part is how easy this is to avoid. Every EV's top home charging speed is written in the car manual or online — just search your car model and the words "max AC charging rate." Many popular EVs only take 7kW or 11kW. Only a few can take the full 22kW. So the simple advice we give on almost every visit is this: find your car's number first, then buy a charger to match it. A good 7kW charger on a 7kW car is not a downgrade. It is just the right choice.`
  },
  {
    type: "heading",
    level: 2,
    text: `Can my home's electricity supply handle an EV charger?`,
  },
  {
    type: "paragraph",
    text: "Often it can — but only if someone checks how much spare power your home has first. A charger does not run on its own line. It pulls power from the same supply as the rest of your home. Skip this check, and the charger can trip your power at the worst time."
  },
  {
    type: "paragraph",
    text: `This is the UAE problem, and it is the one people forget most. We have been called back to homes where everything was fine in winter — then summer came. The AC runs in every room, the water heaters are on, someone is cooking, and the EV is set to charge at night when the home is already using a lot of power. Then the main switch trips at 2 a.m., and the car is barely charged by morning.`
  },
  {
    type: "paragraph",
    text: `The thing is, in a hot place your spare power is not a fixed number. It gets smaller at the exact time your AC is working hardest. That is why we do not guess. Before we suggest a charger, we check what your main board is already carrying and how much is really free. We also check if your home is single-phase or three-phase. (A 7kW charger is fine on single-phase. 11kW and 22kW need three-phase.)`
  },
  {
    type: "paragraph",
    text: `And when there is not much spare power, the answer is usually not "upgrade your whole supply." More often it is load sharing — where the charger slows down on its own when the house is busy, and speeds back up when things go quiet. The car still charges fully overnight, and the main switch never gets pushed too hard. (This is exactly the kind of thing we check on a site visit as part of our <a href="/ev-charger-installation-uae" target='_blank'>EV charger installation across the UAE</a>.)`
  },
  {
    type: "ctaButton",
    action: "chargerInstallationPage",
    alt: "PlusX Electric technician installing a home EV charger on a villa wall in the UAE",
    desktop: CIDesktop,
    mobile: CIMobile
  },
  // {
  //   headerText: `<b>Key Characteristics</b>`,
  //   type: "ul",
  //   items: [
  //     `External conversion (faster charging)`,
  //     `High power output`,
  //     `Expensive installation`,
  //     `Requires special infrastructure`,
  //   ],
  //   footerText: `DC chargers usually start from 50 kW and can go much higher depending on the setup.`
  // },
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
    text: `What cable does an EV charger need — and what size?`
  },
  {
    type: "paragraph",
    text: "The cable must match both the charger's power and how far it has to travel — and where it is out in the open, it should be armoured (a stronger, protected cable). This part of the job is hidden inside a wall or under the ground, which is why it is the easiest place to cut a corner, and the worst place to do it."
  },
  {
    type: "paragraph",
    text: `A lot of people want to save money and ask for the cheapest cable that will "do the job." But cable is not one-size. Two things change what you need. First is the charger — a stronger charger needs a thicker cable (we measure thickness in mm²) so it can carry the power safely without getting hot. Second is the one almost no one thinks about: distance.`
  },
  {
    type: "paragraph",
    text: `In many UAE villas, the main power board is on one side of the house and the parking is on the other — sometimes a long way across the home or out into the garden. Over that long run, a thin cable loses power along the way. The car still charges, but slower, and you pay for that loss on every single charge for as long as the charger is there. The fix is simple once you know it: the longer the run, the thicker the cable.`
  },
  {
    type: "paragraph",
    text: `And for any part that is buried or out in the open, we use armoured cable. Not to sell you more — but because a damaged cable in a wall or the ground is a real danger. The money you "save" on a thin, cheap cable usually costs more later in lost power and risk.`
  },
  // {
  //   type: "table",
  //   columns: [ "Feature", "AC Charger", "DC Charger" ],
  //   rows: [
  //     [
  //       "Connector Type",
  //       "Type 2",
  //       "CCS2 (common in UAE)"
  //     ],
  //     [
  //       "Charging Speed",
  //       "3.7 kW – 11 kW",
  //       "50 kW+"
  //     ],
  //     [
  //       "Charging Time",
  //       "Several hours (overnight)",
  //       "20–60 mins for top-up"
  //     ],
  //     [
  //       "Installation Cost",
  //       "~AED 3,000 – AED 7,000",
  //       "AED 50,000+ (commercial setups)"
  //     ],
  //     [
  //       "Power Requirement",
  //       "Single-phase or three-phase",
  //       "Heavy electrical infrastructure"
  //     ],
  //     [
  //       "Best Use",
  //       "Home, office, daily charging",
  //       "Highways, commercial, fleets"
  //     ]
  //   ]
  // },
  {
    type: "heading",
    level: 2,
    text: `Do you need an isolator switch for an EV charger?`
  },
  {
    type: "paragraph",
    text: "Yes — and we fit one on every job. An isolator is a switch that lets you cut all power to the charger straight away. It also protects the charger and the wiring behind it from faults and power surges."
  },
  {
    type: "paragraph",
    text: `We know it matters because we have seen what happens without one. We get called to chargers fitted by other people where there is no safe way to cut the power to work on the unit. Or where a power surge killed a charger that had nothing to protect it. An isolator is a small, cheap part — and it is usually the first thing missing when a job was done as cheaply as possible.`
  },
  {
    type: "paragraph",
    text: `Think of it as the safety switch for your most costly piece of charging gear. You hope you never have to use it in a hurry — but the day you do, you will be glad it is there.`
  },
  {
    type: "heading",
    level: 2,
    text: `Where should you install an EV charger — and can it go outside?`
  },
  {
    type: "paragraph",
    text: `Yes, it can go outside here — but only if it is kept safe from sun, rain and dust, and rated at least IP55 (a seal that keeps out dust and water). Where you put the charger is where we see good chargers wear out too soon, and the UAE weather is very hard on them.`
  },
  {
    type: "paragraph",
    text: `We have come to homes where the charger was put on a bare wall facing the afternoon sun all day. By peak summer, a unit like that gets very hot. And a hot charger slows itself down on purpose to protect itself — so the owner gets slower charging in the hottest months, just when they did not expect it. The heat also shortens the charger's life. Then there is the dust: blown sand and sandstorms get into anything that is not properly sealed.`
  },
  {
    type: "paragraph",
    text: `So when a charger has to go outside — and many do — we always ask for two things. It needs real cover, like a small box or shade that keeps the sun and rain off it. And it needs a sealed unit rated IP55 or higher, which is made to keep dust out and handle splashing water. Put it in the right spot, give it shade and a good rating, and the charger quietly does its job for years. Get it wrong, and you will be replacing a unit that should have lasted much longer.`
  },
  {
    type: "heading",
    level: 2,
    text: `What it really comes down to`
  },
  {
    type: "paragraph",
    text: "Look at all five, and there is one thing running through them. Every mistake happens when a charger is picked the wrong way — biggest number, lowest price, fastest sale — instead of for your car, your home, your cable run, and your spot on the wall."
  },
  {
    type: "paragraph",
    text: "That is the difference 450 installs makes. We are not here to sell you the most powerful box on the shelf. We would rather spend ten minutes finding out what your car can actually take, how much power your home can spare in August, how far the cable has to go, and where the unit can sit out of the sun — and then build the install around those answers."
  },
  {
    type: "paragraph",
    text: "If you are planning a home EV charger anywhere in Dubai or across the UAE, have that chat before you pick a unit. It is a short one, and it saves you from every mistake on this list — including paying for power your car was never going to use."
  },
  {
    type: "paragraph",
    text: `You can see how we work on our <a href="/ev-charger-installation-uae" target='_blank'>EV charger installation page</a>, or book a free consultation with our team on +971 54 279 6424. We will look at your car, your home and your parking, and tell you honestly what you really need — no oversized box, and no surprises on the bill.`
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
          "name"  : "Does a 22kW charger charge my car faster than a 7kW charger?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "Only if your car can take 22kW. Many EVs only take 7kW or 11kW, so a 22kW charger will not charge them any faster — it just costs more."
          }
        },
        {
          "@type" : "Question",
          "name"  : "How do I find my car's home charging speed?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : `Check your car manual, or search your car model and the words "max AC charging rate" online. It is usually 7kW, 11kW or 22kW.`
          }
        },
        {
          "@type" : "Question",
          "name"  : "Do I need three-phase power for a home charger in the UAE?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "Only for 11kW and 22kW chargers. A 7kW charger works on a normal single-phase supply, which most homes already have."
          }
        },
        {
          "@type" : "Question",
          "name"  : "Why does my charger trip the power at night?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "Usually because your home runs out of spare power once the AC, water heaters and other things are on with the charger. A power check, and often load sharing, fixes it."
          }
        },
        {
          "@type" : "Question",
          "name"  : "What size cable does a home EV charger need?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "It depends on the charger's power and how far the cable runs — a longer run needs a thicker cable so it does not lose power, and any open run should be armoured. A pro will work this out for your home."
          }
        },
        {
          "@type" : "Question",
          "name"  : "What IP rating should an outdoor EV charger have here?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "At least IP55, which keeps out dust and splashing water — important with UAE heat, sand and the odd rain. Keep it shaded and out of direct sun too."
          }
        }
      ]
    }
  },
  {
    type: "schema",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Article",

        "headline": "5 Common Mistakes People Make When Installing an EV Charger: What We've Seen After 450 Installations",
        "name": "5 EV Charger Installation Mistakes to Avoid | PlusX Electric",
        "description": "After 450+ EV charger installations across the UAE, discover the five most common installation mistakes—including choosing the wrong charger size, inadequate electrical capacity, incorrect cabling, missing safety isolation, and poor charger placement—and learn how to avoid them.",
        "image": `${BASE_URL}${blogImage.src}`,

        "author": {
          "@type": "Person",
          "name": "Admin",
          "url": `${BASE_URL}/`
        },

        "publisher": {
          "@type": "Organization",
          "name": "PlusX Electric",
          "url": `${BASE_URL}/`,
          "logo": {
            "@type": "ImageObject",
            "url": "https://plusxelectric.com/logo-icon.svg"
          }
        },

        "datePublished": "2026-06-29",
        "dateModified": "2026-06-29",

        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `${BASE_URL}/ev-charger-installation-mistakes-uae`
        },

        "inLanguage": "en",

        "keywords": [
          "EV charger installation UAE",
          "home EV charger installation Dubai",
          "EV charger installation mistakes",
          "7kW vs 22kW EV charger",
          "EV charger cable size UAE",
          "single phase vs three phase charger",
          "EV charger isolator switch",
          "outdoor EV charger installation",
          "PlusX Electric charger installation",
          "EV charging setup UAE",
          "home charging guide UAE",
          "EV charger electrical requirements"
        ],

        "articleSection": [
          "Home EV Charger Installation",
          "EV Charger Buying Guide",
          "Electrical Safety",
          "Residential EV Charging",
          "Charging Infrastructure",
          "Installation Best Practices",
          "EV Charging Technology",
          "UAE EV Ownership"
        ],

        "about": {
          "@type": "Thing",
          "name": "Common EV Charger Installation Mistakes in the UAE",
          "description": "A practical guide based on more than 450 EV charger installations explaining how to choose the correct charger, assess home electrical capacity, select proper cabling, ensure electrical safety, and install chargers in suitable outdoor locations."
        },

        "isPartOf": {
          "@type": "WebPage",
          "name": "5 EV Charger Installation Mistakes to Avoid | PlusX Electric",
          "url": `${BASE_URL}/ev-charger-installation-mistakes-uae`
        }
      }
    ]
  }
];
