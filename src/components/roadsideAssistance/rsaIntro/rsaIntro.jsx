import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    title   : "EV Breakdown Assistance in Dubai",
    content : `Getting stranded with an electric vehicle can be stressful, especially in Dubai’s heat, heavy traffic, or late hours. Traditional\n breakdown and roadside assistance services are usually designed for petrol or diesel vehicles and often rely on \ntowing, which may not always be the safest or most practical solution for EVs.`,
    additionalContent : `<a href="https://plusxelectric.com/" target="_blank" rel="noopener noreferrer">PlusX Electric </a> provides dedicated EV breakdown assistance in Dubai, designed specifically for electric vehicles. Our mobile \nsupport team reaches you quickly, delivers on-site charging, and helps you get back on the road without\n unnecessary towing whenever possible.`,
  
    secondTitle      : "What Is EV Breakdown Assistance?",
    secondaryContent : `EV breakdown assistance is a specialized support service created exclusively for electric vehicles. Unlike conventional breakdown\n support, which often focuses mainly on towing, EV breakdown assistance prioritizes on-site charging and EV-specific support.`,
    extraContent     : `In many EV breakdown situations, a short on-site charge is enough to restore mobility and help you safely reach your home \nor the nearest charging station. We charge your EV with up to 10 kWh or 50 km of range, whichever comes first. If \nyour vehicle’s 12V battery is dead, we also provide a jump-start service.`,
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
