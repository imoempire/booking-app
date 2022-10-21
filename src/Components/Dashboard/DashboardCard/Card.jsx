import React from "react";
import './card.css'
import {IoIosArrowForward} from 'react-icons/io'

const Card = ({ item }) => {
   const {title, total} = item;
  return (
    <div className="card">
      <div className="card_title">
      <span>{title}</span>
      <IoIosArrowForward size={"1.2rem"} />
      </div>
      <span>{total}</span>
    </div>
  );
};

export default Card;
