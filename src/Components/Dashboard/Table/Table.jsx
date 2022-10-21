import React from "react";
import "./table.css";

const Table = ({ data, column }) => {
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
        {data.map((item) => (
          <TableRow item={item} column={column} />
        ))}
      </tbody>
    </table>
  );
};

const TableHeadItem = ({ item }) => <th>{item.heading}</th>;

const TableRow = ({ item, column }) => (
  <tr className="table_row">
    {column.map((columnItem) => {
      return (
        <>
          <td key={item.id}>
            {item[`${columnItem.value}`]} 
          </td>
        </>
      );
    })}
    <div className="delete_btn">
      <span>Delete</span>
    </div>
  </tr>
);

export default Table;
