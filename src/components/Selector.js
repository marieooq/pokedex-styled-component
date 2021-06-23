import React from "react";

const Selector = ({
  value,
  setValue,
  list,
  id,
}) => {
  return (
    <div className="selector-container">
      <div className="selector">
        <select
          className="select-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id={id}
        >
          {list.map((val, index) => (
            <option key={index} value={val}>
              {val}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Selector;
