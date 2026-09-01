import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    content : `Until your charger is installed, <a href="/ev-breakdown-assistance" target="_blank">24/7 EV breakdown assistance</a> covers you anywhere in Dubai.`,
    primaryButtons  : [
      {
        type: "whatsapp",
        text: "24/7 EV Breakdown Assistance",
        // isRSA: true,
      },
    ]
  },
];

function PublicChargingIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} content={section.content} primaryButtons={section.primaryButtons} />
      ))}
    </>
  );
}

export default PublicChargingIntro;
