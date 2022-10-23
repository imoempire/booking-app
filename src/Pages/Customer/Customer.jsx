import React, { useState } from "react";
import { bookTable } from "../../Api/methods";
import Book from "../Book";
import "../book.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";


const Customer = () => {
  const [ItemInfo, setItemInfo] = useState(null);
  const [resetAfterSubmit, setResetAfterSubmit] = useState(false);
  const [messages, setMessages] = useState();

  const handleSubmit = async (data) => {
    const { error, success, message } = await bookTable(data);
    if (error) {
      NotificationManager.error(error, "Error", 5000, () => {
        alert("callback");
      });
    }

    if (success) {
      NotificationManager.success(
        {message},
        "success",
        5000,
        () => {
          alert("callback");
        }
      );;
    }
    setResetAfterSubmit(true);
    setMessages(message)
  };

  return (
    <div className="container">
      <NotificationContainer/>
      <div className="customerPage">
        <div className="customerPage_header">
          <span className="customerPage__greet">Welcome!</span>
          <span className="customerPage__title">
            Book a Table For that special moment
          </span>
        </div>
      </div>
      {messages ? (
        <div className="customer_messages">
          <span>{messages}</span>
        </div>
      ) : (
        <Book
          onSubmit={handleSubmit}
          resetAfterSubmit={resetAfterSubmit}
          initialItems={ItemInfo}
        />
      )}
    </div>
  );
};

export default Customer;
