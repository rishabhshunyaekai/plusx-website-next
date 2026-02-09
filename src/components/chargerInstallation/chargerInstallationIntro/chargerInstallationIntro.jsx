import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    title   : "Charger Supply, Installation & Commissioning",
    content : "We offer a wide range of Level 2, fast, and super-fast chargers for residential buildings, villas, communities, \nand commercial properties. Our services include the installation and commissioning of chargers, \nensuring they are properly set up and optimized for maximum efficiency.",
  },
];

function PublicChargingIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} additionalContent={section.additionalContent} />
      ))}
    </>
  );
}

export default PublicChargingIntro;
