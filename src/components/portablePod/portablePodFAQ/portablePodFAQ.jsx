import SecondaryHeading from '@/sharedComponents/heading/secondaryHeading';
import FAQs             from '@/sharedComponents/faqs/faqs';

function PortablePodFaqs() {

  const portablePod = {
    "@context"  : "https://schema.org",
    "@type"     : "FAQPage",
    "mainEntity": [
        {
            "@type" : "Question",
            "name"  : "What is mobile EV charging in Dubai?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Mobile EV charging is an on-demand service where a Portable Power Pod is brought directly to your EV at your home, office, or parking location — no need to visit a public station."
            }
        },
        {
            "@type" : "Question",
            "name"  : "How do I book mobile EV charging in Dubai?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Download the PlusX Electric app, select Portable Charger, choose your time slot, and our team will arrive at your location."
            }
        },
        {
            "@type" : "Question",
            "name"  : "Is there a call-out fee for mobile EV charging in Dubai?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes. PlusX Electric charges AED 65 + VAT for delivering the Portable Power Pod to your location."
            }
        },
        {
            "@type" : "Question",
            "name"  : "How long does it take to charge an EV with a mobile charger?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "AC charging typically takes 4–5 hours to reach around 80%, depending on your EV model and battery level."
            }
        },
        {
            "@type" : "Question",
            "name"  : "Which EV brands are supported?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "All major brands, including Tesla, BYD, BMW, Mercedes, Audi, Porsche, Rolls-Royce, Cadillac, Polestar, and Lucid."
            }
        },
        {
            "@type" : "Question",
            "name"  : "Can I schedule a charging session in advance?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes. You can book an instant on-demand charge or schedule a session at a time that suits you — both through the app."
            }
        },
        {
            "@type" : "Question",
            "name"  : "Which areas in Dubai does PlusX Electric cover?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "We cover all major areas across Dubai, including Downtown Dubai, Business Bay, Dubai Marina, and JLT."
            }
        },
        {
            "@type" : "Question",
            "name"  : "I don't have a charger at home — what are my options?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Book mobile EV charging through the PlusX Electric app and get a Portable Power Pod delivered to your location — no installation needed."
            }
        }
    ]
  }

  return (
    <section className={`container`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(portablePod) }} />
        <SecondaryHeading title={"FAQ's"}/>
        <FAQs faqs={portablePod.mainEntity}/>
    </section>
  )
}

export default PortablePodFaqs;