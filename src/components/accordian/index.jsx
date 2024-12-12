import React, { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multipleIds, setMultipleIds] = useState([]);

  function handleSingleClick(id) {
    if (selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  }

  function handleMultiClick(id) {
    if (multipleIds.includes(id)) {
      setMultipleIds(multipleIds.filter((item) => item !== id));
    } else {
      setMultipleIds([...multipleIds, id]);
    }
  }

  function handleEnableMultiSelection() {
    setEnableMultiSelection(!enableMultiSelection);
    setMultipleIds([]);
    setSelected(null);
  }

  return (
    <div className="acc-wrapper">
      <button onClick={handleEnableMultiSelection}>
        Enable {enableMultiSelection ? "Single" : "Multi"} Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="accordion-item" key={item.id}>
              <div
                className="accordion-item-question"
                onClick={() =>
                  enableMultiSelection
                    ? handleMultiClick(item.id)
                    : handleSingleClick(item.id)
                }
              >
                {item.question}
                {selected === item.id ? <span>-</span> : <span>+</span>}
              </div>
              {enableMultiSelection
                ? multipleIds.includes(item.id) && (
                    <div className="accordion-item-answer">{item.answer}</div>
                  )
                : selected === item.id && (
                    <div className="accordion-item-answer">{item.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
