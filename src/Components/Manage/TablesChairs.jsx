import React, { useEffect, useState } from "react";
import { addSeats, bookTable, getItem, updatePost } from "../../Api/methods";
import { useStore } from "../../Context/store";
import { bookings } from "../../Utils/Data";
import Add from "./AddTable/Add";
import List from "./List/List";
import "./manage.css";

const TablesChairs = () => {
  const [Tables, setTables] = useState(bookings);
  const [ItemInfo, setItemInfo] = useState("");
  const { totalTable, TotalChair, setTotalTable, setTotalChair } = useStore();

  const itemId = process.env.Id;

  const fetchSeats = async () => {
    const { error, seats } = await getItem(itemId);

    if (error) {
      alert(error);
    }

    setItemInfo({ ...seats });
    setTotalTable(seats);
  };

  useEffect(() => {
    fetchSeats();
  }, []);

  const upDate = async (data) => {
    const { error, seats, success } = await updatePost(ItemInfo.id, data);

    if (error) {
      alert(error);
    }

    if (success) {
      alert("Tables updated");
    }

    setItemInfo({ ...seats });
  };

  const handleSubmit = async (data) => {
    const { error, success } = await addSeats(data);

    if (error) return alert(error);

    if (success) {
      alert("Booking successfully");
    }
  };

  return (
    <div className="Form">
      <Add initialItems={ItemInfo} onSubmit={upDate} />
    </div>
  );
};

export default TablesChairs;
