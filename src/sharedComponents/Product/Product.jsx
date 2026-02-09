import CustomDropdown   from "../customDropdown/customDropdown";
import ProductCard      from "./productCard";
import SecondHeading    from "../secondHeading/secondHeading";
import Filter           from "@/assets/images/Chargers/filterIcons.webp";
import styles           from "./product.module.css";

function Product({ products, url, title, showFilter }) {
  return (
    <>
      {title && <SecondHeading title={title}/>}

      <section className={styles.productContainer}>

        { showFilter && (
          <>
            <div className={styles.filterButton}>
              <button>
                <img src={Filter} alt="ftr" />Filter With PlusX Ai
              </button>
            </div>
            <div className={styles.filterContainer}>
              <div className={`${styles.radioButtonContainer}`}>
                Vehicle Specification

                <div className={`${styles.checkboxInput}`}>
                  <input type="radio" id="gcc" name="vehicle_specification" value="gcc"  />
                  <label className={styles.checkBox} htmlFor="gcc"><span></span> GCC</label>
                </div>
                {/* checked={formData.vehicle_specification === "gcc"} onChange={handleInputChange} checked={formData.vehicle_specification === "non_gcc"} onChange={handleInputChange} */}
                <div className={`${styles.checkboxInput}`}>
                  <input type="radio" id="non_gcc" name="vehicle_specification" value="non_gcc"  />
                  <label className={styles.checkBox} htmlFor="non_gcc"><span></span> Non-GCC</label>
                </div>

              </div>

              <div className={`row`}>
                <div className={`col-xl-3 col-lg-6  ${styles.dropdowns}`}>
                    <CustomDropdown  placeholder="Select Vehicle Brand*"/>
                    {/* options={emirates} value={ formData.emirates ? { label: formData.emirates, value: formData.emirates } : null } onChange={(selected) => setFormData((prev) => ({ ...prev, emirates: selected.value })) } */}
                    {/* {error.emirates && ( <span className={style.errorMessage}> {error.emirates} </span> )} */}
                </div>
                <div className={`col-xl-3 col-lg-6  ${styles.dropdowns}`}>
                    <CustomDropdown  placeholder="Select Vehicle Model"/>
                </div>
                <div className={`col-xl-3 col-lg-6  ${styles.dropdowns}`}>
                    <CustomDropdown  placeholder="To be Used for"/>
                </div>
                <div className={`col-xl-3 col-lg-6  ${styles.dropdowns}`}>
                    <CustomDropdown  placeholder="Property Type"/>
                </div>
              </div>

            </div>
          </>
        )}
        
        <div className={styles.grid}>
          {products.map((item) => <ProductCard key={item.id} product={item} url={url} /> )}
        </div>
      </section>
    </>
  );
}

export default Product;
