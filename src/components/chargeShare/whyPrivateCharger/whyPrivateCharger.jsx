import style          from "./whyPrivateCharger.module.css";
import Card           from "@/sharedComponents/serviceIconCard/serviceIconCard";
import Animated       from "@/sharedComponents/animatedComponent/animated";
import Capacity       from "@/assets/images/ev-charge-share-page/plusx_electric_load_capacity_icon.svg";
import Building       from "@/assets/images/ev-charge-share-page/plusx_electric_building_management_icon.svg";
import HighCost       from "@/assets/images/ev-charge-share-page/plusx_electric_installation_cost_icon.svg";
import Infrastructure from "@/assets/images/ev-charge-share-page/plusx_electric_infrastructure_icon.svg";
import Link from "next/link";

function PrivateCharger() {

  const cardData = [
    {
      icon: Capacity,
      text: "Limited electrical load capacity in older buildings",
    },
    {
      icon: Building,
      text: "Building management approval requirements that can take months",
    },
    {
      icon: HighCost,
      text: "High installation costs in older properties",
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
          <p className={style.scenariosIntro}>In many parts of Dubai, fitting a private EV charger isn&apos;t straightforward. Common challenges include:</p>

          <div className={`grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2 m-4`}>
            {cardData.map((value, index) => (
                <Card key={index} iconSrc={value.icon} text={value.text} />
              ))}
          </div>

          <p className={style.scenariosIntro2}>As a result, many EV owners depend on <Link href="/public-ev-charging-stations">public chargers</Link> — which often means queuing, driving out of the way,<br className={style.breakLine}/> or planning around availability.</p>
          <p className={style.scenariosIntro}>Private charger sharing offers a simpler alternative. Existing chargers in your own community can be made available <br className={style.breakLine}/>to neighbours who don&apos;t have one, reducing pressure on public stations and making<br className={style.breakLine}/> everyday charging easier for everyone.</p>
        </Animated>
      </div>
    </section>
  );
}

export default PrivateCharger;
