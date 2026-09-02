import SecondaryHeading from '@/sharedComponents/heading/secondaryHeading';
import FAQs             from '@/sharedComponents/faqs/faqs';

function RSAFaqs() {

  const rsa = {
    "@context"  : "https://schema.org",
    "@type"     : "FAQPage",
    "mainEntity": [
        {
            "@type" : "Question",
            "name"  : "What happens if my EV battery dies completely?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "If your EV battery is fully drained, our team provides on-site charging up to 10 kWh — approximately 50 to 70 km of range depending on your vehicle model and driving conditions. This is typically enough to reach home or the nearest public charging station anywhere within Dubai. In most cases, you'll be driving again within 45 to 90 minutes of our arrival."
            }
        },
        {
            "@type" : "Question",
            "name"  : "Do you tow electric vehicles?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "We avoid towing wherever possible. In most cases, on-site charging or a 12V jump-start is enough to get your EV moving again. Towing is used only if charging or on-site recovery is genuinely not feasible. When towing is necessary, we use flatbed transport with proper EV-safe protocols to protect the drivetrain and battery pack."
            }
        },{
            "@type" : "Question",
            "name"  : "How fast can PlusX Electric reach me in Dubai?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Our average response time across 1,150+ rescues is under 60 minutes, depending on your location, traffic conditions, and other unforeseen factors. In most central Dubai areas such as Downtown, Marina, JLT, and Business Bay, response times are typically faster."
            }
        },
        {
            "@type" : "Question",
            "name"  : "Is jump-start service included in EV roadside assistance?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes. If your 12V auxiliary battery is dead — which is the cause of roughly half of all EV breakdowns in Dubai — we provide jump-start service as part of the EV roadside assistance offering. Our technicians carry 12V diagnostic and jump-start equipment calibrated specifically for EV electrical systems on every rescue van. Many drivers don't realize the 12V battery exists until it fails. When it does, the car appears completely dead even if the main battery pack is fully charged. We diagnose this in minutes and resolve it on the spot."
            }
        },
        {
            "@type" : "Question",
            "name"  : "Is EV roadside assistance available 24/7 in Dubai?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes. Our EV roadside assistance service is available 24 hours a day, 7 days a week, 365 days a year, anywhere in Dubai. Breakdowns don't follow business hours, and neither do we."
            }
        },
        {
            "@type" : "Question",
            "name"  : "How can I book EV roadside assistance?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "You can book the service instantly by downloading the PlusX Electric app, adding your location details on the RSA booking screen, and confirming your request. Your confirmed quote is shown before dispatch. You can also call us directly on +971 54 306 1473 or reach us via WhatsApp if you're already stranded and need immediate help."
            }
        },
        {
            "@type" : "Question",
            "name"  : "How much charge does PlusX deliver during an EV rescue?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "We deliver up to 10 kWh of on-site charge using DEWA-approved portable equipment. In real-world Dubai conditions with AC running, 10 kWh provides approximately 50 to 70 km of driving range. For context, Dubai Marina to Downtown is about 20 km, JLT to Dubai Airport is about 25 km, and Deira to Dubai South is about 45 km. A 10 kWh rescue charge covers virtually any within-Dubai journey."
            }
        },
        {
            "@type" : "Question",
            "name"  : "What is the difference between EV breakdown assistance and regular roadside assistance?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Regular roadside assistance is designed for petrol and diesel vehicles — they carry fuel, jump-start cables for combustion engines, and standard tow equipment. EV breakdown assistance is built specifically for electric vehicles. It includes portable EV charging equipment, 12V auxiliary battery diagnostics and jump-start tools calibrated for EV electrical systems, and technicians trained in high-voltage safety protocols. Traditional roadside services often default to towing, which can damage an EV's drivetrain if done incorrectly. Our service resolves most breakdowns on-site without any towing."
            }
        },
        {
            "@type" : "Question",
            "name"  : "Can PlusX reach my EV inside a building parking garage?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes. Our rescue vans are built on standard commercial vehicle chassis and fit within the ceiling clearance limits of most building parking garages in Dubai — including underground levels (B1, B2, B3), podium parking, and multi-storey structures. Standard flatbed tow trucks are typically 2.5 meters tall and cannot enter most building parking in Dubai towers. Whether your EV breaks down in building parking in Dubai Marina, JLT, Business Bay, Downtown, JVC, or any other tower area, we can reach you."
            }
        },
        {
            "@type" : "Question",
            "name"  : "How much does EV breakdown assistance cost compared to towing?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "PlusX EV breakdown assistance starts from AED 185* + VAT. A standard flatbed tow within Dubai typically costs AED 500 to AED 800 for the tow alone, plus additional diagnostic fees (AED 200 to AED 400) and workshop charges. In most cases, our on-site service costs 60 to 75 percent less than a tow-based resolution, and the problem is solved in 45 to 90 minutes instead of 3 to 6 hours."
            }
        },
        {
            "@type" : "Question",
            "name"  : "What causes an EV to break down even when the battery shows charge?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "The most common cause is a dead 12V auxiliary battery. Every EV has a small 12-volt battery that powers the car's computer, door locks, dashboard, and startup sequence. When this battery fails — which happens faster in Dubai's extreme heat, especially when the car has been sitting in building parking for several days — the car won't start even if the main battery pack is fully charged. The dashboard stays dark and the car appears completely dead. Our technicians diagnose this in minutes and jump-start the 12V on the spot, getting you back on the road without any charging or towing needed."
            }
        },
        {
            "@type" : "Question",
            "name"  : "Do you provide EV breakdown assistance for fleets and corporate vehicles?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : `Yes. We offer fleet packages with priority response times, dedicated account management, and subscription-based pricing for businesses managing multiple EVs across Dubai. Fleet clients benefit from consolidated billing, breakdown data tracking, and the option to bundle roadside assistance with our <a href="/mobile-ev-charging-dubai" target="_blank">doorstep charging</a> and <a href="/ev-pickup-dropoff-charging-service" target="_blank">pickup-dropoff</a> services. Contact us at <a href="tel:+971542796424">+971 54 279 6424</a> to discuss fleet plans.`
            }
        },
    ]
  }

  return (
    <section className={`container`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(rsa) }} />
        <SecondaryHeading title={"FAQ's"}/>
        <FAQs faqs={rsa.mainEntity}/>
    </section>
  )
}

export default RSAFaqs;