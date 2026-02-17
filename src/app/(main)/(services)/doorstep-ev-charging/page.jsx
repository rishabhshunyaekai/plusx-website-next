import PortableHeroImage  from "@/components/portablePod/portableHeroImage/portableHeroImage";
// import PortableIntro      from "@/components/portablePod/portableIntro/portableIntro";
// import Values             from "@/components/portablePod/values/values";
// import Pricing            from "@/components/portablePod/pricing/pricing";
// import Feature            from "@/components/portablePod/feature/feature";
// import Brands             from "@/components/portablePod/brands/brands";
// import Offers             from "@/components/homepage/offers/offers";
// import DownloadApp        from "@/sharedComponents/downloadApp/downloadApp";
// import Faqs               from "@/components/portablePod/portablePodFAQ/portablePodFAQ";

export const metadata = {
  title         : "Doorstep & On-Demand EV Charging Dubai | PlusX Electric",
  description   : "Mobile charging services in Dubai. On-demand EV charging at your doorstep for fast, reliable power wherever you are.",
  keywords      : ["Doorstep", "On-Demand", "portable pod", "charger"],
  alternates    : {
    canonical   : "/doorstep-ev-charging",
  },
};

function PortableChargerPage() {
  return (
    <>
      <PortableHeroImage />
      {/* <PortableIntro />
      <Values />
      <Pricing />
      <Feature />
      <Brands />
      <Offers />
      <DownloadApp />
      <Faqs/> */}
    </>
  );
}

export default PortableChargerPage;
