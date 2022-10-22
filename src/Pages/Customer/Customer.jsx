import React, { useEffect, useState } from "react";
import { bookTable } from "../../Api/methods";
import { defaultItem } from "../../Components/Manage/AddTable/Add";
import Book from "../Book";
import "./book.css";

const Customer = () => {
  const [ItemInfo, setItemInfo] = useState(null);
  const [busy, setBusy] = useState(false);
  const [resetAfterSubmit, setResetAfterSubmit] = useState(false);
  const [messages, setMessages] = useState();
  const [errors, setErrors] = useState('');
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (data) => {
    const booked = localStorage.getItem("bookings");
    if (booked) {
      setMessages("You have already Booked a Table");
      return;
    }

    const { error, item, success, message } = await bookTable(data);
    setBusy(false);
    if (error) {
      alert(error);
    }

    if (success) {
      setMessages(message);
    }
    setResetAfterSubmit(true);
  };

  useEffect(() => {
    const result = localStorage.getItem("bookings");
    if (!result) return;
    const booking = JSON.parse(result);
    setItemInfo({ ...defaultItem, ...booking });
  }, []);

  useEffect(() => {
   if (errors) {
     const toRef = setTimeout(() => {
       setShowError(true);
       clearTimeout(toRef);
     }, 1000);
   }
 }, [errors]);

 useEffect(() => {
   if (showError) {
     const toRef = setTimeout(() => {
       setShowError(false);
       clearTimeout(toRef);
     }, 4000);
   }
 }, [showError]);

  return (
    <div>
      <div>
        {showError ? <div  className="errors">{errors}</div> : null}
      </div>
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
