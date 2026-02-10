import HeroImage    from "@/components/chargerInstallation/heroImage/heroImage";
import Intro        from "@/components/chargerInstallation/chargerInstallationIntro/chargerInstallationIntro";
import Values       from "@/components/chargerInstallation/values/values";
import Benefits     from "@/components/chargerInstallation/benefits/benefits";
import Products     from "@/components/chargerInstallation/productCard/productCard";
import CTASection   from "@/components/chargerInstallation/ctaSection/ctaSection";
import Brands       from "@/components/chargerInstallation/brands/brands";
import Offers       from "@/components/homepage/offers/offers";
import Form         from "@/components/chargerInstallation/chargerInstallationForm/chargerInstallationForm";
import DownloadApp  from "@/sharedComponents/downloadApp/downloadApp";

export const metadata = {
  title         : "Residential & Commercial EV Charger Installation Dubai",
  description   : "PlusX Electric installs EV chargers in Dubai for residential and commercial spaces—home, office, villa, and mall. Fast, safe, and reliable.",
  keywords      : ["EV Charger", "residential and commercial charger"],
  alternates    : {
      canonical : "/ev-chargers",
    },
};

function EVChargerInstallationPage() {
  return (
    <>
      <HeroImage />
      <Intro />
      <Values />
      <Benefits />
      <Products />
      <CTASection />
      <Brands />
      <Offers />
      <Form />
      <DownloadApp />
    </>
  )
}

export default EVChargerInstallationPage;