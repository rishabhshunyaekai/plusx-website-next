import SecondaryHeading from '@/sharedComponents/heading/secondaryHeading';
import FAQs             from '@/sharedComponents/faqs/faqs';

function PublicChargingFaqs() {

  const publicCharging = {
    "@context"  : "https://schema.org",
    "@type"     : "publicChargingFAQs",
    "mainEntity": [
        {
            "@type" : "Question",
            "name"  : "1. Where can I charge my Tesla in Dubai?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "You can charge your Tesla at DEWA Green chargers, malls, petrol stations, and public EV hubs across Dubai."
            }
        },
        {
            "@type" : "Question",
            "name"  : "2. Which is the best app to find EV charging stations in Dubai?",
            "acceptedAnswer": {
            "@type" : "Answer",
            "text"  : "PlusX is one of the best EV charging apps in Dubai, helping you quickly find nearby stations with real-time availability and easy navigation."
            }
        },
        {
            "@type" : "Question",
            "name"  : "3. Are EV charging stations open 24/7 in Dubai?",
            "acceptedAnswer": {
            "@type" : "Answer",
            "text"  : "Yes, most public charging stations in Dubai operate 24/7, making it convenient to charge your EV anytime, day or night."
            }
        },
        {
            "@type" : "Question",
            "name"  : "4. Do all EVs work with DEWA Green chargers?",
            "acceptedAnswer": {
            "@type" : "Answer",
            "text"  : "Most EVs are compatible with DEWA Green chargers, but it’s best to check your vehicle’s connector type before using a public charger."
            }
        },
        {
            "@type" : "Question",
            "name"  : "5. Are there free EV charging stations in Dubai?",
            "acceptedAnswer": {
            "@type" : "Answer",
            "text"  : `Some stations in Dubai offer free charging, especially DEWA chargers for registered EV Green Charger users, though availability may vary.`
            }
        },
        {
            "@type" : "Question",
            "name"  : "6. Which charging stations in Dubai have fast chargers?",
            "acceptedAnswer": {
            "@type" : "Answer",
            "text"  : `Fast chargers are available at key locations such as DEWA hubs, shopping malls, and select petrol stations across Dubai.`
            }
        },
        {
            "@type" : "Question",
            "name"  : "7. How long does it take to charge an EV at a public station in Dubai?",
            "acceptedAnswer": {
            "@type" : "Answer",
            "text"  : `Charging time depends on charger type; fast chargers take 30–45 minutes, while standard AC chargers may take a few hours.`
            }
        }
    ]
  }

  return (
    <section className={`container`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(publicCharging) }} />
        <SecondaryHeading title={"FAQ's"}/>
        <FAQs faqs={publicCharging.mainEntity}/>
    </section>
  )
}

export default PublicChargingFaqs;