import Features         from "@/sharedComponents/features/features";
import BookYourService  from "@/assets/images/pickup-dropoff-page/book-your-service.webp";
import TimeAndLocation  from "@/assets/images/pickup-dropoff-page/time-location.webp";
import ServiceProcess   from "@/assets/images/pickup-dropoff-page/service-process.webp";

const heading       = "Booking Process";
const featuresData  = [
  {
    title       : "Book your Service",
    description : "It’s easy to schedule your Pickup & Drop-off service with the PlusX Electric app. In the app you have access to real-time availability, confirmations, and scheduling so you can easily manage your EV charging! You can book a charging session in a matter of clicks - we promise it will be easier than working through paperwork and long phone calls.",
    imageSrc    : BookYourService,
  },
  {
    title       : "You Choose Your Preferred Time & Location",
    description : "The PlusX app allows you to choose a preferred time and location that suits your routine. Whether at home, the office, or any location in Dubai, you can specify exactly where you would like our team to collect your EV. This guarantees very few interruptions in your day when we collect and return your vehicle.",
    imageSrc    : TimeAndLocation,
    reverse     : true,
  },
  {
    title       : "Service Process",
    description : "When you book a doorstep EV pickup charging service, the PlusX Electric team shows up to the address and location you select. Our trained team will pick up your EV, take it to a charging station, take care of all the connections and charge it up safely.",
    secondDescription: "The PlusX EV Valet Charging Service eliminates the worry of Electric Vehicle ownership while ensuring your vehicle is ready to go at all times. Whether you're in a rush, have a tight schedule, limited time, or errands to run, we believe PlusX Charging fits perfectly into your lifestyle.",  
    imageSrc  : ServiceProcess,
  },
];

function Feature() {
  return <Features heading={heading} featuresData={featuresData} />;
}

export default Feature;
