import PrivacyPolicies from "@/components/privacyPolicies/privacyPolicies";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const metadata = {
  title         : "Privacy Policy | PlusX Electric",
  description   : "",
  alternates    : {
    canonical   : `${BASE_URL}/privacy-policy`,
    languages: {
        "en-AE": `${BASE_URL}/privacy-policy`,
      },
  },
};

function PrivacyPolicyPage() {
  return (
    <>
      <PrivacyPolicies />
    </>
  )
}

export default PrivacyPolicyPage;