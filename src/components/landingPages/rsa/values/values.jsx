import ServiceIconCard  from "@/sharedComponents/serviceIconCard/serviceIconCard";
import NoTowing         from "@/assets/images/ev-roadside-assistance-page/no-towing.svg";
import JumpStart        from "@/assets/images/ev-roadside-assistance-page/jump-start.svg";

const valuesCardData = [
  {
    icon: NoTowing,
    text: (<><strong>No Towing Required:</strong> Power delivered to your location, no vehicle movement needed.</>),
  },
  {
    icon: JumpStart,
    text: (<><strong>Jump-Start Support:</strong> We provide a jump-start if your battery is fully drained.</>),
  },
];

function Values() {
  return (
    <section className={`wrapper`}>
      <div className={`container`}>
        <div className={`grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2`}>
          {valuesCardData.map((value, index) => (
            <ServiceIconCard key={index} iconSrc={value.icon} text={value.text} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values;
