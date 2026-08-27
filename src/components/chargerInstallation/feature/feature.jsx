import Link       from "next/link";
import Features   from "@/sharedComponents/features/features";
import Property   from "@/assets/images/ev-charger-installation-page/plusx_eletric_ev_charger_installation.webp";
import Service    from "@/assets/images/ev-charger-installation-page/plusx_eletric_ev_charger_installation_service.webp";

// const heading       = "Booking Process";
const featuresData  = [
  {
    title       : "EV Charger Installation for Every Property Type",
    description : (<><strong>Residential:</strong> Villas, townhouses, apartments and flats — including high-rise buildings with shared parking, where we handle building management approval coordination and sub-metering. <br/><strong >Commercial:</strong> Hotels, offices, shopping malls, warehouses, retail parking and fleet depots. Most electric vehicle charging station installation companies stop at the wiring. As a licensed charge point operator we also handle load studies and  DEWA approval where the site requires it.</>),
    imageSrc    : Property,
    reverse     : true,
  },
  {
    title       : "EV Charger Installation Services Across UAE",
    description : (<>Our EV charger installation services run across every major Dubai community — Downtown Dubai, Dubai Marina, Business Bay, JLT, Palm Jumeirah, JVC, Arabian Ranches, Emirates Hills, Al Barsha, Mirdif, Al Quoz, Dubai Hills, Damac Hills, Dubai South and Dubai Production City. Searching EV charger installation near me? Share your location and we will confirm coverage on the same call.<br/>Beyond Dubai, EV charger installation UAE coverage extends to Abu Dhabi, Sharjah, Ajman and Ras Al Khaimah. <br/>Need charging before your installation is finished? Use <Link href={"/mobile-ev-charging-dubai"}>mobile EV charging</Link> or <Link href={"/ev-breakdown-assistance"}>emergency EV charging</Link> in the meantime.</>),
    imageSrc    : Service,
  },
];

function Feature() {
  return <Features featuresData={featuresData} />;
  // heading={heading}
}

export default Feature;
