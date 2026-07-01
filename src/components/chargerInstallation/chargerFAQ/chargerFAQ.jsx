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
                "text"  : "For a standard home installation, there's no separate DEWA permit or approval wait to plan around. What matters is that the work is done by a DEWA-approved installer using a DEWA-compliant charger, wired to local electrical and safety standards , which is exactly what PlusX Electric provides as a licensed operator. We handle the charger, the wiring, the electrical load check, and the documentation. If your setup needs an electrical load upgrade or building/community sign-off, we arrange that as part of the job."
            }
        },{
            "@type" : "Question",
            "name"  : "Can I install an EV charger in my apartment or rented villa?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes. You'll need written permission from your landlord or building management, plus sign-off from the owners' association. PlusX Electric coordinates those approvals with your building directly, then supplies the compliant charger and completes the wiring, installation, and testing."
            }
        },
        {
            "@type" : "Question",
            "name"  : "How long does EV charger installation take?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "A standard residential installation is usually completed in 1–3 days. For apartments, timing depends on how quickly building or community permission comes through. Commercial installations typically take 10–15 working days, as these can require DEWA approval. We give you a clear timeline during your free consultation."
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