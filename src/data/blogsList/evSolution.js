import RSADesktop       from "@/assets/images/homepage/blogs/banners/RSADesktop.webp";
import RSAMobile        from "@/assets/images/homepage/blogs/banners/RSAMobile.webp";
import portableDesktop  from "@/assets/images/homepage/blogs/banners/PodDesktopBanner.webp";
import portableMobile   from "@/assets/images/homepage/blogs/banners/PodMobile.webp";
import blogImage        from "@/assets/images/homepage/blogs/plusxelectric_ev_solution_in_dubai.webp";

const BASE_URL           = process.env.NEXT_PUBLIC_BASE_URL;
export const eVSolution = [
  {
    type: "paragraph",
    text: `You don't think about charging until it becomes a problem. Your battery might be lower than you thought, or the charger you were going to use might already be in use. All of a sudden, something as easy as charging takes longer than it should.`,
  },
  {
    type: "paragraph",
    text: `As more people in Dubai transition to electric cars, the focus is shifting from merely owning an EV to caring for it every day. Charging doesn't always mean plugging in. It's about knowing where to go, what choices you have, and what to do when things don't go as planned.`,
  },
  {
    type: "paragraph",
    text: `This is where EV solutions in Dubai come in. Drivers can now choose from a range of services that can help them with a variety of situations, from charging their cars every day to dealing with unexpected needs.`,
  },
  {
    type: "paragraph",
    text: `Platforms like PlusX Electric offer these services together in one place. In this article, we'll talk about how these electric vehicle solutions function in Dubai and how they integrate into daily life for EV owners.`,
  },
  {
    type: "heading",
    level: 2,
    text: "The Rise of EV Ownership in Dubai"
  },
  {
    type: "paragraph",
    text: "The Dubai government, through initiatives by the Dubai Electricity and Water Authority, has been actively promoting electric mobility as part of its sustainability goals, including programmes like the EV Green Charger initiative. The city is proliferating EV infrastructure, expanding charging stations, and offering incentives to encourage EV adoption."
  },
  {
    type: "paragraph",
    text: "With more residents shifting to electric vehicles, EV ownership in Dubai is evolving rapidly. The electric vehicle market in the UAE is expected to reach US$ 16,313.9 million by 2030, growing at a CAGR of 41.2% from 2025 to 2030, highlighting the scale of this shift. The process of owning an EV does not only imply driving a more environmentally friendly car, but it is also about having reliable access to charging and smart tools that facilitate the daily EV management."
  },
  {
    headerText : `The solutions that EV drivers usually demand include:`,
    type: "ul",
    items: [
      `Reliable charging options`,
      `Public charging station discovery`,
      `Home charger installation`,
      `Roadside charging assistance`,
      `Insurance designed for electric vehicles`,
    ],
    footerText: `This is why many EV owners prefer using an EV app in Dubai that combines multiple services into a single platform.`
  },
  {
    type: "heading",
    level: 2,
    text: `What PlusX Electric Does`,
  },
  {
    type: "paragraph",
    text: "PlusX Electric is set to be an all-in-one EV app in Dubai, which helps the owners of electric vehicles in managing their vehicles more effectively."
  },
  {
    headerText : `Rather than using various platforms or services, the PlusX Electric ecosystem is an integration of key EV solutions in Dubai, such as:`,
    type: "ul",
    items: [
      `Doorstep EV charging`,
      `EV pickup and drop-off charging`,
      `Public charging station discovery`,
      `Home charger supply and installation`,
      `EV roadside charging assistance`,
      `Charger sharing within communities`,
      `EV insurance comparison`,
    ],
    footerText: `With a single platform for these services, PlusX Electric makes owning an EV easier and minimizes the difficulties a driver might encounter.`
  },
  {
    type: "heading",
    level: 2,
    text: `How EV Charging Works in Dubai`
  },
  {
    type: "paragraph",
    text: `One of the most critical issues of EV ownership is the charging infrastructure. EVs are different from petrol vehicles because they rely on different charging options, including home charging, public charging, and mobile charging services.`
  },
  {
    type: "paragraph",
    text: `The EV charging in Dubai is generally divided into three major categories:`
  },
  {
    type: "heading",
    level: 2,
    text: `Home Charging`
  },
  {
    type: "paragraph",
    text: `Many EV owners install home-based chargers to charge their vehicles overnight. This gives convenience and makes the vehicle available every morning.`
  },
  {
    type: "heading",
    level: 2,
    text: `Public Charging`
  },
  {
    type: "paragraph",
    text: `Electrical charging poles are found within the city of Dubai in malls, car parks, and business premises.`
  },
  {
    type: "heading",
    level: 2,
    text: `Mobile Charging`
  },
  {
    type: "paragraph",
    text: `Mobile charging services provide electricity to the vehicle, eliminating the need to visit charging stations.<br />Such choices mean EV drivers can charge their cars at any time.`
  },
  {
    type: "buttons",
    buttons: [
      {
        label: "Explore Our EV Charging Services",
        type: "link",
        href: "/mobile-ev-charging-dubai",
      },
      // {
      //   label: "Explore Our EV Charging Services",
      //   type: "whatsapp",
      //   phone: "+971542796424",
      //   message: "Hi, I want to know about EV solutions.",
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
    text: `Doorstep Charging with PlusX Power Pods`
  },
  {
    type: "paragraph",
    text: `One of the most convenient EV solutions in Dubai is mobile charging.`
  },
  {
    type: "paragraph",
    text: `PlusX Electric Power Pods offer doorstep charging of EVs in Dubai. These are portable charging units that allow EV owners to charge their cars without relying on fixed charging stations.`
  },
  {
    headerText : `<b>Key Benefits</b>`,
    type: "ul",
    items: [
      `No infrastructure installation required`,
      `On-demand mobile charging`,
      `Convenient doorstep service`,
      `Compatible with most EV models`,
    ],
    footerText: `The service is particularly helpful to EV drivers who do not have access to a nearby charger or who want the flexibility to charge anytime and anywhere.`
  },
  {
    type: "ctaButton",
    action: "portablePage",
    alt: "Mobile EV Charging Services in dubai",
    desktop: portableDesktop,
    mobile: portableMobile
  },
  {
    type: "heading",
    level: 2,
    text: `Pricing`
  },
  {
    type: "paragraph",
    text: "Power Pods are available on demand, starting at AED 65 as a service fee. Charging costs are billed separately based on usage."
  },
  {
    type: "paragraph",
    text: "A reservation can be done in the PlusX electric application, whereby the customer can view the whereabouts of the pods, the location, and receive a charge."
  },
  {
    type: "heading",
    level: 2,
    text: `<a href="/mobile-ev-charging-dubai" target="_blank">Explore How Our Doorstep Charing With Power Pods Works</a>`
  },
  {
    type: "heading",
    level: 2,
    text: `EV Pickup and Drop-Off Charging`
  },
  {
    type: "paragraph",
    text: "EV pickup and drop-off charging is another convenient service that has been offered by PlusX Electric."
  },
  {
    type: "paragraph",
    text: "This service is priced similarly to valet. The PlusX team also collects the vehicle, charges it on public infrastructure, and collects it again."
  },
  {
    type: "paragraph",
    text: "EV owners who constantly have a busy schedule and do not wish to spend time waiting in line at charging stations will find the service of great value."
  },
  {
    headerText : `<b>How It Works</b>`,
    type: "ul",
    items: [
      `Book the service through the PlusX Electric app`,
      `Choose pickup location and preferred time`,
      `PlusX team collects your EV`,
      `The vehicle is charged at a public charging station`,
      `The car is returned once charging is complete`,
    ],
  },
  {
    type: "heading",
    level: 2,
    text: `Pricing`
  },
  {
    type: "paragraph",
    text: "Pickup and drop-off charging starts at AED 39 as a service fee. Charging costs at public stations are billed separately based on usage. This allows EV owners to charge their vehicles without disrupting their day-to-day routine."
  },
  {
    type: "heading",
    level: 2,
    text: `<a href="/ev-pickup-dropoff-charging-service" target="_blank">Explore Our EV Pickup And Drop Off Charging Services</a>`
  },
  {
    type: "heading",
    level: 2,
    text: `Finding Public EV Charging Stations`
  },
  {
    type: "paragraph",
    text: "Electric vehicle solutions in Dubai still include public charging."
  },
  {
    headerText : `Nonetheless, the problems encountered by many EV drivers include:`,
    type: "ul",
    items: [
      `Uncertain charger availability`,
      `Driving around searching for charging stations`,
      `Range anxiety during longer trips`,
    ],
    footerText: `The PlusX Electric application is a solution to this issue since it provides real-time access to public EV charging stations in Dubai.`,
  },
  {
    headerText : `Users can:`,
    type: "ul",
    items: [
      `Locate nearby charging stations`,
      `Check charger type and capacity`,
      `View availability and pricing`,
      `Get navigation to the selected station`,
    ],
    footerText: `This problem will be solved by the PlusX Electric application, which will provide the ability to find public EV charging stations in Dubai in real time.`,
  },
  {
    type: "heading",
    level: 2,
    text: `<a href="/public-ev-charging-stations" target="_blank">Explore How You Can Find Public EV Charging Stations Near You</a>`
  },
  {
    type: "heading",
    level: 2,
    text: `Home Charger Installation in Dubai`
  },
  {
    type: "paragraph",
    text: "A home charger is one of the most convenient charging options among the vast number of EV owners."
  },
  {
    headerText : `PlusX Electric offers EV charger supply, installation, and commissioning service of:`,
    type: "ul",
    items: [
      `Villas`,
      `Residential buildings`,
      `Communities`,
      `Commercial properties`,
    ],
    footerText: `The home chargers have a number of benefits:`,
  },
  {
    type: "heading",
    level: 2,
    text: `Faster Charging`
  },
  {
    type: "paragraph",
    text: "Special EV chargers are stronger compared to ordinary electric sockets."
  },
  {
    type: "heading",
    level: 2,
    text: `Convenience`
  },
  {
    type: "paragraph",
    text: "Cars do not have to go to the stations to get charged."
  },
  {
    type: "heading",
    level: 2,
    text: `Cost Savings`
  },
  {
    type: "paragraph",
    text: `Home charging can be more economical compared to frequent public charging.<br/> Each charger installation is professionally installed and optimized to ensure efficient performance.`
  },
  {
    headerText : `Additional benefits include:`,
    type: "ul",
    items: [
      `3-year warranty`,
      `Preventive maintenance`,
      `Roadside assistance support in the first year`,
    ],
  },
  {
    type: "heading",
    level: 2,
    text: `<a href="/ev-charger-installation-uae" target="_blank">Learn How EV Charger Installation Works</a>`
  },
  {
    type: "heading",
    level: 2,
    text: `EV Roadside Assistance in Dubai`
  },
  {
    type: "paragraph",
    text: `Having limited battery life while driving can be frustrating, especially when travelling long distances or late at night.`
  },
  {
    type: "paragraph",
    text: `Towing services that traditional roadside assistance services usually build on are not always the best for electric vehicles.`
  },
  {
    type: "paragraph",
    text: `The PlusX Electric company offers EV roadside charging assistance in Dubai, specifically aimed at electric vehicles.`
  },
  {
    type: "ctaButton",
    action: "roadsidePage",
    alt: "EV Breakdown Assistance Services in dubai",
    desktop: RSADesktop,
    mobile: RSAMobile
  },
  {
    headerText : `<b>What the Service Includes</b>`,
    type: "ul",
    items: [
      `Mobile charging delivered to your location`,
      `Up to 10 kWh charging or approximately 50 km of range, helping you reach a nearby public charging station safely.`,
      `Jump-start service for 12V battery issues`,
    ],
    footerText: `A support team is dispatched as soon as a booking is made through the app. Arrival typically takes around 60 minutes, depending on your location.<br /> This service will ensure that EV drivers are back on their feet quickly, without being subjected to unreasonable towing fees.`,
  },
  {
    type: "heading",
    level: 2,
    text: `<a href="/ev-breakdown-assistance" target="_blank">Explore Our EV Roadside Assistance Services</a>`
  },
  {
    type: "heading",
    level: 2,
    text: `Charger Sharing and Community Charging`
  },
  {
    type: "paragraph",
    text: "It is not a simple task to install the personal chargers in residential buildings. Power restrictions and building approvals are among the limitations many communities are experiencing."
  },
  {
    type: "paragraph",
    text: `To meet this, PlusX Electric provides EV charger sharing.<br /> This helps EV owners to share their personal chargers with other community members.`
  },
  {
    headerText: `<b>Benefits of Charger Sharing</b>`,
    type: "ul",
    items: [
      `Better utilisation of existing infrastructure`,
      `Reduced reliance on public charging stations`,
      `Additional income for charger owners`,
      `Increased charging access in residential areas`,
    ],
    footerText: `With the PlusX Electric application, charger owners can list their chargers and turn them on, while EV drivers can find nearby chargers and communicate with the owners. Through this you get access to a community-based EV charging network.`
  },
  {
    type: "heading",
    level: 2,
    text: `EV Car Insurance in the UAE`
  },
  {
    type: "paragraph",
    text: `Insurance is another important part of EV ownership. Electric cars often require insurance that accounts for battery units, sophisticated electronics, and specialised repair needs.`
  },
  {
    type: "paragraph",
    text: `Partnership PlusX Electric collaborates with Policybazaar to enable EV owners to find and request EV insurance in the UAE using the PlusX Electric app. Users are able to view options, coverage, and get quotes in a few simple steps instead of calling multiple insurers to compare them.`
  },
  {
    type: "heading",
    level: 2,
    text: `Key Benefits`
  },
  {
    type: "paragraph",
    text: `<b>EV-Friendly Coverage</b> : EV specific insurance products that cover both GCC and Non-GCC cars and individual and fleet insurance.`
  },
  {
    type: "paragraph",
    text: `<b>Coverage Across the UAE</b> : Dubai, Abu Dhabi, and Sharjah, among other places in the UAE, offer EV insurance on registered vehicles.`
  },
  {
    type: "paragraph",
    text: `<b>Simple In-App Process</b> : Provide your vehicle information, choose a plan, and get a quote in the PlusX Electric app.`
  },
  {
    type: "paragraph",
    text: `This helps EV owners to access EV charging, roadside assistance, and insurance on a single platform.`
  },
  {
    type: "buttons",
    buttons: [
      {
        label: "Get Your EV Insurance",
        type: "link",
        href: "/ev-car-insurance",
      },
      // {
      //   label: "Explore Our EV Charging Services",
      //   type: "whatsapp",
      //   phone: "+971542796424",
      //   message: "Hi, I want to know about EV solutions.",
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
    text: `The Future of EV Solutions in Dubai`
  },
  {
    type: "paragraph",
    text: `Dubai is fast heading towards sustainable mobility, supported by initiatives like the Dubai Clean Energy Strategy 2050, which aims for 100% clean energy capacity by 2050 (Dubai Supreme Council of Energy). The need for an integrated EV ecosystem will continue to grow as EV adoption increases.`
  },
  {
    headerText: `The following solutions are expected to be used in the future:`,
    type: "ul",
    items: [
      `Expanded charging networks`,
      `Smart charging infrastructure`,
      `Community-driven charger sharing`,
      `Integrated EV apps and digital services`,
    ],
    footerText: `Solutions such as PlusX Electric are contributing to this future by integrating several EV services in Dubai into one ecosystem.`
  },
  {
    type: "heading",
    level: 2,
    text: `Conclusion`
  },
  {
    type: "paragraph",
    text: `The adoption of electric vehicles is changing mobility in Dubai. However, EV ownership is a successful one as long as there are trusted charging, roadside assistance, infrastructure solutions, and insurance opportunities available.`
  },
  {
    type: "paragraph",
    text: `EV solutions in Dubai make this process easier by offering EV drivers services that cover all their needs in one location.`
  },
  {
    type: "paragraph",
    text: `With options like doorstep charging, pickup-and-drop charging, public charger discovery, home charger installation, roadside assistance, charger sharing, and EV insurance, PlusX Electric is contributing to the development of a smarter, more convenient EV ecosystem.`
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
          "name"  : "What EV charging options are available in Dubai?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "In Dubai, EV owners have access to home chargers, public charging stations, mobile doorstep charging, and pickup-drop charging services via such platforms as PlusX Electric."
          }
        },
        {
          "@type" : "Question",
          "name"  : "How can I avoid range anxiety while driving in Dubai?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "EV apps such as PlusX Electric allow you to find the nearest chargers in real-time, plan a route with charging stops, and get roadside charging (where applicable)."
          }
        },
        {
          "@type" : "Question",
          "name"  : "Can I charge my EV if public stations are busy?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "Yes. When public charging stations are occupied, EV drivers can use mobile charging or pickup-and-drop charging services offered by PlusX Electric."
          }
        },
        {
          "@type" : "Question",
          "name"  : "What happens if my EV runs out of charge on the road?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "On-site charging and jump-start services are EV roadside assistance services, such as PlusX Electric, which will assist you in getting to the charging station safely."
          }
        },
        {
          "@type" : "Question",
          "name"  : "Do EV owners in Dubai need special insurance?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "EV insurance takes into consideration battery systems and EV parts. Software such as PlusX Electric helps individuals compare EV insurance plans in the app."
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
        "headline"    : "EV Solutions in Dubai | Complete Guide for EV Owners",
        "name"        : "EV Solutions in Dubai | Complete Guide by PlusX Electric",
        "description" : "Explore EV solutions Dubai with this complete guide. Learn about EV charging, roadside assistance, home chargers, public charging, and EV insurance with PlusX Electric.",
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
        "datePublished"   : "2026-05-08",
        "dateModified"    : "2026-05-08",
        "mainEntityOfPage": {
          "@type"         : "WebPage",
          "@id"           : `${BASE_URL}/ev-solutions-in-dubai`
        },
        "inLanguage"    : "en",
        "keywords"      : [ "EV solutions Dubai", "EV charging Dubai", "doorstep EV charging Dubai", "mobile EV charging Dubai", "EV roadside assistance Dubai", "home EV charger installation Dubai", "public EV charging stations Dubai", "EV insurance UAE", "EV pickup and drop charging Dubai", "electric vehicle solutions UAE", "PlusX Electric", "EV app Dubai"],
        "articleSection": [ "The Rise of EV Ownership in Dubai", "What PlusX Electric Does", "How EV Charging Works in Dubai", "Doorstep Charging with PlusX Power Pods", "EV Pickup and Drop-Off Charging", "Finding Public EV Charging Stations", "Home Charger Installation in Dubai", "EV Roadside Assistance in Dubai", "Charger Sharing and Community Charging", "EV Car Insurance in the UAE", "The Future of EV Solutions in Dubai", "Conclusion" ],
        "about"         : {
          "@type"       : "Thing",
          "name"        : "Electric Vehicle Solutions",
          "description" : "Integrated EV charging, roadside assistance, charger installation, public charging discovery, charger sharing, and EV insurance services for electric vehicle owners in Dubai and the UAE."
        },
        "isPartOf"      : {
          "@type"       : "Blog",
          "name"        : "PlusX Electric Blog",
          "url"         : `${BASE_URL}/ev-solutions-in-dubai`
        },
        "articleBody"   : "This article explains EV solutions in Dubai, including EV charging, doorstep charging, EV pickup and drop-off charging, public charging station discovery, home charger installation, EV roadside assistance, charger sharing, and EV insurance solutions offered by PlusX Electric."
      }
    ]
  }
];
