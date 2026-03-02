import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    title   : "About EV Roadside Assistance",
    content : `PlusX Electric Emergency EV Charging gives you quick charging right where you are when your battery is drained, with no towing or \nwaiting. Just use the PlusX App, request our Emergency EV Charging Service, and an EV expert professional will come\n to your spot. We have the necessary capabilities to help you get moving again, whether your EV needs\n a fast boost or a full jumpstart in case of a drained battery. It combines speed, and convenience \nso that you never get stuck. We deliver reliable roadside charging anywhere in Dubai \nwhether you are stuck at your home, office or on the road.`,
  },
];

function RSAIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} additionalContent={section.additionalContent}
          secondTitle={section.secondTitle} secondaryContent={section.secondaryContent} extraContent={section.extraContent} />
      ))}
    </>
  );
}

export default RSAIntro;
