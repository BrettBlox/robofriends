import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const cardArray = robots.map((robot, idx) => {
    return (
      <Card
        key = {idx}
        id={robots[idx].id}
        name={robots[idx].name}
        email={robots[idx].email}
      />
    );
  });
  return <div>{cardArray}</div>;
};

export default CardList;
