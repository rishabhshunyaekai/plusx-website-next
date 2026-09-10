import mobileApp  from "@/assets/images/homepage/Plusx_electric_mobile_app_homepage_image.webp";
import AppSection from "./appSection/appSection";

function ctaSection() {
  const cta = {
    title       : "Your Complete EV Campanion in Dubai",
    description : "The PlusX Electric App is one app for every EV owner in Dubai. From accessing charging and roadside support to charger installation, insurance, buying chargers, discovering public charging stations, and listing your private chargers - everything you need is in one place.",
    image       : mobileApp,
  }

  return (
    <AppSection title={cta.title} description={cta.description} image={cta.image} />
  )
}

export default ctaSection;