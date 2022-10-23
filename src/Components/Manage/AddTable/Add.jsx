import React, { useEffect, useState } from "react";

export const defaultItem = {
  table: "",
  chairsPer: "",
};

const Add = ({ onSubmit, initialItems }) => {
  const [Tables, setTable] = useState(defaultItem);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    if (initialItems) {
      setTable({ ...initialItems });
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
    if (!table) return setErrors("number of table is required");

    if (!chairsPer) return setErrors("chairs per table is required");

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
      <div style={{ background: "red" }}>{errors ? errors : ""}</div>
      <div className="Total">
        <span>Available Tables: {Tables?.table}</span>
        {/* <span>Available Chairs: {Tables?.totalchairs}</span> */}
        <span>Chairs Per Table: {Tables?.chairsPer}</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="Table_chairs">
          <div className="Bar">
            <span>Update Total Available Tables and Chairs</span>
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
