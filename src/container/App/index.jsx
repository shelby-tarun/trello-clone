import React, { useState } from "react";
import List from "../../component/List";
import Input from "../../component/Input";
import "./App.scss";

const App = () => {
  const [lists, setLists] = useState([]);

  const renderLists = () => {
    return lists.map((listName, index) => <List key={index} name={listName} />); // Ideally key show be de unique id for the list item but I am keeping index here
  };

  const handleAddList = (input) => {
    setLists([...lists, input]);
  };

  return (
    <div className="app">
      {renderLists()}
      <Input label="Add list" onAddItem={handleAddList} />
    </div>
  );
};

export default App;
