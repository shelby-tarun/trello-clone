import React, { useState } from "react";
import List from "../List";
import Input from "../../component/Input";
import "./App.scss";

const App = () => {
  const [lists, setLists] = useState([]);

  const renderLists = () => {
    return lists.map((List) => List);
  };

  const handleAddList = (input) => {
    setLists([...lists, <List name={input} />]);
  };

  return (
    <div className="app">
      {renderLists()}
      <Input label="Add list" onAddItem={handleAddList} />
    </div>
  );
};

export default App;
