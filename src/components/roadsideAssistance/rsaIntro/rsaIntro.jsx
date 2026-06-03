import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    // title   : "EV Breakdown Assistance in Dubai",
    content           : `Stuck on Sheikh Zayed Road with a dead battery? Parked in Marina and your EV won't start? We'll reach you within 60 minutes*, depending \non your location, and in most cases, you won't need a tow, we charge your EV on the spot. At <a href="https://plusxelectric.com/" target="__blank">PlusX Electric</a>, we've rescued more than \n750+ electric vehicles across Dubai, and we've learned one thing, traditional breakdown services aren't built for EVs. They arrive \nwith a tow truck when all you really need is a charge. Our team comes with a <a href="https://plusxelectric.com/mobile-ev-charging-dubai" target="__blank">mobile charging Van</a>, they jump starts your 12V \nbattery incase the battery is 0% or your EV is not accessible and then charges your EV on the spot to get you moving again. \nService starting from <b>AED 185 + VAT*</b>. Whether you're driving a Tesla, BYD, BMW, Vinfast, Mercedes EQ, or any other \nelectric model, we've got it covered. We serve every area of Dubai, from Downtown and Business Bay to Palm \nJumeirah and beyond — 24 hours a day, 7 days a week. Book instantly through the PlusX\n Electric app, or call us on <a href="tel:+971543061473">+971 54 306 1473</a> if you're already stranded.`,
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
