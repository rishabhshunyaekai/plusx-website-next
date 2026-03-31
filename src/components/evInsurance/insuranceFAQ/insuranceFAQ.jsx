import SecondaryHeading from '@/sharedComponents/heading/secondaryHeading';
import FAQs             from '@/sharedComponents/faqs/faqs';

function InsuranceFaqs() {

  const insurance = {
    "@context"  : "https://schema.org",
    "@type"     : "FAQPage",
    "mainEntity": [
        {
            "@type" : "Question",
            "name"  : "1. Is EV insurance more expensive in the UAE?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "EV insurance cost depends on the vehicle model and coverage. PlusX Electric helps you compare plans in the UAE to find a suitable option."
            }
        },
        {
            "@type" : "Question",
            "name"  : "2. What does EV insurance cover in the UAE?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Through PlusX Electric, you can explore EV insurance plans that may include accident damage, theft, third-party liability, and other protections."
            }
        },
        {
            "@type" : "Question",
            "name"  : "3. Does EV insurance cover battery damage?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Some EV insurance plans may include battery-related coverage. PlusX Electric helps you review policy details before requesting a quote."
            }
        },
        {
            "@type" : "Question",
            "name"  : "4. What is comprehensive EV insurance?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Comprehensive EV insurance covers damage to your vehicle and third-party liability. PlusX Electric helps you compare comprehensive plans easily."
            }
        },
        {
            "@type" : "Question",
            "name"  : "5. What is third-party EV insurance in the UAE?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Third-party insurance covers damage caused to others. PlusX Electric lets you compare third-party EV insurance options in the UAE."
            }
        },
        {
            "@type" : "Question",
            "name"  : "6. Why is EV car insurance sometimes more expensive than regular car insurance?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "EV insurance costs can vary depending on the plan you choose, the coverage included, and the insurance provider. PlusX Electric helps you compare options to find a suitable plan."
            }
        }
    ]
  }

  return (
    <section className={`container`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(insurance) }} />
        <SecondaryHeading title={"FAQ's"}/>
        <FAQs faqs={insurance.mainEntity}/>
    </section>
  )
}

export default InsuranceFaqs;