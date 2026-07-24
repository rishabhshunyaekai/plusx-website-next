import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    // title             : "EV Ownership Made Easier with PlusX Electric",
    // content           : `PlusX Electric not only assists EV owners during a single charging session. The service is designed to integrate into\n everyday EV ownership by means of easy, app-based booking and quality service delivery.`,
    // additionalContent : `You can arrange charging times that fit your schedule and track your requests without any problems. In the long run,\n this will reduce your reliance on charging stations and make it easier to manage your EV's charging requirements`,
    secondTitle       : `EV Ownership Made Easier with PlusX Electric`,
    secondaryContent  : `PlusX Electric not only assists EV owners during a single charging session. The service is designed to integrate into\n everyday EV ownership by means of easy, app-based booking and quality service delivery.`,
    extraContent      : `You can arrange charging times that fit your schedule and track your requests without any problems. In the long run,\n this will reduce your reliance on charging stations and make it easier to manage your EV's charging requirements.`,
    extraContent1     : `PlusX Electric will become a long-term on-demand EV charging Dubai partner with increased EV usage.`,
  },
];

function CTAIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} secondTitle={section.secondTitle} secondaryContent={section.secondaryContent} extraContent={section.extraContent} extraContent1={section.extraContent1}/>
      ))}
    </>
  );
}

export default CTAIntro;
