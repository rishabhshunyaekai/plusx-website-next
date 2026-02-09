import IntroSection from "@/sharedComponents/introSection/introSection";

const DisclaimerData = [
  {
    title   : "Disclaimer",
    content : "While PlusX Electric strives to provide accurate and up-to-date information on public EV charging stations, some details may vary. \nCertain station data is sourced from third-party platforms based on publicly available digital information and is updated\n on a rolling four-week cycle. PlusX is not responsible for any inaccuracies, availability issues, or changes made by\n third-party providers. We encourage users to verify station status directly before planning their charging stop.",
  },
];

function Disclaimer() {
  return (
    <>
      {DisclaimerData.map((section, index) => (
        <IntroSection key={index} title={section.title} content={section.content} />
      ))}
    </>
  );
}

export default Disclaimer;
