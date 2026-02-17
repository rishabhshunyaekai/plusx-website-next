import HeroImage      from "@/components/mobilitySolution/heroImage/heroImage";
// import Intro          from "@/components/mobilitySolution/mobilityIntro/mobilityIntro";
// import Services       from "@/components/mobilitySolution/servicesCard/servicesCard";
// import CTASection     from "@/components/mobilitySolution/ctaSection/ctaSection";
// import Solutions      from "@/components/mobilitySolution/mobilitySolutions/mobilitySolutions";
// import Values         from "@/components/mobilitySolution/values/values";
// import Sustainability from "@/components/mobilitySolution/sustainability/sustainability";
// import Offers         from "@/components/homepage/offers/offers";
// import DownloadApp    from "@/sharedComponents/downloadApp/downloadApp";

export const metadata = {
  title         : "Electric Cycle Rent & Lease in India | PlusX Mobility",
  description   : "Rent or lease electric cycles in India with PlusX Mobility. Ideal for short trips, daily commutes, colleges, and community transport.",
  keywords      : ["Electric Cycle Rent", "Rent or lease electric cycles", "PlusX Mobility"],
  alternates    : {
      canonical : "/mobility-solution",
    },
};

function MobilitySolutionPage() {
  return (
    <>
      <HeroImage />
      {/* <Intro />
      <Services />
      <CTASection />
      <Solutions />
      <Values />
      <Sustainability />
      <Offers />
      <DownloadApp /> */}
    </>
  )
}

export default MobilitySolutionPage;