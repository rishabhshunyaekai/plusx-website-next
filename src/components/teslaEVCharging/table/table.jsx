import DataTable        from "@/sharedComponents/dataTable/dataTable";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";

const columns = [
  "Tesla model",
  "Mobile charging",
  "Roadside rescue",
  "12V jump-start",
  "Home charger",
];

const rows = [
  [
    "Model 3",
    "✓",
    "✓",
    "✓",
    "✓",
  ],
  [
    "Model Y",
    "✓",
    "✓",
    "✓",
    "✓",
  ],
  [
    "Model S",
    "✓",
    "✓",
    "✓",
    "✓",
  ],
  [
    "Model X",
    "✓",
    "✓",
    "✓",
    "✓",
  ],
];

function Table() {
  return (
    <section className={`wrapper`}>
      <div className="container">
        <SecondaryHeading title={"Works With Every Tesla in the UAE"} />
        <p className="text-center mb-8!">UAE-spec Tesla&apos;s use the same Type 2 (AC) and CCS2 (DC) charging standard used across Dubai, so our equipment <br className="hidden lg:inline" /> connects directly. No adapter needed.</p>
        <DataTable columns={columns} rows={rows} />
      </div>
    </section>
  );
}

export default Table;