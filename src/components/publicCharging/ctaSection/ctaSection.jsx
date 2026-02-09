import mobileApp  from "@/assets/images/public-charging-page/mobile-app.webp";
import AppSection from "@/sharedComponents/appSection/appSection";

function ctaSection() {
  const cta = {
    title       : "Stay Powered On the Go with Our EV Charging App in Dubai",
    description : "Don't worry about where you can charge your EV! With PlusX Electric's smart app, you'll be able to find the nearest public EV charging stations in real time. Whether you are on the road and trying to find a charger, or if you are planning a route and want to know where to charge, the app will help you find accessible chargers nearby, view the station’s details, and get turn-by-turn directions.",
    image       : mobileApp,
  }

  return (
    <AppSection title={cta.title} description={cta.description} image={cta.image} />
  )
}

export default ctaSection;