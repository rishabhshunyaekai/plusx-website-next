import Features   from "@/sharedComponents/features/features";
import Property   from "@/assets/images/ev-charger-installation-page/property.webp";
import Service    from "@/assets/images/ev-charger-installation-page/services.webp";

// const heading       = "Booking Process";
const featuresData  = [
  {
    title       : "EV Charger Installation for Every Property Type",
    description : "We not only install EV chargers at residential properties such as villas, apartments, and flats, as well as commercial locations like hotels, warehouses, office spaces, shopping malls, townhouses, and fleet or corporate sites across different property types. ",
    imageSrc    : Property,
    reverse     : true,
  },
  {
    title       : "EV Charger Installation Services Across UAE",
    description : "Our team offers charger supply and installation support in Dubai. But we are not limited to Dubai. Our EV charger installation service is available across the UAE, whether it is Ras Al Khaimah, Abu Dhabi, or Sharjah. We not only provide installation, but you can also buy EV chargers and accessories through our website or app.",
    imageSrc    : Service,
  },
];

function Feature() {
  return <Features featuresData={featuresData} />;
  // heading={heading}
}

export default Feature;
