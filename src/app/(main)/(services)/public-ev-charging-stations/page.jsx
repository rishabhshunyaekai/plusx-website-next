import HeroImage    from "@/components/publicCharging/heroImage/heroImage";
import Intro        from "@/components/publicCharging/publicChargingIntro/publicChargingIntro";
// import Values       from "@/components/publicCharging/values/values";
// import CTASection   from "@/components/publicCharging/ctaSection/ctaSection";
// import Offers       from "@/components/homepage/offers/offers";
// import DownloadApp  from "@/sharedComponents/downloadApp/downloadApp";
// import Disclaimer   from "@/components/publicCharging/disclaimer/disclaimer";
// import Faqs         from "@/components/publicCharging/publicChargingFAQ/publicChargingFAQ";

export const metadata = {
  title         : "Find Nearest EV Chargers in Dubai | PlusX Electric App",
  description   : "Locate EV chargers instantly in Dubai with PlusX Electric. Plan trips, avoid range anxiety, and find charging stations near you anytime.",
  keywords      : ["Nearest EV Chargers"],
  alternates    : {
      canonical : "/public-ev-charging-stations",
    },
};

function PublicChargingSolutionPage() {
  return (
    <>
      <HeroImage />
      <Intro />
      {/* <Values />
      <CTASection />
      <Offers />
      <DownloadApp />
      <Disclaimer />
      <Faqs /> */}
    </>
  )
}

export default PublicChargingSolutionPage;