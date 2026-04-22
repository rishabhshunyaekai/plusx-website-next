"use client";

import { useState }     from "react";
import { chargers }     from "@/data/listOfProducts";
import style            from "./chargers.module.css";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
import Animated         from "@/sharedComponents/animatedComponent/animated";
import CustomDropdown   from "@/sharedComponents/customDropdown/customDropdown";
import Product          from "@/sharedComponents/product/product";

const vehicleData = {
  Tesla: ["Model 3", "Model Y"],
  BYD: ["Atto 3"],
  BMW: ["iX", "i4"],
  "Mercedes-Benz": ["EQS", "EQB"],
  Audi: ["e-tron"],
  Nissan: ["Leaf"],
  MG: ["ZS EV"],
  VinFast: ["VF8"],
  Porsche: ["Taycan"],
  Hyundai: ["Ioniq 5"],
  Kia: ["EV6"],
  Other: ["Other Model"],
};

function FilterChargers() {
  const [make, setMake]                 = useState(null);
  const [model, setModel]               = useState(null);
  const [showResults, setShowResults]   = useState(false);

  const makeOptions = Object.keys(vehicleData).map((item) => ({ label: item, value: item }));

  const modelOptions =
    make?.value &&
    vehicleData[make.value].map((m) => ({
      label: m,
      value: m,
    }));

  const handleSubmit = () => {
    if (!make || !model) return;
    setShowResults(true);
  };

  const handleMakeChange = (val) => {
    setMake(val);
    setModel(null);
    setShowResults(false);
  }

  const handleModelChange = (val) => {
    setModel(val);
    setShowResults(false);
  }

  return (
    <section className="wrapper">
      <div className="container">
        <SecondaryHeading title="Not Sure Which Charger You Need?" />

        <Animated className="text-center" animation="fade" easing="ease-in" duration={1000}>
            <p className={style.content}>
              Pick your EV and we&apos;ll recommend the right charger for you— based on your car&apos;s onboard charging capacity, typical daily<br className={style.breakline} /> range needs, and what your apartment building&apos;s power supply can handle.
            </p>
        </Animated>

        <Animated className={style.filterWrapper} animation="fade" easing="ease-in" duration={1000}>
            <h3 className={style.cardHeading}>Select Your EV Vehicle</h3>
            <div className={style.selectorCard}>
                <div className={style.field}>
                    <label className={style.label}>EV make</label>
                    <CustomDropdown options={makeOptions} value={make} placeholder="Select your EV make" onChange={handleMakeChange}/>
                </div>

                <div className={style.field}>
                    <label className={style.label}>EV Model</label>
                    <CustomDropdown options={modelOptions || []} value={model} placeholder="Select your EV Model" onChange={handleModelChange} />
                </div>

                <div className={style.field}>
                    <label className={style.label}></label>
                    <button className={style.button} onClick={handleSubmit} disabled={!make || !model}>Show My Charger</button>
                </div>
            </div>
        </Animated>

        <Animated className={style.chargerContainer}  animation="fade" easing="ease-in" duration={1000}>
            {showResults && <Product products={chargers} url="/ev-chargers/ac-dc-ev-chargers" title="" showFilter={false} /> }
        </Animated>
      </div>
    </section>
  );
}

export default FilterChargers;

{/* Results */}
{/* {showResults && (
    <div className={style.results}>
    {chargers.map((item) => (
        <div key={item.id} className={style.card}>
        <img src={item.image.src} alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.output}</p>
        <span className={style.price}>{item.price}</span>
        </div>
    ))}
    </div>
)} */}