import React from "react";

const Suggestions = ({ filteredUsers, handleClick }) => {
  return (
    <div>
      {filteredUsers &&
        filteredUsers.length > 0 &&
        filteredUsers.map((item, index) => (
          <div key={index} onClick={handleClick}>
            {item}
          </div>
        ))}
    </div>
  );
};

export default Suggestions;
