import React from "react";

//components
import Card from "./Card";

const CardContainer = ({ lists }) => {
  return (
    <div className="card-container">
      {lists.map((list, index) => (
        <Card list={list} key={index} />
      ))}
    </div>
  );
};

export default CardContainer;