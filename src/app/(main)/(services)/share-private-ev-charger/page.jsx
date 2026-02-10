import HeroImage      from "@/components/chargeShare/heroImage/heroImage";
import Intro          from "@/components/chargeShare/chargeShareIntro/chargeShareIntro";
import Feature        from "@/components/chargeShare/feature/feature";
import ListOfCharger  from "@/components/chargeShare/bookingSteps/listOfCharger";
import AccessSteps    from "@/components/chargeShare/bookingSteps/accessSteps";
import Offers         from "@/components/homepage/offers/offers";
import DownloadApp    from "@/sharedComponents/downloadApp/downloadApp";

export const metadata = {
  title         : "Private EV Charger Sharing | EV Charger Marketplace | PlusX Electric",
  description   : "PlusX Electric’s EV charger marketplace makes private EV charger sharing simple—share your home EV charger and earn, or rent a private EV charger nearby for reliable charging access.",
  keywords      : ["EV Charger Share", "EV Charger Marketplace"],
  alternates    : {
      canonical : "/share-private-ev-charger",
    },
};

function EVChargeSharePage() {
  return (
    <>
      <HeroImage />
      <Intro />
      <Feature />
      <ListOfCharger />
      <AccessSteps />
      <Offers />
      <DownloadApp />
    </>
  )
}

export default EVChargeSharePage;