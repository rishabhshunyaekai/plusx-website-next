import HeroImage      from "@/components/chargeShare/heroImage/heroImage";
import Breadcrumbs    from "@/sharedComponents/breadCumb/breadCrumb";
import Intro          from "@/components/chargeShare/chargeShareIntro/chargeShareIntro";
import Usage          from "@/components/chargeShare/usage/usage";
import Intro2         from "@/components/chargeShare/chargeShareIntro/csIntro";
import PrivateCharger from "@/components/chargeShare/whyPrivateCharger/whyPrivateCharger";
// import Feature        from "@/components/chargeShare/feature/feature";
import Benefits       from "@/components/chargeShare/benefits/benefits";
import ListOfCharger  from "@/components/chargeShare/bookingSteps/listOfCharger";
import AccessSteps    from "@/components/chargeShare/bookingSteps/accessSteps";
import SmartModel     from "@/components/chargeShare/smartModel/smartModel";
import Intro3         from "@/components/chargeShare/chargeShareIntro/csIntro2";
import Offers         from "@/components/homepage/offers/offers";
import DownloadApp    from "@/sharedComponents/downloadApp/downloadApp";
import FAQ            from "@/components/chargeShare/chargeShareFAQ/chargeShareFAQ";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const metadata = {
  title         : "Share Your EV Charger with Fellow EV Owners in Dubai | PlusX Electric",
  description   : "A community-driven way to share private EV chargers across Dubai. List your charger or find one nearby through the PlusX Electric app — built for EV owners helping each other.",
  // keywords      : ["plusx", "plusxelectric", "plusx electric", "EV Charger Share", "EV Charger Marketplace", "private ev charger near me", "list your ev charger", "list your ev charger and earn"],
  alternates    : {
      canonical : `${BASE_URL}/ev-charge-share`,
      languages: {
        "en-AE": `${BASE_URL}/ev-charge-share`,
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
      "item": `${BASE_URL}/`
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Share Private EV Charger",
      "item": `${BASE_URL}/ev-charge-share`
    }
  ]
}

function EVChargeSharePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbList) }} />
      <HeroImage />
      <Breadcrumbs />
      <Intro />
      <Usage />
      <Intro2 />
      <PrivateCharger />
      {/* <Feature /> */}
      <Benefits />
      <ListOfCharger />
      <AccessSteps />
      <SmartModel />
      <Intro3 />
      <Offers />
      <DownloadApp />
      <FAQ />
    </>
  )
}

export default EVChargeSharePage;