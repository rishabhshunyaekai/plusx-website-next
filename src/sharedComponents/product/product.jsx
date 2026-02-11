import Image              from "next/image";
import styles             from "./product.module.css";
import ProductCard        from "./productCard";
import Filter             from "@/assets/images/ev-charger-installation-page/product-page/filter-icons.webp";
import CustomDropdown     from "@/sharedComponents/customDropdown/customDropdown";
import SecondaryHeading   from "@/sharedComponents/heading/secondaryHeading";

function Product({ products, url, title, showFilter }) {
  return (
    <>
      {title && <SecondaryHeading title={title}/>}

      <section className={styles.productContainer}>

        { showFilter && (
          <>
            <div className={styles.filterButton}>
              <button>
                <Image src={Filter} alt="filter" width={30} height={30} />Filter With PlusX Ai
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

              <div className={`grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2`}>
                  <CustomDropdown  placeholder="Select Vehicle Brand*"/>
                    {/* options={emirates} value={ formData.emirates ? { label: formData.emirates, value: formData.emirates } : null } onChange={(selected) => setFormData((prev) => ({ ...prev, emirates: selected.value })) } */}
                    {/* {error.emirates && ( <span className={style.errorMessage}> {error.emirates} </span> )} */}
                  <CustomDropdown  placeholder="Select Vehicle Model"/>
                  <CustomDropdown  placeholder="To be Used for"/>
                  <CustomDropdown  placeholder="Property Type"/>
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
