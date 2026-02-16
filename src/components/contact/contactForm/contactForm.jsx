"use client";

import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import "@/assets/css/ReactInputPhone.css";
// import "@/assets/css/SweetAlert.css";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

import style                from "./contactForm.module.css";
import { getInTouchForm }   from "@/service/getInTouchForm";
import SecondaryHeading     from "@/sharedComponents/heading/secondaryHeading";

const heading = "Get in Touch";

function GetInTouch() {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name    : "",
    email   : "",
    phone   : "",
    message : "",
  });
  const [error, setError] = useState({});
  const [isDisplayPhoneError, setIsDisplayPhoneError] = useState(false);
  const [isSubmitButtonDisable, setIsSubmitButtonDisable] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleInputChange(event) {
    if (!event || !event.target) return;
    const { name, value } = event.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
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
    const result = await getInTouchForm("/contact", formData);

    if (result.success) {
      // showSwal(result.message);
      resetForm();
      setError({});
      setIsDisplayPhoneError(false);
      setTimeout(()=> navigate("/thank-you-contact-us") ,500);
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
      message: "",
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
    if (!formData.message) errors.message = "Message is required";

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

                <div className={`grid grid-cols-1 gap-6`}>
                    <div className={style.formGroup}>
                        <input type="text" className={style.formControl} placeholder="Name*" name="name" autoComplete="off" value={formData.name} onChange={handleInputChange} />
                        {error.name && ( <span className={style.errorMessage}>{error.name}</span> )}
                    </div>
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6`}>
                    <div className={style.formGroup}>
                        <input type="email" className={style.formControl} placeholder="Email*" name="email" autoComplete="off" value={formData.email} onChange={handleInputChange} />
                        {error.email && ( <span className={style.errorMessage}>{error.email}</span> )}
                    </div>
                    <div className={style.formGroup}>
                        <PhoneInput defaultCountry="ae" value={formData.phone} maxLength={10} onChange={handlePhone} />
                        {isDisplayPhoneError && error.phone && ( <span className={style.errorMessage}>{error.phone}</span> )}
                    </div>
                </div>

                <div className={`grid grid-cols-1 gap-6`}>
                    <div className={style.formGroup}>
                        <textarea className={style.formControl} placeholder="Message*" rows="4" name="message" autoComplete="off" style={{ resize: "none" }} value={formData.message} onChange={handleInputChange}></textarea>
                        {error.message && ( <span className={style.errorMessage}>{error.message}</span> )}
                    </div>
                </div>
                
                <input type="hidden" id="country_code" name="country_code" />
                <div className={`text-center`}>
                  <button type="submit" id="submitButton" disabled={isSubmitButtonDisable} className={`btn ${style.formSubmit}`}>
                    {isSubmitButtonDisable ? <><span className="spinner-border spinner-border-sm me-2"></span> Submit... </> : "Submit"}
                  </button>
                </div>
              </div>
              <div className={`${style.messages}`}>
                {errorMessage && (
                  <div className={`alert alert-danger`} id="response_msg">
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

export default GetInTouch;
