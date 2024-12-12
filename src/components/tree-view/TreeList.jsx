import React from "react";
import TreeItem from "./TreeItem";

const TreeList = ({ menus }) => {
  return (
    <div>
      {menus && menus.length > 0
        ? menus.map((menu) => (
            <div key={menu.label}>
              <TreeItem menu={menu} />
            </div>
          ))
        : null}
    </div>
  );
};

export default TreeList;
