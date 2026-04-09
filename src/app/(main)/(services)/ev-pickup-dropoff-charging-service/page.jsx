import HeroImage          from "@/components/pickupDropoff/heroImage/heroImage";
import Breadcrumbs        from "@/sharedComponents/breadCumb/breadCrumb";
import Intro              from "@/components/pickupDropoff/pickupDropoffIntro/pickupDropoffIntro";
import WhyChoose          from "@/components/pickupDropoff/whyChoose/whyChoose";
import WhyChooseService   from "@/components/pickupDropoff/whyChooseService/whyChooseService";
import PickupDropOff      from "@/components/pickupDropoff/pickupDropoff/pickupDropoff";
import BookingStep        from "@/components/pickupDropoff/bookingSteps/bookingSteps";
import CTA                from "@/components/pickupDropoff/cta/cta";
import Offers             from "@/components/homepage/offers/offers";
import DownloadApp        from "@/sharedComponents/downloadApp/downloadApp";
import Faqs               from "@/components/pickupDropoff/pickupDropoffFAQ/pickupDropoffFAQ";
// import Values       from "@/components/pickupDropoff/values/values";
// import Pricing      from "@/components/pickupDropoff/pricing/pricing";
// import Feature      from "@/components/pickupDropoff/feature/feature";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const metadata = {
  title         : "EV Pickup and Drop Off Charging Dubai | PlusX Electric",
  description   : "EV pickup and drop off charging Dubai by PlusX Electric. We collect your vehicle, charge it, and return it in about 3 hours. Download the PlusX Electric app.",
  // keywords      : ["plusx", "plusxelectric", "plusx electric", "EV Pickup", "EV valet charging service", "Tesla valet charging Dubai", "valet charging service Dubai", "EV Drop Charging", 
  //                   "ev pickup & dropoff service", "ev pickup & dropoff service in dubai", "EV valet charging Dubai", "EV charge and return service Dubai"],
  alternates    : {
      canonical : `${BASE_URL}/ev-pickup-dropoff-charging-service`,
      languages: {
        "en-AE": `${BASE_URL}/ev-pickup-dropoff-charging-service`,
      },
    },
};

const breadCrumbList = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://plusxelectric.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "EV Pickup Dropoff Charging Service",
      "item": "https://plusxelectric.com/ev-pickup-dropoff-charging-service"
    }
  ]
}

function PickupAndDropOffPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbList) }} />
      <HeroImage />
      <Breadcrumbs />
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