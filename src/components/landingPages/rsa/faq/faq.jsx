import FaqCard from '@/sharedComponents/landingPagesComponents/faqCard/faqCard';

const FAQ = () => {

    const faqSection = {
        "@context": "https://schema.org",
        "@type": "emergencyRSAQuestions",
        "mainEntity": [
            {
            "@type" : "Question",
            "name"  : "1. Can someone come and charge my EV on the road in Dubai if my battery is drained?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes, PlusX provides roadside services in Dubai that can deliver you charging or jump-start help in less than an hour."
            }
        },
        {
            "@type" : "Question",
            "name"  : "2. Who to call if my EV runs out of charge in Dubai?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "For fast roadside EV charging and experienced help sent straight to you, call PlusX at +971 54 279 6424 or +971 4 871 4175."
            }
        },
        {
            "@type" : "Question",
            "name"  : "3. How long does it take for roadside EV charging to arrive?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "When you call PlusX for roadside assistance, you can expect expert help to arrive within an hour."
            }
        },
        {
            "@type" : "Question",
            "name"  : "4. How to avoid EV battery draining in hot weather in Dubai?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Limit how often you cool down the cabin, use the AC wisely, park in the shade, and employ PlusX charge-up services when you need them."
            }
        },
        {
            "@type" : "Question",
            "name"  : "5. Are there any companies that provide jump start service?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes, PlusX makes jump-starts for electric vehicles that are safe and work with high-voltage systems, so your battery and electronics are safe."
            }
        },
        {
            "@type" : "Question",
            "name"  : "6. Who should I call if my electric car stops in Dubai- roadside assistance or towing?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Call PlusX first. Our mobile equipment can fix most problems with EV batteries on the spot. You should think about towing if charging on-site doesn't work for you."
            }
        },
        {
            "@type" : "Question",
            "name"  : "7. What is the cost of emergency EV charging in Dubai?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "There are no hidden call-out fees for PlusX roadside charging, which costs AED 145 plus VAT (Jump Start Included)."
            }
        },
        {
            "@type" : "Question",
            "name"  : "8. How much driving range does an emergency EV charging service provide in Dubai?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "PlusX provides you up to 10 kWh or about 50 km of range, and if you need it, it can jump-start your car to get you to the nearest fast charger."
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