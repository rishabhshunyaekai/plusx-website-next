import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    maintitle : "AC and DC EV Chargers — Which One Is Right for You?",
    content   : `PlusX Electric offers a full range of AC and DC EV chargers for homes, villas, apartments, offices, and commercial sites across the UAE. The \nright charger depends on three things: your EV's onboard charging capacity, how quickly you need to charge, and whether the charger \nis for personal or commercial use. AC chargers (7kW–22kW) are designed for home and office use; they charge most EVs fully in \n4–8 hours, making them ideal for overnight charging at a villa or a workday top-up at the office, and AC chargers in the PlusX \nrange start at AED 900. DC fast chargers (20kW–120kW) are built for commercial sites, fleets, malls, hotels, and public \nstations across the UAE — they charge most EVs in 30–60 minutes, with the PlusX Electric DC fast charger range \nstarting at AED 22,000. Both AC and DC chargers in our range use Type 2 or CCS2 connectors, compatible \nwith every EV sold in the UAE. Need help with setup? Explore our <a href="/ev-charger-installation-uae" target="__blank">EV Charger Installation service</a>.`,
  },
];

function chargerIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} maintitle={section.maintitle} content={section.content} />
      ))}
    </>
  );
}

export default chargerIntro;
