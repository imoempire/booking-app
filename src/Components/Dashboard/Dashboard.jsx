import React, { useEffect, useState } from "react";
import { cardInfo } from "../../Utils/Data";
import Card from "./DashboardCard/Card";
import "./dashboard.css";
import Table from "./Table/Table";
import { useNavigate } from "react-router-dom";
import { getCustomers } from "../../Api/methods";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const Dashboard = () => {
  const navigate = useNavigate();
  const [customers, setcustomers] = useState("");
  const [Chairs, setChairs] = useState('');
  const [tabs, setTabs] = useState('');


  const toManage = () => {
    navigate("/dashboard/manage");
  };

  const fetchCustomers = async () => {
    const { error, customers } = await getCustomers();

    if (error) return NotificationManager.error(
      {error},
      "success",
      5000,
      () => {
        alert("callback");
      }
    );

    setcustomers(customers);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  let chairs = 0;
  let table = 0;

  const TabsChairs = ()=>{
    if(customers){
      customers.forEach((element) => {
        setChairs( chairs += element.bookChairs);
      });

    customers.forEach((element) => {
      setTabs(table += element.Totaltab);
      });
    }
  }

  useEffect(() => {
    setTimeout(() =>{
      TabsChairs()
    }, 1000)
  }, [customers])


  console.log(chairs, table);

  const column = [
    { heading: "Name", value: "bookedTables" },
    { heading: "Customer Name", value: "name" },
    { heading: "Customer Contact", value: "contact" },
    { heading: "Numberoftables", value: "Totaltab" },
    { heading: "Numberofchairs", value: "bookChairs" },
    { heading: "", value: "Delete" },
  ];

  return (
    <div className="dashboard">
      <NotificationContainer/>
      {/* Title */}
      <div className="header">
        <span className="dashboard__title">Table Booking</span>
        <span onClick={toManage} className="dashboard__title">
          Manage Tables & Chairs
        </span>
      </div>
      {/* Tabs */}
      <div className="dashboard__Tabs">
        {cardInfo.map((item) => (
          <Card item={item} data={customers} key={item.id} chairs={Chairs} table={tabs}/>
        ))}
      </div>
      {/* List */}
      <div className="table">
        <Table column={column} data={customers} />
      </div>
    </div>
  );
};

export default Dashboard;
