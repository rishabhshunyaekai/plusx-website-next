import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    title   : "We Reach Your EV in Building Parking — Where Tow Trucks Can't",
    content           : `This is something most EV owners don't think about until it's too late. Dubai is a vertical city. The majority of EV drivers live in \nhigh-rise towers with building parking structures across Dubai Marina, JLT, Business Bay, Downtown Dubai, JVC, JBR, \nand Palm Jumeirah. These parking garages come in many forms — underground levels (B1, B2, B3), podium \nparking, multi-storey car parks, and covered parking areas within residential compounds. Most share \none thing in common: ceiling clearance of 2.0 to 2.2 meters. A standard flatbed \ntow truck stands at 2.5 meters. It physically cannot enter.`,
    additionalContent : `If your EV breaks down inside your building parking — whether that's an underground level, a podium floor, or a multi-storey \nstructure — a tow truck cannot reach you. You cannot push the car up ramps or through narrow turns. You're stuck — \nunless you call a service whose vehicle actually fits. PlusX rescue vans are built on standard commercial \nvehicle chassis with normal height clearance. We drive directly to your car on whatever parking level it \nsits — B1, B2, B3, podium, or multi-storey. We also access hotel parking garages, mall parking \nstructures, villa compound internal roads, and gated community parking areas across \nDubai. This isn't a niche advantage. For a city where the majority of EV \nowners park inside their building, this is a fundamental capability that \ntraditional towing simply doesn't have.`,
    
    // secondTitle      : "What Is EV Breakdown Assistance?",
    // secondaryContent : `EV breakdown assistance is a specialized support service created exclusively for electric vehicles. Unlike conventional breakdown\n support, which often focuses mainly on towing, EV breakdown assistance prioritizes on-site charging and EV-specific support.`,
    // extraContent     : `In many EV breakdown situations, a short on-site charge is enough to restore mobility and help you safely reach your home \nor the nearest charging station. We charge your EV with up to 10 kWh or 50 km of range, whichever comes first. If \nyour vehicle’s 12V battery is dead, we also provide a jump-start service.`,
  },
];

function RSAIntro3() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} additionalContent={section.additionalContent}
          secondTitle={section.secondTitle} secondaryContent={section.secondaryContent} extraContent={section.extraContent} />
      ))}
    </>
  );
}

export default RSAIntro3;
