import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    maintitle         : "EV Roadside Assistance in Dubai",
    content           : `We've rescued 1,150+ electric vehicles across Dubai. If your EV is out of charge, we charge it on the spot — up to 10 kWh, around 50 km of \nrange — so you drive away instead of being towed. If your 12V battery is dead, we jump-start it on site. EV roadside assistance \nacross Dubai, 24/7. 60-minute average arrival. From AED 185 + VAT. Our team arrives in a <a href="/mobile-ev-charging-dubai" target="_blank">mobile charging van</a>, jump-\nstarts your 12V battery if the EV is dead or inaccessible, and charges your EV on the spot. Tesla, BYD, BMW, VinFast, \nMercedes EQ, Polestar, Lucid, Porsche — 50+ models supported. Every area of Dubai, every hour of the year.`,
    additionalContent : `<i>Final price may vary based on time of service, location, and additional requirements. Confirmed quote shown in the app before dispatch.</i>`,
    primaryButtons    : [
      {
        type    : "cta",
        text    : "Call Now",
        handler : "callNowRSA",
      },
      {
        text    : "WhatsApp",
        type    : "whatsapp",
        isRSA   : true,
      },
    ],
  },
];

function RSAIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} maintitle={section.maintitle} content={section.content} additionalContent={section.additionalContent} primaryButtons={section.primaryButtons} />
      ))}
    </>
  );
}

export default RSAIntro;
