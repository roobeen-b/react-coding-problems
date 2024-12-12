import React from "react";
import menus from "./data";
import TreeList from "./TreeList";
import "./styles.css";

const TreeView = () => {
  return (
    <div className="tree-container">
      <TreeList menus={menus} />
    </div>
  );
};

export default TreeView;
