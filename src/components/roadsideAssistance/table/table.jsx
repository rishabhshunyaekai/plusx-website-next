import DataTable from "@/sharedComponents/dataTable/dataTable";

const columns = [
  "",
  "Conventional Emergency Roadside Assistance",
  "PlusX EV Roadside Assistance",
];

const rows = [
  [
    "Out of charge",
    "Tows you to a charging station",
    "Charges on site, up to 10 kWh",
  ],
  [
    "12V failure",
    "Often misdiagnosed as a main battery fault",
    "Diagnosed and jump-started on site",
  ],
  [
    "Technician training",
    "General automotive",
    "EV and high-voltage specific",
  ],
  [
    "Time to moving again",
    "Hours",
    "60 minutes average",
  ],
];

function Table() {
  return (
    <section className={`wrapper`}>
      <div className="container">
        <DataTable columns={columns} rows={rows} />
      </div>
    </section>
  );
}

export default Table;