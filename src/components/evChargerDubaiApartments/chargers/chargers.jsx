"use client";

import { useState }     from "react";
import { chargers }     from "@/data/listOfProducts";
import style            from "./chargers.module.css";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
import Animated         from "@/sharedComponents/animatedComponent/animated";
import CustomDropdown   from "@/sharedComponents/customDropdown/customDropdown";
import Product          from "@/sharedComponents/product/product";

const vehicleData = {
  Tesla: {
    "Model 3": { maxAC: 11 },
    "Model Y": { maxAC: 11 },
  },
  BYD: {
    "Atto 3": { maxAC: 7 },
  },
  BMW: {
    "iX": { maxAC: 11 },
    "i4": { maxAC: 11 },
  },
  "Mercedes-Benz": {
    "EQS": { maxAC: 11 },
    "EQB": { maxAC: 11 },
  },
  Audi: {
    "e-tron": { maxAC: 11 },
  },
  Nissan: {
    "Leaf": { maxAC: 6.6 },
  },
  MG: {
    "ZS EV": { maxAC: 7.4 },
  },
  VinFast: {
    "VF8": { maxAC: 11 },
  },
  Porsche: {
    "Taycan": { maxAC: 11 },
  },
  Hyundai: {
    "Ioniq 5": { maxAC: 11 },
  },
  Kia: {
    "EV6": { maxAC: 11 },
  },
  // Other: {
  //   "Other Model": { maxAC: null },
  // },
};

function FilterChargers() {
  const [make, setMake]                 = useState(null);
  const [model, setModel]               = useState(null);
  const [showResults, setShowResults]   = useState(false);

  const makeOptions   = Object.keys(vehicleData).map((item) => ({ label: item, value: item }));
  const modelOptions  = make?.value && Object.keys(vehicleData[make.value]).map((model) => ({ label: model, value: model }));

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

  const getRecommendedChargers = () => {
    if (!make || !model) return [];

    const carSpec = vehicleData[make.value][model.value];

    return chargers.filter((charger) => {
      const chargerKW = parseInt(charger.output.match(/\d+/)?.[0]);
      return chargerKW <= carSpec.maxAC;
    });
  };

  const filteredChargers = getRecommendedChargers();

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
            {showResults && <Product products={filteredChargers} url="/ev-chargers/ac-dc-ev-chargers" title="" showFilter={false} /> }
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