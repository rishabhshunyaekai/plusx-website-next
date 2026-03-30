import HeroImage    from "@/components/publicCharging/heroImage/heroImage";
import Intro        from "@/components/publicCharging/publicChargingIntro/publicChargingIntro";
import ChargingInfo from "@/components/publicCharging/chargingInfo/chargingInfo";
import Integrated   from "@/components/publicCharging/integrated/integrated";
import Plan         from "@/components/publicCharging/plan/plan";
import Offers       from "@/components/homepage/offers/offers";
import DownloadApp  from "@/sharedComponents/downloadApp/downloadApp";
import Disclaimer   from "@/components/publicCharging/disclaimer/disclaimer";
import Faqs         from "@/components/publicCharging/publicChargingFAQ/publicChargingFAQ";
// import Values       from "@/components/publicCharging/values/values";
// import CTASection   from "@/components/publicCharging/ctaSection/ctaSection";

export const metadata = {
  title         : "Public EV Charging Stations in Dubai | Find Nearby Chargers",
  description   : "Find public EV charging stations in Dubai easily with PlusX Electric. Locate nearby chargers, check availability, view pricing. Download the app now.",
  keywords      : ["plusx", "plusxelectric", "plusx electric", "Nearest EV Chargers", "find public ev charger", "public ev charger near me"],
  alternates    : {
      canonical : "/public-ev-charging-stations",
    },
};

function PublicChargingSolutionPage() {
  return (
    <>
      <HeroImage />
      <Intro />
      <ChargingInfo />
      <Integrated />
      <Plan />
      <Offers />
      <DownloadApp />
      <Disclaimer />
      <Faqs />
      {/* <Values />
      <CTASection /> */}
    </>
  )
}

export default PublicChargingSolutionPage;