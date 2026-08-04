import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    content: `PlusX Electric is an EV charging services company in Dubai that makes owning an electric vehicle simple and hassle-free. Need your EV \ncharged? Book <a href="/mobile-ev-charging-dubai" target="__blank">mobile EV charging</a> and we deliver a charger to your location. Stuck with a dead battery on Sheikh Zayed Road \nor in Dubai Marina? Our <a href="/ev-breakdown-assistance" target="__blank">EV roadside assistance teams</a> comes to you 24/7 and charges your EV on the spot. Want a charger \nat your home or villa? We handle <a href="/ev-charger-installation-uae" target="__blank">EV charger installation</a>. Need cover? Compare EV insurance plans in seconds — \nall from one app. No need to call different companies for different problems. Thousands of EV \nowners across the UAE already count on PlusX Electric, and you can too.`,
  },
];

function HomeIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} />
      ))}
    </>
  );
}

export default HomeIntro;
