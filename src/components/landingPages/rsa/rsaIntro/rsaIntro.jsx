import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    secondTitle       : "Emergency EV Charging in Dubai — On the Spot, No Towing",
    secondaryContent  : `EV battery dead? Stuck on the road? EV not starting? PlusX Electric brings mobile EV charging directly to your location — anywhere in\n Dubai, 24/7. Skip the tow truck. Skip the wait. One call or WhatsApp message, share your location, and our EV rescue team reaches \nyou within 60 minutes* with enough charge to get you moving, or a full jump-start if your battery is completely drained. \nWhether you're stranded at home, in the office parking lot, or on Sheikh Zayed Road, we've got you covered. \nCompatible with all major EV brands including Tesla, BMW, Audi, Porsche, Mercedes, Lucid, and more.`,
    secondaryButtons  : [
      {
        type: "whatsapp",
        text: "Get Help on WhatsApp",
        isRSA: true,
      },
    ]
  },
];

function RSAIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} secondTitle={section.secondTitle} secondaryContent={section.secondaryContent} secondaryButtons={section.secondaryButtons} />
      ))}
    </>
  );
}

export default RSAIntro;
