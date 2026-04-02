import HeroImage      from "@/components/homepage/heroImage/heroImage";
import Achievements   from "@/components/homepage/achievements/achievements";
import Intro          from "@/components/homepage/homeIntro/homeIntro";
import PortablePod    from "@/components/homepage/services/portablePod/portablePod";
import RSA            from "@/components/homepage/services/roadsideAssistance/roadsideAssistance";
import PickupDropoff  from "@/components/homepage/services/pickupDropoff/pickupDropoff";
import Charger        from "@/components/homepage/services/chargerInstallation/chargerInstallation";
import ChargerShare   from "@/components/homepage/services/chargeShare/chargeShare";
import CTASection     from "@/components/homepage/ctaSection/ctaSection";
import Partners       from "@/components/homepage/partnership/partnership";
import Offers         from "@/components/homepage/offers/offers";
import Testimonial    from "@/components/homepage/testimonial/testimonial";
import Sustainability from "@/components/homepage/sustainability/sustainability";
import DownloadApp    from "@/sharedComponents/downloadApp/downloadApp";

export const metadata = {
  title         : "Emergency & Doorstep EV Charging Dubai | PlusX Electric",
  description   : "Fast EV charging in Dubai. PlusX Electric offers emergency, doorstep, and home charger installation for EV cars at home, office, or villa.",
  keywords      : ["plusx", "plusxelectric", "plusx electric", "portable ev charger", "on demand ev charging service in dubai", "doorstep ev charging service", "fast electric chargers near me", 
                   "ev roadside assistance service", "emergency roadside charging", "buy or renew ev insurance in minutes", "find public ev charging station", "ev charger share service"],
  alternates    : {
    canonical   : "/",
  },
  // openGraph : {
  //   title       : "Emergency & Doorstep EV Charging Dubai | PlusX Electric",
  //   description : "",
  //   siteName    : "PlusX Electric",
  //   locale      : "en_US",
  //   type        : "website",
  //   images      : [
  //   {
  //     url       : "/images/homepage/desktop-banner.webp",
  //     width     : 1200,
  //     height    : 630,
  //     alt       : "PlusX Electric EV Charging",
  //   },
  // ],
  // },
  // twitter       : {
  //   card        : "summary_large_image",
  //   title       : "Emergency & Doorstep EV Charging Dubai | PlusX Electric",
  //   description : "",
  //   creator     : "https://plusxelectric.com",
  //   images      : [image],
  // },
  // robots        : {
  //   index       : true,
  //   follow      : true,
  //   googleBot   : {
  //     index     : true,
  //     follow    : true,
  //     "max-snippet"       : -1,
  //     "max-image-preview" : "large",
  //     "max-video-preview" : -1,
  //   },
  // },
};

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
      <Testimonial />
      <Sustainability />
      <DownloadApp />
    </>
  );
}

export default HomePage;
