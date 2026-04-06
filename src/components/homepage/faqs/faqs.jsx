import SecondaryHeading from '@/sharedComponents/heading/secondaryHeading';
import FAQs             from '@/sharedComponents/faqs/faqs';

function HomepageFaq() {

  const home = {
    "@context"  : "https://schema.org",
    "@type"     : "FAQPage",
    "mainEntity": [
        {
            "@type" : "Question",
            "name"  : "What is PlusX Electric?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "PlusX Electric is an electric vehicle charging services company in Dubai. One app for all your EV needs from charging, breakdown assistance, charger installation, and insurance."
            }
        },
        {
            "@type" : "Question",
            "name"  : "What areas does PlusX Electric cover?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "PlusX Electric currently serves all major areas across Dubai including Downtown, Dubai Marina, Business Bay, JLT, Palm Jumeirah, JVC, Al Quoz, and Dubai South. Charger installation is available across the UAE."
            }
        },{
            "@type" : "Question",
            "name"  : "Which EV brands are supported by PlusX Electric?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "PlusX Electric supports all major EV brands including Tesla, BYD, BMW, Mercedes, Audi, Nissan, MG, VinFast, Porsche, Hyundai, and Kia."
            }
        },
        {
            "@type" : "Question",
            "name"  : "Is PlusX Electric available 24/7?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes. You can book any EV service through the PlusX Electric app round the clock — 24 hours a day, 7 days a week, including weekends and public holidays."
            }
        },
        {
            "@type" : "Question",
            "name"  : "How do I book a service on PlusX Electric?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Download the PlusX Electric app from the App Store or Google Play, select the service you need, enter your location, and confirm your booking. It takes less than 30 seconds."
            }
        },
    ]
  }

  return (
    <section className={`container`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(home) }} />
        <SecondaryHeading title={"FAQ's"}/>
        <FAQs faqs={home.mainEntity}/>
    </section>
  )
}

export default HomepageFaq;