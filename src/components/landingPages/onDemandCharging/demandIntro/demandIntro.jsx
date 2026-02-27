import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    title   : "On-Demand EV Charging Service in Dubai",
    content : `Running low on battery? No need to look for a ev charging station. With PlusX Electric’s On Demand EV Charging Service \nin Dubai, we bring the charger to you. Whether you’re at home, work, or stranded roadside, our mobile EV \ncharging pod reaches your location within minutes — so you’re never left waiting or worrying.`,
  
    secondTitle      : "What Is On-Demand EV Charging?",
    secondaryContent : `It’s simple — instead of driving to a charging point, we deliver power to your parked car using our portable EV chargers. \nIt’s the easiest and fastest way to recharge your electric car anywhere in Dubai.`,
  },
];

function OnDemandIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} additionalContent={section.additionalContent}
          secondTitle={section.secondTitle} secondaryContent={section.secondaryContent} extraContent={section.extraContent} />
      ))}
    </>
  );
}

export default OnDemandIntro;
