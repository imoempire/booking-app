import React, { useEffect, useState } from "react";
import { bookings, cardInfo } from "../../Utils/Data";
import Card from "./DashboardCard/Card";
import "./dashboard.css";
import Table from "./Table/Table";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [dataTable, setDataTable] = useState([]);
  const navigate = useNavigate()

  const toManage = () => {
    navigate('/dashboard/manage')
  }

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setDataTable(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(dataTable);

  const column = [
    { heading: "Name", value: "name" },
    { heading: "Customer Name", value: "customer" },
    { heading: "Customer Contact", value: "contact" },
    { heading: "Numberoftables", value: "numberoftables" },
    { heading: "Numberofchairs", value: "numberofchairs" },
    { heading: "", value: "Delete" },
  ];

  return (
    <div className="dashboard">
      {/* Title */}
      <div className="header">
      <span className="dashboard__title">Table Booking</span>
      <span onClick={toManage} className="dashboard__title">Manage Tables & Chairs</span>
      </div>
      {/* Tabs */}
      <div className="dashboard__Tabs">
        {cardInfo.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      {/* List */}
      <div className="table">
        <Table column={column} data={bookings} />
      </div>
    </div>
  );
};

export default Dashboard;
