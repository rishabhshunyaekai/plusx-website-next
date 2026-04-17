import Link       from "next/link";
import Features   from "@/sharedComponents/features/features";
import Property   from "@/assets/images/ev-charger-installation-page/property.webp";
import Service    from "@/assets/images/ev-charger-installation-page/services.webp";

// const heading       = "Booking Process";
const featuresData  = [
  {
    title       : "EV Charger Installation for Every Property Type",
    description : "We install EV chargers at residential properties like villas, apartments, and flats, as well as commercial locations including hotels, warehouses, offices, shopping malls, and fleet depots.",
    imageSrc    : Property,
    reverse     : true,
  },
  {
    title       : "EV Charger Installation Services Across UAE",
    description : (<>While we&apos;re based in Dubai, our EV charger installation service covers the entire UAE, including Abu Dhabi, Sharjah, and Ras Al Khaimah. You can also buy EV chargers and accessories through our website or app. <br />Need charging before your installation is complete? Try our <Link href={"/mobile-ev-charging-dubai"}>mobile EV charging service</Link> or <Link href={"/ev-pickup-dropoff-charging-service"}>pickup and dropoff charging</Link>.</>),
    imageSrc    : Service,
  },
];

function Feature() {
  return <Features featuresData={featuresData} />;
  // heading={heading}
}

export default Feature;
