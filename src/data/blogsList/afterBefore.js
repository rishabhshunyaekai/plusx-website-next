import CIDesktop        from "@/assets/images/homepage/blogs/banners/plusx_electric_charger_installation_desktop_banner.webp";
import CIMobile         from "@/assets/images/homepage/blogs/banners/plusx_electric_charger_installation_mobile_banner.webp";
import blogImage        from "@/assets/images/homepage/blogs/plusx_electric_ev_charger_installation_checked.webp";

const BASE_URL              = process.env.NEXT_PUBLIC_BASE_URL;
export const homeEVChargers = [
  {
    type: "paragraph",
    text: `A <a href="/ev-charger-installation-uae" target="_blank">home EV charger installation</a> goes smoothly when you check three things at three stages. Before any drilling starts, make sure your home and power supply are ready. On installation day, make sure the work is properly tested. In the weeks after handover, make sure the charger behaves as it should. This checklist covers each stage for UAE villas and apartments, where summer heat and building approvals add a few extra checks.`,
  },
  {
    type: "heading",
    level: 2,
    text: "Before Installation: Get the Groundwork Right"
  },
  {
    headerText: `Most problems start before the installer arrives. Check these first:`,
    type: "ul",
    items: [
      `<strong>Your car's onboard charging limit:</strong> A charger can only deliver what the car accepts, so look up your model's AC charging rate first.`,
      `<strong>Your electricity supply:</strong> Find out whether your home is single-phase or three-phase. Check how much spare capacity your main distribution board has when the air conditioning is running at full summer load.`,
      `<strong>Parking spot and cable route:</strong> Measure the distance from the distribution board to where you park. If you want app control, check for Wi-Fi or mobile signal there.`,
      `<strong>A DEWA-approved installer:</strong> Villas don't need a separate DEWA permit, but the work must be done by a DEWA-approved contractor.`,
      `<strong>Permissions:</strong> Tenants and apartment residents need sign-off from the landlord or building management. Apartment owners can see <a href="/ev-charger-installation-dubai-apartments" target="_blank">how building NOC approval works for an apartment EV charger</a>, as the paperwork differs.`,
    ],
    footerText: `If you're still weighing up charger types, read up on the <a href="/ac-vs-dc-ev-chargers" target="_blank">difference between AC and DC chargers</a> for home use. Sizing, cabling and placement are where installs most often go wrong, so the <a href="/ev-charger-installation-mistakes-uae" target="_blank">most common EV charger installation mistakes</a> in UAE homes are worth knowing before your survey.`
  },
  {
    type: "paragraph",
    text: "A good site survey pulls all of this together. It should cover your parking spot, the cable distance from the distribution board and your electrical load, all before you get a quote."
  },
  {
    type: "paragraph",
    text: `Not sure your home is ready? PlusX Electric offers a free site survey across the UAE. WhatsApp +971 54 279 6424 to book one.`
  },
  {
    type: "heading",
    level: 2,
    text: `During Installation: What to Watch on the Day`,
  },
  {
    headerText: `A residential installation usually takes 1–3 days. Be there at the start and at handover.`,
    type: "ul",
    items: [
      `<strong>Match the hardware to the quote:</strong> Check the power rating and connector. A home unit such as an 11kW wall-mounted AC charger with a Type 2 connector should arrive exactly as specified.`,
      `<strong>Confirm a dedicated circuit:</strong> The charger should have its own circuit and protective device, not share an existing socket circuit.`,
      `<strong>Check mounting and cable routing:</strong> The charging cable should reach your car's port without stretching across a walkway or lying where it will be driven over.`,
      `<strong>Ask about test results:</strong> Earthing and protective devices should be tested before the charger goes live. Ask what was tested and whether it passed.`,
      `<strong>Do a live test charge:</strong> Before the team leaves, confirm the car charges at the expected rate and nothing trips.`,
    ],
    footerText: `If you can, run the test with the air conditioning on. That's closer to a real Dubai summer evening.`
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
    text: `After Installation: Handover and the First Few Weeks`,
  },
  {
    headerText: `Before signing off, make sure you have:`,
    type: "ul",
    items: [
      `The warranty terms for the charger and the workmanship`,
      `A record of the tests and commissioning`,
      `An invoice showing the charger model and rating`,
      `Your app login, if the charger connects to one`,
    ],
    footerText: `Every PlusX installation comes with warranty and first-year service cover, and your charger's status and service records are kept in one app.`
  },
  {
    headerText: `For the first month, watch for these signs:`,
    type: "ul",
    items: [
      `Breakers tripping during charging`,
      `Error lights on the charger`,
      `A plug or cable that feels unusually warm`,
      `Sessions that are slower than expected`,
    ],
    footerText: `If something seems off, the <a href="/ev-charging-problems-dubai" target="_blank">common EV charging problems Dubai drivers run into</a> can help you narrow down the cause.`
  },
  {
    headerText: `Longer term:`,
    type: "ul",
    items: [
      `Keep the connector capped and free of sand.`,
      `Check the cable for cuts or kinks.`,
      `Book a preventive maintenance visit before the first year ends.`,
    ],
  },
  {
    type: "heading",
    level: 2,
    text: `Quick Reference`,
  },
  {
    type: "table",
    columns: [ "Stage", "What to check", "Why it matters" ],
    rows: [
      [
        "Before",
        "Car's AC charging rate, phase, spare load, cable route, DEWA-approved installer, permissions",
        "Avoids an oversized charger or a supply that can't cope",
      ],
      [
        "During",
        "Hardware matches quote, dedicated circuit, test results, live charge",
        "Confirms the installation is safe and working",
      ],
      [
        "After",
        "Warranty, test record, app, first-month behaviour",
        "Keeps you covered and catches faults early",
      ]
    ]
  },
  {
    type: "paragraph",
    text: "Preparing properly, testing on the day and keeping records afterwards is what separates a smooth installation from a costly callback. Planning a home charger? Contact the PlusX Electric team to book a free site survey."
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
          "name"  : "What should I ask the installer before the site survey?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "Ask whether they're DEWA-approved, whether the quote covers the charger, cabling and protective devices, and what testing they do before handover."
          }
        },
        {
          "@type" : "Question",
          "name"  : "How do I know if my home's electrical supply can handle an EV charger?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "Check whether you're on single-phase or three-phase supply, and how much spare capacity your distribution board has with the air conditioning at full load. A site survey confirms both."
          }
        },
        {
          "@type" : "Question",
          "name"  : "Should I be at home during the installation?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "Be there at the start to confirm the charger's location, and at the end for the test charge and handover. You don't need to stay for the middle of the job."
          }
        },
        {
          "@type" : "Question",
          "name"  : "What documents should I keep after installation?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "Keep the warranty terms, the test or commissioning record and the invoice showing the charger model. You'll need them for warranty claims or future electrical work."
          }
        },
        {
          "@type" : "Question",
          "name"  : "What are the signs of a faulty home charger installation?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "Watch for breakers tripping during charging, a plug or cable that runs unusually warm, error lights, or sessions noticeably slower than your car's AC charging rate. Stop using the charger and have it checked."
          }
        },
        {
          "@type" : "Question",
          "name"  : "How often should a home EV charger be serviced?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "A yearly check is a sensible habit for most home chargers. It catches loose connections, worn cables and dust or sand build-up before they cause faults."
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
        "headline"    : "What to Check Before, During and After Installing a Home EV Charger",
        "name"        : "Home EV Charger Installation Checklist: Before, During, After | PlusX Electric",
        "description" : "A home EV charger checklist for UAE villas and apartments: what to check before the site survey, on installation day and in the weeks after handover.",
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
            "url"   : `${BASE_URL}/logo-icon.svg`,
          }
        },
        "mainEntityOfPage" : {
          "@type" : "WebPage",
          "@id"   : `${BASE_URL}/home-ev-charger-installation-checklist`
        },
        "url"             : `${BASE_URL}/home-ev-charger-installation-checklist`,
        "articleSection"  : [
          "Before Installation: Get the Groundwork Right",
          "During Installation: What to Watch on the Day",
          "After Installation: Handover and the First Few Weeks",
          "Quick Reference",
          "Frequently Asked Questions"
        ],
        "keywords" : [
          "home EV charger installation checklist",
          "EV charger installation UAE",
          "home EV charger installation Dubai",
          "EV charger installation for villas",
          "EV charger installation for apartments",
          "DEWA-approved EV charger installer",
          "EV charger site survey",
          "EV charger installation safety",
          "home EV charger maintenance",
          "PlusX Electric"
        ],
        "about" : {
          "@type" : "Thing",
          "name"  : "Home EV Charger Installation in the UAE"
        }
      }
    ]
  }
];
