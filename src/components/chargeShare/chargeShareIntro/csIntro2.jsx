import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    // title  : "Share Your Private EV Charger in Dubai & Earn",
    content : `Enabling the sharing of private EV chargers in a secure way, PlusX Electric will \nform a viable and future-proof charging ecosystem.`,
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
