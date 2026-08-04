import style from "./dataTable.module.css";

function DataTable({ columns = [], rows = [] }) {
  return (
    <div className={style.tableWrapper}>

      <table className={style.table}>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index} className={style.th}>{col}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className={style.td} dangerouslySetInnerHTML={{ __html: cell }} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;