import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    content : `Until your charger is installed, <a href="/ev-breakdown-assistance" target="_blank">24/7 EV breakdown assistance</a> covers you anywhere in Dubai.`,
    primaryButtons  : [
      {
        type: "custom-whatsapp",
        text: "24/7 EV Breakdown Assistance",
        href: `https://api.whatsapp.com/send?phone=+971543061473&text=${"Hi PlusX Electric, \nI need emergency EV help in Dubai. Please assist."}`,
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
