import style          from "./chargingInfo.module.css";
import Card           from "@/sharedComponents/serviceIconCard/serviceIconCard";
import Animated       from "@/sharedComponents/animatedComponent/animated";
import Savetime       from "@/assets/images/public-charging-page/save-time.svg";
import Station        from "@/assets/images/public-charging-page/station.svg";
import Speed          from "@/assets/images/public-charging-page/speed.svg";
import Available      from "@/assets/images/public-charging-page/available.svg";
import Pricing        from "@/assets/images/public-charging-page/pricing.svg";
import Charger        from "@/assets/images/public-charging-page/charger.svg";

function ChargerInfo() {

  const cardData = [
    {
      icon: Charger,
      text: "Charger type (AC or DC)",
    },
    {
      icon: Station,
      text: "Charging capacity",
    },
    {
      icon: Available,
      text: "Station availability",
    },
    {
      icon: Speed,
      text: "Estimated charging time",
    },
    {
      icon: Pricing,
      text: "Pricing information",
    },
    {
      icon: Savetime,
      text: "Operating hours",
    },
  ];

  return (
    <section className={style.scenarios}>
      <div className="container">
        <Animated className={`${style.scenariosContent} order-2 lg:order-1`} animation="fade" easing="ease-in" duration={1000}>
          <h2 className={style.scenariosHeading}>Complete Charging Station <br className={style.breakLine}/> Information Before You Arrive</h2>
          <p className={style.scenariosIntro}><strong>The PlusX Electric app provides:</strong></p>

          <div className={`grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3 m-4`}>
            {cardData.map((value, index) => (
                <Card key={index} iconSrc={value.icon} text={value.text} />
              ))}
          </div>

          <p className={style.scenariosIntro2}>This will help you to select the appropriate public EV charging station <br className={style.breakLine}/>based on your vehicle&apos;s needs and your time constraints.</p>
          {/* <p className={style.scenariosIntro}>EV charger sharing by private entities can help reduce strain on overcrowded public infrastructure and<br className={style.breakLine}/> increase the number of local charging points in residential neighborhoods by creating<br className={style.breakLine}/> a private EV charger marketplace.</p> */}
        </Animated>
      </div>
    </section>
  );
}

export default ChargerInfo;
