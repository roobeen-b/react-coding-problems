import React, { useState } from "react";

const TabItems = ({ tabs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  function handleTabClick(index) {
    setCurrentIndex(index);
  }
  return (
    <>
      <div className="tab-items">
        {tabs && tabs.length > 0
          ? tabs.map((tab, index) => (
              <span
                className={`tab-label ${
                  index === currentIndex ? "active-tab" : "inactive-tab"
                }`}
                key={index}
                onClick={() => handleTabClick(index)}
              >
                {tab.label}
              </span>
            ))
          : null}
      </div>
      <div className="tab-content">{tabs[currentIndex].content}</div>
    </>
  );
};

export default TabItems;
