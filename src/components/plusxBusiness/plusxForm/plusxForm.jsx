"use client";

import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import "@/assets/css/ReactInputPhone.css";
// import "@/assets/css/SweetAlert.css";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

import style                from "./plusxForm.module.css";
import { getInTouchForm }   from "@/service/getInTouchForm";
import SecondaryHeading     from "@/sharedComponents/heading/secondaryHeading";

const heading         = "Get in Touch";

function PlusxForm() {
//   const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address_type: "Commercial",
    address: "",
    vehicle_model: "",
    regional_specification: "",
    charges: "",
    description: "",
  });
  const [error, setError] = useState({});
  const [isDisplayPhoneError, setIsDisplayPhoneError] = useState(false);
  const [isSubmitButtonDisable, setIsSubmitButtonDisable] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleInputChange(event) {
    const { name, value, type, checked } = event.target;
    const finalValue =
      type === "radio" ? (checked ? value : formData.radio) : value;
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
    setIsSubmitButtonDisable(true);

    const validationErrors = validateForm();
    if (validationErrors) {
      setError(validationErrors);
      setIsSubmitButtonDisable(false);
      return;
    }
    submitForm();
  }

  async function submitForm() {
    const result = await getInTouchForm("/get-in-touch", formData);

    if (result.success) {
      // showSwal(result.message);
      resetForm();
      setError({});
      setIsDisplayPhoneError(false);
    //   setTimeout(()=> navigate("/thank-you-commercial-ev-charging-solutions") ,500);
    } else {
      setErrorMessage(result.message);
      setTimeout(() => setErrorMessage(""), 5000);
    }

    setIsSubmitButtonDisable(false);
  }

  function resetForm() {
    setFormData({
      name: "",
      email: "",
      phone: "",
      address_type: "Commercial",
      address: "",
      vehicle_model: "",
      regional_specification: "",
      charges: "",
      description: "",
    });
  }

  // function showSwal(message) {
  //   withReactContent(Swal).fire({
  //     icon: "success",
  //     title: message,
  //     showConfirmButton: true,
  //     timer: 5000,
  //     customClass: {
  //       title: "sweetalert-text",
  //     },
  //   });
  // }

  function validateForm() {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email address is invalid";
    if (!formData.phone || !/^(\+?\d{1,4})\d{6,}$/.test(formData.phone)) {
      errors.phone = "Invalid Phone number";
    }
    if (!formData.address) errors.address = "Address is required";
    if (!formData.vehicle_model)
      errors.vehicle_model = "Vehicle model is required";
    if (!formData.regional_specification)
      errors.regional_specification = "Regional specification is required";
    if (!formData.charges)
      errors.charges = "Number of charges required is required";
    if (!formData.description) errors.description = "Description is required";
    return Object.keys(errors).length ? errors : null;
  }

  return (
    <section className={style.getInTouchForm}>
        <div className={`container`}>
            <SecondaryHeading title={heading} />

            <div className={style.formArea}>
                <div className={style.formInner}>
                    <form id="charging-form" method="post" onSubmit={handleSubmit}>
                        <div className={style.controls}>
                            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6`}>
                                <div className={style.formGroup}>
                                    <input type="text" className={style.formControl} placeholder="Name*" name="name" autoComplete="off" value={formData.name} onChange={handleInputChange} />
                                    {error.name && ( <span className={style.errorMessage}>{error.name}</span> )}
                                </div>
                                <div className={style.formGroup}>
                                    <input type="email" className={style.formControl} placeholder="Email*" name="email" autoComplete="off" value={formData.email} onChange={handleInputChange} />
                                    {error.email && ( <span className={style.errorMessage}>{error.email}</span> )}
                                </div>
                            </div>
                            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6`}>
                                <div className={style.formGroup}>
                                    <PhoneInput defaultCountry="ae" value={formData.phone} maxLength={10} onChange={handlePhone} />
                                    {isDisplayPhoneError && error.phone && ( <span className={style.errorMessage}>{error.phone}</span> )}
                                </div>
                                <div className="grid grid-cols-2 items-center">
                                    <div className={`${style.formGroup} ${style.checkboxInput}`}>
                                        <input type="radio" id="commercial" name="address_type" value="Commercial" checked={formData.address_type === "Commercial"} onChange={handleInputChange} />
                                        <label className={style.checkBox} htmlFor="commercial">
                                            <span></span> Commercial
                                        </label>
                                    </div>
                                    <div className={`${style.formGroup} ${style.checkboxInput}`}>
                                        <input type="radio" id="residential" name="address_type" value="Residential" checked={formData.address_type === "Residential"} onChange={handleInputChange} />
                                        <label className={style.checkBox} htmlFor="residential">
                                            <span></span> Residential
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6`}>
                                <div className={style.formGroup}>
                                    <input type="text" className={style.formControl} placeholder="Address*" name="address" autoComplete="off" value={formData.address} onChange={handleInputChange} />
                                    {error.address && ( <span className={style.errorMessage}>{error.address}</span> )}
                                </div>
                                <div className={style.formGroup}>
                                    <input type="text" className={style.formControl} placeholder="Enter Vehicle Model*" name="vehicle_model" autoComplete="off" value={formData.vehicle_model} onChange={handleInputChange} />
                                    {error.vehicle_model && ( <span className={style.errorMessage}>{error.vehicle_model}</span> )}
                                </div>
                            </div>
                            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6`}>
                                <div className={style.formGroup}>
                                    <input type="text" className={style.formControl} placeholder="Regional Specification*" name="regional_specification" autoComplete="off" value={formData.regional_specification} onChange={handleInputChange} />
                                    {error.regional_specification && ( <span className={style.errorMessage}>{error.regional_specification}</span> )}
                                </div>
                                <div className={style.formGroup}>
                                    <input type="text" className={style.formControl} placeholder="No. of Charges Required*" name="charges" autoComplete="off" value={formData.charges} onChange={handleInputChange} />
                                    {error.charges && ( <span className={style.errorMessage}>{error.charges}</span> )}
                                </div>
                            </div>
                            <div className={`grid grid-cols-1 gap-6`}>
                                <div className={style.formGroup}>
                                    <textarea className={style.formControl} placeholder="Description*" rows="3" name="description" autoComplete="off" style={{ resize: "none" }} value={formData.description} onChange={handleInputChange}></textarea>
                                    {error.description && ( <span className={style.errorMessage}>{error.description}</span> )}
                                </div>
                            </div>
                            <input type="hidden" id="country_code" name="country_code" />
                            <div className="text-center">
                                <button type="submit" id="submitButton" disabled={isSubmitButtonDisable} className={`${style.formSubmit}`}>
                                    {isSubmitButtonDisable ? <><span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white-500 border-t-transparent"></span> Submit... </> : "Submit"}
                                </button>
                            </div>
                        </div>
                        <div className={`${style.messages}`}>
                            {errorMessage && (
                                <div className={`rounded-md border border-red-300 bg-red-100 text-md text-red-700 !p-3`} id="response_msg">
                                    {errorMessage}
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
}

export default PlusxForm;
