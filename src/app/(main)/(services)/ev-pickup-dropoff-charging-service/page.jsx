import HeroImage    from "@/components/pickupDropoff/heroImage/heroImage";
import Intro        from "@/components/pickupDropoff/pickupDropoffIntro/pickupDropoffIntro";
import Values       from "@/components/pickupDropoff/values/values";
import Pricing      from "@/components/pickupDropoff/pricing/pricing";
import Feature      from "@/components/pickupDropoff/feature/feature";
import Offers       from "@/components/homepage/offers/offers";
import DownloadApp  from "@/sharedComponents/downloadApp/downloadApp";
import Faqs         from "@/components/pickupDropoff/pickupDropoffFAQ/pickupDropoffFAQ";

export const metadata = {
  title         : "EV Pickup & Drop Charging Service in Dubai | PlusX Electric",
  description   : "We pick up your EV, charge it, and return it fully powered. Hassle-free pickup & drop-off charging service for busy EV owners in Dubai.",
  keywords      : ["EV Pickup", "EV Drop Charging"],
  alternates    : {
      canonical : "/ev-pickup-dropoff-charging-service",
    },
};

function PickupAndDropOffPage() {
  return (
    <>
      <HeroImage />
      <Intro />
      <Values />
      <Pricing />
      <Feature />
      <Offers />
      <DownloadApp />
      <Faqs />
    </>
  )
}

export default PickupAndDropOffPage;