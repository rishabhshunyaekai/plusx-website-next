import SecondaryHeading from '@/sharedComponents/heading/secondaryHeading';
import FAQs             from '@/sharedComponents/faqs/faqs';

function chargerFAQ() {

  const charger = {
    "@context"  : "https://schema.org",
    "@type"     : "chargerFAQs",
    "mainEntity": [
        {
            "@type" : "Question",
            "name"  : "1. What does EV charger installation in UAE include?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "EV charger installation in UAE includes site assessment, DEWA approvals, certified installation, testing, and installation certification."
            }
        },
        {
            "@type" : "Question",
            "name"  : "2. Do you offer home EV charger installation?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes. We provide safe and compliant home EV charger installation for villas, apartments, and private parking spaces."
            }
        },{
            "@type" : "Question",
            "name"  : "3. Do you manage DEWA approvals for EV charger installation?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes. We handle all required DEWA permits and approvals for hassle-free installation."
            }
        },
        {
            "@type" : "Question",
            "name"  : "4. How long does EV charger installation take?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Most installations depend on site readiness and electrical setup."
            }
        },
        {
            "@type" : "Question",
            "name"  : "5. Is warranty included with EV charger installation?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes. Every installation includes a 3-year warranty and one free preventive maintenance visit in the first year."
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

export default chargerFAQ;