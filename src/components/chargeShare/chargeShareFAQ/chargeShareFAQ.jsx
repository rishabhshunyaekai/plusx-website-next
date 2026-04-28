import SecondaryHeading from '@/sharedComponents/heading/secondaryHeading';
import FAQs             from '@/sharedComponents/faqs/faqs';

function chargeShareFAQ() {

  const chareShare = {
    "@context"  : "https://schema.org",
    "@type"     : "FAQPage",
    "mainEntity": [
        {
            "@type" : "Question",
            "name"  : "Who can share a private EV charger?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Any EV charger owner can list their charger through the PlusX Electric app and make it available to fellow EV owners during the time slots they choose."
            }
        },
        {
            "@type" : "Question",
            "name"  : "Does it cost anything to list my charger?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "No. Listing your charger on the PlusX Electric app is completely free. There are no setup fees, listing fees, or commissions."
            }
        },{
            "@type" : "Question",
            "name"  : "Is there any payment involved between users?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "PlusX Electric is a community connector — we don't charge for the service and we're not part of any arrangement between charger owners and the EV owners who use them. Anything exchanged between two users is entirely between them."
            }
        },
        {
            "@type" : "Question",
            "name"  : "Who can use shared EV chargers in my community?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Any EV owner using the PlusX Electric app can discover available private chargers listed nearby and request access from the charger owner."
            }
        },
        {
            "@type" : "Question",
            "name"  : "Can I stop sharing my charger anytime?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes. You can pause your listing or remove it from the app at any time."
            }
        },
    ]
  }

  return (
    <section className={`container`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(chareShare) }} />
        <SecondaryHeading title={"FAQ's"}/>
        <FAQs faqs={chareShare.mainEntity}/>
    </section>
  )
}

export default chargeShareFAQ;