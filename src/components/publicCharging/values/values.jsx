import ServiceIconCard  from "@/sharedComponents/serviceIconCard/serviceIconCard";
import FindNear         from "@/assets/images/public-charging-page/find-near.svg";
import Savetime         from "@/assets/images/public-charging-page/save-time.svg";
import Station          from "@/assets/images/public-charging-page/station.svg";
import Direction        from "@/assets/images/public-charging-page/direction.svg";

const valuesCardData = [
  {
    icon: FindNear,
    text: "Find nearby chargers in real-time - stop guessing and hit the road with certainty.",
  },
  {
    icon: Savetime,
    text: "Save time and avoid detours - plan smarter routes to your destination and avoid delays.",
  },
  {
    icon: Station,
    text: "Know before you go - check charging type, pricing, and hours of operation in seconds.",
  },
  {
    icon: Direction,
    text: "Navigation at your fingertips - one tap for turn-by-turn directions to your station of choice.",
  },
];

function Values() {
  return (
    <section className={`wrapper`}>
      <div className={`container`}>
        <div className={`grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-2`}>
          {valuesCardData.map((value, index) => (
            <ServiceIconCard key={index} iconSrc={value.icon} text={value.text} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values;
