import SecondaryHeading from '@/sharedComponents/heading/secondaryHeading';
import FAQs             from '@/sharedComponents/faqs/faqs';

function PortablePodFaqs() {

  const portablePod = {
    "@context"  : "https://schema.org",
    "@type"     : "doorstepFAQs",
    "mainEntity": [
        {
            "@type" : "Question",
            "name"  : "1. Is there a call-out/service fee for EV charging in Dubai?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes. PlusX Electric charges a call-out fee of AED 65 to deliver a Portable Power Pod to your doorstep or exact location in Dubai. Any additional service details are shown in the app before you confirm your booking."
            }
        },
        {
            "@type" : "Question",
            "name"  : "2. How much does EV charging cost in Dubai?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Pricing depends on the service selected and your location. The call-out fee is AED 65, and the full cost breakdown is displayed in the PlusX Electric app during booking."
            }
        },
        {
            "@type" : "Question",
            "name"  : "3. Do you offer 24/7 mobile EV charging in Dubai?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes, PlusX Electric offers 24/7 mobile EV charging in Dubai, subject to real-time availability shown in the app. If you need urgent assistance, you can also choose the emergency option in the app."
            }
        },
        {
            "@type" : "Question",
            "name"  : "4. How long does it take to charge my EV with a mobile charger?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Charging time depends on your EV model and current battery level. Typically, AC charging takes around 4–5 hours to charge up to ~80%, this depends on the vehicle and site conditions."
            }
        },
        {
            "@type" : "Question",
            "name"  : "5. I don’t have a charger at home — what are my options in Dubai?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : `With PlusX Electric, you can book mobile EV charging through the app and get a Portable Power Pod delivered to your location.`
            }
        }
    ]
  }

  return (
    <section className={`container`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(portablePod) }} />
        <SecondaryHeading title={"FAQ's"}/>
        <FAQs faqs={portablePod.mainEntity}/>
    </section>
  )
}

export default PortablePodFaqs;