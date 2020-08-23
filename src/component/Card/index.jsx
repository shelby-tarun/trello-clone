import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { name, onDeleteCard } = props;

  const onDragStart = (e) => {
    e.dataTransfer.setData("taskName", name);
  };

  const onDragEnd = (e) => {
    onDeleteCard(name);
  };

  return (
    <li
      className="card"
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      {name}
    </li>
  );
};

export default Card;
