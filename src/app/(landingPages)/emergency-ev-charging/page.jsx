import HeroImage      from "@/components/landingPages/rsa/heroImage/heroImage";
import Intro          from "@/components/landingPages/rsa/rsaIntro/rsaIntro";
import Values         from "@/components/landingPages/rsa/values/values";
import Brands         from "@/components/landingPages/rsa/brands/brands";
import BookingCard    from "@/components/landingPages/rsa/bookingCard/bookingCard";
import OtherServices  from "@/components/landingPages/rsa/otherServices/otherServices";
import Connect        from "@/components/landingPages/rsa/connect/connect";
import DownloadApp    from "@/sharedComponents/downloadApp/downloadApp";
import FAQ            from "@/components/landingPages/rsa/faq/faq";

export const metadata = {
  title         : "EV Roadside Assistance Dubai | Mobile EV Charging",
  description   : "Stranded with a low EV battery? PlusX Electric provides fast, safe, and DEWA-approved mobile EV charging across Dubai.",
  keywords      : ["EV Roadside Assistance Dubai"],
  alternates    : {
    canonical   : "/emergency-ev-charging",
  },
};

function EmergencyEVChargingPage() {
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

export default EmergencyEVChargingPage;