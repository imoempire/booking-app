import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { addSeats, getItem, updatePost } from "../../Api/methods";
import Add from "./AddTable/Add";
import "./manage.css";

const TablesChairs = () => {
  const [ItemInfo, setItemInfo] = useState("");

  const itemId = process.env.Id;
  const navigate = useNavigate()

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
    Navigate(-1)
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
