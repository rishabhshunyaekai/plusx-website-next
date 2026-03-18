import HeroImage    from "@/components/pickupDropoff/heroImage/heroImage";
import Intro        from "@/components/pickupDropoff/pickupDropoffIntro/pickupDropoffIntro";
import WhyChoose    from "@/components/pickupDropoff/whyChoose/whyChoose";
import WhyChooseService    from "@/components/pickupDropoff/whyChooseService/whyChooseService";
import PickupDropOff    from "@/components/pickupDropoff/pickupDropoff/pickupDropoff";
import BookingStep    from "@/components/pickupDropoff/bookingSteps/bookingSteps";
import CTA          from "@/components/pickupDropoff/cta/cta";
import Offers       from "@/components/homepage/offers/offers";
import DownloadApp  from "@/sharedComponents/downloadApp/downloadApp";
import Faqs         from "@/components/pickupDropoff/pickupDropoffFAQ/pickupDropoffFAQ";
// import Values       from "@/components/pickupDropoff/values/values";
// import Pricing      from "@/components/pickupDropoff/pricing/pricing";
// import Feature      from "@/components/pickupDropoff/feature/feature";

export const metadata = {
  title         : "EV Pickup & Drop Charging Service in Dubai | PlusX Electric",
  description   : "We pick up your EV, charge it, and return it fully powered. Hassle-free pickup & drop-off charging service for busy EV owners in Dubai.",
  keywords      : ["EV Pickup", "EV Drop Charging"],
  alternates    : {
      canonical : "/ev-pickup-dropoff-charging-service",
    },
};

function PickupAndDropOffPage() {
  return (
    <>
      <HeroImage />
      <Intro />
      <WhyChoose />
      <WhyChooseService />
      <PickupDropOff />
      <BookingStep />
      <CTA />
      <Offers />
      <DownloadApp />
      <Faqs />
      {/* <Values />
      <Pricing />
      <Feature /> */}
    </>
  )
}

export default PickupAndDropOffPage;