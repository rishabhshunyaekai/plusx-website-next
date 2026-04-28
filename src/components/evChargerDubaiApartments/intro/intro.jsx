import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    title   : `We Know Installing an EV Charger in an Apartment Is Different`,
    content : `Villa owners plug in and go. For apartment residents, it's not that simple. You need your building's NOC, and most owners associations have \nnever approved an EV charger before. Your parking might be nowhere near the electrical room. You're not sure whether you can take \nconnection from common building power or need to connect to power  from your apartment. And the last thing you want is to try \ngetting on a <a href="/ev-chargers" target="__blank">EV charger</a> only to be told "no" by your building manager. This is where PlusX Electric comes in. With 375+ chargers \ninstalled across the UAE, having worked with building managements like Dubai Holdings Community management, Kaizen, \neyc, we know the process, the paperwork, and the right approach. We handle all of it. You get a working EV charger in \nyour parking spot of your apartment building — and the app on your phone to control it. We offer a variety of \nchargers as per customer needs and feasibility of use. If you have your own charger, we can\n provide the end to end installation process as well. `,
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
