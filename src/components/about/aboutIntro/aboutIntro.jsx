import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    title   : "Who We Are?",
    content : "PlusX Electric is dedicated to revolutionizing the electric vehicle (EV) industry, making EV ownership effortless and convenient for a seamless transition to sustainable transportation. We are committed to driving this vision forward through our innovative products and services, catering to all needs of EV owners and making sustainable transportation a reality for everyone.",
  },
];

function AboutIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} additionalContent={section.additionalContent} />
      ))}
    </>
  );
}

export default AboutIntro;
