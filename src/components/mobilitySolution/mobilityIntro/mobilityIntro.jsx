import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    title   : "What is PlusX Mobility?",
    content : `PlusX Mobility is a new-age mobility solutions company, committed to advancing sustainable \nand efficient transportation for individuals, colleges, \nuniversities, and communities.`,
  },
];

function MobilityIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} additionalContent={section.additionalContent} />
      ))}
    </>
  );
}

export default MobilityIntro;
