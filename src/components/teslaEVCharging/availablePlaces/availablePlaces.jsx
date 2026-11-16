import style            from "./availablePlaces.module.css";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";

function AvailablePlaces() {
  return (
    <section className={`wrapper`}>
      <div className={`container`}>
        <SecondaryHeading title={`Where We Serve`} />
        <p className={`mb-6! ${style.description}`}>Tesla charging across Dubai, including:</p>
      </div>

      <div className={style.placesContainer}>
        Downtown | Dubai Marina | JLT | JVC | Business Bay | Palm Jumeirah | Dubai Hills
      </div>

      <div className="container">
        <p className={`mt-6! ${style.description}`}>Arabian Ranches, Al Barsha, Deira, Dubai South and along Sheikh Zayed Road.</p>
      </div>
    </section>
  );
}

export default AvailablePlaces;
