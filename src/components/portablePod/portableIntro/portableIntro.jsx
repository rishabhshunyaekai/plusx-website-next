import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    title   : "PlusX Power Pods- Doorstep EV charging in Dubai",
    content : `PlusX Power Pods are revolutionizing electric vehicle charging in Dubai.  They are convenient to use, compact, and allow you to charge your\n EV anywhere you travel.  Each pod contains a battery and a Level 2 charger, allowing them to charge electric vehicles and even fleets \nof EV bicycles quickly and conveniently. You no longer need to schedule your day around public charging points or stand in line. \nThese pods allow you to access mobile charging services in Dubai at the moment you need them.  Doorstep EV charging in \nDubai certainly makes the life of a busy EV owner slightly more convenient because they can even get their cars \ncharged at their doorstep. PlusX Power Pods provide on-demand EV charging in Dubai, which means you can \ncharge your vehicle at any time and location.  It's versatile, convenient, and makes owning an \nelectric car simple, whether it's for yourself or a complete fleet.`,
  },
];

function PortableIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} />
      ))}
    </>
  );
}

export default PortableIntro;
