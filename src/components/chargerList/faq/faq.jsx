import SecondaryHeading from '@/sharedComponents/heading/secondaryHeading';
import FAQs             from '@/sharedComponents/faqs/faqs';

function FAQ() {

  const charger = {
    "@context"  : "https://schema.org",
    "@type"     : "FAQPage",
    "mainEntity": [
        {
            "@type" : "Question",
            "name"  : "What is the difference between AC and DC EV chargers?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "AC chargers convert alternating current from your home or office supply into direct current inside the vehicle, charging at 7kW to 22kW. They typically take 4–8 hours for a full charge and are best for home, villa, or office use. DC chargers convert AC to DC outside the vehicle and deliver direct current straight to the battery at 20kW to 120kW or higher, charging most EVs in 30–60 minutes. DC chargers are designed for commercial sites, fleets, and public stations. "
            }
        },
        {
            "@type" : "Question",
            "name"  : "How much does an EV charger cost in the UAE? ",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "PlusX Electric AC chargers start at AED 900 for portable models and AED 1,199 for wall-mounted home chargers. DC fast chargers for commercial use start at AED 22,000. Final price depends on charger capacity (kW), connector type, and whether installation is included. "
            }
        },{
            "@type" : "Question",
            "name"  : "Which EV charger should I buy for my home in Dubai? ",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "For most homes and villas in Dubai, a 7kW AC wall charger is the standard recommendation. It charges most EVs fully overnight and works with the single-phase electrical supply found in most UAE homes. If your villa has three-phase power, an 11kW or 22kW AC charger will charge faster. "
            }
        },
        {
            "@type" : "Question",
            "name"  : "Are PlusX EV chargers compatible with Tesla?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes. All PlusX AC chargers use the Type 2 connector, which is the standard connector for every Tesla sold in the UAE — including Model 3, Model Y, Model S, and Model X. PlusX DC fast chargers use CCS2, which Tesla vehicles also support. "
            }
        },
        {
            "@type" : "Question",
            "name"  : "Do PlusX EV chargers work with BYD, Nissan, Audi, and other EVs? ",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes. Type 2 (AC) and CCS2 (DC) are the standard connectors for every electric vehicle sold in the UAE, including BYD Atto 3, BYD Seal, Nissan Leaf, Audi e-tron, BMW iX, Mercedes-EQ, Polestar, Hyundai Ioniq 5, Kia EV6, and Cadillac LYRIQ. "
            }
        },
        {
            "@type" : "Question",
            "name"  : "What warranty comes with a PlusX EV charger?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Every PlusX EV charger comes with a 3-year manufacturer warranty, one year of complimentary roadside assistance, and one free preventive maintenance visit within the first year. "
            }
        },
        {
            "@type" : "Question",
            "name"  : "Does PlusX install EV chargers? ",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes. PlusX offers professional EV charger installation across the UAE as an optional service. Our certified electricians handle electrical wiring, mounting, DEWA or ADDC coordination where required, and final commissioning. Installation is optional — you can also purchase the charger and arrange installation separately."
            }
        },
        {
            "@type" : "Question",
            "name"  : "How long does it take to install a home EV charger in Dubai?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "A typical home EV charger installation takes one day on-site, after a free site survey. Including any building or DEWA approvals, the full process from order to first charge is usually completed within 5 working days."
            }
        },
        {
            "@type" : "Question",
            "name"  : "What is the best EV charger for an apartment in Dubai?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Apartments in Dubai often cannot install permanent wall chargers because of building approvals or shared electrical capacity. In that case, the PlusX Portable AC Charger 7kW or 11kW is the best option — it plugs into a standard three-phase or single-phase socket and requires no installation. Apartment residents can also use the PlusX EV Charge Share feature to access shared chargers from neighbours."
            }
        },
        {
            "@type" : "Question",
            "name"  : "Can I use a PlusX EV charger outside Dubai?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes. PlusX Electric supplies and supports EV chargers across all seven emirates of the UAE — Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain."
            }
        },
    ]
  }

  return (
    <section className={`container`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(charger) }} />
        <SecondaryHeading title={"FAQ's"}/>
        <FAQs faqs={charger.mainEntity}/>
    </section>
  )
}

export default FAQ;