import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    content : "Installing an EV charger in Dubai shouldn't be complicated. At PlusX Electric, the entire EV charger installation process is \nmanaged from beginning to end. Our team handles approvals, site assessments, charger supply, installation, testing, \nand all necessary documentation. You do not need to coordinate with multiple vendors or worry about the \ntechnical details. Whether you need a charger at your home, apartment building, office, mall parking \narea, or fleet depot, PlusX Electric ensures a smooth and hassle-free experience.",
  },
];

function PublicChargingIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} content={section.content} />
      ))}
    </>
  );
}

export default PublicChargingIntro;
