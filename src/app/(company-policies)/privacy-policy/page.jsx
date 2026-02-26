import PrivacyPolicies from "@/components/privacyPolicies/privacyPolicies";

export const metadata = {
  title         : "Privacy Policy | PlusX Electric",
  description   : "",
  alternates    : {
    canonical   : "/privacy-policy",
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