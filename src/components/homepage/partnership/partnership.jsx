import Partnership from "@/sharedComponents/partnership/partnership";

function Partners() {
  const partners = {
    title       : "Partnership With",
    description : ``,
  }
  return (
    <Partnership title={partners.title} description={partners.description} />
  );
}

export default Partners;
