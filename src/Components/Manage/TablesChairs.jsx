import React, { useState } from "react";
import { addSeats, bookTable } from "../../Api/methods";
import { bookings } from "../../Utils/Data";
import Add from "./AddTable/Add";
import List from "./List/List";
import "./manage.css";

const TablesChairs = () => {
  const [tables, setTables] = useState(bookings);
  const [ItemInfo, setItemInfo] = useState(null);

  const handleSubmit = async (data) => {

    const { error, success,  } = await addSeats(data);

    if (error) return alert(error);

    if (success) {
      alert("Booking at blah successfully");
    }
    // console.log(data);
  };

  return (
    <div className="Form">
      <div className="Total">
        <span>Total Tables: 20</span>
        <span>Total Chairs: 80</span>
      </div>
      <Add initialItems={ItemInfo} onSubmit={handleSubmit} />
      <div className="Table_chairs">
        <div className="Bar">
          <div className="Availablity">
            <div className="green"></div>
            Available
          </div>
          <span className="Availablity">
            <div className="red"></div>
            Booked
          </span>
        </div>
        <div className="tableList">
          {tables.map((item) => (
            <List item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TablesChairs;
