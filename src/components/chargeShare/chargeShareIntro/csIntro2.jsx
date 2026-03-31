import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    // title  : "Share Your Private EV Charger in Dubai & Earn",
    content : `By enabling EV owners to share chargers securely, PlusX Electric is helping \ncreate a collaborative and future-ready charging ecosystem.`,
  },
];

function Intro2() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} additionalContent={section.additionalContent} />
      ))}
    </>
  );
}

export default Intro2;
