import SecondaryHeading from '@/sharedComponents/heading/secondaryHeading';
import FAQs             from '@/sharedComponents/faqs/faqs';

function Faqs() {

  const tesla = {
    "@context"  : "https://schema.org",
    "@type"     : "FAQPage",
    "mainEntity": [
        {
            "@type" : "Question",
            "name"  : "My Tesla ran out of charge in Dubai. What should I do?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Turn on hazard lights, stay in a safe spot and contact PlusX via the app, WhatsApp or phone. We charge your Tesla on the spot so you can drive on without a tow."
            }
        },{
            "@type" : "Question",
            "name"  : "Can you charge a Tesla in basement parking?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes. Our mobile charging van carries its own energy and needs no socket, so we charge your Tesla in its bay, even on basement levels."
            }
        },
        {
            "@type" : "Question",
            "name"  : "My Tesla won't unlock or start. Is it the 12V battery?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Often, yes. When the low-voltage battery is drained, the screen goes black and the car stops responding even if the main battery has charge. We jump-start it on site during the same visit."
            }
        },
        {
            "@type" : "Question",
            "name"  : "Do I need an adapter for PlusX mobile charging or roadside rescue?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "No. UAE-spec Teslas use Type 2 and CCS2 ports, which our equipment supports directly."
            }
        },
        {
            "@type" : "Question",
            "name"  : "Will mobile charging harm my Tesla's battery?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "No. We charge through your Tesla's own charge port, and the car's battery management system controls the charge just as it does at any public charger."
            }
        },
        {
            "@type" : "Question",
            "name"  : "Is PlusX part of Tesla?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "No. PlusX Electric is an independent, DEWA-approved EV charging company. We charge and support Tesla vehicles alongside every other EV brand."
            }
        }
    ]
  }

  return (
    <section className={`container`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tesla) }} />
        <SecondaryHeading title={"FAQ's"}/>
        <FAQs faqs={tesla.mainEntity}/>
    </section>
  )
}

export default Faqs;