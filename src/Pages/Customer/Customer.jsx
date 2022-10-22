import React, { useState } from "react";
import { bookTable } from "../../Api/methods";
import Book from "../Book";
import "./book.css";

const Customer = () => {
  const [ItemInfo, setItemInfo] = useState(null);
  const [busy, setBusy] = useState(false);
  const [resetAfterSubmit, setResetAfterSubmit] = useState(false);

  const handleSubmit = async (data) => {
    setBusy(true);
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
