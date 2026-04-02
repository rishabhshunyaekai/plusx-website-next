import TermsAndConditions from "@/components/termsAndConditions/termsAndConditions";

export const metadata = {
  title         : "Terms & Conditions | PlusX Electric",
  description   : "",
  alternates    : {
    canonical   : "/terms-and-conditions",
    languages: {
        "en-AE": "/terms-and-conditions",
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