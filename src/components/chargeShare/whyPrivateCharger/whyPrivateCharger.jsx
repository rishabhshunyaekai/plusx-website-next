import style          from "./whyPrivateCharger.module.css";
import Card           from "./card";
import Animated       from "@/sharedComponents/animatedComponent/animated";
import Capacity       from "@/assets/images/ev-charge-share-page/capacity.svg";
import Building       from "@/assets/images/ev-charge-share-page/building.svg";
import HighCost       from "@/assets/images/ev-charge-share-page/high-cost.svg";
import Infrastructure from "@/assets/images/ev-charge-share-page/infrastructure.svg";

function PrivateCharger() {

  const cardData = [
    {
      icon: Capacity,
      text: "Limited electrical load capacity",
    },
    {
      icon: Building,
      text: "Building management approval requirements",
    },
    {
      icon: HighCost,
      text: "High installation costs",
    },
    {
      icon: Infrastructure,
      text: "Long waiting periods for infrastructure upgrades",
    },
  ];

  return (
    <section className={style.scenarios}>
      <div className="container">
        <Animated className={`${style.scenariosContent} order-2 lg:order-1`} animation="fade" easing="ease-in" duration={1000}>
          <h2 className={style.scenariosHeading}>Why Private Charger Sharing <br className={style.breakLine}/> Is Needed in Dubai ?</h2>
          <p className={style.scenariosIntro}>Common challenges include:</p>

          <div className={`grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2 m-4`}>
            {cardData.map((value, index) => (
                <Card key={index} iconSrc={value.icon} text={value.text} />
              ))}
          </div>

          <p className={style.scenariosIntro2}>Consequently, the number of EV users who depend on external charging facilities is high.</p>
          <p className={style.scenariosIntro}>EV charger sharing by private entities can help reduce strain on overcrowded public infrastructure and<br className={style.breakLine}/> increase the number of local charging points in residential neighborhoods by creating<br className={style.breakLine}/> a private EV charger marketplace.</p>
        </Animated>
      </div>
    </section>
  );
}

export default PrivateCharger;
