import mobileApp  from "@/assets/images/homepage/Plusx_electric_mobile_app_homepage_image.webp";
import AppSection from "@/sharedComponents/appSection/appSection";

function ctaSection() {
  const cta = {
    title       : "Why Every EV Owner Must Have the PlusX Electric App in Dubai",
    description : "Charging your EV should be as easy as charging your phone and with PlusX Electric, it is. No more jumping between different apps for different problems. Need a charge? We come to you. Battery died? We rescue you. Need a home charger? We install it. Need insurance? We sort it. All EV support services in one app across the UAE , built to make EV ownership easier, faster, and more reliable every day.",
    image       : mobileApp,
  }

  return (
    <AppSection title={cta.title} description={cta.description} image={cta.image} />
  )
}

export default ctaSection;