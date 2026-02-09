"use client";
import { useEffect, useState }  from "react";
import { PhoneInput }           from "react-international-phone";
import { useRouter }            from "next/navigation";
import Image                    from "next/image";
import Icon1                    from "@/assets/images/Chargers/icon-1.svg";
import Icon2                    from "@/assets/images/Chargers/icon-2.svg";
import Icon3                    from "@/assets/images/Chargers/icon-3.svg";
import { getInTouchForm }       from "@/service/getInTouchForm";
import Animated                 from "@/sharedComponents/animatedComponent/animated";
import Modal                    from "@/sharedComponents/modal/modal";
import styles                   from "./multipleImage.module.css";
import "react-international-phone/style.css";
import "@/assets/css/ReactInputPhone.css";
import "@/assets/css/SweetAlert.css";

function MultipleImage({product, type }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name        : "",
    phone       : "",
    email       : "",
    address     : "",
    product_name: product.name,
    looking_for : "Charger",
    to_be_used  : "personal",
  });
  const [isModalOpen, setIsModalOpen]                     = useState(false);
  const [error, setError]                                 = useState({});
  const [isDisplayPhoneError, setIsDisplayPhoneError]     = useState(false);
  const [loading, setLoading]                             = useState(false);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      product_name: product?.name ?? ""
    }));
  }, [product]);

  function handleInputChange(event) {
    const { name, value, type, checked } = event.target;
    const finalValue = type === "radio" ? (checked ? value : formData.radio) : value;
    if (name === "charges" && !/^\d*$/.test(value)) {
        return;
    }
    setFormData((prev) => ({ ...prev, [name]: finalValue }));
    setError((prev) => ({ ...prev, [name]: "" }));
  }

  function handlePhone(value) {
    setFormData((prev) => ({ ...prev, phone: value }));
    if (!/^(\+?\d{1,4})\d{6,}$/.test(value)) {
      setError((prev) => ({ ...prev, phone: "Invalid Phone number." }));
    } else {
      setError((prev) => ({ ...prev, phone: "" }));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsDisplayPhoneError(true);
    setLoading(true);

    const validationErrors = validateForm();
    if (validationErrors) {
      setError(validationErrors);
      setLoading(false);
      return;
    }
    submitForm();
  }
  async function submitForm() {
    const result = await getInTouchForm(`${type === "chargers"? "/get-product": "/get-accessories"}`, formData);
    if (result.success) {
    //   showSwal(result.message);
      resetForm();
      setError({});
      setIsDisplayPhoneError(false);
      setTimeout(()=> router.push("/thank-you-ev-chargers") ,500);
    } else {
      // setErrorMessage(result.message);
      // setTimeout(() => setErrorMessage(""), 5000);
    }
    setLoading(false);
  }

  function handleModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setError({});
    setIsDisplayPhoneError(false);
    resetForm();
    setIsModalOpen(false);
  }

  function resetForm() {
    setFormData({
      name        : "",
      phone       : "",
      email       : "",
      address     : "",
      // product_name: product.name,
      product_name: product?.name ?? "",
      looking_for : "Charger",
      to_be_used  : "personal",
    });
  }

//   function showSwal(message) {
//     withReactContent(Swal).fire({
//         icon              : "success",
//         title             : message,
//         showConfirmButton : true,
//         timer             : 5000,
//         customClass       : { title: "sweetalert-text" },
//     });
//   }

  function validateForm() {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.phone || !/^(\+?\d{1,4})\d{6,}$/.test(formData.phone)) {
      errors.phone = "Invalid Phone number";
    }
    if (!formData.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email address is invalid";
    if (!formData.address) errors.address = "Address is required";

    return Object.keys(errors).length ? errors : null;
  }
return (
    <main className={styles.main}>
      <section className={styles.productSection}>
        <div className={`container ${styles.container}`}>
          <div className="row">
            <div className="col-lg-6 col-md-12 order-1 order-lg-1">
              <div className={styles.productImage}>
                <Image src={product.image} alt="Product" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12 order-3 order-lg-2">
              <Animated className={`${styles.productText}`} animation="fade" easing="ease-in" duration={1000}>
                <h2 className={styles.productTitle}>{product.name}</h2>
                <p className={styles.price}>
                  Price : <span className={styles.oldPrice}>{product.previousPrice}</span><span className={styles.newPrice}>{product.price}</span>
                </p>
                <p className={styles.description}>{product.description}</p>

                {type === "chargers" && (
                  <div className={styles.features}>
                    <div className={styles.featureCard}><h6>Compatible</h6><p>{product.compatible}</p><Image src={Icon1} alt=""/></div>
                    <div className={styles.featureCard}><h6>Output Power</h6><p>{product.output}<br /></p><Image src={Icon2} alt=""/></div>
                    <div className={styles.featureCard}><h6>Warranty</h6><p>{product.warrenty}</p><Image src={Icon3} alt=""/></div>
                  </div>
                )}

                <button className={styles.buyBtn} onClick={handleModal} type="button">Get a Quote</button>
              </Animated>
            </div>
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} heading= "Get a Quote" onClose={handleCloseModal} onSubmit={handleSubmit} loading={loading} id={formData.product_name}>
          <div className={styles.modalContainer}>
            <div className={styles.formInner}>
                    <form id="charging-form" method="post" onSubmit={handleSubmit}>
                        <div className={styles.controls}>
                          <div className={`row`}>
                                <div className={`col-lg-12`}>
                                    <div className={styles.formGroup}>
                                        <div className={styles.wrapper}>
                                            <input disabled type="text" className={styles.formControl} placeholder="Product Name*" name="product_name" value={formData.product_name} style={{ cursor: "not-allowed" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`row`}>
                                <div className={`col-lg-6`}>
                                    <div className={styles.formGroup}>
                                        <input type="text" className={styles.formControl} placeholder="Name*" name="name" autoComplete="off" value={formData.name} onChange={handleInputChange} />
                                        {error.name && ( <span className={styles.errorMessage}>{error.name}</span> )}
                                    </div>
                                </div>
                                <div className={`col-lg-6`}>
                                    <div className={styles.formGroup}>
                                        <PhoneInput defaultCountry="ae" value={formData.phone} maxLength={10} onChange={handlePhone} />
                                        {isDisplayPhoneError && error.phone && ( <span className={styles.errorMessage}> {error.phone} </span> )}
                                    </div>
                                </div>
                            </div>
                            <div className={`row`}>
                                <div className={`col-lg-6`}>
                                    <div className={styles.formGroup}>
                                        <div className={styles.wrapper}>
                                            <input type="email" className={styles.formControl} placeholder="Email*" name="email" autoComplete="off" value={formData.email} onChange={handleInputChange} />
                                        </div>
                                        {error.email && ( <span className={styles.errorMessage}> {error.email} </span>)}
                                    </div>
                                </div>
                                <div className={`col-lg-6`}>
                                    <div className={styles.formGroup}>
                                        <div className={styles.wrapper}>
                                            <input type="text" className={styles.addressInput} placeholder="Address*" name="address" autoComplete="off" value={formData.address} onChange={handleInputChange} />
                                        </div>
                                        {error.address && ( <span className={styles.errorMessage}> {error.address} </span> )}
                                    </div>
                                </div>
                            </div>
                            {type === "chargers" && (
                              <div className={`row`}>
                                  <div className={`col-lg-6`}>
                                      Looking For
                                      <div className={`${styles.radioButtonContainer}`}>
                                          <div className={`${styles.formGroup} ${styles.checkboxInput}`}>
                                              <input type="radio" id="charger" name="looking_for" value="Charger" 
                                                checked={formData.looking_for === "Charger"} onChange={handleInputChange} />
                                              <label className={styles.checkBox} htmlFor="charger">
                                                  <span></span> Charger
                                              </label>
                                          </div>
                                          <div className={`${styles.formGroup} ${styles.checkboxInput}`}>
                                              <input type="radio" id="charger_&_installation" name="looking_for" value="Charger and installation" onChange={handleInputChange}
                                                  checked={formData.looking_for === "Charger and installation"} />
                                              <label className={styles.checkBox} htmlFor="charger_&_installation">
                                                  <span></span> Charger & Installation
                                              </label>
                                          </div>
                                      </div>
                                  </div>
                                  <div className={`col-lg-6`}>
                                      To Be Used for
                                      <div className={`${styles.radioButtonContainer}`}>
                                          <div className={`${styles.formGroup} ${styles.checkboxInput}`}>
                                              <input type="radio" id="personal" name="to_be_used" value="personal" checked={formData.to_be_used === "personal"} onChange={handleInputChange} />
                                              <label className={styles.checkBox} htmlFor="personal">
                                                  <span></span> Personal
                                              </label>
                                          </div>
                                          <div className={`${styles.formGroup} ${styles.checkboxInput}`}>
                                              <input type="radio" id="business" name="to_be_used" value="business" onChange={handleInputChange} checked={formData.to_be_used === "business"} />
                                              <label className={styles.checkBox} htmlFor="business">
                                                  <span></span> Business
                                              </label>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                            )}
                            <input type="hidden" id="country_code" name="country_code" />
                        </div>
                    </form>
                </div>
          </div>
      </Modal>

    </main>
  );
}

export default MultipleImage;
