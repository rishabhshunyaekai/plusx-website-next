import HeroImage    from "@/components/chargerInstallation/heroImage/heroImage";
import Intro        from "@/components/chargerInstallation/chargerInstallationIntro/chargerInstallationIntro";
import Values       from "@/components/chargerInstallation/values/values";
import WhyChoose    from "@/components/chargerInstallation/whyChoose/whyChoose";
import Products     from "@/components/chargerInstallation/productCard/productCard";
import Assistance   from "@/components/chargerInstallation/assistance/assistance";
import Benefits     from "@/components/chargerInstallation/benefits/benefits";
import BookingSteps from "@/components/chargerInstallation/bookingSteps/bookingSteps";
import Features     from "@/components/chargerInstallation/feature/feature";
import CTA          from "@/components/chargerInstallation/cta/cta";
// import CTASection   from "@/components/chargerInstallation/ctaSection/ctaSection";
import Brands       from "@/components/chargerInstallation/brands/brands";
import Offers       from "@/components/homepage/offers/offers";
import Form         from "@/components/chargerInstallation/chargerInstallationForm/chargerInstallationForm";
import DownloadApp  from "@/sharedComponents/downloadApp/downloadApp";
import Faq          from "@/components/chargerInstallation/chargerFAQ/chargerFAQ";

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
      <WhyChoose />
      <Products />
      <Assistance />
      <Benefits />
      <BookingSteps />
      <Features />
      <CTA />
      {/* <CTASection /> */}
      <Brands />
      <Offers />
      <Form />
      <DownloadApp />
      <Faq />
    </>
  )
}

export default EVChargerInstallationPage;