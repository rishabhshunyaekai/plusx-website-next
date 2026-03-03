import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    title             : "EV Ownership Made Easier with PlusX Electric",
    content           : `PlusX Electric not only assists EV owners during a single charging session. The service is designed to integrate into\n everyday EV ownership by means of easy-to-use app based on booking and quality service delivery.`,
    additionalContent : `You can arrange charging times that fit your schedule and track your requests without any problems. In the long run,\n this will reduce your reliance on charging stations and make it easier to manage your EV's charging requirements`,
    // secondTitle       : `What Is Mobile EV Charging in Dubai?`,
    secondaryContent  : "PlusX Electric will become a long-term on-demand EV charging Dubai partner with increased EV usage.",
  },
];

function CTAIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} additionalContent={section.additionalContent} secondaryContent={section.secondaryContent} />
      ))}
    </>
  );
}

export default CTAIntro;
