import SecondaryHeading from '@/sharedComponents/heading/secondaryHeading';
import FAQs             from '@/sharedComponents/faqs/faqs';

function PickupDropoffFaqs() {

  const pickupDropoff = {
    "@context"  : "https://schema.org",
    "@type"     : "FAQPage",
    "mainEntity": [
        {
            "@type" : "Question",
            "name"  : "1. Do I need to be present during pickup?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "No. PlusX Electric can collect your vehicle from your selected location and return it after charging is completed."
            }
        },
        {
            "@type" : "Question",
            "name"  : "2. Is my EV safe during the service?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes. PlusX Electric uses trained staff and standard procedures to safely handle your EV during pickup, charging, and drop-off."
            }
        },
        {
            "@type" : "Question",
            "name"  : "3. Can I book pickup from my office or home?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes. PlusX Electric allows you to schedule pickup from your home, office, or preferred parking location in Dubai."
            }
        },
        {
            "@type" : "Question",
            "name"  : "4. What happens after my EV is fully charged?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Once charging is complete, PlusX Electric returns your EV to the same pickup location within the estimated service time."
            }
        },
        {
            "@type" : "Question",
            "name"  : "5. Can I book this service anytime?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : `You can schedule the service through the PlusX Electric app based on available time slots in your area.`
            }
        },
        {
            "@type" : "Question",
            "name"  : "6. How much does EV pickup and drop-off charging cost?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : `PlusX Electric charges a service fee of AED 39 for EV pickup and drop-off charging. Public charging costs are calculated separately based on usage.`
            }
        }
    ]
  }

  return (
    <section className={`container`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pickupDropoff) }} />
        <SecondaryHeading title={"FAQ's"}/>
        <FAQs faqs={pickupDropoff.mainEntity}/>
    </section>
  )
}

export default PickupDropoffFaqs;