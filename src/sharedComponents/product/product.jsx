"use client";

import { useState }       from "react";
import styles             from "./product.module.css";
import ProductCard        from "./productCard";
import SecondaryHeading   from "@/sharedComponents/heading/secondaryHeading";

function Product({ products, url, title, showFilter, content }) {
  const [activeFilter, setActiveFilter] = useState("");
  const filteredProducts = activeFilter === "" ? products : products.filter((item) => item.output?.toLowerCase().includes(activeFilter));

  const handleFilter = (type) => {
    setActiveFilter(type);
    // setActiveFilter((prev) => (prev === type ? "" : type));
  };

  return (
    <>
      {title && <SecondaryHeading title={title}/>}
      {content && (<p className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />)}

      {showFilter && (
        <div className={styles.filterButtonContainer}>
          <button className={`${styles.filterButton} ${activeFilter === "ac" ? styles.active : "" }`} onClick={() => handleFilter("ac")}>
            AC Chargers {/* {activeFilter === "ac" ? "Reset" : "AC Chargers"} */}
          </button>

          <button className={`${styles.filterButton} ${activeFilter === "dc" ? styles.active : "" }`} onClick={() => handleFilter("dc")}>
            DC Chargers
          </button>
        </div>
      )}

      <section className={styles.productContainer}>
        <div className={styles.grid}>
          {filteredProducts.map((item) => <ProductCard key={item.id} product={item} url={url} /> )}
        </div>
      </section>
    </>
  );
}

export default Product;

// import Image              from "next/image";
// import Filter             from "@/assets/images/ev-charger-installation-page/product-page/filter-icons.webp";
// import CustomDropdown     from "@/sharedComponents/customDropdown/customDropdown";
// { showFilter && (
//   <>
//     <div className={styles.filterButton}>
//       <button>
//         <Image src={Filter} alt="filter" width={30} height={30} />Filter With PlusX Ai
//       </button>
//     </div>
//     <div className={styles.filterContainer}>
//       <div className={`${styles.radioButtonContainer}`}>
//         Vehicle Specification

//         <div className={`${styles.checkboxInput}`}>
//           <input type="radio" id="gcc" name="vehicle_specification" value="gcc"  />
//           <label className={styles.checkBox} htmlFor="gcc"><span></span> GCC</label>
//         </div>
//         {/* checked={formData.vehicle_specification === "gcc"} onChange={handleInputChange} checked={formData.vehicle_specification === "non_gcc"} onChange={handleInputChange} */}
//         <div className={`${styles.checkboxInput}`}>
//           <input type="radio" id="non_gcc" name="vehicle_specification" value="non_gcc"  />
//           <label className={styles.checkBox} htmlFor="non_gcc"><span></span> Non-GCC</label>
//         </div>

//       </div>

//       <div className={`grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2`}>
//           <CustomDropdown  placeholder="Select Vehicle Brand*"/>
//             {/* options={emirates} value={ formData.emirates ? { label: formData.emirates, value: formData.emirates } : null } onChange={(selected) => setFormData((prev) => ({ ...prev, emirates: selected.value })) } */}
//             {/* {error.emirates && ( <span className={style.errorMessage}> {error.emirates} </span> )} */}
//           <CustomDropdown  placeholder="Select Vehicle Model"/>
//           <CustomDropdown  placeholder="To be Used for"/>
//           <CustomDropdown  placeholder="Property Type"/>
//       </div>

//     </div>
//   </>
// )}