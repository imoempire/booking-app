import React, { useEffect, useState } from "react";
import { useStore } from "../../../Context/store";

export const defaultItem = {
  table: "",
  chairsPer: "",
};

const Add = ({ onSubmit, initialItems }) => {
  const { totalTable, TotalChair, setTotalTable, setTotalChair } = useStore();
  const [Tables, setTable] = useState(defaultItem);
  const [TotalTables, setTotalTables] = useState("");

  const { tables, chairs } = totalTable;
  //  console.log(tables.length);

  useEffect(() => {
    if (initialItems) {
      const { tables, chairs } = initialItems;
      setTable({ ...initialItems });
      setTotalTables(tables);
    }
  }, [initialItems]);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    const newTable = { ...Tables, [name]: value };
    setTable(newTable);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { table, chairsPer } = Tables;
    if (!table.trim()) {
      return alert("Please number of table is required");
    }

    if (!chairsPer.trim()) {
      return alert("Please number of chairs per table is required");
    }

    const formData = new FormData();
    const finalData = { ...Tables };

    for (let key in finalData) {
      formData.append(key, finalData[key]);
    }
    onSubmit(finalData);
  };

  const { table, chairsPer } = Tables;

  return (
    <div>
      <div className="Total">
        <span>Available Tables: {Tables?.table}</span>
        <span>Available Chairs: {Tables?.totalchairs}</span>
        <span>Chairs Per Table: {Tables?.chairsPer}</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="Table_chairs">
          <div className="Bar">
            <span>Manage Total Tables and Chairs</span>
          </div>
        </div>
        <div className="form_group">
          <div className="form_group_inputs">
            <input
              className="form_input"
              onChange={handleChange}
              value={table}
              name="table"
              type="number"
              placeholder={"tables.length"}
            />
          </div>
          <div className="form_group_inputs">
            <input
              className="form_input"
              onChange={handleChange}
              value={chairsPer}
              name="chairsPer"
              type="number"
              placeholder={"chairs.length"}
            />
          </div>
        </div>
        <button className="btn">
          <span>Add</span>
        </button>
      </form>
    </div>
  );
};

export default Add;
