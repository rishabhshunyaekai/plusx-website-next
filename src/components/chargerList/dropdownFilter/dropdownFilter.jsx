"use client";

// import Link             from "next/link";
import { useState }     from "react";
import { chargers, 
        vehicleData }   from "@/data/listOfProducts";
import style            from "./dropdownFilter.module.css";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
import Animated         from "@/sharedComponents/animatedComponent/animated";
import CustomDropdown   from "@/sharedComponents/customDropdown/customDropdown";
import Product          from "@/sharedComponents/product/product";
import ChargersList     from "@/components/chargerList/chargers/chargers";
// import { BsWhatsapp }   from "react-icons/bs";

function FilterChargers() {
  const [make, setMake]                 = useState(null);
  const [model, setModel]               = useState(null);
  const [showResults, setShowResults]   = useState(false);
  
  // const whatsappMessage = `Hi PlusX Electric, my EV is not listed. Could you please help me choose the right charger?`
  const makeOptions     = Object.keys(vehicleData).map((item) => ({ label: item, value: item }));
  const modelOptions    = make?.value && Object.keys(vehicleData[make.value]).map((model) => ({ label: model, value: model }));

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
    <>
    <section className="wrapper">
      <div className="container">
        <SecondaryHeading title="Find the Right EV Charger for Your Car" />

        <Animated className="text-center" animation="fade" easing="ease-in" duration={1000}>
            <p className={style.content}>
              Pick your EV and we&apos;ll recommend the right charger — based on your car&apos;s onboard charging capacity, typical daily<br className={style.breakline} /> range needs, and what your home&apos;s power supply can handle.
            </p>
        </Animated>

        <Animated className={style.filterWrapper} animation="fade" easing="ease-in" duration={1000}>
            <h3 className={style.cardHeading}>Select Your EV Vehicle</h3>
            <div className={style.selectorCard}>
                <div className={style.field}>
                    <label className={style.label}>EV Make</label>
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
            {(showResults && filteredChargers.length === 0) && <p className={style.notFound}>No Charger Found</p> }
            {(showResults && filteredChargers.length > 0) && <Product products={filteredChargers} url="/ev-charger-installation-uae/ac-dc-ev-chargers" title="" /> }
        </Animated>

        <Animated className={style.connectContainer}  animation="fade" easing="ease-in" duration={1000}>
          <p className={`${style.connect} ${showResults ? style.marginTop : ""}`}>We recommend chargers for Tesla Model 3, Model Y, Model S, Model X, BYD Atto 3, BYD Seal, BYD Han, Nissan Leaf, Audi e-tron, <br className={style.breakline} />BMW iX,
            Mercedes-EQ EQS, EQE, Polestar 2, Hyundai Ioniq 5, Kia EV6, Lucid Air, and Cadillac LYRIQ.<br className={style.breakline} /> Don&apos;t see your model? Contact us — we work
            with every EV sold in the UAE.
          </p>
          {/* <p className={`${style.connect} ${showResults ? style.marginTop : ""}`}>Can’t find your EV in the list? Connect with us on WhatsApp—we’ll assist you.</p> */}
          {/* <Link href={`https://api.whatsapp.com/send?phone=+971543061473&text=${whatsappMessage}`} target="__blank" className={`${style.innerClass} ${style.getWhatsapp}`} rel="noreferrer" id="whatsappIcon">
              <BsWhatsapp /> Get Help on WhatsApp
          </Link> */}
        </Animated>   
      </div>
    </section>
    
    {!showResults && <ChargersList/>}
    </>
  );
}

export default FilterChargers;
