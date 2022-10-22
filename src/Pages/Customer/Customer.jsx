import React, { useEffect, useState } from "react";
import { bookTable } from "../../Api/methods";
import { defaultItem } from "../../Components/Manage/AddTable/Add";
import Book from "../Book";
import "./book.css";

const Customer = () => {
  const [ItemInfo, setItemInfo] = useState(null);
  const [busy, setBusy] = useState(false);
  const [resetAfterSubmit, setResetAfterSubmit] = useState(false);

  const booked = localStorage.getItem('bookings')

  const handleSubmit = async (data) => {
    setBusy(true);
    if(booked){
      alert('Booked already')
    }
    const { error, item, success, message } = await bookTable(data);
    setBusy(false);
    if (error) {
      alert(error);
    }

    if (success) {
      alert(message);
    }
    setResetAfterSubmit(true);
  };

  useEffect(() => {
   const result = localStorage.getItem("bookings");
   if (!result) return;
   const booking = JSON.parse(result);
   setItemInfo({ ...defaultItem, ...booking });
 }, []);

  return (
    <div>
      <div className="customerPage">
        <div className="customerPage_header">
          <span className="customerPage__greet">Welcome!</span>
          <span className="customerPage__title">
            Book a Table For that special moment
          </span>
        </div>
      </div>
      <Book
        onSubmit={handleSubmit}
        resetAfterSubmit={resetAfterSubmit}
        initialItems={ItemInfo}
      />
    </div>
  );
};

export default Customer;
