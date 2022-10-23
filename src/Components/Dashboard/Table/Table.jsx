import React, { useEffect, useState } from "react";
import { bookings } from "../../../Utils/Data";
import "./table.css";

const Table = ({ data, column }) => {
  const [customers, setcustomers] = useState(bookings);

  console.log(data);

  useEffect(() =>{
    if(data){
      setcustomers(data)
    }
  }, [data])

  return (
    <table>
      <thead>
        <tr>
          {column.map((item) => (
            <TableHeadItem item={item} />
          ))}
        </tr>
      </thead>
      <tbody>
        {customers.map((item) => (
          <TableRow item={item} column={column} />
        ))}
      </tbody>
    </table>
  );
};

const TableHeadItem = ({ item }) => <th className="head">{item.heading}</th>;

const TableRow = ({ item, column }) => (
  <tr className="table_row" key={item.id}>
    {column.map((columnItem) => {
      return (
        <>
          <td className="row" key={item.id}>
            {item[`${columnItem.value}`]} 
          </td>
        </>
      );
    })}
    <span className="delete_btn">
      <span>Delete</span>
    </span>
  </tr>
);

export default Table;
