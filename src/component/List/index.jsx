import React, { useState } from "react";
import Input from "../../component/Input";
import Card from "../../component/Card";
import "./List.scss";

const List = (props) => {
  const { name } = props;
  const [cards, setCards] = useState([]);

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e) => {
    let id = e.dataTransfer.getData("taskName");

    handleAddCard(id);
  };

  const renderCards = () => {
    return cards.map((card, index) => (
      <Card key={index} name={card} onDeleteCard={handleDeleteCard} />
    ));
  };

  const handleAddCard = (input) => {
    setCards([...cards, input]);
  };

  const handleDeleteCard = (input) => {
    const filteredCards = cards.filter((card) => {
      if (card === input) {
        input = Math.random().toString(36).substring(7);
        return false;
      } else {
        return true;
      }
    });

    setCards(filteredCards);
  };

  return (
    <div className="listContainer" onDragOver={onDragOver} onDrop={onDrop}>
      <h3>{name}</h3>
      <ul className="list">
        {renderCards()}
        <li>
          <Input label="Add Card" onAddItem={handleAddCard} />
        </li>
      </ul>
    </div>
  );
};

export default List;
