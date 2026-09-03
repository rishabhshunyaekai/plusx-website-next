import RSADesktop from "@/assets/images/homepage/blogs/banners/plusx_electric_ev_rsa_desktop_banner.webp";
import RSAMobile  from "@/assets/images/homepage/blogs/banners/plusx_electric_ev_rsa_mobile_banner.webp";
import blogImage  from "@/assets/images/homepage/blogs/plusx_electric_driver_know_roadside_rescue.webp";

const BASE_URL                  = process.env.NEXT_PUBLIC_BASE_URL;
export const driverKnowRSRescue = [
  {
    type: "paragraph",
    text: `Electric vehicle ownership in Dubai has grown faster than the support network around it. Most breakdown services in the city were built for petrol cars, and it shows the moment an EV stops moving: a recovery truck arrives when what the driver actually needed was electricity. That mismatch is why <a href="/ev-breakdown-assistance" target="_blank">EV roadside assistance in Dubai</a> has become a service category of its own rather than an add-on to conventional cover. This article explains what makes an EV breakdown different, what usually causes one, and who feels the difference most.`,
  },
  {
    type: "heading",
    level: 2,
    text: "An EV breakdown is not a petrol breakdown"
  },
  {
    type: "paragraph",
    text: `When a petrol car runs dry, the fix is a jerry can and five minutes. There is no equivalent for an electric car. You cannot pour electricity into a tank at the roadside from a container, which means the default response from a general recovery operator is to tow — and towing an EV is not a neutral act. Electric vehicles have drivetrains that generate current when the wheels turn, so towing one incorrectly, with the driven wheels on the road, can push current back through a system that is not expecting it. Recovery operators who work mostly with combustion cars are not always trained for this.`
  },
  {
    type: "paragraph",
    text: `The result is a service that is slower than it needs to be, more expensive than it needs to be, and occasionally damaging. In most cases the vehicle did not need to move at all. It needed charge.`
  },
  {
    type: "ctaButton",
    action: "roadsidePage",
    alt: "EV roadside rescue assistance in Dubai for stranded electric vehicle drivers",
    desktop: RSADesktop,
    mobile: RSAMobile
  },
  {
    type: "heading",
    level: 2,
    text: `The 12V battery is the cause nobody expects`,
  },
  {
    type: "paragraph",
    text: "Ask most EV drivers what would strand them and they will say the main battery pack. In practice, roughly half of the electric car breakdowns we see in Dubai trace back to the small 12V battery instead — the same kind of lead-acid or lithium unit a petrol car uses."
  },
  {
    type: "paragraph",
    text: "The 12V does not drive the car. It wakes it up. It powers the door handles, the screens, the contactors that connect the main pack to the drivetrain. When it fails, a vehicle with a nearly full main battery will refuse to unlock or start, and the dashboard gives very little warning beforehand. Heat accelerates this, which is why Dubai sees more of it than cooler climates."
  },
  {
    type: "paragraph",
    text: `<b>This matters practically:</b> if your EV will not respond and the charge level was healthy the last time you looked, the problem is more likely the 12V than the pack, and a jump-start resolves it in minutes.`
  },
  {
    type: "heading",
    level: 2,
    text: `<a href="/exploring-the-benefits-of-electric-vehicles-in-the-uae-a-comprehensive-guide" target='_blank'>Exploring the Benefits of Electric Vehicles in the UAE A Comprehensive Guide</a>`
  },
  {
    type: "heading",
    level: 2,
    text: `Who this matters most to`,
  },
  {
    type: "paragraph",
    text: `<b>New EV owners:</b> Range estimates take a few months to become intuitive. Until they do, the gap between what the display promises and what the car delivers in August traffic is where people get caught.`
  },
  {
    type: "paragraph",
    text: `Apartment residents. Without a charger at home, every top-up depends on a public or shared point being free when you need it. That dependency is what turns a low battery into a stranded car.`
  },
  {
    type: "paragraph",
    text: `<b>Long-distance drivers:</b> Highway and inter-emirate routes have wider gaps between chargers than city driving suggests, particularly at night.`
  },
  {
    type: "paragraph",
    text: `<b>Fleet and delivery operators:</b> A stationary vehicle is lost revenue, and the calculation is different when it happens to five vehicles in a week rather than one a year.`
  },
  {
    type: "paragraph",
    text: `Anyone who has been stuck at zero once. It tends to be a one-time lesson.`
  },
  {
    type: "paragraph",
    text: `If you want the situations themselves rather than the categories, we've written up <a href="/five-scenarios-where-ev-roadside-assistance-becomes-a-lifesaver" target="_blank">five situations that leave EV drivers stranded</a> and what resolves each one.`
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
    text: `What to do if it happens to you`,
  },
  {
    type: "paragraph",
    text: `Get the vehicle off the running lane if it is still moving, and use the hazard lights. If the car has stopped in a live traffic lane on a road like Sheikh Zayed Road, leave it and move behind the barrier — Dubai Police should be your first call in that situation, not a service provider. If you are in a car park, a residential street or a service road, you are safe to stay with the vehicle.`
  },
  {
    type: "paragraph",
    text: "Then check what you are actually dealing with. If the car has range showing but will not wake, that points to the 12V. If the range is genuinely at zero, you need charge delivered."
  },
  {
    type: "paragraph",
    text: `PlusX Electric has rescued over 1,150+ electric vehicles across Dubai, and the approach is deliberately narrow: bring enough charge to the vehicle to get it moving again, jump-start the 12V where that is the fault, and avoid towing wherever it can be avoided. Coverage, response times and pricing are set out on the <a href="/ev-breakdown-assistance" target="_blank">EV breakdown assistance page</a>.`
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
          "name"  : "Why can't a normal recovery service help an electric car?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "It can move the vehicle, but moving it is rarely what is needed. General operators are not equipped to deliver charge, and towing an EV without following the correct procedure risks the drivetrain."
          }
        },
        {
          "@type" : "Question",
          "name"  : "What actually causes most EV breakdowns in Dubai?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "The 12V battery, more often than the main pack. It fails with little warning and heat shortens its life, so it is a more common cause here than in cooler markets."
          }
        },
        {
          "@type" : "Question",
          "name"  : "My EV won't unlock or start but the charge was fine yesterday. What's wrong?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "Most likely the 12V battery. The main pack can be full and the car will still be unresponsive, because the 12V is what closes the contactors between the pack and everything else."
          }
        },
        {
          "@type" : "Question",
          "name"  : "How much charge does an EV actually need to get moving again?",
          "acceptedAnswer": {
              "@type" : "Answer",
              "text"  : "Not a full battery. Enough to reach home or the nearest working charger is usually sufficient, which is a fraction of the pack's capacity."
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
          "headline"    : "Why Every Dubai EV Driver Should Know About PlusX Electric’s Roadside Rescue",
          "name"        : "Why Every Dubai EV Driver Should Know About PlusX Electric’s Roadside Rescue | PlusX Electric",
          "description" : "Stuck with a dead EV battery? Get Dubai’s fastest EV emergency service from PlusX Electric. Portable charging and expert roadside help anytime.",
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
  
          "datePublished"    : "2026-08-21",
          "dateModified"     : "2026-05-19",
  
          "mainEntityOfPage" : {
            "@type" : "WebPage",
            "@id"   : `${BASE_URL}/why-every-dubai-ev-driver-should-know-about-plusx-electrics-roadside-rescue`
          },
  
          "inLanguage" : "en",
  
          "keywords" : [
            "EV roadside assistance Dubai",
            "emergency EV charging Dubai",
            "PlusX Electric roadside rescue",
            "EV breakdown help UAE",
            "mobile EV charging Dubai",
            "EV towing Dubai flatbed",
            "roadside EV support Dubai",
            "EV battery dead Dubai help",
            "24/7 EV assistance Dubai",
            "on-demand EV rescue service"
          ],
  
          "articleSection" : [
            "EV Roadside Assistance",
            "Emergency EV Charging",
            "EV Breakdown Support",
            "Dubai EV Infrastructure",
            "Mobile Charging Solutions",
            "EV Safety & Rescue",
            "On-Demand Roadside Services",
            "Electric Vehicle Assistance UAE"
          ],
  
          "about" : {
            "@type" : "Thing",
            "name"  : "EV Roadside Rescue and Emergency Charging Services in Dubai",
            "description" : "Explains EV roadside challenges in Dubai and how PlusX Electric provides 24/7 mobile charging and rescue solutions."
          },
  
          "isPartOf" : {
            "@type" : "WebPage",
            "name"  : "EV Roadside Rescue Dubai | PlusX Electric",
            "url"   : `${BASE_URL}/why-every-dubai-ev-driver-should-know-about-plusx-electrics-roadside-rescue`
          }
        }
      ]
    }
];
