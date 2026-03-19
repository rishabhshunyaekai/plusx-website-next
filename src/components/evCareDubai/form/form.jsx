"use client";

import { useState }       from "react";
import { useRouter }      from "next/navigation";
import { PhoneInput }     from "react-international-phone";
import { getInTouchForm } from "@/service/getInTouchForm";
import style              from "./form.module.css";
import SecondaryHeading   from "@/sharedComponents/heading/secondaryHeading";
import CustomDropdown     from "@/sharedComponents/customDropdown/customDropdown";
import "react-international-phone/style.css";
import "@/assets/css/ReactInputPhone.css";

// import "@/assets/css/SweetAlert.css";
// import Swal                  from "sweetalert2";
// import withReactContent      from "sweetalert2-react-content";
// import Modal                 from "@/sharedComponents/modal/modal";
// import { IoLocationOutline } from "react-icons/io5";

const heading   = "Book a Service or Get a Quote";

function EVCareForm() {
  const router                  = useRouter();
  const [formData, setFormData] = useState({
    name             : "",
    phone            : "",
    email            : "",
    model            : "",
    car_service      : "",
    protection       : "",
    charging_service : "",
    additional_note  : "",
  });
  const [error, setError]                                 = useState({});
  const [isDisplayPhoneError, setIsDisplayPhoneError]     = useState(false);
  const [isSubmitButtonDisable, setIsSubmitButtonDisable] = useState(false);
  const [errorMessage, setErrorMessage]                   = useState("");

  const car_service_options = [
    { label: "Major Car Service",                       value: "Major Car Service" },
    { label: "Premium Car Service",                     value: "Premium Car Service" },
    { label: "Super Luxury Service",                    value: "Super Luxury Service" },
    { label: "Car AC Repair / Regas",                   value: "Car AC Repair / Regas" },
    { label: "Car Detailing / Polishing",               value: "Car Detailing / Polishing" },
    { label: "Tyre & Wheel Alignment",                  value: "Tyre & Wheel Alignment" },
    { label: "Brake Replacement",                       value: "Brake Replacement" },
    { label: "Battery Replacement",                     value: "Battery Replacement" },
    { label: "Engine Diagnostics / Repair",             value: "Engine Diagnostics / Repair" },
    { label: "Car Tinting",                             value: "Car Tinting" },
    { label: "Windshield / Glass Repair",               value: "Windshield / Glass Repair" },
    { label: "Car Scratch / Paint Repair",              value: "Car Scratch / Paint Repair" }
  ]
  const protection_options = [
    { label: "Full Body Wrap (Matte / Gloss / Chrome)", value: "Full Body Wrap (Matte / Gloss / Chrome)" },
    { label: "PPF – Paint Protection Film",             value: "PPF – Paint Protection Film" },
    { label: "Ceramic Coating",                         value: "Ceramic Coating" },
    { label: "Partial Wrap / Accents",                  value: "Partial Wrap / Accents" }
  ]
  const charging_service_options = [
    { label: "Emergency EV Charging",                   value: "Emergency EV Charging" },
    { label: "Doorstep EV Charging",                    value: "Doorstep EV Charging" },
    { label: "EV Pickup & Drop-Off Charging",           value: "EV Pickup & Drop-Off Charging" },
    { label: "Home / Office Charger Installation",      value: "Home / Office Charger Installation" },
    { label: "EV Battery Health Check",                 value: "EV Battery Health Check" },
    { label: "Fleet EV Solutions",                      value: "Fleet EV Solutions" }
  ]
  
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
    const result = await getInTouchForm("/ev-care-dubai", formData);
    if (result.success) {
    //   showSwal(result.message);
      resetForm();
      setError({});
      setIsDisplayPhoneError(false);
      setTimeout(()=> router.push("/thank-you-ev-chargers") ,500);
    } else {
      setErrorMessage(result.message);
      setTimeout(() => setErrorMessage(""), 5000);
    }
    setIsSubmitButtonDisable(false);
  }

  function resetForm() {
    setFormData({
      name             : "",
      phone            : "",
      email            : "",
      model            : "",
      car_service      : "",
      protection       : "",
      charging_service : "",
      additional_note  : "",
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
    if (!formData.model) errors.model = "Car Make & Modal is required";
    if (!formData.car_service) errors.car_service = "ICE Car Service is required";
    if (!formData.protection) errors.protection = "Wrapping & Protection is required";
    if (!formData.charging_service) errors.charging_service = "EV Charging Service is required";

    return Object.keys(errors).length ? errors : null;
  }

  return (
    <section className={style.getInTouchForm} id="getAQuoteForm">
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
                                    <PhoneInput defaultCountry="ae" value={formData.phone} onChange={handlePhone} />
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
                                    <input type="text" className={style.addressInput} placeholder="Car Make & Model*" name="model" autoComplete="off" value={formData.model} onChange={handleInputChange} />
                                    {error.model && ( <span className={style.errorMessage}> {error.model} </span> )}
                                </div>
                            </div>

                            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6`}>
                                <div className={style.formGroup}>
                                    <CustomDropdown options={car_service_options} value={car_service_options.find(o => o.value === formData.car_service)} placeholder="ICE Car Services*" onChange={(selected) =>setFormData((prev) => ({ ...prev, car_service: selected.value })) }/>
                                    {error.car_service && ( <span className={style.errorMessage}> {error.car_service} </span>)}
                                </div>
                                <div className={style.formGroup}>
                                    <CustomDropdown options={protection_options} value={protection_options.find(o => o.value === formData.protection)} placeholder="Wrapping & Protection*" onChange={(selected) =>setFormData((prev) => ({ ...prev, protection: selected.value })) } />
                                    {error.protection && ( <span className={style.errorMessage}> {error.protection} </span>)}
                                </div>
                            </div>
                            <div className={`grid grid-cols-1 gap-6`}>
                                <div className={style.formGroup}>
                                    <CustomDropdown options={charging_service_options} value={charging_service_options.find(o => o.value === formData.charging_service)} placeholder="EV Charging Services*" onChange={(selected) =>setFormData((prev) => ({ ...prev, charging_service: selected.value })) }/>
                                    {error.charging_service && ( <span className={style.errorMessage}> {error.charging_service} </span>)}
                                </div>
                            </div>
                            <div className={`grid grid-cols-1 gap-6`}>
                                <div className={style.formGroup}>
                                    <textarea className={style.formControl} placeholder="Additional Notes" rows="5" name="additional_note" autoComplete="off" style={{ resize: "none" }} value={formData.additional_note} onChange={handleInputChange}></textarea>
                                    {error.additional_note && ( <span className={style.errorMessage}> {error.additional_note} </span>)}
                                </div>
                            </div>
                            
                            <div className="text-center">
                                <button type="submit" id="submitButton" disabled={isSubmitButtonDisable} className={`btn ${style.formSubmit}`}>
                                    {isSubmitButtonDisable ? <div className="flex items-center gap-2"><span className="inline-block w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></span>Submitting...</div> : "Submit"}
                                </button>
                            </div>
                        </div>
                        <div className={`${style.messages}`}>
                            {errorMessage && ( <div className={`rounded-md border border-red-300 bg-red-100 text-md text-red-700 !p-3`} id="response_msg">{errorMessage}</div> )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
}

export default EVCareForm;
