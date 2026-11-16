import DataTable from "@/sharedComponents/dataTable/dataTable";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";

const columns = [
  "",
  "Tesla Supercharger",
  "PlusX Electric",
];

const rows = [
  [
    "You drive to it",
    "Yes",
    "No, we come to you",
  ],
  [
    "Works with 0% battery",
    "No",
    "Yes",
  ],
  [
    "Basement / covered parking",
    "No",
    "Yes",
  ],
  [
    "12V jump-start",
    "No",
    "Included",
  ],
  [
    "Home charger installation",
    "No",
    "Yes",
  ],
];

function Table() {
  return (
    <section className={`wrapper`}>
      <div className="container">
        <SecondaryHeading title={" PlusX vs. Waiting for a Supercharger"} />
        <p className="text-center mb-8!">A Supercharger only helps if you can drive to it. PlusX covers the cases where you can't: a car with no range left, a car parked <br className="hidden lg:inline" />underground, or a home without a charger.</p>
        <DataTable columns={columns} rows={rows} />
      </div>
    </section>
  );
}

export default Table;