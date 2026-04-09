import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    // title             : "Mobile EV Charging Dubai -\nDoorstep EV Charging by PlusX Electric",
    content           : `Mobile EV charging in Dubai brings the charger to you, no queues, no detours, no wasted time. PlusX Electric delivers \na portable EV charger straight to your home, office, or parking spot, so your electric vehicle charges while you \nwork, sleep, or shop. Book an on-demand charge when you need it instantly, or schedule a \nsession at a time that fits your routine all through the PlusX Electric app.`,
    primaryButtonText : `Download the App & Book`,
    primaryButtonlink : "portablePage",
    secondTitle       : `What Is Mobile EV Charging in Dubai?`,
    secondaryContent  : `Mobile EV charging is a service that brings a fully equipped charging station directly to your electric vehicle , wherever \nit's parked. Instead of driving to a public station and waiting in line, you request a charge through the PlusX Electric \napp, and our team arrives at your location with a Portable Power Pod to charge your EV on the spot.`,
  },
];

function PortableIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} secondTitle={section.secondTitle} secondaryContent={section.secondaryContent} primaryButton={true} 
          primaryButtonText={section.primaryButtonText} primaryButtonlink={section.primaryButtonlink}/>
      ))}
    </>
  );
}

export default PortableIntro;
