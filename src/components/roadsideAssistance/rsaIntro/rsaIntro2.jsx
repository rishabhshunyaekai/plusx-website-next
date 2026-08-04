import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    title   : "EV Battery Dead in Dubai? Here's What Happens",
    content : `Around half of all electric car breakdowns we attend in Dubai trace back to the 12V battery, not the main traction pack. It catches people out because the symptoms look catastrophic: the car won't wake up, the screen is black, the doors may not unlock, and the charge \npercentage is irrelevant because the car can't boot to use it. Your traction battery could be at 80% \nand the car will still be immobile.`,
  },
];

function RSAIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} />
      ))}
    </>
  );
}

export default RSAIntro;
