import TermsAndConditions from "@/components/termsAndConditions/termsAndConditions";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const metadata = {
  title         : "Terms & Conditions | PlusX Electric",
  description   : "Welcome to PlusX Electric. These Terms and Conditions govern your use of our website and our products and services. By accessing or using our website, you agree to comply with these terms.",
  alternates    : {
    canonical   : `${BASE_URL}/terms-and-conditions`,
    languages: {
        "en-AE": `${BASE_URL}/terms-and-conditions`,
      },
  },
};

function TermsAndConditionsPage() {
  return (
    <>
      <TermsAndConditions />
    </>
  )
}

export default TermsAndConditionsPage;