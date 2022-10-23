import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getItem, updateItem } from "../../Api/methods";
import Add from "./AddTable/Add";
import "./manage.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const TablesChairs = () => {
  const [ItemInfo, setItemInfo] = useState("");


  const itemId = process.env.Id;
  const navigate = useNavigate()

  const fetchSeats = async () => {
    const { error, seats } = await getItem(itemId);

    if (error) {NotificationManager.error(
      {error},
      "success",
      5000,
      () => {
        alert("callback");
      }
    );
    }

    setItemInfo({ ...seats });
  };

  useEffect(() => {
    fetchSeats();
  }, []);

  const upDate = async (data) => {
    const { error, seats, success } = await updateItem(ItemInfo.id, data);

    if (error) {
      NotificationManager.error(
        {error},
        "success",
        5000,
        () => {
          alert("callback");
        }
      );;
    }

    if (success) {
      NotificationManager.success(
        "Updated Successfully",
        "success",
        5000,
        () => {
          alert("callback");
        }
      );;
    }

    setItemInfo({ ...seats });
    navigate(-1)
  };

  return (
    <div className="Form">
      <NotificationContainer/>
      <Add initialItems={ItemInfo} onSubmit={upDate} />
    </div>
  );
};

export default TablesChairs;
