import SecondaryHeading from '@/sharedComponents/heading/secondaryHeading';
import FAQs             from '@/sharedComponents/faqs/faqs';

function chargerFAQ() {

  const charger = {
    "@context"  : "https://schema.org",
    "@type"     : "chargerFAQs",
    "mainEntity": [
        {
            "@type" : "Question",
            "name"  : "1. What happens if my EV battery dies completely?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "If your EV battery is fully drained, our team provides on-site charging up to 10 kWh or approximately 50 km of range, whichever comes first, so you can safely continue your journey."
            }
        },
        {
            "@type" : "Question",
            "name"  : "2. Do you tow electric vehicles?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "We avoid towing wherever possible. In most cases, on-site charging is enough to get your EV moving again. Towing is used only if charging or on-site recovery is not feasible."
            }
        },{
            "@type" : "Question",
            "name"  : "3. How fast can PlusX Electric reach me in Dubai?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Our average response time is within 60 minutes, depending on your location, traffic conditions, and other unforeseen factors."
            }
        },
        {
            "@type" : "Question",
            "name"  : "4. Is jump-start service included in EV roadside assistance?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes. If your 12V battery is dead, we provide jump-start service as part of the EV roadside assistance offering."
            }
        },
        {
            "@type" : "Question",
            "name"  : "5. Is EV roadside assistance available 24/7 in Dubai?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes. Our EV roadside assistance service is available 24 hours a day, 7 days a week, anywhere in Dubai."
            }
        },
        {
            "@type" : "Question",
            "name"  : "6. How can I book EV roadside assistance?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "You can book the service instantly by downloading the PlusX App, adding your location details on the RSA booking screen, and confirming your request."
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

export default chargerFAQ;