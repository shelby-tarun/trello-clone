import React, { useState, Fragment } from "react";
import Input from "../../component/Input";
import Card from "../Card";
import "./List.scss";

const List = (props) => {
  const { name } = props;
  const [cards, setCards] = useState([]);

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const renderCards = () => {
    return cards.map((card) => card);
  };

  const handleAddCard = (input) => {
    setCards([...cards, <Card name={input} />]);
  };

  return (
    <div className="listContainer">
      <h3>{name}</h3>
      <ul
        className="list"
        onDragOver={(e) => {
          onDragOver(e);
        }}
      >
        {renderCards()}
        <li>
          <Input label="Add Card" onAddItem={handleAddCard} />
        </li>
      </ul>
    </div>
  );
};

export default List;
