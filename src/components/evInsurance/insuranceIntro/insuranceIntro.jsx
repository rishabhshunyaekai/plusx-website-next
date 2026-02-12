import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    title   : "EV Insurance UAE",
    content : `PlusX Electric is partnering with Policybazaar to help you compare and book EV insurance in the UAE in just a few minutes,\n directly from the PlusX App. Whether you’re insuring one electric vehicle or an entire fleet, we make it easy to \nexplore suitable plans, share your details, and choose the best option without back-and-forth calls.`,
  },
];

function InsuranceIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} additionalContent={section.additionalContent} />
      ))}
    </>
  );
}

export default InsuranceIntro;
