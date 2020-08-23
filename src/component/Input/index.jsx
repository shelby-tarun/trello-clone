import React, { useState } from "react";
import "./Input.scss";

const Input = (props) => {
  const { label, onAddItem } = props;
  const [input, setInput] = useState("");
  const [showAddButton, setShowAddButton] = useState(true);

  return showAddButton ? (
    <button className="input__add-btn" onClick={() => setShowAddButton(false)}>
      {label}
    </button>
  ) : (
    <div className="input__add-list">
      <input
        type="text"
        className="input__add-list__input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="input__add-list__btns">
        <button
          onClick={() => {
            onAddItem(input);
            setInput("");
          }}
        >
          Add
        </button>
        <button onClick={() => setShowAddButton(true)}>Close</button>
      </div>
    </div>
  );
};

export default Input;
