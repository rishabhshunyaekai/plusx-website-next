import CIDesktop  from "@/assets/images/homepage/blogs/banners/plusx_electric_charger_installation_desktop_banner.webp";
import CIMobile   from "@/assets/images/homepage/blogs/banners/plusx_electric_charger_installation_mobile_banner.webp";
import blogImage  from "@/assets/images/homepage/blogs/plusx_electric_ac_vs_dc_chargers_in_dubai.webp";

const BASE_URL              = process.env.NEXT_PUBLIC_BASE_URL;
export const ac_dc_chargers = [
  {
    type: "paragraph",
    text: `As EV adoption grows in Dubai, one of the most common decisions owners face is choosing between AC and DC chargers. The choice directly impacts charging time, installation cost, and whether your home or building can even support the setup.`,
  },
  {
    type: "paragraph",
    text: `AC vs DC EV charger Dubai is a common dilemma, but you can make the choice easily once you understand what they mean. You can decide the type of charger based on your usage, location, and vehicle requirements.`,
  },
  {
    type: "paragraph",
    text: `The confusion usually comes down to three practical questions: what works for home charging, how much it costs in AED, and what your electrical setup actually allows.`,
  },
  {
    type: "heading",
    level: 2,
    text: "What Is an AC EV Charger?"
  },
  {
    type: "paragraph",
    text: "An AC (Alternating Current) charger supplies power to your EV, but the conversion to DC (which the battery uses) happens inside the vehicle."
  },
  {
    type: "paragraph",
    text: `This is the most common type of home EV charger in Dubai that uses a Type 2 connector.`
  },
  {
    headerText: `<b>Key Characteristics</b>`,
    type: "ul",
    items: [
      `Uses onboard vehicle converter.`,
      `Slower charging compared to DC.`,
      `Lower installation cost.`,
      `Great for long-duration charging.`,
    ],
    footerText: `AC chargers mostly operate at 3.7 kW (single-phase) or up to 11 kW (three-phase) at homes according to the electrical connection.`
  },
  {
    type: "heading",
    level: 2,
    text: `What Is a DC EV Charger?`,
  },
  {
    type: "paragraph",
    text: "A DC (Direct Current) charger converts electricity before it reaches the vehicle. So, it powers the battery directly."
  },
  {
    type: "paragraph",
    text: `These chargers typically use CCS2 connectors (standard in the UAE) and are commonly seen at public charging stations.`
  },
  {
    headerText: `<b>Key Characteristics</b>`,
    type: "ul",
    items: [
      `External conversion (faster charging)`,
      `High power output`,
      `Expensive installation`,
      `Requires special infrastructure`,
    ],
    footerText: `DC chargers usually start from 50 kW and can go much higher depending on the setup.`
  },
  {
    type: "heading",
    level: 2,
    text: `If you still want to know more about AC or DC chargers.`,
  },
  {
    type: "buttons",
    buttons: [
      // {
      //   label: "Explore Our EV Charging Services",
      //   type: "link",
      //   href: "/",
      // },
      {
        label   : "Book a Free Consultation",
        type    : "whatsapp",
        phone   : "+971542796424",
        message : `Hi PlusX Electric Team \n\n I need more information about AC vs DC chargers.`,
      },
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
    text: `Key Differences Between AC and DC Chargers`
  },
  {
    type: "paragraph",
    text: "You can make the right choice only after understanding the difference between an AC charger vs DC charger for EV."
  },
  {
    type: "table",
    columns: [ "Feature", "AC Charger", "DC Charger" ],
    rows: [
      [
        "Connector Type",
        "Type 2",
        "CCS2 (common in UAE)"
      ],
      [
        "Charging Speed",
        "3.7 kW – 11 kW",
        "50 kW+"
      ],
      [
        "Charging Time",
        "Several hours (overnight)",
        "20–60 mins for top-up"
      ],
      [
        "Installation Cost",
        "~AED 3,000 – AED 7,000",
        "AED 50,000+ (commercial setups)"
      ],
      [
        "Power Requirement",
        "Single-phase or three-phase",
        "Heavy electrical infrastructure"
      ],
      [
        "Best Use",
        "Home, office, daily charging",
        "Highways, commercial, fleets"
      ]
    ]
  },
  {
    type: "heading",
    level: 2,
    text: `Charging Speed and Real Expectations`
  },
  {
    type: "paragraph",
    text: "Charging speed depends not just on the charger, but also on your vehicle and power supply."
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
    text: `AC Charging`
  },
  {
    type: "paragraph",
    text: "AC chargers provide 3.7 kW to 11 kW output. They are suitable for keeping the vehicle at charging overnight or when it is parked for several hours."
  },
  {
    type: "heading",
    level: 2,
    text: `DC Charging`
  },
  {
    type: "paragraph",
    text: "DC chargers can provide 50 kW or more, which gives EVs enough charge in a shorter time."
  },
  {
    type: "paragraph",
    text: "For most daily users in Dubai, overnight AC charging is sufficient, while DC charging is mainly used for quick top-ups during travel."
  },
  {
    type: "heading",
    level: 2,
    text: `<a href="/ev-charger-installation-uae/ac-dc-ev-chargers" target="__blank">Which EV Charger Is Best for Home in Dubai?</a>`
  },
  {
    type: "paragraph",
    text: "The best EV charger for home in Dubai is an AC charger for most users."
  },
  {
    type: "heading",
    level: 2,
    text: `Why AC Works Best for Homes?`
  },
  {
    type: "ul",
    items: [
      `Lower installation cost.`,
      `No need for heavy electrical upgrades.`,
      `Suitable for overnight charging.`,
      `Easy integration with residential setups.`,
    ],
    footerText: `Most apartments and villas in Dubai operate on single-phase supply. So, the charging speed is around 3.7–7.4 kW unless it is upgraded. Installing a DC charger at home is not a feasible option due to cost and power requirements.`
  },
  {
    type: "heading",
    level: 2,
    text: `<a href="/why-a-personal-ev-charger-is-a-smart-choice-in-the-uae" target="__blank">Home vs. Public Charging: Why a Personal EV Charger is a Smart Choice in the UAE</a>`
  },
  {
    type: "heading",
    level: 2,
    text: `When DC Chargers Makes Sense?`
  },
  {
    headerText: `DC chargers are better for places with high demand.`,
    type: "ul",
    items: [
      `Long-distance travel routes.`,
      `Commercial charging stations.`,
      `Fleet operations.`,
      `Locations requiring quick turnaround.`,
    ],
    footerText: `They are mostly installed in public infrastructure or commercial properties.`
  },
  {
    type: "heading",
    level: 2,
    text: `When PlusX Electric Can Install AC or DC Chargers`
  },
  {
    type: "paragraph",
    text: `<a href="/ev-charger-installation-uae" target="_blank">EV charger installation in Dubai</a> by PlusX Electric is done only after assessing your needs.`
  },
  {
    headerText: `Whether you require a home setup or a commercial charging solution, the installation process includes:`,
    type: "ul",
    items: [
      `Charger selection based on usage`,
      `Site inspection and feasibility`,
      `Professional installation and commissioning`,
      `Optimised setup for performance and safety`,
    ],
  },
  {
    headerText: `Flexible Options`,
    type: "ul",
    items: [
      `AC chargers for residential and office use`,
      `DC chargers for commercial and high-demand environments`,
    ],
    footerText: `This way, you get the right charger.`
  },
  {
    type: "heading",
    level: 2,
    text: `Making the Right Choice`
  },
  {
    headerText: `The choice depends on how you use your EV and what your infrastructure allows.`,
    type: "ul",
    items: [
      `Choose AC if your goal is daily charging at home or work.`,
      `Choose DC if you need fast charging in commercial or high-usage environments.`,
    ],
  },
  {
    type: "heading",
    level: 2,
    text: `Conclusion`
  },
  {
    type: "paragraph",
    text: `When you have to make a choice between AC and DC chargers, go with practicality. AC chargers are for your daily needs. They are also affordable. DC chargers are perfect for areas that face high-speed requirements.`
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
          "name"  : "Can I install a fast DC charger at home in Dubai?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "DC chargers are not supported in residential spaces because of their high power requirements."
          }
        },
        {
          "@type" : "Question",
          "name"  : "How much does it cost to install a home EV charger in Dubai?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "You can install an AC charger at home for AED 3,000 to AED 7,000. There may be additional costs for setup and wiring."
          }
        },
        {
          "@type" : "Question",
          "name"  : "What connector is used for EV charging in Dubai?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "AC chargers mostly use Type 2 connectors, and DC chargers require CCS2 in the UAE."
          }
        },
        {
          "@type" : "Question",
          "name"  : "Does my building support EV charger installation?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "It depends if your building allows an upgrade for charger infrastructure. You also need approvals and electrical capacity."
          }
        },
        {
          "@type" : "Question",
          "name"  : "Do I need both AC and DC charging options?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "AC charging at home is preferred by most EV owners and rely on DC chargers only during travel, according to their needs."
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
        "headline"    : "AC vs DC EV Chargers in Dubai | Which One Should You Choose?",
        "name"        : "AC vs DC EV Chargers in Dubai | PlusX Electric",
        "description" : "Confused between AC and DC EV chargers in Dubai? Learn the key differences, charging speeds, installation costs, and which EV charger is best for your home or business with PlusX Electric.",
        "image"       : `${BASE_URL}${blogImage.src}`,
        "author"      : {
          "@type"     : "Person",
          "name"      : "Admin",
          "url"       : `${BASE_URL}/`,
        },
        "publisher"   : {
          "@type"     : "Organization",
          "name"      : "PlusX Electric",
          "url"       : `${BASE_URL}/`,
          "logo"      : {
            "@type"   : "ImageObject",
            "url"     : "https://plusxelectric.com/logo-icon.svg"
          }
        },
        "datePublished" : "2026-05-18",
        "dateModified"  : "2026-05-18",
        "mainEntityOfPage": {
          "@type"       : "WebPage",
          "@id"         : `${BASE_URL}/ac-vs-dc-ev-chargers`,
        },
        "inLanguage": "en",
        "keywords"  : [ "AC vs DC EV charger Dubai", "AC EV charger Dubai", "DC EV charger Dubai", "best EV charger for home Dubai", "home EV charger Dubai", "fast EV charger Dubai", "EV charger installation Dubai", "Type 2 EV charger Dubai", "CCS2 charger Dubai", "EV charging Dubai"],
        "articleSection": [ "What Is an AC EV Charger?", "What Is a DC EV Charger?", "Key Differences Between AC and DC Chargers", "Charging Speed and Real Expectations", "Which EV Charger Is Best for Home in Dubai?", "When DC Chargers Make Sense", "EV Charger Installation in Dubai", "Making the Right Choice" ],
        "about"         : {
          "@type"       : "Thing",
          "name"        : "AC and DC EV Charging",
          "description" : "Comparison between AC and DC electric vehicle chargers including charging speed, installation requirements, and suitable use cases in Dubai."
        },
        "isPartOf"      : {
          "@type"       : "WebPage",
          "name"        : "EV Chargers in Dubai | PlusX Electric",
          "url"         : `${BASE_URL}/ac-vs-dc-ev-chargers`,
        }
      }
    ]
  }
];
