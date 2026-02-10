import Pod          from "@/assets/images/portable-charger-page/new-pod.webp";
import PodDelivered from "@/assets/images/portable-charger-page/pod-delivered.webp";
import Location     from "@/assets/images/portable-charger-page/preferred-time-location.webp";
import Features     from "@/sharedComponents/features/features";

const heading = "How to Book Mobile Charging Services in Dubai?";
const featuresData = [
  {
    title       : "Book your Power Pod",
    description : "The PlusX Electric app makes it easy and quick to book your portable EV charger.",
    listHeading : "The app lets you:",
    listDesc    : ["Check if a pod is available right now","Set up your doorstep charging session at a time that works for you","Get instant confirmation of your booking","Manage more than one session if you have more than one vehicle or fleet"],
    endingDesc  : "The app makes sure that everything goes smoothly, giving you complete control over your doorstep EV charging in Dubai needs at any time and from any place.",
    imageSrc    : Pod,
  },
  {
    title       : "Select Your Preferred Time & Location",
    description : "Pick a time and place that works for you. The app makes sure that your preferences are met, whether it's at home, at work, or somewhere else.",
    listHeading : "You can:",
    listDesc    : ["Choose exact pickup and delivery locations","Set up regular sessions for regular charging needs","Change the timing on the fly for more freedom"],
    endingDesc  : "This makes it simple to add on-demand EV charging Dubai to your daily life without any problems.",
    imageSrc    : Location,
    reverse     : true,
  },
  {
    title       : "Pod Delivered",
    description : "Once you confirm your reservation, our trained PlusX Electric team will bring the Power Pod to the location you chose.",
    listHeading : "The team:",
    listDesc    : ["Puts the pod together and safely connects it to your EV","Watches the charging session to make sure everything goes smoothly","Comes back to get the pod when charging is done"],
    endingDesc  : "You don't have to worry about setting things up or working with high-voltage systems. You don’t need to keep a track of equipment too. Our experts take care of everything.",
    imageSrc    : PodDelivered,
  },
];

function Feature() {
  console.log(featuresData, 'item featuresdata');
  return <Features heading={heading} featuresData={featuresData} />;
}

export default Feature;
