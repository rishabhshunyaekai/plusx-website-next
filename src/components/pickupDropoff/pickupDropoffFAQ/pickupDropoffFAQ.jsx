import SecondaryHeading from '@/sharedComponents/heading/secondaryHeading';
import FAQs             from '@/sharedComponents/faqs/faqs';

function PickupDropoffFaqs() {

  const pickupDropoff = {
    "@context"  : "https://schema.org",
    "@type"     : "pickupDropoffFAQs",
    "mainEntity": [
        {
            "@type" : "Question",
            "name"  : "1. Is EV Pickup and Drop-off Service available across Dubai?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes, the valet charging service is available across Dubai, including residential communities, shopping centres, and popular tourist spots."
            }
        },
        {
            "@type" : "Question",
            "name"  : "2. Which EVs can the pick-up and drop-off service charge?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "The PlusX service supports a wide range of electric vehicles. The charging units are compatible with different charging standards."
            }
        },
        {
            "@type" : "Question",
            "name"  : "3. Is the pick-up and drop-off charging service available 24/7?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes, the service operates 24/7. Whether early morning or late at night, you can have your EV collected, charged, and returned at a convenient time."
            }
        },
        {
            "@type" : "Question",
            "name"  : "4. Is this service suitable for tourists in Dubai?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Absolutely. Tourists renting EVs can benefit from the pick-up and drop-off option without the hassle of finding or using public charging stations."
            }
        },
        {
            "@type" : "Question",
            "name"  : "5. What are the costs of the pick-up and drop-off service?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : `The service is currently priced at 39 AED within Dubai.`
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