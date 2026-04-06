import HeroImage  from "@/components/plusxBusiness/heroImage/heroImage";
import PlusxIntro from "@/components/plusxBusiness/plusxIntro/plusxIntro";
import Values     from "@/components/plusxBusiness/values/values";
import Feature    from "@/components/plusxBusiness/feature/feature";
import Offers     from "@/components/homepage/offers/offers";
import PlusxForm  from "@/components/plusxBusiness/plusxForm/plusxForm";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const metadata = {
  title         : "EV Charging Solutions for Hotels, Malls & Fleets in Dubai",
  description   : "Commercial EV charging solutions in Dubai for offices, malls, hotels, and fleets. PlusX Electric delivers tailored, scalable charging systems.",
  // keywords      : ["plusx", "plusxelectric", "plusx electric", "Commercial EV charging solutions", "charging systems", "ev charger for fleet operator", "ev charger for hotels and malls", "ev charger for residence"],
  alternates    : {
      canonical : `${BASE_URL}/commercial-ev-charging-solutions`,
      languages: {
        "en-AE": `${BASE_URL}/commercial-ev-charging-solutions`,
      },
    },
};

function PlusXforBusinessPage() {
  return (
    <>
      <HeroImage />
      <PlusxIntro />
      <Values />
      <Feature />
      <Offers />
      <PlusxForm />
    </>
  )
}

export default PlusXforBusinessPage;