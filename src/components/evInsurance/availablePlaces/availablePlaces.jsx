import style            from "./availablePlaces.module.css";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";

function AvailablePlaces() {
  return (
    <section className={`wrapper`}>
      <div className={`container`}>
        <SecondaryHeading title={`Available Across The UAE`} />
        <p className={`mb-6! ${style.description}`}>EV insurance in the UAE is accessible for vehicle owners across:</p>
      </div>

      <div className={style.placesContainer}>
        Dubai | Abu Dhabi | Sharjah | Ajman | Ras Al Khaimah | Fujairah | Umm Al Quwain
      </div>

      <div className="container">
        <p className={`mt-6! ${style.description}`}>Regardless of where your vehicle is registered in the UAE, you can explore suitable EV insurance options through the PlusX Electric app. The app also allows you to store your insurance documents digitally and access them easily whenever needed.</p>
      </div>
    </section>
  );
}

export default AvailablePlaces;
