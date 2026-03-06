"use client";

import { useState }     from "react";
import { PhoneInput }   from "react-international-phone";
import style            from "./chargerInstallationForm.module.css";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
import "react-international-phone/style.css";
import "@/assets/css/ReactInputPhone.css";

// import { useNavigate } from "react-router-dom";
// import "../../../../assets/css/SweetAlert.css";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
// import Modal                    from "@/sharedComponents/modal/modal";
// import { IoLocationOutline }    from "react-icons/io5";
// import { getInTouchForm } from "../../../../service/getInTouchForm";

const heading   = "Talk to Our Experts – Free Consultation Available";

function ChargerInstallationForm() {
  const navigate = 0;
//   const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name        : "",
    phone       : "",
    email       : "",
    address     : "",
    looking_for : "Charger and installation",
    to_be_used  : "personal",
    description : "",
  });
  const [error, setError]                                 = useState({});
  const [isDisplayPhoneError, setIsDisplayPhoneError]     = useState(false);
  const [isSubmitButtonDisable, setIsSubmitButtonDisable] = useState(false);
  const [errorMessage, setErrorMessage]                   = useState("");
  
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
    const result = await getInTouchForm("/charger-installation", formData);
    if (result.success) {
    //   showSwal(result.message);
      resetForm();
      setError({});
      setIsDisplayPhoneError(false);
      setTimeout(()=> navigate("/thank-you-ev-chargers") ,500);
    } else {
      setErrorMessage(result.message);
      setTimeout(() => setErrorMessage(""), 5000);
    }
    setIsSubmitButtonDisable(false);
  }

  function resetForm() {
    setFormData({
      name        : "",
      phone       : "",
      email       : "",
      address     : "",
      looking_for : "Charger and installation",
      to_be_used  : "personal",
      description : "",
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

    if (!formData.description)
      errors.description = "Description is required";
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
                                    <PhoneInput defaultCountry="ae" value={formData.phone} maxLength={10} onChange={handlePhone} />
                                    {isDisplayPhoneError && error.phone && ( <span className={style.errorMessage}> {error.phone} </span> )}
                                </div>
                            </div>
                            
                            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6`}>
                                <div className={style.formGroup}>
                                    <div className={style.wrapper}>
                                        <input type="email" className={style.formControl} placeholder="Email*" name="email" autoComplete="off" value={formData.email} onChange={handleInputChange} />
                                    </div>
                                    {error.email && ( <span className={style.errorMessage}> {error.email} </span>)}
                                </div>
                                <div className={style.formGroup}>
                                    <input type="text" className={style.addressInput} placeholder="Address*" name="address" autoComplete="off" value={formData.address} onChange={handleInputChange} />
                                    {error.address && ( <span className={style.errorMessage}> {error.address} </span> )}
                                </div>
                            </div>

                            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6`}>
                                <div className="">
                                    Looking For
                                    <div className={`${style.radioButtonContainer}`}>
                                        <div className={`${style.formGroup} ${style.checkboxInput}`}>
                                            <input type="radio" id="charger_&_installation" name="looking_for" value="Charger and installation" checked={formData.looking_for === "Charger and installation"} onChange={handleInputChange} />
                                            <label className={style.checkBox} htmlFor="charger_&_installation">
                                                <span></span> Charger & Installation
                                            </label>
                                        </div>
                                        <div className={`${style.formGroup} ${style.checkboxInput}`}>
                                            <input type="radio" id="installation_only" name="looking_for" value="Installation Only" checked={formData.looking_for === "Installation Only"} onChange={handleInputChange} />
                                            <label className={style.checkBox} htmlFor="installation_only">
                                                <span></span> Installation Only
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="">
                                    To Be Used for
                                    <div className={`${style.radioButtonContainer}`}>
                                        <div className={`${style.formGroup} ${style.checkboxInput}`}>
                                            <input type="radio" id="personal" name="to_be_used" value="personal" checked={formData.to_be_used === "personal"} onChange={handleInputChange} />
                                            <label className={style.checkBox} htmlFor="personal">
                                                <span></span> Personal
                                            </label>
                                        </div>
                                        <div className={`${style.formGroup} ${style.checkboxInput}`}>
                                            <input type="radio" id="business" name="to_be_used" value="business" checked={formData.to_be_used === "business"} onChange={handleInputChange} />
                                            <label className={style.checkBox} htmlFor="business">
                                                <span></span> Business
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`grid grid-cols-1 gap-6`}>
                                <div className={style.formGroup}>
                                    <textarea className={style.formControl} placeholder="Description*" rows="5" name="description" autoComplete="off" style={{ resize: "none" }} value={formData.description} onChange={handleInputChange}></textarea>
                                    {error.description && ( <span className={style.errorMessage}> {error.description} </span>)}
                                </div>
                            </div>
                            <input type="hidden" id="country_code" name="country_code" />
                            <div className="text-center">
                                <button type="submit" id="submitButton" disabled={isSubmitButtonDisable} className={`btn ${style.formSubmit}`}>
                                    {isSubmitButtonDisable ? <div className="flex items-center gap-2"><span className="inline-block w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></span>Submitting...</div> : "Submit"}
                                </button>
                            </div>
                        </div>
                        <div className={`${style.messages}`}>
                            {errorMessage && ( <div className={`rounded-md border border-red-300 bg-red-100 text-md text-red-700 !p-3`} id="response_msg">  {errorMessage} </div> )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
}

export default ChargerInstallationForm;
