import React, { useRef, useState } from "react";
import useOutsideClick from ".";
import "./outsideClickStyle.css";

const OutsideClickTest = () => {
  const ref = useRef();
  const [showContent, setShowContent] = useState(false);

  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div className={`wrapper ${showContent ? "active" : "inactive"}`}>
      {showContent ? (
        <div
          ref={ref}
          className={`modal ${showContent ? "inactive" : "active"}`}
        >
          <h1>Modal PopUp Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, nihil
            incidunt cumque itaque magnam minus excepturi iste quos molestiae
            quisquam, est eius vel aspernatur quia nostrum placeat, ducimus
            quidem blanditiis?
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show</button>
      )}
    </div>
  );
};

export default OutsideClickTest;
