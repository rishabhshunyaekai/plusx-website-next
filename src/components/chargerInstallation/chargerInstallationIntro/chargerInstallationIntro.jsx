import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    maintitle : "EV Charger Installation Service",
    content   : "Installing an EV charger in Dubai shouldn't be complicated. At PlusX Electric, the entire EV charger installation process is managed from \nbeginning to end. Our team handles approvals, site assessments, installation, testing, and all necessary documentation. You do not \nneed to coordinate with multiple vendors or worry about the technical details. Whether you need EV charger installation at your \nhome, apartment building, office, mall parking area, or fleet depot, PlusX Electric ensures a smooth and hassle-\nfree experience — with certified technicians on every job, across Dubai and the wider UAE.",
  },
];

function PublicChargingIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} maintitle={section.maintitle} content={section.content} />
      ))}
    </>
  );
}

export default PublicChargingIntro;
