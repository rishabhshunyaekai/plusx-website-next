import HeroImage    from "@/components/evChargerDubaiApartments/heroImage/heroImage";
import Breadcrumbs  from "@/sharedComponents/breadCumb/breadCrumb";
import Intro        from "@/components/evChargerDubaiApartments/intro/intro";
import Values       from "@/components/evChargerDubaiApartments/values/values";
import Chargers     from "@/components/evChargerDubaiApartments/chargers/chargers";
import Testimonials from "@/components/evChargerDubaiApartments/testimonials/testimonials";
import DownloadApp  from "@/sharedComponents/downloadApp/downloadApp";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const metadata = {
  title         : "EV Charger Installation for Dubai Apartments | PlusX Electric",
  description   : "DEWA-approved EV charger installation for Dubai apartments. We handle building NOC, approval & installation. 450+ chargers installed Across UAE.",
  // keywords      : ["plusx", "plusxelectric", "plusx electric", "EV Charger installation services", "residential and commercial charger", "buy ev charger", "ev charger for home & offices", "ev charger supplier near me"],
  alternates    : {
      canonical : `${BASE_URL}/ev-charger-installation-dubai-apartments`,
      languages: {
        "en-AE": `${BASE_URL}/ev-charger-installation-dubai-apartments`,
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
      "item": `${BASE_URL}/`,
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "EV Charger Installation Dubai Apartments",
      "item": `${BASE_URL}/ev-charger-installation-dubai-apartments`,
    }
  ]
}

function EVChargerInstallationDubaiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbList) }} />
      <HeroImage />
      <Breadcrumbs />
      <Intro />
      <Values />
      <Chargers />
      <Testimonials />
      <DownloadApp />
    </>
  )
}

export default EVChargerInstallationDubaiPage;