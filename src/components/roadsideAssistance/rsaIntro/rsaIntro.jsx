import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    title   : "EV Roadside Assistance Service in Dubai",
    content : `Getting stranded with an electric vehicle can be stressful especially in Dubai’s heat, traffic, or late hours. Traditional roadside\n assistance services are built for petrol vehicles and often rely on towing, which is not always ideal or safe for EVs.`,
    additionalContent : (<><a href="https://plusxelectric.com/" target="_blank" rel="noopener noreferrer" style={{color: "#0d6efd"}}>PlusX Electric </a> provides dedicated EV Roadside Assistance in Dubai, designed specifically for electric vehicles. Our mobile charging units reach you quickly, deliver on-site charging, and help you get moving again without unnecessary towing. </>),
  
    secondTitle      : "What Is EV Roadside Assistance?",
    secondaryContent : `EV roadside assistance is a specialized service created exclusively for electric vehicles. Unlike conventional roadside support,\n which focuses on towing, EV roadside assistance prioritizes on-site charging.`,
    extraContent     : `In many EV breakdown scenarios, a short on-site charge is enough to restore mobility and allow you to safely reach home or a \nnearby charging location. We charge your EV up to 10 kWh or 50 km of range, whichever comes first. Even if the 12V battery\n is dead, we also provide jump-start service.`,
  },
];

function RSAIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} additionalContent={section.additionalContent}
          secondTitle={section.secondTitle} secondaryContent={section.secondaryContent} extraContent={section.extraContent} />
      ))}
    </>
  );
}

export default RSAIntro;
