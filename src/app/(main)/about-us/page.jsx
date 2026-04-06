import HeroImage    from "@/components/about/heroImage/heroImage";
import Intro        from "@/components/about/aboutIntro/aboutIntro";
import Feature      from "@/components/about/feature/feature";
import CTA          from "@/components/about/ctaSection/ctaSection";
import DownloadApp  from "@/sharedComponents/downloadApp/downloadApp";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const metadata = {
  title         : "Best EV Charging Company in Dubai",
  description   : "PlusX Electric is an innovative electric vehicle charging company based in Dubai, UAE. Dedicated to solving the challenges of EV adoption.",
  // keywords      : ["plusx", "plusxelectric", "plusx electric"],
  alternates    : {
      canonical : `${BASE_URL}/about-us`,
      languages: {
        "en-AE": `${BASE_URL}/about-us`,
      },
    },
};

function AboutUsPage() {
  return (
    <>
      <HeroImage />
      <Intro />
      <Feature />
      <CTA />
      <DownloadApp />
    </>
  )
}

export default AboutUsPage;