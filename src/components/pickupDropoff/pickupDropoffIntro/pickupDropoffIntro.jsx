import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    title   : "EV Pickup and Drop-Off Charging Service in Dubai",
    content : "PlusX Electric’s Pickup & Dropoff EV Charging Service simplifies EV charging for customers. Our service allows EV drivers to\n power their cars while utilising public charging infrastructure without the hassle of personally travelling to the \ncharging stations, waiting in queue, or worrying about fitting charging into their busy schedule.",
    additionalContent : `Our EV pickup charging service was developed to relieve the pressure of having to find a reliable charging point, while your \nvehicle passes the time charging efficiently and safely.  By using our Pickup & Drop-off service in Dubai, you can make \nthe most use of your time during your busy workday or errands while still keeping the EV fully powered.`
  },
];

function PickupDropoffIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} additionalContent={section.additionalContent} />
      ))}
    </>
  );
}

export default PickupDropoffIntro;
