import SecondaryHeading from '@/sharedComponents/heading/secondaryHeading';
import FAQs             from '@/sharedComponents/faqs/faqs';

function PlusxAppFaqs() {

  const plusxAppFaqs = {
    "@context"  : "https://schema.org",
    "@type"     : "FAQPage",
    "mainEntity": [
        {
            "@type" : "Question",
            "name"  : "Which app is best for EV charging in Dubai?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "It depends what you need. The DEWA Smart App and DubaiNow are the official apps for DEWA's public Green Chargers. UAEV covers the nationwide network, and PlugShare is a crowd-sourced map. PlusX Electric is the app for EV services — doorstep charging, roadside rescue, installation and charger purchase, which the network apps don't offer."
            }
        },
        {
            "@type" : "Question",
            "name"  : "Can I get my EV charged at home through an app in Dubai?",
            "acceptedAnswer": {
            "@type" : "Answer",
            "text"  : "Yes. Book mobile charging in the PlusX Electric app, drop a pin at your home, villa or building parking, and a portable charger is brought to your car. You don't need a charger installed to use it, and you don't need to move the vehicle."
            }
        },
        {
            "@type" : "Question",
            "name"  : "Does the PlusX Electric app work for EV roadside assistance?",
            "acceptedAnswer": {
            "@type" : "Answer",
            "text"  : "Yes. Emergency roadside assistance is bookable 24/7 from the app. A rescue unit reaches your location, charges your EV on the spot and jump-starts the 12V battery if that turns out to be the cause. In most cases the car is moving again without a tow."
            }
        },
        {
            "@type" : "Question",
            "name"  : "Is the PlusX Electric app free?",
            "acceptedAnswer": {
            "@type" : "Answer",
            "text"  : "Yes. The app is free to download on iOS and Android, and free to use. You only pay for the service you book, and the price is shown in the app before you confirm."
            }
        },
        {
            "@type" : "Question",
            "name"  : "How do I book a service on the PlusX Electric app?",
            "acceptedAnswer": {
            "@type" : "Answer",
            "text"  : `Download the app, sign up with your mobile number and add your car. Choose the service you need, drop a pin at your location, pick a time and confirm. You can then track the technician in real time and pay in the app when the job is done.`
            }
        },
        {
            "@type" : "Question",
            "name"  : "Which EVs does the PlusX Electric app support?",
            "acceptedAnswer": {
            "@type" : "Answer",
            "text"  : `All major EV brands sold in the UAE, including Tesla, BYD, BMW, Mercedes, Audi, Nissan, MG and VinFast. AC charging uses Type 2 and DC uses CCS2, which covers nearly every electric car on Dubai roads.`
            }
        },
        {
            "@type" : "Question",
            "name"  : "Can I list my own charger on the PlusX Electric app?",
            "acceptedAnswer": {
            "@type" : "Answer",
            "text"  : `Yes. PlusX Charge Share lets you list a private home or building charger. The same feature lets you find private chargers near you, which is useful in areas with little public charging.`
            }
        },
        {
            "@type" : "Question",
            "name"  : "Is the PlusX Electric app only for car owners?",
            "acceptedAnswer": {
            "@type" : "Answer",
            "text"  : `No. Businesses and fleet operators use the app to book charging, installation and roadside support across multiple vehicles, with all bookings and invoices under one account.`
            }
        }
    ]
  }

  return (
    <section className={`container`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(plusxAppFaqs) }} />
        <SecondaryHeading title={"FAQ's"}/>
        <FAQs faqs={plusxAppFaqs.mainEntity}/>
    </section>
  )
}

export default PlusxAppFaqs;