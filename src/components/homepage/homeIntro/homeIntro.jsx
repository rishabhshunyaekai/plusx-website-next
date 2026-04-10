import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    content: "PlusX Electric is an EV charging services company in Dubai that makes owning an electric vehicle simple and hassle-free. Need your\n EV charged? We bring a charger to your location. Stuck with a dead battery on Sheikh Zayed Road or in Dubai Marina? We come to \nyou and charge it on the spot. Want a charger at home or in your villa? We install it. Need insurance? We help you find the best\n plan, all from one app. No need to call different companies for different problems. Thousands of EV owners across \nthe UAE already count on PlusX Electric, and you can too.",
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
