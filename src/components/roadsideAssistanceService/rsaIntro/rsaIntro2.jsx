import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    // title   : "EV Breakdown Assistance in Dubai",
    content           : `If you frequently run low on charge because your building doesn't have an EV charger, ask us about <a href="/ev-charger-installation-uae" target="_blank">home EV charger installation</a> \n— we install chargers at villas, apartments, offices, hotels, and malls across the UAE. You can also explore our <a href="/ev-car-insurance" target="_blank">EV \ninsurance</a> plans for comprehensive coverage that includes roadside protection`,
    // additionalContent : `<i>Final price may vary based on time of service, location, and additional requirements. Confirmed quote shown in the app before dispatch.</i>`,
    
    // secondTitle      : "What Is EV Breakdown Assistance?",
    // secondaryContent : `EV breakdown assistance is a specialized support service created exclusively for electric vehicles. Unlike conventional breakdown\n support, which often focuses mainly on towing, EV breakdown assistance prioritizes on-site charging and EV-specific support.`,
    // extraContent     : `In many EV breakdown situations, a short on-site charge is enough to restore mobility and help you safely reach your home \nor the nearest charging station. We charge your EV with up to 10 kWh or 50 km of range, whichever comes first. If \nyour vehicle’s 12V battery is dead, we also provide a jump-start service.`,
  },
];

function RSAIntro2() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} content={section.content} additionalContent={section.additionalContent}
          secondTitle={section.secondTitle} secondaryContent={section.secondaryContent} extraContent={section.extraContent} />
      ))}
    </>
  );
}

export default RSAIntro2;
