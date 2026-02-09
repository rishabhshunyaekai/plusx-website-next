import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    title   : "Find the Nearest Public EV Charging Station With Ease",
    content : "Charging your EV on the go can be a simple process. With the PlusX Electric App, you can find the nearest public charging stations \nquickly and reliably. No more driving in circles or worrying about range anxiety! The app will show you the closest chargers \nto where you are now, and it will provide you with everything you need to know before you get there.",
    additionalContent : `You can find every piece of information you need from charger type and charge capacity to availability, \npricing, and charging times. With integrated navigation, with one click, you can start your journey to \nyour selected charger. Whether you're doing daily errands or on a long trip, the PlusX App will \nalways help you with a dependable charging point!`
  },
];

function PublicChargingIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} additionalContent={section.additionalContent} />
      ))}
    </>
  );
}

export default PublicChargingIntro;
