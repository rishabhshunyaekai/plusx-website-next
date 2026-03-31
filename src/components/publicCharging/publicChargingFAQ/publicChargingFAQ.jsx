import SecondaryHeading from '@/sharedComponents/heading/secondaryHeading';
import FAQs             from '@/sharedComponents/faqs/faqs';

function PublicChargingFaqs() {

  const publicCharging = {
    "@context"  : "https://schema.org",
    "@type"     : "FAQPage",
    "mainEntity": [
        {
            "@type" : "Question",
            "name"  : "1. What if the charger I go to is occupied?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "PlusX Electric helps you check charger availability before arrival, so you can select another nearby EV charging station if needed."
            }
        },
        {
            "@type" : "Question",
            "name"  : "2. How do I avoid driving around for chargers?",
            "acceptedAnswer": {
            "@type" : "Answer",
            "text"  : "PlusX Electric shows nearby public EV chargers in real time, helping you find available stations quickly without unnecessary detours."
            }
        },
        {
            "@type" : "Question",
            "name"  : "3. What if I am running low on battery?",
            "acceptedAnswer": {
            "@type" : "Answer",
            "text"  : "PlusX Electric helps you quickly locate the nearest public EV charging station so you can reach a charger before your battery runs too low."
            }
        },
        {
            "@type" : "Question",
            "name"  : "4. How do I find chargers during long drives?",
            "acceptedAnswer": {
            "@type" : "Answer",
            "text"  : "PlusX Electric helps you identify charging stations along your route so you can plan stops and continue your journey without stress."
            }
        },
        {
            "@type" : "Question",
            "name"  : "5. Is there an app to find public EV charging stations in real time?",
            "acceptedAnswer": {
            "@type" : "Answer",
            "text"  : `Yes. The PlusX Electric app shows nearby public EV charging stations in real time, helping you locate available chargers quickly while travelling.`
            }
        },
        {
            "@type" : "Question",
            "name"  : "6. Can I find charging stations between Dubai and Abu Dhabi?",
            "acceptedAnswer": {
            "@type" : "Answer",
            "text"  : `Yes. PlusX Electric helps you locate public EV charging stations along routes such as Dubai to Abu Dhabi or Sharjah to Dubai, making long drives easier to plan.`
            }
        }
    ]
  }

  return (
    <section className={`container`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(publicCharging) }} />
        <SecondaryHeading title={"FAQ's"}/>
        <FAQs faqs={publicCharging.mainEntity}/>
    </section>
  )
}

export default PublicChargingFaqs;