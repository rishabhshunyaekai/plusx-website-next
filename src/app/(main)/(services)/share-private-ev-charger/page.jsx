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
  title         : "Share Private EV Charger in Dubai | Earn with PlusX Electric",
  description   : "Share private EV charger in Dubai and earn with PlusX Electric. List your charger, set availability, and connect with EV drivers. Download the PlusX Electric app.",
  // keywords      : ["plusx", "plusxelectric", "plusx electric", "EV Charger Share", "EV Charger Marketplace", "private ev charger near me", "list your ev charger", "list your ev charger and earn"],
  alternates    : {
      canonical : `${BASE_URL}/share-private-ev-charger`,
      languages: {
        "en-AE": `${BASE_URL}/share-private-ev-charger`,
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
      "item": `${BASE_URL}/share-private-ev-charger`
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