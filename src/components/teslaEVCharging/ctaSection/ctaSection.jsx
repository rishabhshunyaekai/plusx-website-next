import mobileApp  from "@/assets/images/homepage/Plusx_electric_mobile_app_homepage_image.webp";
import AppSection from "./appSection";

function ctaSection() {
  const cta = {
    title       : "Where We Serve",
    description : "Tesla charging across Dubai, including Downtown, Dubai Marina, JLT, JVC, Business Bay, Palm Jumeirah, Dubai Hills, Arabian Ranches, Al Barsha, Deira, Dubai South and along Sheikh Zayed Road.",
    image       : mobileApp,
  }

  return (
    <AppSection title={cta.title} description={cta.description} image={cta.image} />
  )
}

export default ctaSection;