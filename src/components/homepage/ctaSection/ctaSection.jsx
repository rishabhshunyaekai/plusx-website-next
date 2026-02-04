import mobileApp  from "@/assets/images/homepage/mobile-app.webp";
import AppSection from "@/sharedComponents/appSection/appSection";

function ctaSection() {
  const cta = {
    title       : "Why Every EV Owner Must Have the PlusX Electric App in Dubai",
    description : "PlusX Electric brings everything an EV owner needs into one simple app. Book EV charging in Dubai, get doorstep charging support, request EV roadside assistance if your battery is low, schedule pickup & drop-off charging, find public chargers, and even access EV insurance - without switching between multiple services. It’s built to make EV ownership easier, faster, and more reliable every day.",
    image       : mobileApp,
  }

  return (
    <AppSection title={cta.title} description={cta.description} image={cta.image} />
  )
}

export default ctaSection;