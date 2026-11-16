import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    title   : `Disclaimer`,
    content : `Tesla, Model 3, Model Y, Model S, Model X, Supercharger and Wall Connector are trademarks of Tesla, Inc. PlusX Electric is an \nindependent service provider and is not affiliated with, endorsed by or sponsored by Tesla, Inc.`,
  },
];

function Disclaimer() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} additionalContent={section.additionalContent} />
      ))}
    </>
  );
}

export default Disclaimer;
