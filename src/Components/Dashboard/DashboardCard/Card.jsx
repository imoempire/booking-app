import React, { useEffect, useState } from "react";
import "./card.css";
import { IoIosArrowForward } from "react-icons/io";

const Card = ({ item, data, table, chairs }) => {
  const { title, total } = item;
  const [customers, setcustomers] = useState(item);
  const [Total, setTotal] = useState(total);

  useEffect(() => {
    if (data) {
      setcustomers(data);
    }
  }, [data, customers]);

  // if(data && title === "No of Customers"){
  //   setTotal(customers?.length)
  // }else if(data && title === "Chairs Booked"){

  // }else{
  //   console.log('error');
  // }

  // const result = customers.reduce(function (sum, current) {
  //   return sum + current.bookChairs;
  // }, 0);

  //  = customers.reduce(function (sum, current) {
  //   return sum + current.Totaltab;
  // }, 0);

  

  // console.log(results);

  const toRender = (item) => {
    if (item === "No of Customers") {
     return <span>{customers.length}</span>;
    } else if (item === "Chairs Booked") {
      return <span>{chairs}</span>;
    } else if (item === "Tables Booked") {
      return <span>{table}</span>;
    }else{
      console.log('error');
    }
  };

  return (
    <div className="card">
      <div className="card_title">
        <span>{title}</span>
        <IoIosArrowForward size={"1.2rem"} />
      </div>
      {toRender(title)}
    </div>
  );
};

export default Card;
