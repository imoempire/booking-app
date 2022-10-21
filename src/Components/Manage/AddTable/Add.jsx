import React, { useEffect, useState } from 'react'

export const defaultItem = {
   table: "",
   chairsPer: "",
 };

const Add = ({onSubmit, initialItems}) => {

   const [tables, setTable] = useState(defaultItem);

   useEffect(() => {
      if(initialItems){
         setTable({...initialItems});
      }
   }, [initialItems])

   const handleChange = ({target}) => {
      const {name, value} = target;

      const newTable = {...tables, [name]: value};
      setTable(newTable);
   
   }

   const handleSubmit = (e) => {
      e.preventDefault();

      const {table, chairsPer} = tables;
      if (!table.trim()){
         return alert('Please number of table is required');
      }

      if (!chairsPer.trim()){
         return alert('Please number of chairs per table is required');
      }

      const formData = new FormData();
      const finalData = {...tables}

      for(let key in finalData){
         formData.append(key, finalData[key])
      }
      onSubmit(finalData)

   }

   const {table, chairsPer} = tables
  return (
    <div>
      <form onSubmit={handleSubmit}>
         <span>Manage Total Tables and Chairs</span>
        <div className="form_group">
          <div className="form_group_inputs">
            <input
              className="form_input"
              onChange={handleChange}
              value={table}
              name="table"
              type="number"
              placeholder="Table"
            />
          </div>
          <div className="form_group_inputs">
            <input
              className="form_input"
              onChange={handleChange}
              value={chairsPer}
              name="chairsPer"
              type="number"
              placeholder="Chair per table"
            />
          </div>
        </div>
        <button className="btn">
         <span>Add</span>
        </button>
      </form>
    </div>
  )
}

export default Add