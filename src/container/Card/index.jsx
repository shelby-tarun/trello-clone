import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { name } = props;

  const onDragStart = (e, taskName) => {
    e.dataTransfer.setData("taskName", taskName);
  };

  return (
    <li className="card" draggable onDragStart={(e) => onDragStart(e, "card")}>
      {name}
    </li>
  );
};

export default Card;
