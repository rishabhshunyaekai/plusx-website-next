import HeroImage      from "@/components/chargeShare/heroImage/heroImage";
import Intro          from "@/components/chargeShare/chargeShareIntro/chargeShareIntro";
import Usage          from "@/components/chargeShare/usage/usage";
import Intro2         from "@/components/chargeShare/chargeShareIntro/csIntro";
import PrivateCharger from "@/components/chargeShare/whyPrivateCharger/whyPrivateCharger";
// import Feature        from "@/components/chargeShare/feature/feature";
import Benefits       from "@/components/chargeShare/benefits/benefits";
import ListOfCharger  from "@/components/chargeShare/bookingSteps/listOfCharger";
import AccessSteps    from "@/components/chargeShare/bookingSteps/accessSteps";
import SmartModel     from "@/components/chargeShare/smartModel/smartModel";
import Intro3         from "@/components/chargeShare/chargeShareIntro/csIntro2";
import Offers         from "@/components/homepage/offers/offers";
import DownloadApp    from "@/sharedComponents/downloadApp/downloadApp";
import FAQ            from "@/components/chargeShare/chargeShareFAQ/chargeShareFAQ";

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
      <Usage />
      <Intro2 />
      <PrivateCharger />
      {/* <Feature /> */}
      <Benefits />
      <ListOfCharger />
      <AccessSteps />
      <SmartModel />
      <Intro3 />
      <Offers />
      <DownloadApp />
      <FAQ />
    </>
  )
}

export default EVChargeSharePage;