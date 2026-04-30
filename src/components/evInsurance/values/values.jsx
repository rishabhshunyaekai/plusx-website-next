import ServiceIconCard  from "@/sharedComponents/serviceIconCard/serviceIconCard";
import Information      from "@/assets/images/ev-insurance-page/Plusx_electric_file_docs_icon.svg";
import Compare          from "@/assets/images/ev-insurance-page/Plusx_electric_ev_insurance_plans_icon.svg";
import Coverage         from "@/assets/images/ev-insurance-page/Plusx_electric_review_coverage_icon.svg";
import Quote            from "@/assets/images/ev-insurance-page/Plusx_electric_request_a_quote_icon.svg";

const valuesCardData = [
  {
    icon: Information,
    text: "Enter your vehicle and driver details",
  },
  {
    icon: Compare,
    text: "Compare available insurance plans",
  },
  {
    icon: Coverage,
    text: "Review coverage features",
  },
  {
    icon: Quote,
    text: "Request a quote quickly",
  },
];

function Values() {
  return (
    <section className={`wrapper`}>
      <div className={`container`}>
        <p className="text-center !mb-6 font-bold">The in-app journey allows you to:</p>
        <div className={`grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2`}>
          {valuesCardData.map((value, index) => (
            <ServiceIconCard key={index} iconSrc={value.icon} text={value.text} />
          ))}
        </div>
         <p className="text-center !mt-6">This lessens the burden of paperwork and unnecessary follow-ups</p>
      </div>
    </section>
  );
}

export default Values;
