import Features         from "@/sharedComponents/features/features";
import Installation     from "@/assets/images/ev-charge-share-page/installation.webp";
import Collab           from "@/assets/images/ev-charge-share-page/collab.webp";
import AdditionalIncome from "@/assets/images/ev-charge-share-page/additional-income.webp";
import Adoption         from "@/assets/images/ev-charge-share-page/adoption.webp";

const heading       = "Key Benefits of PlusX Electric Charge Sharing";
const featuresData  = [
  {
    title       : "Solves Installation Challenges",
    description : `Enables EV owners to charge without installing new chargers, overcoming power limitations, compliance issues, and approval delays in residential communities`,
    imageSrc    : Installation,
  },
  {
    title       : "Better Utilization of Existing Infrastructure",
    description : "Maximizes the use of already installed personal chargers, reducing the need for additional electrical upgrades or new charging infrastructure",
    imageSrc    : Collab,
    reverse     : true,
  },
  {
    title       : "Additional Income for Charger Owners",
    description : "Allows charger owners to earn by sharing their chargers when not in use, creating a win-win model for both hosts and users",
    imageSrc    : AdditionalIncome,
  },
  {
    title       : "Faster EV Adoption & Community Convenience",
    description : "Improves charging availability within communities, reduces range anxiety, and supports wider EV adoption with a convenient, neighborhood-based charging solution",
    imageSrc    : Adoption,
    reverse     : true,
  },
];

function Feature() {
  return <Features heading={heading} featuresData={featuresData} />;
}

export default Feature;
