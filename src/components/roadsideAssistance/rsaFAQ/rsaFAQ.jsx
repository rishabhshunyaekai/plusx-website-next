import SecondaryHeading from '@/sharedComponents/heading/secondaryHeading';
import FAQs             from '@/sharedComponents/faqs/faqs';

function RSAFaqs() {

  const rsa = {
    "@context"  : "https://schema.org",
    "@type"     : "FAQPage",
    "mainEntity": [
        {
            "@type" : "Question",
            "name"  : "How much does EV roadside assistance cost in Dubai?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "From AED 185 + VAT for an on-site charging, jump start included if required."
            }
        },
        {
            "@type" : "Question",
            "name"  : "What happens if my EV battery is completely dead?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "We deliver on-site charging up to 10 kWh or approximately 50 km of range, whichever comes first — enough to reach home or the nearest public charger under your own power."
            }
        },{
            "@type" : "Question",
            "name"  : "How fast can you reach me?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "60 minutes on average across Dubai, varying with your location, traffic and weather."
            }
        },
        {
            "@type" : "Question",
            "name"  : "Is a 12V jump-start included?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes. If your 12V battery is dead, jump-starting is part of the roadside assistance service."
            }
        },
        {
            "@type" : "Question",
            "name"  : "My car won't turn on at all — is that the main battery?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Usually not. A completely unresponsive EV is more often a failed 12V battery, which accounts for roughly half the breakdowns we attend in Dubai."
            }
        },
        {
            "@type" : "Question",
            "name"  : "Can you reach me in underground or basement parking?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes. Our EV roadside assistance rescue van carries its own energy and doesn't need a socket at your location, so basement levels, community parking and warehouse yards are all serviceable."
            }
        },
        {
            "@type" : "Question",
            "name"  : "Is emergency EV charging available 24/7?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes — 24 hours a day, every day of the year, anywhere in Dubai."
            }
        }
    ]
  }

  return (
    <section className={`container`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(rsa) }} />
        <SecondaryHeading title={"FAQ's"}/>
        <FAQs faqs={rsa.mainEntity}/>
    </section>
  )
}

export default RSAFaqs;