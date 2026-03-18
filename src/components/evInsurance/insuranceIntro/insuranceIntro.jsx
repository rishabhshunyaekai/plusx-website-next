import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    title   : `EV Car Insurance UAE – Compare \nand Buy Online`,
    content : `PlusX Electric is partnering with Policybazaar to help you compare and book EV insurance in the UAE in just a few minutes,\n directly from the PlusX App. Whether you’re insuring one electric vehicle or an entire fleet, we make it easy to \nexplore suitable plans, share your details, and choose the best option without back-and-forth calls.`,
    secondTitle : `Seamless EV Insurance Access`,
    secondaryContent : `PlusX Electric provides access to reliable insurance companies in the UAE. You do not need to call several insurers separately \nto do this. You can simply buy EV insurance online, but you can also compare existing offers on the same site.`, 
  },
];

function InsuranceIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} additionalContent={section.additionalContent} 
          secondTitle={section.secondTitle} secondaryContent={section.secondaryContent} />
      ))}
    </>
  );
}

export default InsuranceIntro;
