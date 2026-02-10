import mobileApp  from "@/assets/images/homepage/mobile-app.webp";
import AppSection from "@/sharedComponents/appSection/appSection";

function ctaSection() {
  const cta = {
    title       : "Flexible EV Charging Solutions for Every User",
    description : "At PlusX Electric, we make it simple to power up your EV at home or the workplace. You can purchase high-quality Fixed EV Chargers directly through our app — with or without installation service. If you want us to handle everything, you can book our professional installation service along with your charger in just a few taps. Prefer to install it yourself or have your own technician? No problem — simply buy the charger without installation.",
    image       : mobileApp,
  }

  return (
    <AppSection title={cta.title} description={cta.description} image={cta.image} />
  )
}

export default ctaSection;