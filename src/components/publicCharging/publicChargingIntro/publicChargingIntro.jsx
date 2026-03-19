import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    title               : `Nearest Public EV Charging\n Station in Dubai`,
    content             : "Finding a reliable EV charging station while travelling in Dubai can sometimes be challenging. EV drivers often face range anxiety, especially when they are unsure where the nearest charger is or whether it is available.",
    additionalContent   : `PlusX Electric helps solve this problem with a smart, real-time EV charging station locator in the PlusX Electric app. The app provides real-time access to public EV charging stations in Dubai, helping you quickly identify nearby chargers based on your current location.`,
    additionalContent2  : `Whether you are commuting to work, running errands, or planning a longer journey, the app allows you to locate charging stations instantly. With live updates and accurate data, you spend less time searching for a charger and more time driving with confidence.`,

    secondTitle         : `Find Public EV Charging\n Stations in Real Time`,
    secondaryContent    : `The PlusX Electric app shows EV charger locations across Dubai and prioritises the nearest charging stations based on your current location. Charging stations appear instantly, allowing you to choose the most suitable option based on distance, charger type, and availability.`,
    extraContent        : `Instead of driving around searching for a charger, you can quickly find available stations through your phone. Real-time visibility of charging stations helps reduce range anxiety and supports better route planning.`,
  },
];

function PublicChargingIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} additionalContent={section.additionalContent} additionalContent2={section.additionalContent2}
          secondTitle={section.secondTitle} secondaryContent={section.secondaryContent} extraContent={section.extraContent} />
      ))}
    </>
  );
}

export default PublicChargingIntro;
