import HeroImage      from "@/components/landingPages/onDemandCharging/heroImage/heroImage";
import Intro          from "@/components/landingPages/onDemandCharging/demandIntro/demandIntro";
import Values         from "@/components/landingPages/onDemandCharging/values/values";
import Brands         from "@/components/landingPages/onDemandCharging/brands/brands";
import BookingCard    from "@/components/landingPages/onDemandCharging/bookingCard/bookingCard";
import OtherServices  from "@/components/landingPages/onDemandCharging/otherServices/otherServices";
import Connect        from "@/components/landingPages/onDemandCharging/connect/connect";
import DownloadApp    from "@/sharedComponents/downloadApp/downloadApp";
import FAQ            from "@/components/landingPages/onDemandCharging/faq/faq";

export const metadata = {
  title         : "On-Demand EV Charging Service in Dubai | Plus X Electric",
  description   : "Get on-demand EV charging anywhere in Dubai. Fast, mobile service delivered to your location. Book now with Plus X Electric!",
  keywords      : ["On-Demand EV Charging Service"],
  alternates    : {
    canonical   : "/on-demand-ev-charging",
  },
};

function OnDemandPage() {
  return (
    <>
      <HeroImage />
      <Intro />
      <Values />
      <Brands />
      <BookingCard />
      <OtherServices />
      <Connect />
      <DownloadApp />
      <FAQ />
    </>
  )
}

export default OnDemandPage;