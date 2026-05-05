import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    title   : "AC and DC EV Chargers — Which One Is Right for You?",
    content : `PlusX Electric offers a full range of EV chargers for homes, offices, and commercial sites across the UAE. The right charger depends\n on three things: your EV's onboard charging capacity, how quickly you need to charge, and \nwhether the charger is for personal or shared use.`,
    additionalContent   : `AC chargers (7kW to 22kW) are designed for home and office use. They charge most EVs fully in 4–8 hours, making them ideal \nfor overnight charging at a villa or a workday top-up at the office. AC chargers in the PlusX range start at AED 900.`,
    additionalContent2  : `DC fast chargers (20kW to 120kW) are built for commercial sites, fleets, malls, hotels, and public stations. They charge most \nEVs in 30– 60 minutes and support OCPP, RFID-based access control, and back-end network integration. \nDC fast chargers in the PlusX range start at AED 22,000.`,
    additionalContent3  : `Both AC and DC chargers in our range use Type 2 or CCS2 connectors, which are compatible with every EV sold in the UAE.`,
  },
];

function chargerIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} additionalContent={section.additionalContent} 
          additionalContent2={section.additionalContent2} additionalContent3={section.additionalContent3} />
      ))}
    </>
  );
}

export default chargerIntro;
