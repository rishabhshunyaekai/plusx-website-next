import Features       from "@/sharedComponents/features/features";
import IncentiveEV    from "@/assets/images/sustanability/incentive-ev.webp";
import LeveragingAI   from "@/assets/images/sustanability/leveraging-ai.webp";
import CarbonsCredits from "@/assets/images/sustanability/carbons-credits.webp";

const heading       = "Offerings";
const featuresData  = [
  {
    title       : "Incentives for EV Users",
    description : "The first-ever platform that delivers real-time insights into carbon emission savings, empowering users with immediate visibility into their environmental impact. Our innovative system not only tracks and reports reductions in carbon emissions but also offers tangible incentives for users who make sustainable choices. By integrating this platform into your operations, you can promote eco-friendly behaviors, reward sustainability, and enhance your commitment to a greener future.",
    imageSrc    : IncentiveEV,
  },
  {
    title       : "Leveraging Ai For Decision Making",
    description : "Leveraging AI to analyze consumption patterns, our platform provides valuable insights for optimizing EV charging infrastructure and planning. By harnessing advanced artificial intelligence, we can forecast demand, identify peak usage times, and tailor charging solutions to meet the specific needs of both customers and Charge Point Operators (CPOs). This data-driven approach enables more efficient deployment of resources, and reduces operational costs.",
    imageSrc    : LeveragingAI,
    reverse     : true,
  },
  {
    title       : "EV Carbon Credits and Offsets Platform",
    description : "Introducing the first-ever EV-focused platform for carbon credits and offsets, tailored for governments and corporations. This innovative solution enables efficient tracking, management, and trading of carbon credits, supporting organizations in meeting regulatory requirements and achieving sustainability goals while promoting a cleaner future.",
    imageSrc    : CarbonsCredits,
  },
];

function Feature() {
  return <Features heading={heading} featuresData={featuresData} />;
}

export default Feature;
