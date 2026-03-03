import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    title             : "Mobile EV Charging Dubai -\nDoorstep EV Charging by PlusX Electric",
    content           : `Mobile EV charging in Dubai is meant to make EV ownership simpler. With PlusX Electric, you can get your EV charged at your \nhome, office, or parking location without having to search for public charging stations. The service is designed to be \nconvenient in everyday life. You no longer have to structure your day around charger availability. \nYou book an instant or scheduled service on the app.`,
    secondTitle       : `What Is Mobile EV Charging in Dubai?`,
    secondaryContent  : "Doorstep EV charging implies that a charging station will be brought to your EV, as opposed to driving to a public charging \nstation. You request a charge through the PlusX Electric app, and the team arrives with a Portable Pod to charge \nyour EV at your location. You need not spend time finding a charger.",
  },
];

function PortableIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} secondTitle={section.secondTitle} secondaryContent={section.secondaryContent} />
      ))}
    </>
  );
}

export default PortableIntro;
