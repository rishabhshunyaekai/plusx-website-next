import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    title             : `Get EV Charger Installation in UAE for\n Residential, Commercial, and Fleet`,
    content           : "Installing an EV charger in the UAE doesn’t have to be tiring. At PlusX Electric, the entire EV charger installation process \nis managed from beginning to end. Our team handles approvals, site assessments, charger supply, installation,\n testing, and all necessary documentation. You do not need to coordinate with multiple vendors or worry\n about the technical details. Whether you need a charger at your home, apartment building, office,\n mall parking area, or fleet depot, PlusX Electric ensures a smooth and hassle-free experience.",
    secondTitle       : `Challenges EV Owners Face in\n The UAE for EV Charger Installation`,
    secondaryContent  : "Most EV charger installations quickly become intricate because consumers \nare left to interact with the following parties:",
  },
];

function PublicChargingIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} additionalContent={section.additionalContent} secondTitle={section.secondTitle} secondaryContent={section.secondaryContent}/>
      ))}
    </>
  );
}

export default PublicChargingIntro;
