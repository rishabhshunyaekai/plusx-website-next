import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    title               : "Share Your Private EV Charger\n in Dubai & Earn",
    content             : `PlusX Electric’s Charge Sharing feature enables EV owners within residential communities to share private EV chargers with fellow residents \nor the general public. This provides a practical and scalable solution for communities where many residents are unable to install \nprivate chargers due to limited power capacity, compliance constraints, or lengthy approval processes.`,
    additionalContent2  : `By unlocking existing chargers for shared use, Charge Sharing improves access to reliable EV charging, reduces range anxiety, \nand helps communities accelerate EV adoption without additional infrastructure investment.`,
    // additionalContent3  : `Instead of adding new infrastructure, existing chargers can be securely shared within the same community.\n This improves access to chargers for EV users while allowing charger owners to \ngenerate revenue when their chargers are not in use.`,
  
    secondTitle         : `What Is Private EV Charger Sharing?`,
    secondaryContent    : `Private EV charger sharing means that people who already have a home charger can share it with other \nEV owners at specific time intervals.`,
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
