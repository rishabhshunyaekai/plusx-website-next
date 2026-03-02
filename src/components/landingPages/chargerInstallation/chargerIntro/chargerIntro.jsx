import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    title   : "About Charger Installation",
    content : `We offer a wide range of Level 2, fast, and super-fast chargers for residential buildings, villas, communities,\n and commercial properties. Our services include the installation and commissioning of chargers,\n ensuring they are properly set up and optimized for maximum efficiency.`,
  },
];

function chargerIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} additionalContent={section.additionalContent}
          secondTitle={section.secondTitle} secondaryContent={section.secondaryContent} extraContent={section.extraContent} />
      ))}
    </>
  );
}

export default chargerIntro;
