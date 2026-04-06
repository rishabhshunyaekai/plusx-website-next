import TermsAndConditions from "@/components/termsAndConditions/termsAndConditions";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const metadata = {
  title         : "Terms & Conditions | PlusX Electric",
  description   : "",
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