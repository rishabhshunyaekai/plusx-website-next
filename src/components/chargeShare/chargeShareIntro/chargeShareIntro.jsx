import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    title               : "Share Your Private EV Charger in Dubai",
    content             : `Many EV owners across Dubai live in apartment buildings or communities where installing a private charger isn't possible, power capacity \nis limited, building approvals take months, and not every property is set up for it. At the same time, plenty of villa and townhouse\n owners have a charger sitting unused most of the day. EV Charge Share is a community feature inside the PlusX Electric \napp that connects these two groups. Charger owners can list their charger and choose when it's available. Other \nEV owners nearby can find and request access. It's a peer-to-peer way for EV owners to help\n each other charge, without waiting for new infrastructure.`,
  
    secondTitle         : `What is Private EV Charger Sharing?`,
    secondaryContent    : `Private <a href="/ev-chargers" target="__blank">EV charger</a> sharing is a community feature inside the PlusX Electric app that lets EV owners with a private charger \nmake it available to fellow EV owners during the times they're not using it themselves.`,
    extraContent        : `Through the PlusX Electric platform:`,
  },
];

function ChargeShareIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} additionalContent={section.additionalContent} additionalContent2={section.additionalContent2} 
          additionalContent3={section.additionalContent3} secondTitle={section.secondTitle} secondaryContent={section.secondaryContent} extraContent={section.extraContent} />
      ))}
    </>
  );
}

export default ChargeShareIntro;
