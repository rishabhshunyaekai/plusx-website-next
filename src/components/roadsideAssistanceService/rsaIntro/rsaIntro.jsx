import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    // title   : "EV Breakdown Assistance in Dubai",
    content           : `Stuck on Sheikh Zayed Road with a dead battery? Parked in Marina and your EV won't start? We'll reach you within 60 minutes*, depending on \nyour location, and in most cases, you won't need a tow — we charge your EV on the spot. At <a href="https://plusxelectric.com/" target="__blank">PlusX Electric</a>, we've rescued more than 750+ \nelectric vehicles across Dubai, with an average response time of under 60 minutes. We've learned one thing that matters: traditional \nbreakdown services aren't built for EVs. They arrive with a tow truck when all you really need is a charge. Our team comes with a \n<a href="https://plusxelectric.com/mobile-ev-charging-dubai" target="__blank">mobile charging van</a>, delivers up to 10 kWh of DEWA-approved power directly into your battery — roughly 50 to 70 km of range \n— and gets you moving again, starting from AED 145 + VAT*. If your car won't start because the 12V auxiliary battery is dead \n(which causes roughly half of all EV breakdowns in Dubai), we jump-start it on the spot. Your main battery could be at 80 \npercent — the car just needs its 12V woken up. We fix that in 15 minutes. No tow truck. No workshop. No wasted day. \nWhether you're driving a Tesla, BYD, BMW, Mercedes EQ, Nissan, Audi, Hyundai, Porsche, MG, or any other electric \nmodel, we've got it covered. We serve every area of Dubai — from Downtown and Business Bay to Palm \nJumeirah and beyond — 24 hours a day, 7 days a week. We also reach building parking garages,\n hotel underground areas, and villa compounds where tow trucks physically cannot enter. Book \ninstantly through the PlusX Electric app (trusted by 6800+ EV drivers in the\n UAE), or call us on <a href="tel:+971543061473">+971 54 306 1473</a> if you're already stranded.`,
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
