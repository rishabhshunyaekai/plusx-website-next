import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    title               : "Share Your Private EV Charger\n in Dubai & Earn",
    content             : `With PlusX Electric, EV charger owners can earn additional income by sharing their private charger \nwith other EV drivers.`,
    additionalContent   : `In many residential communities in Dubai, installing new EV chargers is not always straightforward. Power\n capacity limits, building compliance policies, and long approval processes\n can delay or prevent new installations.`,
    additionalContent2  : `PlusX Electric solves this through its Charge Sharing feature. EV owners can list their private charger on \nthe platform and make it available to other drivers during selected time slots.`,
    additionalContent3  : `Instead of adding new infrastructure, existing chargers can be securely shared within the same community.\n This improves access to chargers for EV users while allowing charger owners to \ngenerate revenue when their chargers are not in use.`,
  
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
