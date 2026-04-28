import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    content : `The whole flow happens through the app, with clear booking confirmations on both sides. PlusX doesn't charge \nanything to list a charger and isn't part of any arrangement between users, we\n just connect EV owners who want to help each other.`,
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
