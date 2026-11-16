import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    // title   : `We Know Installing an EV Charger in an Apartment Is Different`,
    content : `PlusX Electric is a DEWA-approved charge point operator that provides Tesla EV charging as a service across Dubai. We charge \nyour Tesla where it is parked, rescue it when the battery is drained, and install a home charger \nif you want to charge overnight.`,
  },
];

function TeslaChargingIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} additionalContent={section.additionalContent} />
      ))}
    </>
  );
}

export default TeslaChargingIntro;
