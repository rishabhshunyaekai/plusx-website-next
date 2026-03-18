import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    // title               : "Share Your Private EV Charger in Dubai & Earn",
    content             : `The entire procedure well-organized and transparent. All of this can happen easily through the\n PlusX Electric application.`,
    additionalContent   : `The model aids in enhancing the utilization of available charging infrastructure in Dubai.`,
  },
];

function Intro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} additionalContent={section.additionalContent} />
      ))}
    </>
  );
}

export default Intro;
