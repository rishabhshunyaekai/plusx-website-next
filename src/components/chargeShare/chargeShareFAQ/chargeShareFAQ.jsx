import SecondaryHeading from '@/sharedComponents/heading/secondaryHeading';
import FAQs             from '@/sharedComponents/faqs/faqs';

function chargeShareFAQ() {

  const chareShare = {
    "@context"  : "https://schema.org",
    "@type"     : "FAQPage",
    "mainEntity": [
        {
            "@type" : "Question",
            "name"  : "1. Who can share a private EV charger?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Any EV charger owner can list their charger through PlusX Electric and share it with nearby EV drivers during available time slots."
            }
        },
        {
            "@type" : "Question",
            "name"  : "2. Is it safe to share my EV charger with others?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes. PlusX Electric manages bookings and usage through the app, ensuring controlled access to your charger."
            }
        },{
            "@type" : "Question",
            "name"  : "3. How do I earn by sharing my EV charger?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "PlusX Electric allows charger owners to list availability and earn income when EV drivers book charging sessions."
            }
        },
        {
            "@type" : "Question",
            "name"  : "4. Can I choose when my charger is available?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "Yes. PlusX Electric lets you set time slots so your EV charger is only shared when you want it to be."
            }
        },
        {
            "@type" : "Question",
            "name"  : "5. Who can use shared EV chargers in my community?",
            "acceptedAnswer": {
                "@type" : "Answer",
                "text"  : "EV drivers using the PlusX Electric app can discover and book available private chargers listed in their nearby area."
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