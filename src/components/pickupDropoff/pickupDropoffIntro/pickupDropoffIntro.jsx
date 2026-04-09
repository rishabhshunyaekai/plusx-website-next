import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    title   : "EV Pickup and Drop-Off Charging Service in Dubai",
    content : "PlusX Electric’s Pickup & Drop-off EV Charging Service simplifies EV charging for customers. Our service allows EV drivers to\n power their cars while utilising public charging infrastructure without the hassle of personally travelling to the \ncharging stations, waiting in line, or worrying about fitting charging into their busy schedule.",
    additionalContent : `Our EV pickup charging service was developed to relieve the pressure of finding a reliable charging point, while your \nvehicle charges efficiently and safely.  By using our Pickup & Drop-off service in Dubai, you can make \nthe most use of your time during your busy workday or errands while still keeping the EV fully powered.`,
  
    secondTitle       : `Why Choose EV Pickup And\n Drop-Off Charging?`,
    secondaryContent  : `EV pickup and drop-off charging works like a valet charging service. Instead of driving to a charging station and waiting, \nyou can book the service through the PlusX Electric app and let our team manage the entire process.`,
    extraContent      : `This option is ideal when you have a busy schedule, are at work, spending time with family, or visiting a shopping complex \nand do not want to spend time waiting at a charging station.`,
  },
];

function PickupDropoffIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} additionalContent={section.additionalContent} 
          secondTitle={section.secondTitle} secondaryContent={section.secondaryContent} extraContent={section.extraContent} />
      ))}
    </>
  );
}

export default PickupDropoffIntro;
