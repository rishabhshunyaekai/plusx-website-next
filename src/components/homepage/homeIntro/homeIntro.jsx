import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    content:
      "PlusX Electric doesn’t just provide EV charging in Dubai, we make EV ownership easy and smooth with a complete range of services. \nFrom doorstep EV charging and EV roadside assistance to pickup & drop-off charging, EV insurance, and more,\n everything is available in one place through the PlusX Electric App.",
  },
];

function HomeIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} />
      ))}
    </>
  );
}

export default HomeIntro;
