import Achievements   from "@/components/homepage/achievements/achievements";
import CTASection     from "@/components/homepage/ctaSection/ctaSection";
import HeroImage      from "@/components/homepage/heroImage/heroImage";
import Intro          from "@/components/homepage/homeIntro/homeIntro";
import Offers         from "@/components/homepage/offers/offers";
import Partners       from "@/components/homepage/partnership/partnership";
import Sustainability from "@/components/homepage/sustainability/sustainability";
import Charger        from "@/components/homepage/services/chargerInstallation/chargerInstallation";
import ChargerShare   from "@/components/homepage/services/chargeShare/chargeShare";
import RSA            from "@/components/homepage/services/roadsideAssistance/roadsideAssistance";
import PickupDropoff  from "@/components/homepage/services/pickupDropoff/pickupDropoff";
import PortablePod    from "@/components/homepage/services/portablePod/portablePod";
import DownloadApp    from "@/sharedComponents/downloadApp/downloadApp";

function HomePage() {
  return (
    <>
      <HeroImage />
      <Intro />
      <Achievements />
      <PortablePod />
      <RSA />
      <PickupDropoff />
      <Charger />
      <ChargerShare />
      <CTASection />
      <Partners />
      <Offers />
      <Sustainability />
      <DownloadApp />
    </>
  );
}

export default HomePage;
