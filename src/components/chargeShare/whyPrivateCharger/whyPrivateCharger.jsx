import style          from "./whyPrivateCharger.module.css";
import Card           from "@/sharedComponents/serviceIconCard/serviceIconCard";
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

          <p className={style.scenariosIntro2}>Many EV owners rely on public chargers as a result.</p>
          <p className={style.scenariosIntro}>Private charger sharing helps increase local charging access by using existing chargers within the community. <br className={style.breakLine}/>It also reduces dependency on crowded public stations.</p>
        </Animated>
      </div>
    </section>
  );
}

export default PrivateCharger;
