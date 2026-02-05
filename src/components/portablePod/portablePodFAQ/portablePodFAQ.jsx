import SecondaryHeading from '@/sharedComponents/heading/secondaryHeading';
import FAQs             from '@/sharedComponents/faqs/faqs';

function PortablePodFaqs() {

  const portablePod = {
    "@context": "https://schema.org",
    "@type": "PortablePowerPodQuestions",
    "mainEntity": [
        {
            "@type" : "Question",
            "name"  : "1. Can someone come and charge my EV at home or office in Dubai?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes, PlusX has portable pod charging that brings electricity to your car no matter where you are, whether you're at home, at work, or somewhere else convenient."
            }
        },
        {
            "@type" : "Question",
            "name"  : "2. How do I book a doorstep EV charging session?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Making a reservation is easy! You can call PlusX at +971 54 279 6424 or +971 4 871 4175, or you can set up your session online. Our team will come to your location at the time you set."
            }
        },
        {
            "@type" : "Question",
            "name"  : "3. How long does a portable pod charging session take?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "The portable pod can give your EV an 80% charge in about 4-5 hours."
            }
        },
        {
            "@type" : "Question",
            "name"  : "4. Is portable pod charging safe for all EV models?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Of course. PlusX portable pods are compatible with all major EV models and help keep your battery safe. The Pod charges EVs through different connectors."
            }
        },
        {
            "@type" : "Question",
            "name"  : "5. What is the cost of doorstep EV charging in Dubai?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : `Convenience Charge: Applicable as per booking Transparent pricing: AC ₹0.70/kWh, DC ₹1.20/kWh + convenience charge. Simple, reliable, and hassle-free EV charging.`
            }
        }
    ]
  }

  return (
    <section className={`container`}>
        <SecondaryHeading title={"FAQ's"}/>
        <FAQs faqs={portablePod.mainEntity}/>
    </section>
  )
}

export default PortablePodFaqs;