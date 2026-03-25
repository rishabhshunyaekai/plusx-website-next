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
  title         : "Find Nearest EV Chargers in Dubai | PlusX Electric App",
  description   : "Locate EV chargers instantly in Dubai with PlusX Electric. Plan trips, avoid range anxiety, and find charging stations near you anytime.",
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