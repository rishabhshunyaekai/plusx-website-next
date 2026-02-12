import Features           from "@/sharedComponents/features/features";
import Consultancy        from "@/assets/images/plusx-for-business-page/consultancy.webp";
import FixedPortable      from "@/assets/images/plusx-for-business-page/fixed-portable.webp";
import Maintenance        from "@/assets/images/plusx-for-business-page/maintenance.webp";
import ManagementPayment  from "@/assets/images/plusx-for-business-page/management-payment.webp";
import Regulatory         from "@/assets/images/plusx-for-business-page/regulatory.webp";
import RentLease          from "@/assets/images/plusx-for-business-page/rent-lease.webp";
// import MobileCharging from "./../../../assets/plusxbusiness/MobileCharging.webp";

const heading       = "Offerings";
const featuresData  = [
  {
    title       : "Consultancy",
    description : "Maximize your EV charging infrastructure with PlusX Electric’s expert consultancy. Our experienced team offers tailored guidance from planning and design to installation and management, ensuring efficient operations and a seamless user experience. Trust PlusX Electric to simplify your EV charging needs and support a greener future.",
    imageSrc    : Consultancy,
  },
  {
    title       : "Fixed and Portable Charges",
    description : "In addition to fixed charging solutions, PlusX Electric offers a variety of unique portable charging options. These versatile charging technology developed by PlusX Electric enable businesses to optimize their capital investment and improve operational efficiency. By providing flexible and scalable charging solutions, we help companies adapt to their unique needs, reduce overall costs, and enhance their charging infrastructure's performance.",
    imageSrc    : FixedPortable,
    reverse     : true,
  },
  {
    title       : "Maintenance",
    description : "Save money and avoid hassle with an annual maintenance contract for your EV charger. Regular upkeep prevents breakdowns, extends lifespan, and improves efficiency. Stay warranty compliant and enjoy priority service for quick resolutions. Invest in maintenance to ensure reliable, efficient charging.",
    imageSrc    : Maintenance,
  },
  {
    title       : "Management & Payments",
    description : "Enhance the efficiency and profitability of your EV charging infrastructure with advanced management solutions. Monitor and optimize chargers in real-time, address issues quickly with expert support, and boost revenue through integrated payment processing and billing. Gain better control and deliver exceptional charging experiences with our comprehensive approach.",
    imageSrc    : ManagementPayment,
    reverse     : true,
  },
  {
    title       : "Regulatory Approvals",
    description : "PlusX Electric simplifies the approval process for additional load needed by EV chargers. With expert guidance, applications are streamlined, regulations are navigated, and coordination with authorities is handled efficiently. This ensures a smooth approval process, allowing businesses to confidently expand their EV charging infrastructure.",
    imageSrc    : Regulatory,
  },
  {
    title       : "EV Chargers on Rent Lease to Own",
    description : "Businesses don’t always want to invest in EV chargers upfront. With PlusX Electric, you can rent or lease EV chargers for your workplace, building, commercial parking, or fleet yard. If you decide to continue long-term, you can buy the same chargers by settling the remaining amount and shift to full ownership. This is an ideal option if you want to test EV charging for your business first—so you can start quickly, save costs, and avoid investing heavy capital upfront.",
    imageSrc    : RentLease,
    reverse     : true,
  },
  // {
  //   title        : "Mobile Charging Solutions",
  //   description  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //   imageSrc     : MobileCharging,
  // },
];

function Feature() {
  return <Features heading={heading} featuresData={featuresData} />;
}

export default Feature;
