import HeroImage      from "@/components/landingPages/chargerInstallation/heroImage/heroImage";
import Intro          from "@/components/landingPages/chargerInstallation/chargerIntro/chargerIntro";
import Benefits       from "@/components/landingPages/chargerInstallation/benefits/benefits";
import Brands         from "@/components/landingPages/chargerInstallation/brands/brands";
import BookingCard    from "@/components/landingPages/chargerInstallation/bookingCard/bookingCard";
import OtherServices  from "@/components/landingPages/chargerInstallation/otherServices/otherServices";
import Connect        from "@/components/landingPages/chargerInstallation/connect/connect";
import DownloadApp    from "@/sharedComponents/downloadApp/downloadApp";

export const metadata = {
  title         : "EV Chargers Dubai | Home & Commercial EV Charging",
  description   : "Explore PlusX Electric’s range of DEWA-approved EV chargers for homes, offices, and commercial spaces in Dubai. Fast, safe, and reliable.",
  keywords      : ["EV Chargers Dubai"],
  alternates    : {
    canonical   : "/ev-charger-installation",
  },
};

function EVChargerInstallationPage() {
  return (
    <>
      <HeroImage />
      <Intro />
      <Benefits />
      <Brands />
      <BookingCard />
      <OtherServices />
      <Connect />
      <DownloadApp />
    </>
  )
}

export default EVChargerInstallationPage;