import React from "react";
import './list.css'

const List = ({ item }) => {
   const {name, numberofchairs, id} = item;

  return (
    <div className="List">
      <div className="List_title">
      <span>{name}</span>
      <div className="Availablity">
         <div className={id % 2 === 0 ? "green" : "red"}></div>
      </div>
      </div>
      <span>{numberofchairs} chairs</span>
    </div>
  );
};

export default List;
