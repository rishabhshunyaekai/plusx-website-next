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
                "text"  : "AC chargers are best for regular home, villa, or office use. They charge at 7kW–22kW and are recommended for daily charging because slower AC charging helps maintain better EV battery health. DC chargers are faster chargers that deliver power directly to the battery, usually from 20kW–120kW or higher, and can charge most EVs in 30–60 minutes. They are ideal for commercial sites, fleets, and public charging stations."
            }
        },
        {
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
        }
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