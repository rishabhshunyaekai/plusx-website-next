import SecondaryHeading from '@/sharedComponents/heading/secondaryHeading';
import FAQs             from '@/sharedComponents/faqs/faqs';

function chargerFAQ() {

  const charger = {
    "@context"  : "https://schema.org",
    "@type"     : "FAQPage",
    "mainEntity": [
        {
            "@type" : "Question",
            "name"  : "How much does it cost to install an EV charger at home in Dubai?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "EV charger installation in Dubai starts from AED 999 and can go up to AED 8,000–9,000. The final cost depends on the charger type, wire length, and wire quality. PlusX Electric offers a free site consultation to give you an accurate quote with no hidden charges."
            }
        },
        {
            "@type" : "Question",
            "name"  : "Do I need DEWA approval to install an EV charger at home?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes. Any EV charger connected to your home's main electrical supply in Dubai requires DEWA approval. PlusX Electric handles the entire DEWA process for you — documentation, electrical load assessment, and final inspection. Residential approvals typically take 5–10 working days."
            }
        },{
            "@type" : "Question",
            "name"  : "Can I install an EV charger in my apartment or rented villa?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes, with written permission from your landlord or building management, and approval from the owners' association. PlusX Electric coordinates approvals directly with building management and handles the DEWA process."
            }
        },
        {
            "@type" : "Question",
            "name"  : "How long does EV charger installation take?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Residential EV charger installation typically takes 1–3 days once building or community approval is in place. Commercial installations take 10–15 working days after DEWA approval. Our team provides a clear timeline during your free consultation."
            }
        },
        {
            "@type" : "Question",
            "name"  : "What warranty and support come with EV charger installation?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Every PlusX Electric installation includes a 1-year warranty on workmanship. If you purchase the chargers from us, you also receive a 3-year warranty on the chargers. Additionally, you get one free roadside assistance service and one free preventive maintenance visit during the first year. You can track everything through the PlusX Electric app."
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