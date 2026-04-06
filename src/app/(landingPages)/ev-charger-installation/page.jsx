import HeroImage      from "@/components/landingPages/chargerInstallation/heroImage/heroImage";
import Intro          from "@/components/landingPages/chargerInstallation/chargerIntro/chargerIntro";
import Benefits       from "@/components/landingPages/chargerInstallation/benefits/benefits";
import Brands         from "@/components/landingPages/chargerInstallation/brands/brands";
import BookingCard    from "@/components/landingPages/chargerInstallation/bookingCard/bookingCard";
import OtherServices  from "@/components/landingPages/chargerInstallation/otherServices/otherServices";
import Connect        from "@/components/landingPages/chargerInstallation/connect/connect";
import DownloadApp    from "@/sharedComponents/downloadApp/downloadApp";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const metadata = {
  title         : "EV Chargers Dubai | Home & Commercial EV Charging",
  description   : "Explore PlusX Electric’s range of DEWA-approved EV chargers for homes, offices, and commercial spaces in Dubai. Fast, safe, and reliable.",
  // keywords      : ["plusx", "plusxelectric", "plusx electric", "EV Chargers in dubai", "buy ev charger near me", "ev charger installation", "ev charger for home and offices", "buy portable ev charger"],
  alternates    : {
    canonical   : `${BASE_URL}/ev-charger-installation`,
    languages: {
        "en-AE": `${BASE_URL}/ev-charger-installation`,
      },
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