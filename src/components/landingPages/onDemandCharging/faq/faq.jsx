import FaqCard from '@/sharedComponents/landingPagesComponents/faqCard/faqCard';

const FAQ = () => {

    const faqSection = {
        "@context": "https://schema.org",
        "@type": "OnDemandEVChargingQuestions",
        "mainEntity": [
            {
                "@type" : "Question",
                "name"  : "1. My EV battery is low – can someone come charge my car?",
                "acceptedAnswer": {
                    "@type" : "Answer",
                    "text"  : "Yes, the PlusX Portable Power Pod can reach your location within minutes for instant charging."
                }
            },
            {
                "@type" : "Question",
                "name"  : "2. What if my EV is parked in a basement or closed parking area?",
                "acceptedAnswer": {
                    "@type" : "Answer",
                    "text"  : "Our portable EV chargers can easily reach basements and enclosed parking areas."
                }
            },
            {
                "@type" : "Question",
                "name"  : "3. What is the cost of mobile EV charging service in Dubai?",
                "acceptedAnswer": {
                    "@type" : "Answer",
                    "text"  : "Starting at AED 65 for fast, reliable, doorstep EV charging anywhere in Dubai."
                }
            },
            {
                "@type" : "Question",
                "name"  : "4. Is range anxiety a real problem for EV owners?",
                "acceptedAnswer": {
                    "@type" : "Answer",
                    "text"  : "Yes, but with mobile EV charging and portable chargers, it’s easily managed in Dubai."
                }
            },
            {
                "@type" : "Question",
                "name"  : "5. How can a user avoid range anxiety while driving an EV?",
                "acceptedAnswer": {
                    "@type" : "Answer",
                    "text"  : "Carry a portable charger or book on-demand mobile EV charging anytime you need it."
                }
            },
            {
                "@type" : "Question",
                "name"  : "6. Is on-demand EV charging more expensive than using a public station?",
                "acceptedAnswer": {
                    "@type" : "Answer",
                    "text"  : "There is a small convenience fee in addition to the standard charging rates for public EV charging stations."
                }
            }
        ]
    }

  return (
    <div className={`container`}>
        <FaqCard title={"Frequently Asked Questions"} faqArray={faqSection.mainEntity}/>
    </div>
  )
}

export default FAQ;