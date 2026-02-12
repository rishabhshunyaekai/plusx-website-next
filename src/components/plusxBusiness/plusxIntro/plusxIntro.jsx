import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    title   : "Solutions Designed to Scale",
    content : "At PlusX Electric, our EV solutions architects meticulously plan, design, and implement bespoke EV charging \nsolutions tailored to meet the specific requirements of businesses across diverse sectors. We ensure \nour solutions are optimized for unique challenges and opportunities in sectors like",
  },
];

function PlusxBusinessIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} additionalContent={section.additionalContent} />
      ))}
    </>
  );
}

export default PlusxBusinessIntro;
