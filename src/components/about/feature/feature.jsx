import Features from "@/sharedComponents/features/features";
import Vision   from "@/assets/images/about-us-page/vision.webp";
import Mision   from "@/assets/images/about-us-page/mission.webp";

const heading       = "Vision & Mission";
const featuresData  = [
  {
    title: "Vision",
    description: "To be the leading electric vehicle platform in the region, known for our comprehensive suite of services, cuttingedge technology,and commitment to sustainability. We envision a future where electric vehicles are the norm, and PlusX is the go-to partner for all EV-related needs and to strive to create a community that fosters adoption, education, and enthusiasm for electric vehicles.",
    imageSrc: Vision,
  },
  {
    title: "Mission",
    description: "To revolutionize the electric vehicle ecosystem by providing seamless and convenient charging solutions, innovative services, and exceptional customer experiences while we aim to empower individuals and businesses to adopt sustainable transportation options by making electric vehicles accessible, affordable, and enjoyable.",
    imageSrc: Mision,
    reverse: true,
  },
];

function Feature() {
  return <Features heading={heading} featuresData={featuresData} />;
}

export default Feature;
