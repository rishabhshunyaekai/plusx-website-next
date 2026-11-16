import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    title   : `Tesla Charging in Basement Parking`,
    content : `Many Dubai buildings have no EV charger in the basement, and a tow truck often can't fit down the ramp. Our mobile charging van carries \nits own energy and needs no socket in your building, so we charge your Tesla in the bay where it is parked, basement levels included. \nIf your <a href="/ev-charger-installation-dubai-apartments" target="_blank">building management later allows a private charger</a>, we can help you get their approval and install one.`,
  },
];

function TeslaChargingCTA() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} additionalContent={section.additionalContent} />
      ))}
    </>
  );
}

export default TeslaChargingCTA;
