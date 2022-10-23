import React, { useEffect, useState } from "react";
import "./book.css";
import { NotificationManager } from "react-notifications";

export const defaultItem = {
  name: "",
  contact: "",
  customers: "",
};

const Book = ({ onSubmit, initialItems, resetAfterSubmit }) => {
  const [tables, setTable] = useState(defaultItem);

  useEffect(() => {
    if (initialItems) {
      setTable({ ...initialItems });
    }
    return () => {
      if (resetAfterSubmit) resetForm();
    };
  }, [initialItems, resetAfterSubmit]);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    const newTable = { ...tables, [name]: value };
    setTable({ ...newTable });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, contact, customers } = tables;
    console.log(tables);
    if (!name.trim()) return;
    // setErrors("Please number of table is required");

    if (!contact.trim())
      return NotificationManager.error(
        "Please number of chairs per table is required",
        "success",
        5000,
        () => {
          alert("callback");
        }
      );

    if (!customers)
      return NotificationManager.error(
        "number of chairs per table is required",
        "success",
        5000,
        () => {
          alert("callback");
        }
      );

    const formData = new FormData();
    const finalData = { ...tables };

    for (let key in finalData) {
      formData.append(key, finalData[key]);
    }

    onSubmit(finalData);
  };

  const resetForm = () => {
    setTable({ ...defaultItem });
  };

  const { name, contact, customers } = tables;
  return (
    <div>
      <div className="customerPage_Form">
        <form className="forms" onSubmit={handleSubmit}>
          <span>Complete this form to book a Table</span>
          <div className="customer-form_group">
            <div className="customer-form_group_inputs">
              <label className="label">Name</label>
              <input
                className="customer-form_input"
                onChange={handleChange}
                value={name}
                name="name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="customer-form_group_inputs">
              <label className="label">Contact</label>
              <input
                className="customer-form_input"
                onChange={handleChange}
                value={contact}
                name="contact"
                type="text"
                placeholder="Contact"
              />
            </div>
            <div className="customer-form_group_inputs">
              <label className="label">Number of Customers</label>
              <input
                className="customer-form_input"
                onChange={handleChange}
                value={customers}
                name="customers"
                type="text"
                placeholder="Number of Customers"
              />
            </div>
          </div>
          <button className="bookBtn">
            <span>Book</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Book;
