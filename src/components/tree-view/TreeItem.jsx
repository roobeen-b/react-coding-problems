import React, { useState } from "react";
import TreeList from "./TreeList";

const TreeItem = ({ menu }) => {
  const [showChildren, setShowChildren] = useState(false);

  const handleShowChildren = () => {
    setShowChildren(!showChildren);
  };
  return (
    <div>
      <div
        onClick={handleShowChildren}
        className={
          menu && menu.children && menu.children.length > 0
            ? "tree-item tree-item-children"
            : "tree-item tree-item-no-children"
        }
      >
        {menu.label}
        <span>{menu && menu.children && menu.children.length > 0 && "+"}</span>
      </div>
      <div className="nested-tree-item">
        {showChildren && menu && menu.children && menu.children.length > 0 ? (
          <TreeList menus={menu.children} />
        ) : null}
      </div>
    </div>
  );
};

export default TreeItem;
