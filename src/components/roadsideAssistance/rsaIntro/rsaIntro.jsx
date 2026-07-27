import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    // title   : "EV Breakdown Assistance in Dubai",
    content           : `Stuck on Sheikh Zayed Road with a dead battery? Parked in Marina and your EV won't start? We'll reach you within 60 minutes*, depending \non your location, and in most cases, you won't need a tow — we charge your EV on the spot. At <a href="https://plusxelectric.com/" target="__blank">PlusX Electric</a>, we've rescued more than \n1000+ electric vehicles across Dubai, and we've learned one thing, traditional breakdown services aren't built for EVs. They arrive \nwith a tow truck when all you really need is a charge. Our team arrives in a <a href="https://plusxelectric.com/mobile-ev-charging-dubai" target="__blank">mobile charging Van</a>, jump-starts your 12V  \nbattery if it's at 0% or your EV is inaccessible, and charges your EV on the spot. Service starting from <b>AED 185* + VAT</b>. \nWhether you're driving a Tesla, BYD, BMW, VinFast, Mercedes EQ, or any other electric model, we've got it \ncovered. We serve every area of Dubai, from Downtown and Business Bay to Palm Jumeirah and \nbeyond — 24 hours a day, 7 days a week. Book instantly through the PlusX Electric \napp, or call us on <a href="tel:+971543061473">+971 54 306 1473</a> if you're already stranded.`,
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
