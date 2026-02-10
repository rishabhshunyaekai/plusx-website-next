import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    title   : "EV Charge Share",
    content : `PlusX Electric’s Charge Sharing feature enables EV owners within residential communities to share their personal chargers with \nfellow residents or the general public. This provides a practical and scalable solution for communities where many residents \nare unable to install private chargers due to limited power capacity, compliance constraints, or lengthy approval \nprocesses. By unlocking existing chargers for shared use, Charge Sharing improves access to reliable EV \ncharging, reduces range anxiety, and helps communities accelerate EV adoption \nwithout additional infrastructure investment.`,
  },
];

function ChargeShareIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} additionalContent={section.additionalContent} />
      ))}
    </>
  );
}

export default ChargeShareIntro;
