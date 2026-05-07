import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    title   : "AC and DC EV Chargers — Which One Is Right for You?",
    content : `PlusX Electric offers a full range of EV chargers for homes, offices, and commercial sites across the UAE. The right charger depends on three \nthings: your EV's onboard charging capacity, how quickly you need to charge, and whether the charger is for personal or shared use. \nAC chargers (7kW to 22kW) are designed for home and office use. They charge most EVs fully in 4–8 hours, making them ideal for \novernight charging at a villa or a workday top-up at the office. AC chargers in the PlusX range start at AED 900. DC fast chargers \n(20kW to 120kW) are built for commercial sites, fleets, malls, hotels, and public stations. They charge most EVs in 30– 60 \nminutes and support OCPP, RFID-based access control, and back-end network integration. DC fast chargers in the \nPlusX range start at AED 22,000. Both AC and DC chargers in our range use Type 2 or CCS2 \nconnectors, which are compatible with every EV sold in the UAE.`,
  },
];

function chargerIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} />
      ))}
    </>
  );
}

export default chargerIntro;
