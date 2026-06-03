import Features           from "@/sharedComponents/features/features";
import Consultancy        from "@/assets/images/plusx-for-business-page/plusx_electric_ev_consultancy.webp";
import FixedPortable      from "@/assets/images/plusx-for-business-page/plusx_electric_portable_charger.webp";
import Maintenance        from "@/assets/images/plusx-for-business-page/plusx_electric_ev_maintainance.webp";
// import ManagementPayment  from "@/assets/images/plusx-for-business-page/plusx_electric_ev_management.webp";
import Regulatory         from "@/assets/images/plusx-for-business-page/plusx_electric_regulatory_approval.webp";
import RentLease          from "@/assets/images/plusx-for-business-page/plusx_electric_rent_lease_to_own.webp";
import Link from "next/link";
// import MobileCharging from "./../../../assets/plusxbusiness/MobileCharging.webp";

// const heading       = "What Our EV Rescue Technician Does When They Arrive";
// const content       = `When our rescue van reaches your location, here's exactly what happens.`;
// const featuresData  = [
//   {
//     title       : "Safety assessment",
//     description : "The technician secures the area. If you're on a roadside, they position the van to provide a safety buffer and activate hazard markers. If you're in a parking garage, they approach and assess the vehicle position.",
//     imageSrc    : Consultancy,
//   },
//   {
//     title       : "12V diagnostic check",
//     description : "Before anything else, the technician checks your 12V auxiliary battery. This is critical because roughly half of all EV breakdowns in Dubai are caused by a dead 12V battery, not a depleted main battery pack. If the 12V is the problem, they jump-start it on the spot using equipment calibrated specifically for EV electrical architectures. The car's computer boots up, the dashboard comes alive, you see your main battery reading at 60 or 70 or 80 percent, and you drive away. Total time: 10 to 15 minutes.",
//     imageSrc    : FixedPortable,
//     reverse     : true,
//   },
//   {
//     title       : "On-site charging (if needed)",
//     description : "If the main battery is genuinely depleted, the technician connects DEWA-approved portable charging equipment and delivers up to 10 kWh of charge directly to your vehicle. Depending on your EV model and driving conditions, 10 kWh provides approximately 50 to 70 km of range — enough to reach home, your office, or the nearest permanent charging station anywhere within Dubai.",
//     imageSrc    : Maintenance,
//   },
//   {
//     title       : "Battery and connector health check",
//     description : "While the charge is being delivered, the technician inspects the charge port, connectors, and visible battery enclosure for any signs of damage or wear. If they spot anything unusual, they'll let you know and recommend next steps.",
//     imageSrc    : Regulatory,
//     reverse     : true,
//   },
//   {
//     title       : "You drive away",
//     description : (<>The charge is complete. Your car is running. You get back in and continue to your destination. No towing, no workshop, no second appointment, no follow-up trip to retrieve your car. The entire process — from van arrival to you driving away — typically takes 45 to 90 minutes.<br />To learn more about the <Link href={"/five-scenarios-where-ev-roadside-assistance-becomes-a-lifesaver"}>common EV breakdown scenarios</Link>our technicians handle most frequently, visit our blog..</>),
//     imageSrc    : RentLease,
//   },
// ];

const heading       = "EV Towing vs PlusX Mobile Rescue — Why We Don't Tow";
// const content       = `Most EV drivers in Dubai call a tow truck when their car breaks down because that's what they've always done with petrol cars. But towing an EV and rescuing an EV are two very different things. Here's what the difference looks like in practice.`;
const featuresData  = [
  {
    title       : "The cost difference",
    description : "A standard flatbed tow within Dubai costs AED 500 to AED 800 for the tow alone. Add workshop diagnostic fees (AED 200 to AED 400), potential charging costs at the destination station, and your own transport to retrieve the car later, and the total easily crosses AED 1,000 to AED 1,500. PlusX mobile rescue starts from AED 185 + VAT. One visit, one invoice, no secondary charges. That's a 60 to 75 percent saving on a typical breakdown.",
    imageSrc    : Consultancy,
  },
  {
    title       : "The time difference",
    description : "A tow-based resolution — from the initial call to the car being drivable again — averages 3 to 6 hours in Dubai. This includes dispatch wait time, travel to the workshop or station, diagnostic or charging time, and the return trip to pick up your car. A PlusX mobile rescue averages 45 to 90 minutes total. The van arrives, the technician resolves the issue, and you drive away in your own car.",
    imageSrc    : FixedPortable,
    reverse     : true,
  },
  {
    title       : "The access difference",
    description : "This is the advantage that matters most in Dubai. A flatbed tow truck is roughly 8 meters long and 2.5 meters tall. It cannot enter most building parking garages in Dubai. It cannot navigate tight multi-storey parking structures. It cannot access many villa compound internal roads or hotel underground valet areas. A PlusX rescue van is built on a standard commercial vehicle chassis with normal height clearance. It fits into building parking garages — B1, B2, B3, podium levels, and multi-storey structures. It enters hotel underground parking. It navigates narrow villa compound roads. It goes where flatbeds physically cannot — which is exactly where most Dubai EV owners actually park their cars.",
    imageSrc    : Maintenance,
  },
  {
    title       : "Battery and connector health check",
    description : "While the charge is being delivered, the technician inspects the charge port, connectors, and visible battery enclosure for any signs of damage or wear. If they spot anything unusual, they'll let you know and recommend next steps.",
    imageSrc    : Regulatory,
    reverse     : true,
  },
  {
    title       : "You drive away",
    description : (<>The charge is complete. Your car is running. You get back in and continue to your destination. No towing, no workshop, no second appointment, no follow-up trip to retrieve your car. The entire process — from van arrival to you driving away — typically takes 45 to 90 minutes.<br />To learn more about the <Link href={"/five-scenarios-where-ev-roadside-assistance-becomes-a-lifesaver"}>common EV breakdown scenarios</Link>our technicians handle most frequently, visit our blog..</>),
    imageSrc    : RentLease,
  },
];

function Feature() {
  // return <Features heading={heading} content={content} featuresData={featuresData} />;
  return <Features heading={heading} featuresData={featuresData} />;
}

export default Feature;
