import PortableHeroImage  from "@/components/portablePod/portableHeroImage/portableHeroImage";
import PortableIntro      from "@/components/portablePod/portableIntro/portableIntro";
import Scenarios          from "@/components/portablePod/scenarios/scenarios";
import CTAIntro           from "@/components/portablePod/portableIntro/ctaIntro";
import WhyChoose          from "@/components/portablePod/whyChoose/whyChoose";
import OtherCTA           from "@/components/portablePod/portableIntro/otherCTA";
import BookingSteps       from "@/components/portablePod/bookingSteps/bookingSteps";
import Brands             from "@/components/portablePod/brands/brands";
import Offers             from "@/components/homepage/offers/offers";
import DownloadApp        from "@/sharedComponents/downloadApp/downloadApp";
import Faqs               from "@/components/portablePod/portablePodFAQ/portablePodFAQ";
// import Values             from "@/components/portablePod/values/values";
// import Pricing            from "@/components/portablePod/pricing/pricing";
// import Feature            from "@/components/portablePod/feature/feature";

export const metadata = {
  title         : "Mobile EV Charging Dubai | By PlusX Electric",
  description   : "Book mobile EV charging in Dubai with PlusX Electric and get your car charged at home, office, or parking. Download the PlusX app today for easy booking.",
  keywords      : ["Doorstep", "On-Demand", "portable pod", "charger"],
  alternates    : {
    canonical   : "/doorstep-ev-charging",
  },
};

function PortableChargerPage() {
  return (
    <>
      <PortableHeroImage />
      <PortableIntro />
      <Scenarios />
      <CTAIntro />
      <WhyChoose />
      <OtherCTA />
      <BookingSteps />
      <Brands />
      <Offers />
      <DownloadApp />
      <Faqs/>
      {/* <Values />
      <Pricing />
      <Feature /> */}
    </>
  );
}

export default PortableChargerPage;
