import HeroImage    from "@/components/homepage/heroImage/heroImage";
import Achievements from "@/components/homepage/achievements/achievements";
import Intro        from "@/components/homepage/homeIntro/homeIntro";
import DownloadApp  from "@/sharedComponents/downloadApp/downloadApp";

function HomePage() {
  return (
    <>
      <HeroImage />
      <Intro />
      <Achievements />
      <DownloadApp />
    </>
  );
}

export default HomePage;
