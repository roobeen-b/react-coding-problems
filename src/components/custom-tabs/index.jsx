import React from "react";
import TabItems from "./TabItems";
import "./tabStyles.css";

function RandomComponent() {
  return <div className="random-component">This is content for tab 3.</div>;
}

const CustomTabs = () => {
  const tabs = [
    {
      label: "Tab 1",
      content: "This is content for tab 1.",
    },
    {
      label: "Tab 2",
      content: "This is content for tab 2.",
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];
  return (
    <div className="tab-container">
      <TabItems tabs={tabs} />
    </div>
  );
};

export default CustomTabs;
