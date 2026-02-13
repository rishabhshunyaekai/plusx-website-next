import style          from "./sustainability.module.css";
import Animated       from "@/sharedComponents/animatedComponent/animated";
import SecondHeading  from "@/sharedComponents/heading/secondaryHeading";

function Sustainability() {
  return (
    <div className={style.banner}>
      <div className={`container text-center`}>
        <div className="grid grid-cols-1">
          <Animated className={`${style.bannerContent}`} animation="fade" easing="ease-in" duration={1000}>
            <SecondHeading title="Sustainability" />
            <p>
              At PlusX Electric, sustainability isn&apos;t just a feature — it&apos;s our foundation. Every electric
              cycle ride helps reduce carbon emissions, lower noise pollution, and ease urban
              congestion. By choosing electric over fuel, our riders collectively contribute to a
              cleaner, greener future. With every journey, you&apos;re not just moving forward — you&apos;re
              making a difference.
            </p>
          </Animated>
        </div>
      </div>
    </div>
  );
}

export default Sustainability;
