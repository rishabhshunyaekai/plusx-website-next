import HeroImage    from "@/components/sustainability/heroImage/heroImage";
import Feature      from "@/components/sustainability/feature/feature";
import DownloadApp  from "@/sharedComponents/downloadApp/downloadApp";
import PlusxForm    from "@/components/plusxBusiness/plusxForm/plusxForm";

export const metadata = {
  title         : "Sustainable Energy Company in Dubai | PlusX Electric",
  description   : "Dubai’s leading sustainable energy company. PlusX Electric offers EV incentives, AI charging insights, and carbon credit solutions.",
  keywords      : ["Sustainable", "Energy"],
  alternates    : {
      canonical : "/sustainability",
    },
};

function SustainabilityPage() {
  return (
    <>
      <HeroImage />
      <Feature />
      <PlusxForm />
      <DownloadApp />
    </>
  )
}

export default SustainabilityPage;