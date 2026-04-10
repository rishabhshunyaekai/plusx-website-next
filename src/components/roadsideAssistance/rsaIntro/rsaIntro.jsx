import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    // title   : "EV Breakdown Assistance in Dubai",
    content : `Stuck on Sheikh Zayed Road with a dead battery? Parked in Marina and your EV won't start? We'll reach you within 60 minutes, depending \non your location , and in most cases, you won't need a tow. At <a href="https://plusxelectric.com/" target="__blank">PlusX Electric</a>, we've rescued more than 500 electric vehicles across Dubai, \nand we've learned one thing: traditional breakdown services aren't built for EVs. They show up with a tow truck when what you usually \nneed is a charge. We show up with a <a href="https://plusxelectric.com/mobile-ev-charging-dubai" target="__blank">mobile charging unit</a>, give your battery enough juice to reach the nearest station, and get you \nmoving again - usually in under an hour, starting from <strong>AED 145 + VAT*</strong>. Whether you're driving a Tesla, BYD, BMW, Mercedes EQ, or \nany other electric model, our team handles it. We cover every area of Dubai — from Downtown and Business Bay\n to Palm Jumeirah and beyond ,  24 hours a day, 7 days a week. Book instantly through the PlusX Electric \napp, or call us directly on <a href="tel:+971542796424">+971 54 279 6424</a> if you're already stranded.`,
    additionalContent : `<i>Final price may vary based on time of service, location, and additional requirements. Confirmed quote shown in the app before dispatch.</i>`,
    
    // secondTitle      : "What Is EV Breakdown Assistance?",
    // secondaryContent : `EV breakdown assistance is a specialized support service created exclusively for electric vehicles. Unlike conventional breakdown\n support, which often focuses mainly on towing, EV breakdown assistance prioritizes on-site charging and EV-specific support.`,
    // extraContent     : `In many EV breakdown situations, a short on-site charge is enough to restore mobility and help you safely reach your home \nor the nearest charging station. We charge your EV with up to 10 kWh or 50 km of range, whichever comes first. If \nyour vehicle’s 12V battery is dead, we also provide a jump-start service.`,
  },
];

function RSAIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} content={section.content} additionalContent={section.additionalContent}
          secondTitle={section.secondTitle} secondaryContent={section.secondaryContent} extraContent={section.extraContent} />
      ))}
    </>
  );
}

export default RSAIntro;
