import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    title   : `We Know Installing an EV Charger in an Apartment Is Different`,
    content : `Villa owners plug in and go. For apartment residents, it's not that simple.`,
    additionalContent : `You need your building's NOC, and most owners associations have never approved an EV charger before. Your parking might be\n nowhere near the electrical room. You're not sure whether you can take connection from common building power or need \nto connect to power  from your apartment. And the last thing you want is to try getting on a EV charger only to be told \n"no" by your building manager. \nThis is where PlusX Electric comes in. With 375+ chargers installed across the UAE, having worked with building managements \nlike Dubai Holdings Community management, Kaizen, eyc, we know the process, the paperwork, and the right\n approach. We handle all of it. You get a working EV charger in your parking spot of your apartment\n building — and the app on your phone to control it. \n We offer a variety of chargers as per customer needs and feasibility of use. If you have your own charger, we can\n provide the end to end installation process as well. `,
  },
];

function EVDubaiApartmentIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} additionalContent={section.additionalContent} />
      ))}
    </>
  );
}

export default EVDubaiApartmentIntro;
