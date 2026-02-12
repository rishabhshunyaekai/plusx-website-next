import SecondaryHeading from '@/sharedComponents/heading/secondaryHeading';
import FAQs             from '@/sharedComponents/faqs/faqs';

function InsuranceFaqs() {

  const insurance = {
    "@context"  : "https://schema.org",
    "@type"     : "InsuranceFAQs",
    "mainEntity": [
        {
            "@type" : "Question",
            "name"  : "1. Is EV insurance in UAE more expensive than petrol car insurance?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "EV insurance pricing depends on the vehicle value, repair costs, driving history, and coverage type. You can compare options in the PlusX App to find the best fit for your budget."
            }
        },
        {
            "@type" : "Question",
            "name"  : "2. What’s the difference between comprehensive and third-party EV insurance in UAE?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Third-party covers damage to others, while comprehensive typically adds cover for your EV as well (subject to policy terms). Comparing both helps you choose the right protection level."
            }
        },
        {
            "@type" : "Question",
            "name"  : "3.	Can I get EV insurance in UAE for GCC and Non-GCC vehicles?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes, EV insurance may be available for both GCC and Non-GCC vehicles, though eligibility, pricing, and coverage options can vary by insurer."
            }
        },
        {
            "@type" : "Question",
            "name"  : "4.	What documents are required to buy EV insurance in UAE?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Usually you’ll need basic owner and vehicle details (commonly Emirates ID and vehicle registration/mulkiya). Requirements can vary by insurer and vehicle type."
            }
        },
        {
            "@type" : "Question",
            "name"  : "5.	How do I get EV insurance quotes in UAE using the PlusX App?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Open the PlusX App, go to EV Insurance, submit your details, compare plan options (powered by Policybazaar), and buy your policy in a few taps."
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